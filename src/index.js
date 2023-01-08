// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "font-awesome/css/font-awesome.css";

const express = require("express"); //build time only..once app runs,express starts
//import express is fade out

const app = express();
const routes = express.Router();

app.use(routes);
routes.get("/", (req, res) => {
  res.status(201).json({ message: "Our Backend is live" });
});

app.listen(9000, () => console.log("App is live on http://localhost:9000"));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
