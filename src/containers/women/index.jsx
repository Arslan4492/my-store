import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { slice } from "../../store/Slice/Cart";
import Footer from "../../footer";
import { kapray } from "./data";
import AppCard from "../../components/card";

const Women = () => {
  const dispatch = useDispatch();

  const handleClick = (params) => {
    dispatch(slice.actions.addToCart(params));
  };

  return (
    <>
      <div
        style={{
          margin: "60px",
          marginTop: "100px",
        }}
        class="grid grid-cols-3 gap-5"
      >
        {kapray.map((ele) => (
          // <div class="max-w-sm auto-rows-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 grid  ">
          //   <a href="#">
          //     <img class="rounded-t-lg" src={ele.img} alt="" />
          //   </a>
          //   <div class="p-5">
          //     <a href="#">
          //       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          //         {ele.name}
          //       </h5>
          //     </a>
          //     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          //       {ele.code}
          //     </p>
          //     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          //       Size: {ele.size}
          //     </p>
          //     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          //       Color: {ele.color}
          //     </p>
          //     <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          //       Price: Rs. {ele.price}
          //     </p>

          //     <button
          //       onClick={() => handleClick()}
          //       href="#"
          //       class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-center"
          //     >
          //       Add to Cart
          //       <svg
          //         aria-hidden="true"
          //         class="w-4 h-4 ml-2 -mr-1"
          //         fill="currentColor"
          //         viewBox="0 0 20 20"
          //         xmlns="http://www.w3.org/2000/svg"
          //       >
          //         <path
          //           fill-rule="evenodd"
          //           d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          //           clip-rule="evenodd"
          //         ></path>
          //       </svg>
          //     </button>
          //   </div>
          // </div>
          <AppCard product={ele} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Women;
