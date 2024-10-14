import { settings } from "../settings";

export const header = /*html*/`
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
                <li><a href="${settings.InfoSekolah.Facebook}"><i class="lni lni-facebook-original"></i></a></li>
                <li><a href="${settings.InfoSekolah.Twitter}"><i class="lni lni-twitter-original"></i></a></li>
                <li><a href="${settings.InfoSekolah.Instagram}"><i class="lni lni-instagram"></i></a></li>
                <li><a href="${settings.InfoSekolah.Youtube}"><i class="lni lni-youtube"></i></a></li>
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
                <img style="width:50px" src="${settings.InfoSekolah.Logo
  }" alt="Logo">
              </a>
              <span style="font-size:1.3rem;color:#000;font-weight:bold">${settings.InfoSekolah.Nama
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
                          <a class="${key === "Home" ? "active" : ""
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
                              <li class="nav-item"><a href="${menuObject[subKey]
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
  
`;