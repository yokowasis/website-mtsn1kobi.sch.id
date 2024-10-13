import { Settings, settings } from "../settings";

const Slider = ({ s }: { s: Settings }) => {
  return (
    <>
      <div
        className="container-fluid p-0 wow fadeIn"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeIn",
        }}
      >
        <div
          id="header-carousel"
          className="carousel slide pointer-event"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {s.Slider.map((item, i) => {
              return (
                <div className={`carousel-item ${i == 1 ? "active" : ""}`}>
                  <img
                    className="w-100"
                    style={{
                      maxHeight: 600,
                      objectFit: "cover",
                    }}
                    src={item.image}
                    alt="Image"
                  />
                  <div className="carousel-caption">
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-lg-7">
                          <h1 className="display-2 text-light mb-5 animated slideInDown">
                            {item.text}
                          </h1>
                          <a
                            href="/pages/ppdb"
                            className="btn btn-primary py-sm-3 px-sm-5"
                          >
                            PPDB
                          </a>
                          <a
                            href=""
                            className="btn btn-light py-sm-3 px-sm-5 ms-3"
                          >
                            INFO TERBARU
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            {s.Keunggulan.map((item, i) => {
              return (
                <div
                  className="col-lg-4 wow fadeIn"
                  data-wow-delay="0.1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeIn",
                  }}
                >
                  <div
                    className="bg-white shadow d-flex align-items-center h-100 p-4"
                    style={{ minHeight: "150px" }}
                  >
                    <div className="d-flex">
                      <div className="flex-shrink-0 btn-lg-square bg-primary">
                        <i className="fa fa-car text-white"></i>
                      </div>
                      <div className="ps-4">
                        <h5>{item.judul}</h5>
                        <span>{item.deskripsi}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: { s: settings },
  };
};

export default Slider;
