import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/images/favicon.svg"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/LineIcons.2.0.css" />
        <link rel="stylesheet" href="assets/css/animate.css" />
        <link rel="stylesheet" href="assets/css/tiny-slider.css" />
        <link rel="stylesheet" href="assets/css/glightbox.min.css" />
        <link rel="stylesheet" href="assets/css/main.css" />
      </Head>
      <body>
        <Main />

        <div
          dangerouslySetInnerHTML={{
            __html: /*html*/ `
  <!-- ========================= JS here ========================= -->
  <script src="assets/js/bootstrap.min.js"></script>
  <script src="assets/js/count-up.min.js"></script>
  <script src="assets/js/wow.min.js"></script>
  <script src="assets/js/tiny-slider.js"></script>
  <script src="assets/js/glightbox.min.js"></script>
  <script src="assets/js/main.js"></script>
  <script type="text/javascript">
    //========= Hero Slider 
    tns({
      container: '.hero-slider',
      items: 1,
      slideBy: 'page',
      autoplay: false,
      mouseDrag: true,
      gutter: 0,
      nav: true,
      controls: false,
      controlsText: ['<i class="lni lni-arrow-left"></i>', '<i class="lni lni-arrow-right"></i>'],
    });
    //====== Clients Logo Slider
    tns({
      container: '.client-logo-carousel',
      slideBy: 'page',
      autoplay: true,
      autoplayButtonOutput: false,
      mouseDrag: true,
      gutter: 15,
      nav: false,
      controls: false,
      responsive: {
        0: {
          items: 1,
        },
        540: {
          items: 3,
        },
        768: {
          items: 4,
        },
        992: {
          items: 4,
        },
        1170: {
          items: 6,
        }
      }
    });
    //========= glightbox
    GLightbox({
      'href': 'https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM',
      'type': 'video',
      'source': 'youtube', //vimeo, youtube or local
      'width': 900,
      'autoplayVideos': true,
    });
  </script>
          `,
          }}
        ></div>

        <NextScript />
      </body>
    </Html>
  );
}
