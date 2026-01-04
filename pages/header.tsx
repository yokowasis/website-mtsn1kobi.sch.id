import { settings } from "../settings";

export const header = /*html*/ `
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
              <a class="navbar-brand" href="/">
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
                           <a class="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                             data-bs-target="#submenu-${key}" aria-controls="navbarSupportedContent" aria-expanded="false"
                             aria-label="Toggle navigation">${key}</a>
                           <ul class="sub-menu collapse" id="submenu-${key}">
                             ${Object.keys(menuObject).map((subKey) => {
                               return /*html*/ `
                               <li class="nav-item"><a href="${
                                 menuObject[subKey]
                               }">${subKey.replace(/_/g, " ")}</a></li>`;
                             }).join("")}
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
  
  <script>
    // Initialize mobile submenu collapse functionality
    function initializeSubmenus() {
      const collapseElements = document.querySelectorAll('.dd-menu[data-bs-toggle="collapse"]');
      
      collapseElements.forEach(function(element) {
        // Remove any existing listeners by cloning the element
        const newElement = element.cloneNode(true);
        element.parentNode.replaceChild(newElement, element);
        
        newElement.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          const targetId = this.getAttribute('data-bs-target');
          
          // Retry mechanism to find the target element (handles DOM timing issues)
          let target = null;
          let attempts = 0;
          const maxAttempts = 5;
          
          const findTarget = () => {
            target = document.querySelector(targetId);
            attempts++;
            
            if (target || attempts >= maxAttempts) {
              processTarget();
            } else {
              setTimeout(findTarget, 50);
            }
          };
          
          const processTarget = () => {
            if (target) {
              // Toggle submenu visibility
              const isCurrentlyVisible = target.classList.contains('show');
              
              if (isCurrentlyVisible) {
                target.classList.remove('show');
                newElement.setAttribute('aria-expanded', 'false');
              } else {
                // Close other open submenus first
                document.querySelectorAll('.sub-menu.show').forEach(function(openMenu) {
                  openMenu.classList.remove('show');
                });
                document.querySelectorAll('.dd-menu[aria-expanded="true"]').forEach(function(openToggle) {
                  openToggle.setAttribute('aria-expanded', 'false');
                });
                
                // Open this submenu
                target.classList.add('show');
                newElement.setAttribute('aria-expanded', 'true');
              }
            } else {
              // Fallback: find any submenu and show it
              const anySubmenu = document.querySelector('[id*="submenu"]');
              if (anySubmenu) {
                anySubmenu.classList.add('show');
              }
            }
          };
          
          findTarget();
        });
      });
    }
    
    // Initialize with multiple timing strategies to handle React/Next.js rendering
    setTimeout(initializeSubmenus, 100);
    setTimeout(initializeSubmenus, 500); 
    setTimeout(initializeSubmenus, 1000);
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeSubmenus);
    } else {
      initializeSubmenus();
    }
  </script>
  
`;

const Header = () => {
  return <></>;
};
export default Header;
