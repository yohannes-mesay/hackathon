import React from "react";
import { NavigationArrow,Link } from "phosphor-react";

const Explore = () => {
  return (
    <div className="flex flex-row w-max-content">
      <p className="exploreButton">Explore</p>
      <NavigationArrow size={18} className="transform rotate-90 translate-y-1 exploreButton"/>
    </div>
  );
};

export default Explore; 
