import { useDispatch } from "react-redux";
import { slice } from "../../store/Slice/Cart";
// import { kapray } from "./data";
import AppCard from "../../components/card";
import axios from "axios";
import { useQuery } from "react-query";

const Women = () => {
  const dispatch = useDispatch();

  const handleClick = (params) => {
    dispatch(slice.actions.addToCart(params));
  };
  const fetchDBData = () => {
    return axios.get("http://localhost:3000/women");
  };
  const { data, isLoading, isError, error } = useQuery("women", fetchDBData);
  console.log(data);
  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <div className="bg-white">
      <div className="mx-auto px-4">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {data?.data.map((ele) => (
            <AppCard item={ele} handleAddToCart={(item) => handleClick(item)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Women;
