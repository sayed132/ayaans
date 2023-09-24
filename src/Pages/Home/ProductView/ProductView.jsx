import React from 'react';

const ProductView = () => {
  const data = [
    {
      id: 1,
      img:
        'https://umino-demo.myshopify.com/cdn/shop/files/women-banner.jpg?v=1679891172&width=535',
      productName: 'Womans Freedom',
      price: 20,
    },
    {
      id: 2,
      img:
        'https://umino-demo.myshopify.com/cdn/shop/files/accesserious.png?v=1679891172&width=535',
      productName: 'Womans Freedom',
      price: 20,
    },
    {
      id: 3,
      img:
        'https://umino-demo.myshopify.com/cdn/shop/files/cls5_f1.jpg?v=1679891172&width=535',
      productName: 'Womans Freedom',
      price: 20,
    },
    {
      id: 4,
      img:
        'https://umino-demo.myshopify.com/cdn/shop/files/bag.png?v=1679891172&width=535',
      productName: 'Womans Freedom',
      price: 20,
    },
    {
      id: 5,
      img:
        'https://umino-demo.myshopify.com/cdn/shop/files/cls2_f1.jpg?v=1679891172&width=750',
      productName: 'Womans Freedom',
      price: 20,
    },
    // Add more data rows here
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {data.map((product) => (
        <div
          key={product.id}
          className="relative overflow-hidden bg-white border rounded-lg shadow-md "
        >
          <img
            src={product.img}
            alt={product.productName}
            className="w-full h-80 object-cover transition-transform hover:scale-110"
          />
          <div className="absolute inset-x-0 bottom-0 p-4  bg-opacity-75 text-white">
            {/* <div className="text-lg font-semibold">{product.productName}</div>
            <div className="text-gray-300">${product.price}</div> */}
            
            <div className='flex items-center justify-evenly'>
            <button className="bg-sky-400 text-white px-1 py-2 mt-2 rounded-md hover:bg-sky-500">
            {product.productName}
            </button>

            <button className="bg-sky-400 text-white px-2 py-2 mt-2 rounded-md hover:bg-sky-500
            ">
            ${product.price}
            </button>

            <button className="bg-sky-400 text-white px-4 py-2 mt-2 rounded-md hover:bg-sky-500  transition-transform hover:scale-105">
              Buy Now
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductView;
