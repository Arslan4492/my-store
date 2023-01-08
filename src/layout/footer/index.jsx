const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        color: "white",
        fontFamily: "inherit",
      }}
    >
      <footer className='footer px-8 grid grid-cols-4'>
        <ul className='mt-16' style={{ listStyle: "none" }}>
          <li>How can we help you?</li>

          <li>
            <a href='http://outfitter.com'></a>ContactUs@Bootcamp.com
          </li>

          <li>UAN: 1234-1111-111-12</li>
          <li>Sat-Sun 9:00AM to 5:00PM </li>
        </ul>

        <div className='mt-8'>
          <ul
            style={{
              listStyle: "none",
              textDecoration: "none",
              paddingLeft: "5rem",
              paddingTop: "2rem",
            }}
          >
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Children</li>
            <li>Winter Collections</li>
            <li>Summer Collections</li>
          </ul>
        </div>

        <div className='mt-8'>
          <ul
            style={{
              listStyle: "none",
              textDecoration: "none",
              paddingLeft: "5rem",
              paddingTop: "2rem",
            }}
          >
            <li>HELP</li>
            <li>FASHIONHUB</li>
            <li>About Us</li>
            <li>Retail Store</li>
            <li>Contact Us</li>
            <li>Work With Us</li>
            <br />
          </ul>
        </div>

        <div className='mt-8'>
          <ul>
            <br /> <br />
            <li>PAYMENT METHOD</li>
            <img
              width='76'
              height='52'
              src='//cdn.shopify.com/s/files/1/2290/7887/files/Visa_663bd1fe-20b8-4575-8087-4273971957b4.png?v=1665745898'
              alt='Visa Icon'
              loading='lazy'
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
            <br></br>
            <span>&copy; 2023 FASHIONHUB</span>
          </li>
          <br></br>/
          <li style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <br></br> <span>TERMS AND CONDITIONS</span>
          </li>
          <br></br>/
          <li style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <br></br> <span>PRIVACY POLICY</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
