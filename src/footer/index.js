import React from "react";

function Footer() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          color: "white",
          fontFamily: "inherit",
        }}
      >
        <footer className="footer" style={{ display: "flex", paddingLeft: "5rem" }}>
          <div
            style={{
              paddingTop: "25px",
              paddingLeft: "50px",

              fontFamily: "Arial",
            }}
          >
            <ul style={{ listStyle: "none" }}>
              <li>CAN WE HELP YOU</li>
              <br />
              <li>SEND EMAIL</li>
              <li>
                <a href="http://outfitter.com"></a>CONTACTUS@OUTFITTERS.com
              </li>
              <br />
              <li>UAN: 1234-1111-111-12</li>
              <li>MON-FRI 9:00 to 5:30 PST </li>
            </ul>
          </div>

          <div style={{ paddingTop: "25px", fontFamily: "Arial" }}>
            <ul
              style={{
                listStyle: "none",
                textDecoration: "none",
                paddingLeft: "5rem",
              }}
            >
              <li>HELP</li>
              <br />
              <li>FAQ'S</li>
              <li>SIGN UP/LOG IN</li>
              <li>HOW TO BUY</li>
              <li>PAYMENT</li>
              <li>SHIPPING & DELIVERIES</li>
              <li>EXCHANGE & RETURN</li>
            </ul>
          </div>

          <div style={{ paddingTop: "25px", fontFamily: "Arial" }}>
            <ul
              style={{
                listStyle: "none",
                textDecoration: "none",
                paddingLeft: "5rem",
              }}
            >
              <li>ABOUT OUTFITTERS</li>
              <br />
              <li>ABOUT US</li>
              <li>RETAIL STORE</li>
              <li>CONTACT US</li>
              <li>WORK WITH US</li>
              <br />
            </ul>
          </div>

          <div style={{ paddingTop: "25px", fontFamily: "Arial" }}>
            <ul
              style={{
                listStyle: "none",
                textDecoration: "none",
                paddingLeft: "5rem",
              }}
            >
              <li>DOWNLOAD APP</li>
              <br />
              <img
                width="117"
                height="34"
                src="//cdn.shopify.com/s/files/1/2290/7887/files/googleplay_1.png?v=1665742718"
                alt="Android App"
                loading="lazy"
              />{" "}
              <span></span>
              <img
                width="118"
                height="34"
                src="//cdn.shopify.com/s/files/1/2290/7887/files/appstore_1.png?v=1665742718"
                alt="Ios App"
                loading="lazy"
              />
              <br /> <br />
              <li>PAYMENT METHOD</li>
              <img
                width="76"
                height="52"
                src="//cdn.shopify.com/s/files/1/2290/7887/files/Visa_663bd1fe-20b8-4575-8087-4273971957b4.png?v=1665745898"
                alt="Visa Icon"
                loading="lazy"
              ></img>
            </ul>
          </div>
          <div>
            <hr style={{ color: "white" }} />
          </div>
        </footer>
        <div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <li style={{ paddingRight: "10px" }}>
              {" "}
              <span>&copy; 2022 OUTFITTERS</span>
            </li>
            /
            <li style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              {" "}
              <span>TERMS AND CONDITIONS</span>
            </li>
            /
            <li style={{ paddingLeft: "10px", paddingRight: "10px" }}>
              {" "}
              <span>PRIVACY POLICY</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
