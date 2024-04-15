import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function ItemCard({ itemId, imgSrc, itemName, itemRating, itemPrice, itemOwner }) {
  return (
    <div className="p-4 m-8 rounded-xl shadow-xl border border-gray-300 w-64 h-64 overflow-hidden">
      <Link to={`/product/details/${itemId}`}>
      <img src={imgSrc} alt="Product" className="w-full h-24 object-contain rounded-t-xl mb-2" />
      <div className="bg-white rounded-b-xl h-auto">
        <h4 className="text-[#11875C] text-lg font-ubuntu ml-4 mb-2 overflow-ellipsis overflow-hidden whitespace-nowrap">{itemName}</h4>
        <p className="text-[#162721] text-sm font-light ml-4 mb-2">Rating: {itemRating}</p>
        <p className="text-[#162721] text-lg font-bold ml-4">Price: {itemPrice}</p>
        <p className="text-[#162721] text-sm font-light ml-4 mb-2">Owner: {itemOwner}</p>
      </div>
      </Link>
    </div>
  );
}

ItemCard.propTypes = {
  itemId: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemRating: PropTypes.string.isRequired,
  itemPrice: PropTypes.string.isRequired,
  itemOwner: PropTypes.string.isRequired,
};

export default ItemCard;