import React from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Coin(props) {
  const {
    id,
    name,
    current_price,
    image,
    market_cap_rank,
    price_change_percentage_1h_in_currency,
    market_cap_change_percentage_24h,
  } = props.data;

  const sepratedPrice = (x) => {
    const numb = x.toFixed(2);

    return numb.toLocaleString();
  };
  const navigate = useNavigate();
  
  const goRouteId = (id)=>{
    let res = String(id)
    navigate(`/${res}`)
  }
  // infinite scroll
  return (
    <>
    {/* onClick={()=>{goRouteId(id)}} */}
      <tr onClick={()=>{goRouteId(id)}}>
          <td>{market_cap_rank}</td>
          <td className="text-start ps-4 ">
            {image ? <img src={image} height="40px" width="40px" alt="logo" className="pe-1" />:
            <Spinner animation="border" variant="warning" />
            }
            {name}
          </td>
          <td>{sepratedPrice(current_price)}$</td>
          <td
            className={
              market_cap_change_percentage_24h > 0.0
                ? "text-success"
                : "text-danger"
            }
          >
            {market_cap_change_percentage_24h}
            {market_cap_change_percentage_24h > 0.0 ? (
              <img
                src="https://img.icons8.com/emoji/48/000000/chart-increasing-emoji.png"
                alt="png"
                height="40px"
                width="40px"
              />
            ) : (
              <img
                src="https://img.icons8.com/emoji/48/000000/chart-decreasing-emoji.png"
                alt="png"
                height="40px"
                width="40px"
              />
            )}
          </td>
          <td
            className={
              price_change_percentage_1h_in_currency > 0.0
                ? "text-success"
                : "text-danger"
            }
          >{price_change_percentage_1h_in_currency.toFixed(3)}</td>
      </tr>
    </>
  );
}
