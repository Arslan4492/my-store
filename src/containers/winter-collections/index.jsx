import { useQuery } from "react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../store/Slice/add-to-cart";
import { AppCard } from "../../components";

const WinterCollection = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery("winterCollection", () =>
    axios.get("http://localhost:4000/winterCollection").then((res) => res)
  );
  console.log(data);
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className='bg-white'>
      <div className='mx-auto px-4'>
        <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8'>
          {data.data.map((winterData) => (
            <AppCard
              item={winterData}
              handleAddToCart={(item) => dispatch(cartSlice.actions.addToCart(item))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinterCollection;
