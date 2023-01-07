const AppCard = ({ item, handleAddToCart }) => {
  return (
    <div
      key={item.id}
      className='group relative flex flex-col overflow-hidden rounded border border-gray-200 bg-white'
    >
      <div className='aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-60'>
        <img src={item.imageSrc} alt='_alt' className='h-full w-full object-contain object-center' />
      </div>
      <div className='flex flex-1 flex-col space-y-2 p-4'>
        <h3 className='text-sm font-medium text-gray-900'>
          <p href={item.name}>
            <span aria-hidden='true' className='absolute inset-0' />
            {item.name}
          </p>
        </h3>
        <p className='text-sm text-gray-500'>color: {item.color}</p>
        <div className='flex flex-1 flex-col justify-end'>
          <p className='text-sm italic text-gray-500'>size: {item.size}</p>
          <p className='text-base font-medium text-gray-900'>Rs.{item.price}</p>
        </div>
        <div className='w-full float-right'>
          <button
            class='bg-blue-500 hover:bg-blue-300 w-32 text-white font-bold py-1 float-right rounded'
            onClick={(item) => handleAddToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
