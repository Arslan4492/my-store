import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { cartSlice } from "../../store/Slice/add-to-cart";
=======
<<<<<<< HEAD
import { cartSlice } from "../../store/Slice/add-to-cart";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Category from "./product-category";

const WinterCollection = () => {
  const winterProducts = [
    {
      id: 1,
      name: "leather jacket ",
      imgsrc:
        "https://ids.si.edu/ids/deliveryService?max_w=550&id=NMAH-JN2021-04236-000001",
      price: 7250,
      category: "Jackets",
    },
    {
      id: 2,
      name: "  black jacket ",
      imgsrc: "https://m.media-amazon.com/images/I/41ti6x8Kn3L.jpg",
      price: 12000,
      category: "Jackets",
    },
    {
      id: 3,
      name: "Alphine jacket",
      imgsrc:
        "https://www.montbell.us/products/prod_img/zoom/z_2301368_bric.jpg",
      price: 2500,
      category: "Jackets",
    },
    {
      id: 4,
      name: "   Uniworth jacket ",
      imgsrc: "https://uniworthdress.com/uploads/product/webp/JK2211..webp",
      price: 5250,
      category: "Jackets",
    },
    {
      id: 5,
      name: "Leather jacket ",
      imgsrc:
        "https://chapal.fr/wp-content/uploads/2021/12/Brooklyn-Fitter-che%CC%80vre-brun.jpg",
      price: 8600,
      category: "Jackets",
    },
    {
      id: 6,
      name: "Packable jacket",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFaDjB3EL1Bm8wHsXGoL-Gs_NjCYWozwbsaA&usqp=CAU",
      price: 9500,
      category: "Jackets",
    },
    {
      id: 7,
      name: "winterShirt",
      imgsrc:
        "https://i.pinimg.com/236x/fb/26/d6/fb26d68b739d8d1933ec4cec6f56aedd--mens-wool-jacket-plaid-jacket.jpg",
      price: 6500,
      category: "winterShirt",
    },
    {
      id: 8,
      name: "winter Shirt",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvwu0v8am_7mgQN0LKuudaKyOuuAhtsvciYg&usqp=CAU",
      price: 5500,
      category: "winterShirt",
    },
    {
      id: 9,
      name: "winter Shirt",
      imgsrc:
        "https://images.meesho.com/images/products/153477153/znyyc_256.webp",
      price: 5000,
      category: "winterShirt",
    },
    {
      id: 10,
      name: "winter Shirt",
      imgsrc:
        "https://www.kosha.co/journal/wp-content/uploads/2022/08/word-image-7592-2.jpeg",
      price: 5995,
      category: "winterShirt",
    },
    {
      id: 11,
      name: "winter Shirt",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSpWOUbZ9On4BSf8iSd403FOMIhpdKgs5vw&usqp=CAU",
      price: 9000,
      category: "winterShirt",
    },
    {
      id: 12,
      name: "winter Shirt",
      imgsrc:
        "https://uturn-store.com/wp-content/uploads/2022/10/uturn-winter-shirts-10-600x600.jpg",
      price: 12000,
      category: "winterShirt",
    },
    {
      id: 13,
      name: "winter Shirt",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYgPpAYnsRUzPE6YAqbUvfirnMy04qqff0A&usqp=CAU",
      price: 8500,
      category: "winterShirt",
    },
    {
      id: 14,
      name: "winter Collection Pent",
      imgsrc: "https://m.media-amazon.com/images/I/71MPG5cvBhL._AC_UL1500_.jpg",
      price: 1100,
    },
    {
      id: 15,
      name: "winter Collection Pent",
      imgsrc:
        "https://www.popsci.com/uploads/2021/02/24/CF7ILENJDFEW5EBGOHEPPAXJIU.jpg?auto=webp",
      price: 9500,
      category: "winterPants",
    },
    {
      id: 16,
      name: "winter Collection Pent",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWa-GvDxVC0TkS5PfX-PtVHZeTzy13Z_cSow&usqp=CAU",
      price: 7500,
      category: "winterPants",
    },
    {
      id: 17,
      name: "winter Collection Pent",
      imgsrc:
        "https://cdn.shopify.com/s/files/1/0046/5885/6006/products/5_2_900x.jpg?v=1616830704",
      price: 7500,
      category: "winterPants",
    },
    {
      id: 18,
      name: "winter Collection Pent",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWBBTwMykd0uJ_0pcDg7Xmq8bSnuS0vYWQw&usqp=CAU",
      price: 7500,
      category: "winterPants",
    },
    {
      id: 19,
      name: "winter Collection Pent",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWa-GvDxVC0TkS5PfX-PtVHZeTzy13Z_cSow&usqp=CAU",
      price: 7500,
      category: "winterPants",
    },
    {
      id: 20,
      name: "winter Collection Pent",
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWa-GvDxVC0TkS5PfX-PtVHZeTzy13Z_cSow&usqp=CAU",
      price: 7500,
      category: "winterPants",
    },
  ];
=======
import { cartSlice } from "../../store/slice/add-to-cart";
>>>>>>> a407b96c9fdd601154509cbe948520918a2a4515
const WinterCollection = () => {
>>>>>>> 21e48be3c00090171824d1efd0de68a19aaad016
  const dispatch = useDispatch();
  const { data, isLoading } = useQuery("winterCollection", () =>
    axios.get("http://localhost:7000/men/winter").then((res) => res)
  );
  console.log(data);
  if (isLoading) return <p>Loading...</p>;

  return (
<<<<<<< HEAD
    <section className="text-gray-600 body-font">
      <div className="px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="w-full p-4 grid grid-cols-3 gap-5">
            {data.data.map((winterData) => (
              <div
                key={winterData.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
=======
<<<<<<< HEAD
    <div>
      <Category />
      {winterProducts.map((winterData) => {
        return (
          <Card
            style={{
              width: "18rem",
              display: "inline-block",
              marginLeft: "2rem",
              marginBottom: "1rem",
            }}
          >
            <Card.Img variant="top" src={winterData.imgsrc} />
            <Card.Body>
              <Card.Title>{winterData.title}</Card.Title>
              <Card.Text style={{ fontWeight: "bolder" }}>
                {winterData.price}Rs
              </Card.Text>
              <Button
                variant="primary"
                onClick={dispatch(cartSlice.actions.addToCart(winterData))}
                style={{
                  borderRadius: "5px",
                  backgroundColor: "#3C79F5",
                  padding: "10px",
                }}
=======
    <section className='text-gray-600 body-font'>
      <div className='px-5 py-24 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          <div className='w-full p-4 grid grid-cols-3 gap-5'>
            {data.data.map((winterData) => (
              <div
                key={winterData.id}
                className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'
>>>>>>> 21e48be3c00090171824d1efd0de68a19aaad016
>>>>>>> a407b96c9fdd601154509cbe948520918a2a4515
              >
                <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                  <img
                    src={winterData.imgsrc}
                    alt={winterData.imageAlt}
                    className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                  />
                </div>
                <div className="flex flex-1 flex-col space-y-2 p-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href={winterData.name}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {winterData.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500">
                    color: {winterData.color}
                  </p>
                  <div className="flex flex-1 flex-col justify-end">
                    <p className="text-sm italic text-gray-500">
                      size: {winterData.size}
                    </p>
                    <p className="text-base font-medium text-gray-900">
                      Rs.{winterData.price}
                    </p>
                  </div>
                  <button
                    class="bg-blue-500 hover:bg-blue-300 w-32 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() =>
                      dispatch(cartSlice.actions.addToCart(winterData))
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterCollection;
