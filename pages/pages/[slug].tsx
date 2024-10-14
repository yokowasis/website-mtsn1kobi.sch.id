import { getPostBySlug, getAllPosts } from "../../lib/apiPages";

import { useRouter } from "next/router";
import ErrorPage from "next/error";
import type PostType from "../../interfaces/post";
import { Settings, settings } from "../../settings";
import Head from "next/head";
import { header } from "../header";
import { footer } from "../footer";
import markdownToHtml from "../../lib/markdownToHtml";

type Props = {
  s: Settings;
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
  allPosts: PostType[];
};

export default function Post({ post, morePosts, allPosts, preview, s }: Props) {
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
      <div
        dangerouslySetInnerHTML={{
          __html: /*html*/ `
        ${header}
    <div class="breadcrumbs overlay" ${
      post?.coverImage
        ? `style="background-image: url('${post.coverImage}');"`
        : ""
    }>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8 offset-lg-2 col-md-12 col-12">
                    <div class="breadcrumbs-content">
                        <h1 class="page-title">${post.title}</h1>
                        <p>${post?.excerpt || ""}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
<section class="section blog-single">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-12">
        <div class="single-inner">
          ${
            post?.coverImage
              ? `
          <div class="post-thumbnils">
            <img src="${post.coverImage}" alt="#">
          </div>          
            `
              : ``
          }          
          <div class="post-details">
            <div class="detail-inner">
              <!-- post meta -->
              <ul class="custom-flex post-meta">
                <li>
                  <a href="javascript:void(0)">
                    <i class="lni lni-calendar"></i>
                    ${post.date.replace("T", " ").split(".")[0]}
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i class="lni lni-pencil"></i>
                    ${post.author.name}
                  </a>
                </li>
              </ul>
              <h2 class="post-title">
                <a href="javascript:void(0)">${post.title}</a>
              </h2>
              ${post.content}

              <!--post tags -->
              <div class="post-tags-media">
                <div class="post-tags popular-tag-widget mb-xl-40">
                  <h5 class="tag-title">Related Tags</h5>
                  <div class="tags">
                    <span>Education</span>
                  </div>
                </div>
                <div class="post-social-media">
                  <h5 class="share-title">Social Share</h5>
                  <ul class="custom-flex">
                    <li>
                      <a href="javascript:void(0)" class="facebook">
                        <i class="lni lni-facebook-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="twitter">
                        <i class="lni lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="google">
                        <i class="lni lni-google"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="pinterest">
                        <i class="lni lni-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" class="vimeo">
                        <i class="lni lni-vimeo"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside class="col-lg-4 col-md-12 col-12">
        <div class="sidebar">
          <!-- Single Widget -->
          <div class="widget popular-feeds">
            <h5 class="widget-title">Related Pages</h5>
            <div class="popular-feed-loop">
              ${allPosts
                .map((item) => {
                  return /*html*/ `
              <div class="single-popular-feed">
                <div class="feed-img">
                  <a href="/posts/${item.slug}"><img src="${
                    item.ogImage?.url
                  }" alt="#"></a>
                </div>
                <div class="feed-desc">
                  <h6 class="post-title"><a href="/posts/${item.slug}">${
                    item.title
                  }</a>
                  </h6>
                  <span class="time"><i class="lni lni-calendar"></i> ${
                    item.date.split("T")[0]
                  }</span>
                </div>
              </div>
                  `;
                })
                .join("")}      
            </div>
          </div>
          <!--/ End Single Widget -->
          <!-- Single Widget -->
          <div class="widget categories-widget">
            <h5 class="widget-title">Link Penting</h5>
            <ul class="custom">
              ${Object.keys(settings.PopularLinks)
                .map((key) => {
                  return /*html*/ `
              <li>
                <a href="${settings.PopularLinks[key]}">${key}</a>
              </li>`;
                })
                .join("")}
            </ul>
          </div>
          <!--/ End Single Widget -->
        </div>
      </aside>
    </div>
  </div>
</section>
        ${footer}
        `,
        }}
      ></div>
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
    "excerpt",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  const allPosts = getAllPosts(["title", "date", "slug", "ogImage"]);

  return {
    props: {
      s: settings,
      allPosts,
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
