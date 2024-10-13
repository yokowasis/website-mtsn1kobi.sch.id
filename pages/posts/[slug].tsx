import { getPostBySlug, getAllPosts } from "../../lib/api";

import { useRouter } from "next/router";
import ErrorPage from "next/error";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import Header from "../header";
import Footer from "../footer";
import { Settings, settings } from "../../settings";
import Head from "next/head";

type Props = {
  s: Settings;
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview, s }: Props) {
  const router = useRouter();
  const title = `${post.title} | Official Website ${s.InfoSekolah.Nama}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={post?.ogImage?.url || ""} />
      </Head>
      <Header s={s} />
      <div
        className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn mb-0"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn",
          background: `linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)), url(${
            post.coverImage || "/img/banner.jpg"
          }) center center no-repeat`,
          backgroundSize: "cover",
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 text-white  slideInDown mb-4">
            {post.title}
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item text-white">Home</li>
              <li className="breadcrumb-item text-white">Pages</li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                {post.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col mb-3">
            Penulis : {post.author.name}, {post.date}
          </div>
        </div>
        <div className="row">
          <div
            className="col"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </div>
      <Footer s={s} />
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      s: settings,
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
