import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoginTab from './LoginTab';
import ItemCard from './ItemCard';


function SingleItem() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        // Exclude the current product
        const related = data.filter(product => product.id !== parseInt(id));
        // Limit the number of related products to display
        const limitedRelated = related.slice(0, 10);
        setRelatedProducts(limitedRelated);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <LoginTab/>
      <h1 className="text-[#2B9770] text-3xl font-ubuntu font-bold mb-1">Details</h1>
      <h2 className="text-l font-ubuntu mt-2 mb-6">Learn more about your purchases</h2>
      <div className="border-b-2 border-[#2B9770] mb-8 "></div>
      <div className="flex mr-40 ml-40 mt-20 mb-20 justify-items-center">
        <div className="">
          <img src={product.image} alt={product.title} className="w-full h-[500px] object-contain"/>
        </div>
        <div className="w-1/2 pl-8 ml-20">
          <h3 className="text-xl font-ubuntu mb-0">{product.title}</h3>
          <p className="text-[#3C9B78] text-sm font-light mb-20">Seller Account Name</p>
          <p className="text-[#11875C] text-2xl font-bold mb-4">Rating: {product.rating.rate}</p>
          <div className="description-wrapper w-96">
            <p className="text-sm font-light mb-4">Description: {product.description}</p>
          </div>
          <p className="text-xl font-bold mb-1">Price: ${product.price}</p>
          <p className="text-sm font-light mb-14">Post date: DD/MM/YY</p>
          <button className="bg-[#A4D9C6] hover:bg-[#3C9B78] text-black font-bold py-4 px-24 rounded">Order Now</button>
        </div>
      </div>
      <div className="border-b-2 border-[#2B9770] mt-8  mb-8"></div>
      {/* Related Section */}
      <div className="mt-20 ">
        <h2 className="text-[#2B9770] text-3xl font-ubuntu font-bold mb-1">Related</h2>
        <h3 className="text-l font-ubuntu mb-4">Based on what you clicked</h3>
        <div className="flex flex-wrap justify-center">
          {relatedProducts.map((product) => (
            <ItemCard
              key={product.id}
              imgSrc={product.image}
              itemName={product.title}
              itemRating={product.rating.rate.toString()}
              itemPrice={`$${product.price}`}
              itemOwner="Owner name"
              itemId={product.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleItem;