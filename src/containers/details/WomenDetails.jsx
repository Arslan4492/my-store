import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
function WomenDetails() {
  const { cartItem } = useSelector((state) => state.cart);

  return (
    <>
      {cartItem.length > 0 &&
        cartItem.map((ele) => (
          <Card style={{ width: "18rem" }}>
            <h3>{ele.name}</h3>
            <div
              style={{
                display: "flex",
                alignContent: "space-around",
                justifyContent: "flex-start",
                flexDirection: "row",
              }}
            >
              <div>
                {" "}
                <Card.Img variant="top" width="500px" src={ele.img} />
              </div>

              <div>
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
              </div>
            </div>
          </Card>
        ))}
    </>
  );
}

export default WomenDetails;
