import React, { useEffect, useState } from "react";
import { getCategories } from "../../../API";
import { useQuery } from "react-query";
import style from "./UnstitchCollection.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const UnStitchMenCollection = () => {
  const { category } = useParams();
  const {
    isLoading,
    error,
    data: categories,
  } = useQuery("categories", getCategories);

  const [categoryMen, setCategoryMen] = useState([]);
  const [tooltipState, settooltipState] = useState({
    bgColor: "",
    title: "",
  });
  console.log(categories);

  useEffect(() => {
    if (categories) setCategoryMen(categories.filter((c) => c.title === "MEN"));
  }, [categories]);

  if (isLoading) {
    return (
      <h2 className="flex justify-center items-center m-5 p-5">lOADING...</h2>
    );
  }
  if (error) {
    return (
      <h2 className="flex justify-center items-center m-5 p-5">SERVER ERROR</h2>
    );
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" className="in" {...props}>
      <div className={`w-16 h-16 ${tooltipState?.bgColor}`}></div>
      <div className="text-center">{tooltipState?.title}</div>
    </Tooltip>
  );
  

  return (
    <div className="w-full">
      <div className="flex items-center px-1">
        <span className="block">HOME</span>
        <img
          src={require("../../../assets/icons/right-arrow.png")}
          className="mx-2 opacity-[0.5]"
          width="20px"
          alt=""
        />{" "}
        <span className="opacity-[0.3] block">MEN</span>
      </div>
      <h1 className="px-1 my-4 text-2xl">MEN</h1>
      <div className="flex">
        {categoryMen.length > 0 &&
          categoryMen[0]?.subCategories.map((category) => (
            <div
              className={`w-1/4 ${style.image_container} border-10 border-white hover:cursor-pointer`}
            >
              <img
                src={category.images[1]}
                alt={`${category.title} ${style.image}`}
              />
            </div>
          ))}
      </div>
      <div className="flex flex-wrap w mx-1">
        <div className="sm:w-[29%] w-full">
          <div className="border-2 ">
            <h1 className="text-2xl font-bold p-2">FILTER</h1>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>COLOR</Accordion.Header>
                <Accordion.Body>
                  <div className="flex space-x-5">
                    <OverlayTrigger
                      onEnter={() =>
                        settooltipState({
                          bgColor: "bg-green-600",
                          title: "green",
                        })
                      }
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <div
                        className={`w-8 h-8 bg-green-600 rounded-full hover:cursor-pointer`}
                      ></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      onEnter={() =>
                        settooltipState({
                          bgColor: "bg-zinc-500",
                          title: "zinc",
                        })
                      }
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <div
                        className={`w-8 h-8 bg-zinc-500 rounded-full hover:cursor-pointer`}
                      ></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      onEnter={() =>
                        settooltipState({
                          bgColor: "bg-orange-800",
                          title: "orange",
                        })
                      }
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <div
                        className={`w-8 h-8 bg-orange-800 rounded-full hover:cursor-pointer`}
                      ></div>
                    </OverlayTrigger>
                    <OverlayTrigger
                      onEnter={() =>
                        settooltipState({
                          bgColor: "bg-cyan-500",
                          title: "cyan",
                        })
                      }
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={renderTooltip}
                    >
                      <div
                        className={`w-8 h-8 bg-cyan-500 rounded-full hover:cursor-pointer`}
                      ></div>
                    </OverlayTrigger>
          
           
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>PRICE</Accordion.Header>
                <Accordion.Body>asdgfasdfasd</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>DISCOUNT PERCENTAGE</Accordion.Header>
                <Accordion.Body>asdgfasdfasd</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>GENDER</Accordion.Header>
                <Accordion.Body>asdgfasdfasd</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        <div className="sm:w-[69%] w-full">
          <div className="border-2 marker:h-[20rem] grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3">
            <div className="w-2xl h-[20rem] border-2 border-solid border-black ">card</div>
            <div className="w-2xl h-[20rem] border-2 border-solid border-black ">card</div>
            <div className="w-2xl h-[20rem] border-2 border-solid border-black ">card</div>
            <div className="w-2xl h-[20rem] border-2 border-solid border-black ">card</div>
            <div className="w-2xl h-[20rem] border-2 border-solid border-black ">card</div>
            <div className="w-2xl h-[20rem] border-2 border-solid border-black ">card</div>
            <div className="w-2xl h-[20rem] border-2 border-solid border-black ">card</div>
            <div className="w-2xl h-[20rem] border-2 border-solid border-black ">card</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnStitchMenCollection;
