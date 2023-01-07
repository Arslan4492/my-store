import { useSelector } from "react-redux";
import { AppCard } from "../../components";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../store/Slice/add-to-cart";

export default function ChildrenCollections() {
  const { value } = useSelector((state) => state.children);
  const dispatch = useDispatch();
  return (
    <div className='bg-white'>
      <div className='mx-auto px-4'>
        <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8'>
          {value?.map((product) => (
            <AppCard item={product} handleAddToCart={(item) => dispatch(cartSlice.actions.addToCart(item))} />
          ))}
        </div>
      </div>
    </div>
  );
}
