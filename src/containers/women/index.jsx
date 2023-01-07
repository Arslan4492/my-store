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
    <div
      style={{
        margin: "60px",
        marginTop: "100px",
      }}
      class='grid grid-cols-3 gap-5'
    >
      {kapray.map((ele) => (
        <AppCard product={ele} />
      ))}
    </div>
  );
};

export default Women;
