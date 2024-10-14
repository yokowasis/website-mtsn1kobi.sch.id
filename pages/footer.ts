import { settings } from "../settings";

export const footer = /*html*/`
<!-- Start Achivement Area -->
  <section class="our-achievement section overlay">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-12">
          <div class="single-achievement wow fadeInUp" data-wow-delay=".2s">
            <h3 class="counter"><span id="secondo1" class="countup" cup-end="${settings.InfoSekolah["Jumlah Siswa"]
  }">${settings.InfoSekolah["Jumlah Siswa"]}</span></h3>
            <h4>Siswa</h4>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-12">
          <div class="single-achievement wow fadeInUp" data-wow-delay=".4s">
            <h3 class="counter"><span id="secondo2" class="countup" cup-end="${settings.InfoSekolah["Jumlah Guru"]
  }">${settings.InfoSekolah["Jumlah Guru"]}</span></h3>
            <h4>Guru</h4>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-12">
          <div class="single-achievement wow fadeInUp" data-wow-delay=".6s">
            <h3 class="counter"><span id="secondo3" class="countup" cup-end="${settings.InfoSekolah["Jumlah Kelas"]
  }">${settings.InfoSekolah["Jumlah Kelas"]}</span></h3>
            <h4>Kelas</h4>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-12">
          <div class="single-achievement wow fadeInUp" data-wow-delay=".6s">
            <h3 class="counter"><span id="secondo3" class="countup" cup-end="${settings.InfoSekolah["Jumlah Extra Kurikuler"]
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
                <img style="width:50px" src="${settings.InfoSekolah.Logo
  }" alt="Logo"> ${settings.InfoSekolah.Nama}
              </div>
              <p class="mb-3">Visi : ${settings.VisiMisi.Visi}</p>
              <p>Misi :</p>
              <ol>
                ${settings.VisiMisi.Misi.map((item, index) => {
    return /*html*/ `
                <li style="margin-left:15px; text-indent:-15px;">${index + 1
      }. ${item}</li>`;
  }).join("")}
              </ol>
              <div class="footer-social">
                <ul>
                  <li><a href="${settings.InfoSekolah.Facebook
  }"><i class="lni lni-facebook-original"></i></a></li>
                  <li><a href="${settings.InfoSekolah.Twitter
  }"><i class="lni lni-twitter-original"></i></a></li>
                  <li><a href="${settings.InfoSekolah.Youtube
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
              <p>Jika ada pertanyaan, bisa menghubungi kami melalui email <a href="mailto:${settings.InfoSekolah.Email
  }">${settings.InfoSekolah.Email
  }</a>  atau Whatsapp <a href="https://wa.me/${settings.InfoSekolah.Whatsapp
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
`