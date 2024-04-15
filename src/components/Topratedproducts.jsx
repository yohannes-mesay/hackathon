import React, {useEffect, useState} from 'react';
import {FaCaretLeft, FaCaretRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import ItemCard from './ItemCard';

function TopRatedProducts() {
  const [topRatedProducts, setTopRatedProducts] = useState([]);

  const getTopRatedProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setTopRatedProducts(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTopRatedProducts();
  }, []);

  const scrollContainer = (scrollValue) => {
    document.getElementById('scroll-content').scrollLeft += scrollValue;
  };

  return (
    <div className="p-8 ml-60">
      <h1 className="text-2xl text-green-600 font-bold mb-8 mt-8 ml-8">Top
        Rated</h1>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200"
          onClick={() => scrollContainer(-100)}
        >
          <FaCaretLeft/>
        </button>
        <div
          id="scroll-content"
          className="flex overflow-x-hidden space-x-1"
          style={{scrollBehavior: 'smooth'}}
        >
          {topRatedProducts.map((product) => (
            <Link to={`/product/details/${product.id}`} key={product.id}>
              <ItemCard
                imgSrc={product.image}
                itemName={product.title}
                itemRating={product.rating.rate.toString()}
                itemPrice={`$${product.price}`}
                itemOwner="Owner name"
                itemId={product.id}
              />
            </Link>
          ))}
        </div>
        <button
          className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-200"
          onClick={() => scrollContainer(100)}
        >
          <FaCaretRight/>
        </button>
      </div>
    </div>
  );
}

export default TopRatedProducts;