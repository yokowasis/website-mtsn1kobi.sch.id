import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";
import Head from "next/head";
import { Settings, settings } from "../settings";
import Header from "./header";
import Footer from "./footer";
import Slider from "./slider";

type Props = {
  allPosts: Post[];
  s: Settings;
};

export default function Index({ allPosts, s }: Props) {
  return (
    <>
      <Head>
        <title>{s.InfoSekolah.Title}</title>
      </Head>

      <Header s={s} />

      <Slider s={s} />

      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              <div
                className="position-relative overflow-hidden ps-5 pt-5 h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src={s.InfoSekolah.Gambar}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <img
                  className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                  src={s.InfoSekolah.Gambar2}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <div className="h-100">
                <h6 className="text-primary text-uppercase mb-2">About Us</h6>
                <h1 className="display-6 mb-4">
                  Selamat Datang di {s.InfoSekolah.Nama}
                </h1>
                <div
                  className="mb-4"
                  dangerouslySetInnerHTML={{
                    __html: s.Sambutan.replace(/\n/g, "<br />"),
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl courses my-6 py-6 pb-0">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              maxWidth: "500px",
              visibility: "hidden",
              animationDelay: "0.1s",
              animationName: "none",
            }}
          >
            <h6 className="text-primary text-uppercase mb-2">EVENTS</h6>
            <h1 className="display-6 mb-4">Curent Events on Our School</h1>
          </div>
          <div className="row g-4 justify-content-center">
            {allPosts.map((post, i) => (
              <div key={i} className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                  <div className="text-center p-4 pt-0">
                    <h5 className="mb-3 mt-4">
                      <a className="text-dark" href={`/posts/${post.slug}`}>
                        {post.title}
                      </a>
                    </h5>
                    <p>{post.excerpt}</p>
                    <ol className="breadcrumb justify-content-center mb-0">
                      <li className="breadcrumb-item small">
                        <i className="fa fa-calendar-alt text-primary me-2"></i>
                        {post.date}
                      </li>
                    </ol>
                  </div>
                  <div className="position-relative mt-auto">
                    <img className="img-fluid" src={post.coverImage} alt="" />
                    <div className="courses-overlay">
                      <a className="btn btn-outline-primary border-2" href="">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-xxl py-6">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              maxWidth: "500px",
              visibility: "hidden",
              animationDelay: "0.1s",
              animationName: "none",
            }}
          >
            <h6 className="text-primary text-uppercase mb-2">
              Tuntutan ilmu, kebijaksanaan, dan inspirasi
            </h6>
            <h1 className="display-6 mb-4">
              Pilar Pendidikan, Pengukir Masa depan
            </h1>
          </div>
          <div className="row g-0 team-items">
            {s.Guru.map((g, i) => (
              <div
                key={i}
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{
                  visibility: "hidden",
                  animationDelay: "0.1s",
                  animationName: "none",
                }}
              >
                <div className="team-item position-relative">
                  <div className="position-relative">
                    <img
                      className="img-fluid"
                      src={g.Foto}
                      alt=""
                      style={{ height: 200, width: "100%", objectFit: "cover" }}
                    />
                    <div className="team-social text-center">
                      <a
                        className="btn btn-square btn-outline-primary border-2 m-1"
                        href={g.Facebook}
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        className="btn btn-square btn-outline-primary border-2 m-1"
                        href={g.Twitter}
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        className="btn btn-square btn-outline-primary border-2 m-1"
                        href={g.Instagram}
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                  <div className="bg-light text-center p-4">
                    <h5 className="mt-2">{g.Nama}</h5>
                    <span>{g.Mapel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer s={s} />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  settings.InfoSekolah.Title = `Official Website ${settings.InfoSekolah.Nama}`;

  return {
    props: { allPosts, s: settings },
  };
};
