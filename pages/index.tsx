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
      <div
        dangerouslySetInnerHTML={{
          __html: /*html*/ `

  <!-- Preloader -->
  <div class="preloader">
    <div class="preloader-inner">
      <div class="preloader-icon">
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
  <!-- /End Preloader -->

  <!-- Start Header Area -->
  <header class="header navbar-area">
    <!-- Toolbar Start -->
    <div class="toolbar-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-6 col-12">
            <div class="toolbar-social">
              <ul>
                <li><span class="title">Follow Us On : </span></li>
                <li><a href="${
                  settings.InfoSekolah.Facebook
                }"><i class="lni lni-facebook-original"></i></a></li>
                <li><a href="${
                  settings.InfoSekolah.Twitter
                }"><i class="lni lni-twitter-original"></i></a></li>
                <li><a href="${
                  settings.InfoSekolah.Instagram
                }"><i class="lni lni-instagram"></i></a></li>
                <li><a href="${
                  settings.InfoSekolah.Youtube
                }"><i class="lni lni-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Toolbar End -->
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="nav-inner">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="index.html">                
                <img style="width:50px" src="${
                  settings.InfoSekolah.Logo
                }" alt="Logo">
              </a>
              <span style="font-size:1.3rem;color:#000;font-weight:bold">${
                settings.InfoSekolah.Nama
              }</span>
              <button class="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul id="nav" class="navbar-nav ms-auto">
                  ${Object.keys(settings.Menu)
                    .map((key) => {
                      const menuObject = settings.Menu[key];
                      let s = "";
                      if (typeof menuObject === "string") {
                        s = /*html*/ `
                        <li class="nav-item">
                          <a class="${
                            key === "Home" ? "active" : ""
                          }" href="${menuObject}">${key}</a>
                        </li>`;
                      } else {
                        s = /*html*/ `
                        <li class="nav-item">
                          <a class="page-scroll dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                            data-bs-target="#submenu-${key}" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">${key}</a>
                          <ul class="sub-menu collapse" id="submenu-${key}">
                            ${Object.keys(menuObject).map((subKey) => {
                              return /*html*/ `
                              <li class="nav-item"><a href="${
                                menuObject[subKey]
                              }">${subKey.replace(/_/g, " ")}</a></li>`;
                            })}
                          </ul>
                        </li>`;
                      }
                      return s;
                    })
                    .join("")}                  
                </ul>
              </div> <!-- navbar collapse -->
            </nav> <!-- navbar -->
          </div>
        </div>
      </div> <!-- row -->
    </div> <!-- container -->
  </header>
  <!-- End Header Area -->

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
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Start Single Course -->
            <div class="single-course wow fadeInUp" data-wow-delay=".2s">
              <div class="course-image">
                <a href="course-details.html"><img src="https://demo.graygrids.com/themes/edugrids/assets/images/courses/courses-1.jpg" alt="#"></a>
                <p class="price">$180</p>
              </div>
              <div class="content">
                <h3><a href="course-details.html">Computer Science</a></h3>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  laborum.</p>
              </div>
              <div class="bottom-content">
                <ul class="review">
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li>22 Reviews</li>
                </ul>
                <span class="tag">
                  <i class="lni lni-tag"></i>
                  <a href="javascript:void(0)">Programming</a>
                </span>
              </div>
            </div>
            <!-- End Single Course -->
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Start Single Course -->
            <div class="single-course wow fadeInUp" data-wow-delay=".4s">
              <div class="course-image">
                <a href="course-details.html"><img src="https://demo.graygrids.com/themes/edugrids/assets/images/courses/courses-2.jpg" alt="#"></a>
                <p class="price">$200</p>
              </div>
              <div class="content">
                <h3><a href="course-details.html">Business Management</a></h3>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  laborum.</p>
              </div>
              <div class="bottom-content">
                <ul class="review">
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li>10 Reviews</li>
                </ul>
                <span class="tag">
                  <i class="lni lni-tag"></i>
                  <a href="javascript:void(0)">Business</a>
                </span>
              </div>
            </div>
            <!-- End Single Course -->
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Start Single Course -->
            <div class="single-course wow fadeInUp" data-wow-delay=".6s">
              <div class="course-image">
                <a href="course-details.html"><img src="https://demo.graygrids.com/themes/edugrids/assets/images/courses/courses-3.jpg" alt="#"></a>
                <p class="price">Free</p>
              </div>
              <div class="content">
                <h3><a href="course-details.html">Java Online Course</a></h3>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  laborum.</p>
              </div>
              <div class="bottom-content">
                <ul class="review">
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li>55 Reviews</li>
                </ul>
                <span class="tag">
                  <i class="lni lni-tag"></i>
                  <a href="javascript:void(0)">Programming</a>
                </span>
              </div>
            </div>
            <!-- End Single Course -->
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Start Single Course -->
            <div class="single-course wow fadeInUp" data-wow-delay=".2s">
              <div class="course-image">
                <a href="course-details.html"><img src="https://demo.graygrids.com/themes/edugrids/assets/images/courses/courses-4.jpg" alt="#"></a>
                <p class="price">$299</p>
              </div>
              <div class="content">
                <h3><a href="course-details.html">Electrical Engineering</a></h3>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  laborum.</p>
              </div>
              <div class="bottom-content">
                <ul class="review">
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li>60 Reviews</li>
                </ul>
                <span class="tag">
                  <i class="lni lni-tag"></i>
                  <a href="javascript:void(0)">Science</a>
                </span>
              </div>
            </div>
            <!-- End Single Course -->
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Start Single Course -->
            <div class="single-course wow fadeInUp" data-wow-delay=".4s">
              <div class="course-image">
                <a href="course-details.html"><img src="https://demo.graygrids.com/themes/edugrids/assets/images/courses/courses-5.jpg" alt="#"></a>
                <p class="price">$150</p>
              </div>
              <div class="content">
                <h3><a href="course-details.html">Architecture Design</a></h3>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  laborum.</p>
              </div>
              <div class="bottom-content">
                <ul class="review">
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li>25 Reviews</li>
                </ul>
                <span class="tag">
                  <i class="lni lni-tag"></i>
                  <a href="javascript:void(0)">Design</a>
                </span>
              </div>
            </div>
            <!-- End Single Course -->
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Start Single Course -->
            <div class="single-course wow fadeInUp" data-wow-delay=".6s">
              <div class="course-image">
                <a href="course-details.html"><img src="https://demo.graygrids.com/themes/edugrids/assets/images/courses/courses-6.jpg" alt="#"></a>
                <p class="price">$250</p>
              </div>
              <div class="content">
                <h3><a href="course-details.html">Medical Technology</a></h3>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  laborum.</p>
              </div>
              <div class="bottom-content">
                <ul class="review">
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li>35 Reviews</li>
                </ul>
                <span class="tag">
                  <i class="lni lni-tag"></i>
                  <a href="javascript:void(0)">Medical</a>
                </span>
              </div>
            </div>
            <!-- End Single Course -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Courses Area -->

  <!-- Start Achivement Area -->
  <section class="our-achievement section overlay">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-12">
          <div class="single-achievement wow fadeInUp" data-wow-delay=".2s">
            <h3 class="counter"><span id="secondo1" class="countup" cup-end="${
              settings.InfoSekolah["Jumlah Siswa"]
            }">${settings.InfoSekolah["Jumlah Siswa"]}</span></h3>
            <h4>Siswa</h4>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-12">
          <div class="single-achievement wow fadeInUp" data-wow-delay=".4s">
            <h3 class="counter"><span id="secondo2" class="countup" cup-end="${
              settings.InfoSekolah["Jumlah Guru"]
            }">${settings.InfoSekolah["Jumlah Guru"]}</span></h3>
            <h4>Guru</h4>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-12">
          <div class="single-achievement wow fadeInUp" data-wow-delay=".6s">
            <h3 class="counter"><span id="secondo3" class="countup" cup-end="${
              settings.InfoSekolah["Jumlah Kelas"]
            }">${settings.InfoSekolah["Jumlah Kelas"]}</span></h3>
            <h4>Kelas</h4>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-12">
          <div class="single-achievement wow fadeInUp" data-wow-delay=".6s">
            <h3 class="counter"><span id="secondo3" class="countup" cup-end="${
              settings.InfoSekolah["Jumlah Extra Kurikuler"]
            }">${settings.InfoSekolah["Jumlah Extra Kurikuler"]}</span></h3>
            <h4>Extra Kurikuler</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Achivement Area -->

  <!-- Start Clients Area -->
  <div class="client-logo-section">
    <div class="container">
      <div class="client-logo-wrapper">
        <div class="client-logo-carousel d-flex align-items-center justify-content-between">
          ${settings.Sponsor.map((item, index) => {
            return /*html*/ `
          <div class="client-logo">
            <img src="${item}" alt="">
          </div>`;
          }).join("")}
        </div>
      </div>
    </div>
  </div>
  <!-- End Clients Area -->

  <!-- Start Footer Area -->
  <footer class="footer">
    <!-- Start Middle Top -->
    <div class="footer-middle">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="f-about single-footer">
              <div class="logo">
                <img style="width:50px" src="${
                  settings.InfoSekolah.Logo
                }" alt="Logo"> ${settings.InfoSekolah.Nama}
              </div>
              <p class="mb-3">Visi : ${settings.VisiMisi.Visi}</p>
              <p>Misi :</p>
              <ol>
                ${settings.VisiMisi.Misi.map((item, index) => {
                  return /*html*/ `
                <li style="margin-left:15px; text-indent:-15px;">${
                  index + 1
                }. ${item}</li>`;
                }).join("")}
              </ol>
              <div class="footer-social">
                <ul>
                  <li><a href="${
                    settings.InfoSekolah.Facebook
                  }"><i class="lni lni-facebook-original"></i></a></li>
                  <li><a href="${
                    settings.InfoSekolah.Twitter
                  }"><i class="lni lni-twitter-original"></i></a></li>
                  <li><a href="${
                    settings.InfoSekolah.Youtube
                  }"><i class="lni lni-youtube"></i></a></li>
                </ul>
              </div>
            </div>
            <!-- End Single Widget -->
          </div>         
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="single-footer sm-custom-border f-link">
              <h3>Link Penting</h3>
              <ul>
                ${Object.keys(settings.PopularLinks)
                  .map((key) => {
                    return /*html*/ `
              <li><a href="${settings.PopularLinks[key]}">${key}</a></li>`;
                  })
                  .join("")}
              </ul>
            </div>
            <!-- End Single Widget -->
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="single-footer footer-newsletter">
              <h3>Contact US</h3>
              <p>Jika ada pertanyaan, bisa menghubungi kami melalui email <a href="mailto:${
                settings.InfoSekolah.Email
              }">${
            settings.InfoSekolah.Email
          }</a>  atau Whatsapp <a href="https://wa.me/${
            settings.InfoSekolah.Whatsapp
          }">${settings.InfoSekolah.Whatsapp}</a></p>
            </div>
            <!-- End Single Widget -->
          </div>
        </div>
      </div>
    </div>
    <!--/ End Footer Middle -->
    <!-- Start Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="inner">
          <div class="row">
            <div class="col-12">
              <div class="left">
                <p>Designed and Developed by<a href="https://bimasoft.web.id/" rel="nofollow"
                    target="_blank">Bimasoft</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Footer Middle -->
  </footer>
  <!--/ End Footer Area -->

  <!-- ========================= scroll-top ========================= -->
  <a href="#" class="scroll-top btn-hover">
    <i class="lni lni-chevron-up"></i>
  </a>
      `,
        }}
      ></div>
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
