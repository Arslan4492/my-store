import { Link, useLocation } from "react-router-dom";
import { navbarData } from "./data";

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <div className='flex justify-center'>
      <nav className='self-center w-full max-w-7xl  '>
        <div className='flex flex-col lg:flex-row justify-around items-center border-b-2'>
          <h1 className='uppercase pl-5 py-4 text-xl font-sans font-bold'>fashionhub</h1>
          <ul className='hidden lg:flex items-center text-[18px] font-semibold pl-32'>
            {navbarData.map((item) => (
              <li
                key={item.id}
                className={`underline-offset-4 decoration-2 decoration-black py-2 rounded-lg px-5 hover:underline ${
                  item.pathName === pathname ? "underline" : "no-underline"
                }`}
              >
                <Link to={item.pathName}>{item.title}</Link>
              </li>
            ))}
          </ul>
          <div className=' text-center text-base pr-5 inline-flex'>
            <Link
              className='w-8 h-8 inline-block rounded-full pt-2 hover:text-blue-500 hover:cursor-pointer'
              to='/cart'
            >
              <i className='fa fa-lg fa-shopping-cart '></i>
            </Link>

            <div className=' text-center text-base pr-5 inline-flex'>
              <span className='w-8 h-8 inline-block rounded-full pt-2 hover:text-blue-500 hover:cursor-pointer'>
                <a
                  href='https://twitter.com/bitsoltech?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
                  target='_blank'
                >
                  <i className='fa fa-twitter'></i>
                </a>
              </span>
              <span className='w-8 h-8 inline-block rounded-full pt-2 hover:text-blue-500 hover:cursor-pointer'>
                <a href='https://www.instagram.com/bitsoltechnologies/' target='_blank'>
                  <i className='fa fa-instagram'></i>
                </a>
              </span>
              <span className='w-8 h-8 inline-block rounded-full pt-2 hover:text-blue-500 hover:cursor-pointer'>
                <a href='https://web.facebook.com/bitsoltechnologies/?_rdc=1&_rdr' target='_blank'>
                  <i className='fa fa-facebook'></i>
                </a>
              </span>
              <span className='w-8 h-8 inline-block rounded-full pt-2 hover:text-blue-500 hover:cursor-pointer'>
                <a href='https://bitsol.tech/' target='_blank'>
                  <i className='fa fa-google'></i>
                </a>
              </span>
              <span className='w-8 h-8 inline-block rounded-full pt-2 hover:text-blue-500 hover:cursor-pointer'>
                <a href='https://www.linkedin.com/company/bitsoltech/?originalSubdomain=pk' target='_blank'>
                  {" "}
                  <i className='fa fa-linkedin'></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

// <nav className=' border-gray-200 px-2 sm:px-4 rounded dark:bg-gray-900'>
//   <div className='container flex flex-wrap items-center justify-between mx-auto'>
//     <Link to='/' className='flex items-center'>
//       <img src='../cart.png' className='h-8 mr-3 sm:h-9' alt='_Logo' style={{ width: 80, height: 80 }} />
//       <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
//         My Store
//       </span>
//     </Link>
//     <div className='flex md:order-2'>
//       <button
//         data-collapse-toggle='navbar-cta'
//         type='button'
//         className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
//         aria-controls='navbar-cta'
//         aria-expanded='false'
//       >
//         <span className='sr-only'>Open main menu</span>
//         <svg
//           className='w-6 h-6'
//           aria-hidden='true'
//           fill='currentColor'
//           viewBox='0 0 20 20'
//           xmlns='http://www.w3.org/2000/svg'
//         >
//           <path
//             fillRule='evenodd'
//             d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
//             clipRule='evenodd'
//           ></path>
//         </svg>
//       </button>
//     </div>
//     <div
//       className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
//       id='navbar-cta'
//     >
//       <ul className='flex flex-col p-4 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  -800  '>
//         <li>
//           <Link
//             to='/'
//             className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white'
//             aria-current='page'
//           >
//             Dashboard
//           </Link>
//         </li>
//         <li>
//           <Link
//             to='/men-collections'
//             className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
//           >
//             Men
//           </Link>
//         </li>
//         <li>
//           <Link
//             to='/women-collections'
//             className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
//           >
//             Women
//           </Link>
//         </li>
//         <li>
//           <Link
//             to='/children-collections'
//             className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
//           >
//             Children
//           </Link>
//         </li>
//         <li>
//           <Link
//             to='/winter-Collections'
//             className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
//           >
//             Winter Collections
//           </Link>
//         </li>
//         <li>
//           <Link
//             to='/summer-Collections'
//             className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
//           >
//             Summer Collections
//           </Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
