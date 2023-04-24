const Resume = () => {
  return (
    <>
      <div className="container" id="resume">
        <div className="text-center">
          <h2 className="main-heading heading-name">My Resume</h2>
          <div className="secondary-text">Lorem Ipsum dolor sit amel</div>
          <div>
            <span className="dot my-3"></span>&nbsp;&nbsp;
            <span className="dot my-3"></span>&nbsp;&nbsp;
            <span className="dot my-3"></span>&nbsp;&nbsp;
            <span className="dot my-3"></span>&nbsp;&nbsp;
          </div>
        </div>
        <button className="btn btn-danger my-5">Experience</button>
        {/* <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="text-center">
                <div className="main-heading">2019-2020</div>
                <h2
                  className="position-relative my-2"
                  style={{ zIndex: "150" }}
                >
                  Black Jab Group
                </h2>
                <span className="position-relative" style={{ zIndex: "100" }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="text-center">
                <div className="main-heading">2020-2021</div>
                <h2
                  className="position-relative my-2"
                  style={{ zIndex: "150" }}
                >
                  Edunomics
                </h2>

                <span className="position-relative" style={{ zIndex: "100" }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="text-center">
                <div className="main-heading">2021-present</div>
                <h2
                  className="position-relative my-2"
                  style={{ zIndex: "150" }}
                >
                  RWS Moravia
                </h2>
                <span className="position-relative" style={{ zIndex: "100" }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div> */}

        {/* Carousel Starts  */}
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="text-center">
                <div className="main-heading">2019-2020</div>
                <h2
                  className="position-relative my-2"
                  style={{ zIndex: "150" }}
                >
                  Black Jab Group
                </h2>
                <span className="position-relative" style={{ zIndex: "100" }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="text-center">
                <div className="main-heading">2020-2021</div>
                <h2
                  className="position-relative my-2"
                  style={{ zIndex: "150" }}
                >
                  Edunomics
                </h2>

                <span className="position-relative" style={{ zIndex: "100" }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
            <div className="carousel-item">
              <div className="text-center">
                <div className="main-heading">2021-present</div>
                <h2
                  className="position-relative my-2"
                  style={{ zIndex: "150" }}
                >
                  RWS Moravia
                </h2>
                <span className="position-relative" style={{ zIndex: "100" }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon visually-hidden"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon visually-hidden"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Carousel Ends  */}
      </div>
    </>
  );
};
export default Resume;
