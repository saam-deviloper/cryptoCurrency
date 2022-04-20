import React, { useContext } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContextProvider";

export default function Detail() {
  const param = useParams();
  //  console.log(param.id)
  const coin = useContext(CoinContext);
  const currentCoin = coin.findIndex((item) => item.id === param.id);
  const {
    name,
    current_price,
    image,
    high_24h,
    low_24h,
    market_cap_rank,
    ath_date,
    total_supply,
    total_volume,
  } = coin[currentCoin];
  //  console.log(name,'sssss');
  return (
    <Container>
      <div className="row mt-5">
        <div className="col-lg-7 col-md-7 col-xl-6 col-xs-12 col-sm-12">
          <div >
            <Link to={"../"} className="text-decoration-none d-inline ">
              Home
            </Link>
            <img
              src="https://img.icons8.com/small/16/000000/more-than.png"
              alt="#"
            />
            <p className="text-muted d-inline">{` ${name}`}</p>
          </div>
          <div className="d-flex  align-items-center mt-5 mb-2">
            <img src={image} height="70px" className="" alt="logo" />{" "}
            <h1 className="display-5  ">{name}</h1>
          </div>
          <h3 className="bold">
            <strong>{current_price}$</strong>
          </h3>
          <ProgressBar
            animated
            min={+low_24h}
            variant="warning"
            max={+high_24h}
            now={50}
            className="w-25"
          />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-6  bg-light mt-5 rounded p-3">
          <h3>Info</h3>
          <div className="d-flex flex-row justify-content-between">
            <div>name:</div> 
            <div>{name}</div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <div>marketCap:</div> 
            <div>
            {market_cap_rank}
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <div>ath-date:</div> 
            <div>
            {ath_date}
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <div>total-supply:</div> 
            <div>
            {total_supply}
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between">
            <div>total-volume:</div> 
            <div>
            {total_volume}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
