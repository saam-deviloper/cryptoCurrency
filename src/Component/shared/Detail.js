import React, { useContext } from "react";
import {  Container, ProgressBar } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContextProvider";

export default function Detail() {
  const param = useParams();
  //  console.log(param.id)
  const coin = useContext(CoinContext);
  const currentCoin = coin.findIndex((item) => item.id === param.id);
  const { name,current_price,image,high_24h,low_24h } = coin[currentCoin];
  //  console.log(name,'sssss');
  return (
    <Container>
      <div className="mt-5"><Link to={'../'} className='text-decoration-none d-inline ' >Home</Link><img src="https://img.icons8.com/small/16/000000/more-than.png" alt="#"/><p className="text-muted d-inline">{` ${name}`}</p></div>
      <div className="row justify-content-center align-items-center mt-5 mb-2" >
      <img src={image} height='70px' className='col-xs-6 col-sm-12 col-md-1 col-lg-1'
      /> <h1 className="display-5  col-xs-6 col-sm-12 col-md-1 col-lg-1">{name}</h1>
      </div>
      <h3 className="bold" ><strong>{current_price}$</strong></h3>
      <ProgressBar animated min={+low_24h} variant='warning' max={+high_24h} now={50} className='w-50 ' />
      <div>
      </div>    
    </Container>
  );
}
