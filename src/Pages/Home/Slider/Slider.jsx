import { useState } from "react";

const Slider = () => {
    const images = [
        'https://umino-demo.myshopify.com/cdn/shop/files/h1-slide-show-3.jpg?v=1679891172&width=2000',
        'https://umino-demo.myshopify.com/cdn/shop/files/h1-slide-show-1_1_1.jpg?v=1690341642&width=2000',
        'https://umino-demo.myshopify.com/cdn/shop/files/h1-slide-show-2.jpg?v=1679891172&width=2000',
        'https://umino-demo.myshopify.com/cdn/shop/files/women-banner.jpg?v=1679891172&width=535',
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };
    return (
        <div className="relative">
            <div className="w-full h-64 md:h-96 bg-cover bg-center">
              <div className="">
              <h2>again this state</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, temporibus?</p>
                <button>Explore Now. !</button>
              </div>
                <img
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="w-full h-full opacity-75"
                />
            </div>
            <div className="absolute top-1/2 left-0 w-full text-center">
                <button
                    className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none absolute left-2"
                    onClick={prevSlide}
                >
                    &lt;
                </button>
                <button
                    className="bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none absolute right-2"
                    onClick={nextSlide}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Slider;