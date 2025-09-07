// src/pages/Products.jsx
import React, { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductRow = ({ category }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current) return;
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });

      if (
        carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
        carouselRef.current.scrollWidth
      ) {
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
      <div className="relative">
        {/* Left button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full z-10 hover:bg-gray-600"
        >
          <FaChevronLeft />
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll space-x-4 scrollbar-hide scroll-smooth"
        >
          {category.items.map((product) => (
            <div
              key={product.id}
              className="flex-none w-48 bg-gray-900 rounded-lg shadow-md"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="p-3 text-center">
                <h3 className="font-semibold">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full z-10 hover:bg-gray-600"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  // Dummy product data
  const categories = [
    {
      id: 1,
      title: "Trending Now",
      items: [
        { id: 1, title: "Movie 1", image: "https://i.pinimg.com/474x/8e/33/ea/8e33eaf4b0c474d6eb307bf3b9db677f.jpg" },
        { id: 2, title: "Movie 2", image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Trending_film_poster.jpg/250px-Trending_film_poster.jpg" },
        { id: 3, title: "Movie 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOYc0l9SN7iHnDHyCI9EC2Zg1540yldTVAIQ&s" },
        { id: 4, title: "Movie 4", image: "https://cpadmin.b4uaflam.com/uploads/news/0_40361300_1721209201.jpg" },
        { id: 5, title: "Movie 5", image: "https://fullyfilmy.in/cdn/shop/files/MOBILE_SLIDER.png?v=1756819765&width=1500" },
        { id: 6, title: "Movie 5", image: "https://st1.bollywoodlife.com/wp-content/uploads/2024/01/Untitled-design-1-42.png?impolicy=Medium_Widthonly&w=400&h=711" },
      ],
    },
    {
      id: 2,
      title: "Top Picks For You",
      items: [
        { id: 7, title: "Series 1", image: "https://images.justwatch.com/poster/249335581/s332/season-1" },
        { id: 8, title: "Series 2", image: "https://images.justwatch.com/poster/253109058/s718/alice-in-borderland.jpg" },
        { id: 9, title: "Series 3", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27866027_b_v7_aa.jpg" },
        { id: 10, title: "Series 4", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202305/Asur-Season-1_1685018145.jpg" },
        { id: 11, title: "Series 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTh04Bj2p_f0uUsU9fFMbpk1kXlXceWx2erQ&s" },
        { id: 12, title: "Series 4", image: "https://m.media-amazon.com/images/S/pv-target-images/488a8072411589c079a6eabbe54852ec185954bc40a7ba4fd81772ca56ca324a.jpg" },
      ],
    },
    {
      id: 3,
      title: "New Releases",
      items: [
        { id: 13, title: "Release 1", image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-09/19/thumb/fitandfill/1200X900/1726748235-0061.png" },
        
        { id: 14, title: "Release 3", image: "https://assets.gadgets360cdn.com/pricee/assets/product/202503/Maa_poster1_1741776552.jpg" },
        { id: 15, title: "Release 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9-ZV4R84uPlxnyrhQBjD0mn2E64nX2E4LQ&s" },
        { id: 16, title: "Release 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQurrotiDi5JGfKpKIUx3KgnjKyVgWInA0K9g&s" },
        { id: 17, title: "Release 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbmOHar7RSNjn3w2EVCi3AqITlt8oREAFug&s" },
        { id: 18, title: "Release 4", image: "https://m.media-amazon.com/images/M/MV5BNzhkMjFhOTItMTczNi00YWM1LTlhZjItOTc4OTA0OWVhZTIzXkEyXkFqcGc@._V1_.jpg" },
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      {categories.map((category) => (
        <ProductRow key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Products;
