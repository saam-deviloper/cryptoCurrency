import React, { useContext, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { CoinContext } from "../context/CoinContextProvider";
import Coin from "./shared/Coin";
import {search} from '../helper/search'

export default function Home({searchedItem}) {
  const [itemCount, setItemCount] = useState(15);
  const dataContext = useContext(CoinContext);
  return (
    <>
      <Container>
        <figure>
          <blockquote className="blockquote mt-5">
            <h2>Cryptocurrency Prices by Market Cap</h2>
          </blockquote>
          <figcaption className="blockquote-footer">
            The global cryptocurrency market cap today is{" "}
            <cite title="Source Title">$1.95</cite> Trillion, a{" "}
            <cite title="Source Title">-2.7%</cite> change in the last 24 hours.
          </figcaption>
        </figure>
            <Table
              striped
              hover
              variant="light"
              className="text-center border-top border-bottom ">
              <thead>
                <tr>
                  <th>#</th>
                  <th>coin</th>
                  <th>price</th>
                  <th>24h</th>
                  <th>1h</th>
                </tr>
              </thead>
              <tbody>
                { search(dataContext,searchedItem).map((item, index) =>
                  index < itemCount ? <Coin data={item} key={item.id} /> : ""
                )}
              </tbody>
            </Table>
            <Button
              className="d-flex w-50 justify-content-center m-auto mb-4 slide-left"
              onClick={() => {
                setItemCount((prevState) => prevState + 15);
                // console.log(itemCount)
              }}
            >
              Show +15 more
            </Button>
      </Container>
    </>
  );
}
