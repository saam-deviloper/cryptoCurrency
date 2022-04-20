import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import banner from "../asset/img/banner.jpg";
import Style from "../Component/Forum.module.css";
export default function Forum() {
  return (
    <>
      <div className={Style.bannerContainer}>
        {/* <img src={banner} alt="banner" className={Style.imgBanner} /> */}
      </div>
      <Container>
        <div class="jumbotron ">
          <h1 class="display-4">Wellcome to ShitCoin forum!</h1>
          <p class="lead">
            This is a platform for trading crypto , inform latest
            analysis,Consult together
          </p>
          <hr class="my-4" />
          <p>
            We can give you suggest on how easily you could Fack your budget up
            in just a sec.
          </p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="/" role="button">
              Learn more
            </a>
          </p>
          <div style={{ height: "50px" }}></div>
        </div>
        <h1>Latest news</h1>
        <div className="row mb-5 w-75  ">
          <div className="col-5 ps-2 ">
            <img
              src="https://v2.cimg.co/news/76614/182816/responsive-images/adobestock-487071045___media_library_original_600_400.jpg"
              alt="img"
              height="250px"
              width="auto"
              style={{ objectFit: "cover",borderRadius:"5px" }}
            />
          </div>
          <div className="col-6  d-flex flex-column ms-5">
            <div><p className="text-info">shitcoin News.<span className="text-muted">few hours ago</span></p></div>
            <div>
              <h4>IMF’s DeFi Governance Recommendations Include These Two Steps</h4>
            </div>
            <div>
              The IMF also conceded that DeFi "has the potential to offer
              financial services with even greater efficiency, becoming a
              gravitational force that attracts a large number of crypto
              investors."<Link to={'./'}>read more</Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
