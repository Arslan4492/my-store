import { useDispatch } from "react-redux";
import { slice } from "../../store/Slice/Cart";
import { kapray } from "./data";
import { AppCard } from "../../components";

const Women = () => {
  const dispatch = useDispatch();

  const handleClick = (params) => {
    dispatch(slice.actions.addToCart(params));
  };

  return (
    <div className="bg-white">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {kapray.map((ele) => (
            <AppCard item={ele} handleAddToCart={(item) => handleClick(item)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
