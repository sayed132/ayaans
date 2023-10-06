import { Link } from 'react-router-dom';
import data from '../../../../data.json'
const ProductView = () => {
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {data.map((product) => (
        <Link to={`details/${product?.id}`}
          key={product.id}
          className="relative overflow-hidden bg-white border rounded-lg shadow-md "
        >
          <img
            src={product.img}
            alt={product.productName}
            className=" object-cover transition-transform hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 p-4  bg-opacity-75 text-white">
            {/* <div className="text-lg font-semibold">{product.productName}</div>
            <div className="text-gray-300">${product.price}</div> */}

            <div className='flex items-center justify-evenly'>
              {/* <p className="bg-sky-400 text-white px-1 text-sm  mt-2 rounded-md hover:bg-sky-500">
            {product.productName}
            </p>

            <p className="bg-sky-400 text-white px-2  mt-2 rounded-md hover:bg-sky-500
            ">
            ${product.price}
            </p> */}

              <button className="bg-sky-400 text-white px-4 py-2 mt-2 rounded-md hover:bg-sky-500  transition-transform hover:scale-105">
                Buy Now
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductView;
