import { getAllPosts, getRecentPosts } from "../lib/api";
import Post from "../interfaces/post";
import Head from "next/head";
import { Settings, settings } from "../settings";
import { header } from "./header";
import { footer } from "./footer";

type Props = {
  allPosts: Post[];
  s: Settings;
};

export default function Index({ allPosts, s }: Props) {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: /*html*/ `
          ${header}

  <!-- Start Hero Area -->
  <section class="hero-area">
    <div class="hero-slider">      
      <!-- Single Slider -->
       ${settings.Slider.map((item) => {
         return /*html*/ `
      <div class="hero-inner overlay" style="background-image: url('${item.image}');">
        <div class="container">
          <div class="row ">
            <div class="col-lg-8 offset-lg-2 col-md-12 co-12">
              <div class="home-slider">
                <div class="hero-text">
                  <h1 class="wow fadeInUp" data-wow-delay=".5s">${item.judul}</h1>
                  <p class="wow fadeInUp" data-wow-delay=".7s">${item.text}</p>                  
                  <div class="button wow fadeInUp" data-wow-delay=".9s">
                    <a href="${item.link}" class="btn alt-btn">Info Lebih Lanjut</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>         
      `;
       }).join("")}
    </div>
  </section>
  <!--/ End Hero Area -->

  <!-- Start About Us Area -->
  <section class="about-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="about-left">
            <div class="about-title align-left">
              <span class="wow fadeInDown" data-wow-delay=".2s">About Our School</span>
              <h2 class="wow fadeInUp" data-wow-delay=".4s">Selamat datang di ${
                settings.InfoSekolah.Nama
              }</h2>
              <p class="wow fadeInUp" data-wow-delay=".6s">${
                settings.InfoSekolah.SekilasInfo
              }</p>
              <div class="button wow fadeInUp" data-wow-delay="1s">
                <a href="about-us.html" class="btn">Read More</a>
                <a href="${settings.About.video}"
                  class="glightbox video btn"> Play Video<i class="lni lni-play"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="about-right wow fadeInRight" data-wow-delay=".4s">
            <img src="${settings.About.image}" alt="#">
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /End About Us Area -->

  <!-- Start Courses Area -->
  <section class="courses section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <div class="section-icon wow zoomIn" data-wow-delay=".4s">
              <i class="lni lni-graduation"></i>
            </div>
            <h2 class="wow fadeInUp" data-wow-delay=".4s">Berita Terbaru</h2>
            <p class="wow fadeInUp" data-wow-delay=".6s">Informasi Terbaru tentang ${
              settings.InfoSekolah.Nama
            }</p>
          </div>
        </div>
      </div>
      <div class="single-head">
        <div class="row">
            ${allPosts
              .map((item) => {
                return /*html*/ `
                <div class="col-lg-4 col-md-6 col-12">
                  <!-- Start Single Course -->
                  <div class="single-course wow fadeInUp" data-wow-delay=".2s">
                    <div class="course-image">
                      <a href="/posts/${item.slug}"><img src="${item.ogImage.url}" alt="#"></a>
                    </div>
                    <div class="content">
                      <h3><a href="/posts/${item.slug}">${item.title}</a></h3>
                      <p>${item.excerpt}</p>
                    </div>
                    <div class="bottom-content">
                      <span class="tag">
                        <i class="lni lni-tag"></i>
                        <span>Berita</span>
                      </span>
                    </div>
                  </div>
                  <!-- End Single Course -->
                </div>              
              `;
              })
              .join("")}
        </div>
      </div>
    </div>
  </section>
  <!-- End Courses Area -->

  ${footer}
      `,
        }}
      ></div>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getRecentPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "ogImage",
  ], 6);

  settings.InfoSekolah.Title = `Official Website ${settings.InfoSekolah.Nama}`;

  return {
    props: { allPosts, s: settings },
  };
};
