import { useState } from "react";
import StoreItem from "../components/StoreItem";
import storeItem from "../data/item.json";
import { Col, Row } from "react-bootstrap";

const Store = ({ cart, setcart}) => {
    
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={2} className="g-3">
        {storeItem.map((item) => (
          <Col key={item.id}><StoreItem item={item} cart={cart} setcart={setcart} key={item.id}/></Col>
        ))}
      </Row>
    </>
  );
};
export default Store;
