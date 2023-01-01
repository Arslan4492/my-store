import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import img1 from "../Details/images/img1.jpg";
import img2 from "../Details/images/img2.jpg";
import img3 from "../Details/images/img3.jpg";
import img4 from "../Details/images/img4.jpg";
import img5 from "../Details/images/img5.jpg";
import img6 from "../Details/images/img6.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { slice } from "../../store/Slice/Cart";
import { Button } from "react-bootstrap";

function Women() {
  const dispatch = useDispatch();

  const handleClick = (params) => {
    dispatch(slice.actions.addToCart(params));
  };
  const kapray = [
    {
      id: 1,
      name: "REGULAR FIT TRUCKER WITH CONTRAST DETAIL",
      code: "F0093/101/801-10401382",
      img: img1,
      price: 3000,
      color: "Blue",
      size: "L",
      gender: "Female",
    },
    {
      id: 2,
      name: "REGULAR FIT SHERPA COLLAR TRUCKER JACKET",
      code: "F0085/101/625-10400746",
      img: img2,
      price: 3000,
      color: "Blue",
      size: "XL",
      gender: "Female",
    },
    {
      id: 3,
      name: "REGULAR FIT SHERPA COLLAR TRUCKER JACKET",
      code: "F0096/101/901-10401403",
      img: img3,
      price: 3000,
      color: "Black",
      size: "S",
      gender: "Female",
    },
    {
      id: 4,
      name: "OVERSIZED UNISEX DENIM VARSITY JACKET",
      code: "F0083/101/625-10400714",
      img: img4,
      price: 3000,
      color: "Black",
      size: "S",
      gender: "Female",
    },
    {
      id: 5,
      name: "REGULAR FIT GRAPHIC HOODED JACKET",
      code: "F0079/101/901-10385656",
      img: img5,
      price: 9000,
      color: "Black",
      size: "S",
      gender: "Female",
    },
    {
      id: 6,
      name: "MOCK NECK PUFFER JACKET",
      code: "F0075/101/710-10385624",
      img: img6,
      price: 2000,
      color: "Black",
      size: "S",
      gender: "Female",
    },
  ];

  return (
    <>
      <h3 className="text-3xl font-bold underline center">
        WOMEN CLOTHING
        <button className="button2">
          <Link to="/WomenDetails"> SEE CART</Link>
        </button>
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "spaced-evenly",
          alignContent: "center",
          flexDirection: "row",
        }}
      >
        {kapray.map((ele) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" width="200px" src={ele.img} />

            <Card.Body>
              <Card.Title style={{ textEmphasis: "ActiveBorder" }}>
                {ele.name}
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item> {ele.code}</ListGroup.Item>
              <ListGroup.Item>
                Price: Rs
                {ele.price}
              </ListGroup.Item>
              <ListGroup.Item>Size:{ele.size}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card href="#">Color:{ele.color}</Card>
              <Card href="#">Gender:{ele.gender}</Card>
            </Card.Body>
            <button className="button2" onClick={() => handleClick(ele)}>
              ADD TO CART
            </button>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Women;
