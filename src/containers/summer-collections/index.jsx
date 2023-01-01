import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { cartSlice } from "../../store/slice/add-to-cart";

const SummerCollection = () => {
  const dispatch = useDispatch();
  const getProducts = () => {
    const products = {
      products: [
        {
          id: 61,
          title: "Leather Straps Wristwatch",
          description: "Style:Sport ,Clasp:Buckles ,Water Resistance Depth:3Bar",
          price: 120,
          discountPercentage: 7.14,
          rating: 4.63,
          stock: 91,
          brand: "Naviforce",
          category: "mens-watches",
          thumbnail: "https://i.dummyjson.com/data/products/61/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/61/1.jpg",
            "https://i.dummyjson.com/data/products/61/2.png",
            "https://i.dummyjson.com/data/products/61/3.jpg",
          ],
        },
        {
          id: 62,
          title: "Waterproof Leather Brand Watch",
          description: "Watch Crown With Environmental IPS Bronze Electroplating; Display system of 12 hours",
          price: 46,
          discountPercentage: 3.15,
          rating: 4.05,
          stock: 95,
          brand: "SKMEI 9117",
          category: "mens-watches",
          thumbnail: "https://i.dummyjson.com/data/products/62/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/62/1.jpg",
            "https://i.dummyjson.com/data/products/62/2.jpg",
          ],
        },
        {
          id: 63,
          title: "Royal Blue Premium Watch",
          description: "Men Silver Chain Royal Blue Premium Watch Latest Analog Watch",
          price: 50,
          discountPercentage: 2.56,
          rating: 4.89,
          stock: 142,
          brand: "SKMEI 9117",
          category: "mens-watches",
          thumbnail: "https://i.dummyjson.com/data/products/63/thumbnail.webp",
          images: [
            "https://i.dummyjson.com/data/products/63/1.jpg",
            "https://i.dummyjson.com/data/products/63/2.jpg",
            "https://i.dummyjson.com/data/products/63/3.png",
            "https://i.dummyjson.com/data/products/63/4.jpeg",
          ],
        },
        {
          id: 64,
          title: "Leather Strap Skeleton Watch",
          description: "Leather Strap Skeleton Watch for Men - Stylish and Latest Design",
          price: 46,
          discountPercentage: 10.2,
          rating: 4.98,
          stock: 61,
          brand: "Strap Skeleton",
          category: "mens-watches",
          thumbnail: "https://i.dummyjson.com/data/products/64/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/64/1.jpg",
            "https://i.dummyjson.com/data/products/64/2.webp",
            "https://i.dummyjson.com/data/products/64/3.jpg",
            "https://i.dummyjson.com/data/products/64/thumbnail.jpg",
          ],
        },
        {
          id: 65,
          title: "Stainless Steel Wrist Watch",
          description: "Stylish Watch For Man (Luxury) Classy Men's Stainless Steel Wrist Watch - Box Packed",
          price: 47,
          discountPercentage: 17.79,
          rating: 4.79,
          stock: 94,
          brand: "Stainless",
          category: "mens-watches",
          thumbnail: "https://i.dummyjson.com/data/products/65/thumbnail.webp",
          images: [
            "https://i.dummyjson.com/data/products/65/1.jpg",
            "https://i.dummyjson.com/data/products/65/2.webp",
            "https://i.dummyjson.com/data/products/65/3.jpg",
            "https://i.dummyjson.com/data/products/65/4.webp",
            "https://i.dummyjson.com/data/products/65/thumbnail.webp",
          ],
        },
        {
          id: 56,
          title: "Sneakers Joggers Shoes",
          description: "Gender: Men , Colors: Same as DisplayedCondition: 100% Brand New",
          price: 40,
          discountPercentage: 12.57,
          rating: 4.38,
          stock: 6,
          brand: "Sneakers",
          category: "mens-shoes",
          thumbnail: "https://i.dummyjson.com/data/products/56/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/56/1.jpg",
            "https://i.dummyjson.com/data/products/56/2.jpg",
            "https://i.dummyjson.com/data/products/56/3.jpg",
            "https://i.dummyjson.com/data/products/56/4.jpg",
            "https://i.dummyjson.com/data/products/56/5.jpg",
            "https://i.dummyjson.com/data/products/56/thumbnail.jpg",
          ],
        },
        {
          id: 57,
          title: "Loafers for men",
          description:
            "Men Shoes - Loafers for men - Rubber Shoes - Nylon Shoes - Shoes for men - Moccassion - Pure Nylon (Rubber) Expot Quality.",
          price: 47,
          discountPercentage: 10.91,
          rating: 4.91,
          stock: 20,
          brand: "Rubber",
          category: "mens-shoes",
          thumbnail: "https://i.dummyjson.com/data/products/57/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/57/1.jpg",
            "https://i.dummyjson.com/data/products/57/2.jpg",
            "https://i.dummyjson.com/data/products/57/3.jpg",
            "https://i.dummyjson.com/data/products/57/4.jpg",
            "https://i.dummyjson.com/data/products/57/thumbnail.jpg",
          ],
        },
        {
          id: 58,
          title: "formal offices shoes",
          description: "Pattern Type: Solid, Material: PU, Toe Shape: Pointed Toe ,Outsole Material: Rubber",
          price: 57,
          discountPercentage: 12,
          rating: 4.41,
          stock: 68,
          brand: "The Warehouse",
          category: "mens-shoes",
          thumbnail: "https://i.dummyjson.com/data/products/58/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/58/1.jpg",
            "https://i.dummyjson.com/data/products/58/2.jpg",
            "https://i.dummyjson.com/data/products/58/3.jpg",
            "https://i.dummyjson.com/data/products/58/4.jpg",
            "https://i.dummyjson.com/data/products/58/thumbnail.jpg",
          ],
        },
        {
          id: 59,
          title: "Spring and summershoes",
          description: "Comfortable stretch cloth, lightweight body; ,rubber sole, anti-skid wear;",
          price: 20,
          discountPercentage: 8.71,
          rating: 4.33,
          stock: 137,
          brand: "Sneakers",
          category: "mens-shoes",
          thumbnail: "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/59/1.jpg",
            "https://i.dummyjson.com/data/products/59/2.jpg",
            "https://i.dummyjson.com/data/products/59/3.jpg",
            "https://i.dummyjson.com/data/products/59/4.jpg",
            "https://i.dummyjson.com/data/products/59/thumbnail.jpg",
          ],
        },
        {
          id: 60,
          title: "Stylish Casual Jeans Shoes",
          description: "High Quality ,Stylish design ,Comfortable wear ,FAshion ,Durable",
          price: 58,
          discountPercentage: 7.55,
          rating: 4.55,
          stock: 129,
          brand: "Sneakers",
          category: "mens-shoes",
          thumbnail: "https://i.dummyjson.com/data/products/60/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/60/1.jpg",
            "https://i.dummyjson.com/data/products/60/2.jpg",
            "https://i.dummyjson.com/data/products/60/3.jpg",
            "https://i.dummyjson.com/data/products/60/thumbnail.jpg",
          ],
        },
        {
          id: 51,
          title: "half sleeves T shirts",
          description:
            "Many store is creating new designs and trend every month and every year. Daraz.pk have a beautiful range of men fashion brands",
          price: 23,
          discountPercentage: 12.76,
          rating: 4.26,
          stock: 132,
          brand: "Vintage Apparel",
          category: "mens-shirts",
          thumbnail: "https://i.dummyjson.com/data/products/51/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/51/1.png",
            "https://i.dummyjson.com/data/products/51/2.jpg",
            "https://i.dummyjson.com/data/products/51/3.jpg",
            "https://i.dummyjson.com/data/products/51/thumbnail.jpg",
          ],
        },
        {
          id: 52,
          title: "FREE FIRE T Shirt",
          description:
            "quality and professional print - It doesn't just look high quality, it is high quality.",
          price: 10,
          discountPercentage: 14.72,
          rating: 4.52,
          stock: 128,
          brand: "FREE FIRE",
          category: "mens-shirts",
          thumbnail: "https://i.dummyjson.com/data/products/52/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/52/1.png",
            "https://i.dummyjson.com/data/products/52/2.png",
            "https://i.dummyjson.com/data/products/52/3.jpg",
            "https://i.dummyjson.com/data/products/52/4.jpg",
            "https://i.dummyjson.com/data/products/52/thumbnail.jpg",
          ],
        },
        {
          id: 53,
          title: "printed high quality T shirts",
          description: "Brand: vintage Apparel ,Export quality",
          price: 35,
          discountPercentage: 7.54,
          rating: 4.89,
          stock: 6,
          brand: "Vintage Apparel",
          category: "mens-shirts",
          thumbnail: "https://i.dummyjson.com/data/products/53/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/53/1.webp",
            "https://i.dummyjson.com/data/products/53/2.jpg",
            "https://i.dummyjson.com/data/products/53/3.jpg",
            "https://i.dummyjson.com/data/products/53/4.jpg",
            "https://i.dummyjson.com/data/products/53/thumbnail.jpg",
          ],
        },
        {
          id: 54,
          title: "Pubg Printed Graphic T-Shirt",
          description:
            "Product Description Features: 100% Ultra soft Polyester Jersey. Vibrant & colorful printing on front. Feels soft as cotton without ever cracking",
          price: 46,
          discountPercentage: 16.44,
          rating: 4.62,
          stock: 136,
          brand: "The Warehouse",
          category: "mens-shirts",
          thumbnail: "https://i.dummyjson.com/data/products/54/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/54/1.jpg",
            "https://i.dummyjson.com/data/products/54/2.jpg",
            "https://i.dummyjson.com/data/products/54/3.jpg",
            "https://i.dummyjson.com/data/products/54/4.jpg",
            "https://i.dummyjson.com/data/products/54/thumbnail.jpg",
          ],
        },
        {
          id: 55,
          title: "Money Heist Printed Summer T Shirts",
          description: "Fabric Jercy, Size: M & L Wear Stylish Dual Stiched",
          price: 66,
          discountPercentage: 15.97,
          rating: 4.9,
          stock: 122,
          brand: "The Warehouse",
          category: "mens-shirts",
          thumbnail: "https://i.dummyjson.com/data/products/55/thumbnail.jpg",
          images: [
            "https://i.dummyjson.com/data/products/55/1.jpg",
            "https://i.dummyjson.com/data/products/55/2.webp",
            "https://i.dummyjson.com/data/products/55/3.jpg",
            "https://i.dummyjson.com/data/products/55/4.jpg",
            "https://i.dummyjson.com/data/products/55/thumbnail.jpg",
          ],
        },
      ],
      total: 5,
      skip: 0,
      limit: 5,
    };

    return products;
  };
  // useEffect(() => {
  //   getProducts();
  // }, []);

  const { status, data, error, isFetching, isLoading, refetch } = useQuery("Products", getProducts, {
    enabled: true, //agr false karty hai to 1st time func khud nai chaly ga
  });
  const [filter, setFilter] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleFilter = () => {
    filter ? setFilter(false) : setFilter(true);
  };

  const filterChange = (e) => {
    const { value, checked } = e.target;
    let arr = [];
    arr = categories;
    if (checked) {
      arr.push(value);
      setCategories(arr);
    } else {
      arr.pop(value);
      setCategories(arr);
    }
    refetch();
    console.log("cats", categories);
  };
  return (
    <>
      <div>
        <button
          id='dropdownBgHoverButton'
          data-dropdown-toggle='dropdownBgHover'
          className='text-white mb-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          type='button'
          onClick={() => handleFilter()}
        >
          Filter
          <svg
            className='ml-2 w-4 h-4'
            aria-hidden='true'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
          </svg>
        </button>
        {/* Dropdown menu */}
        <div
          id='dropdownBgHover'
          className={`${filter ? "" : "hidden"} z-10 w-48 bg-white rounded shadow dark:bg-gray-700`}
        >
          <ul
            className='p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200'
            aria-labelledby='dropdownBgHoverButton'
          >
            <li>
              <div className='flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                <input
                  id='checkbox-item-4'
                  type='checkbox'
                  defaultValue='mens-watches'
                  onChange={(e) => filterChange(e)}
                  className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                />
                <label
                  htmlFor='checkbox-item-4'
                  className='ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300'
                >
                  Watches
                </label>
              </div>
            </li>
            <li>
              <div className='flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                <input
                  id='checkbox-item-5'
                  type='checkbox'
                  defaultValue='mens-shoes'
                  onChange={(e) => filterChange(e)}
                  className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                />
                <label
                  htmlFor='checkbox-item-5'
                  className='ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300'
                >
                  Shoes
                </label>
              </div>
            </li>
            <li>
              <div className='flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                <input
                  id='checkbox-item-6'
                  type='checkbox'
                  defaultValue='mens-shirts'
                  onChange={(e) => filterChange(e)}
                  className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                />
                <label
                  htmlFor='checkbox-item-6'
                  className='ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300'
                >
                  Shirts
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {isLoading || isFetching ? (
          <p>Loading...</p>
        ) : (
          data?.products.map((product) => {
            return categories.includes(product.category) || categories.length === 0 ? (
              <div
                key={product.id}
                className='w-full shadow bg-white rounded-lg dark:bg-gray-800 dark:border-gray-700'
              >
                <img className='p-8 rounded-t-lg' src={product.images[0]} alt='product image' />
                <div className='px-5 pb-5'>
                  <a href='#'>
                    <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                      {product.title}
                    </h5>
                  </a>
                  <div className='flex items-center mt-2.5 mb-5'>
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 text-yellow-300'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>First star</title>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 text-yellow-300'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>Second star</title>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 text-yellow-300'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>Third star</title>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 text-yellow-300'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>Fourth star</title>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                    <svg
                      aria-hidden='true'
                      className='w-5 h-5 text-yellow-300'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <title>Fifth star</title>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                    <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                      5.0
                    </span>
                  </div>
                  <div className='flex items-center justify-between'>
                    <span className='text-3xl font-bold text-gray-900 dark:text-white'>
                      $ {product.price}
                    </span>
                    <button
                      onClick={() => dispatch(cartSlice.actions.addToCart(product))}
                      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            );
          })
        )}
      </div>
    </>
  );
};

export default SummerCollection;
