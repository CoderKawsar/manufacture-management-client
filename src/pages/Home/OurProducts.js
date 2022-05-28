import React from "react";
import pdImg from "../../img/banner/3459435.jpg";

const OurProducts = () => {
  return (
    <div className="flex items-center mt-24 w-11/12 mx-auto">
      <div>
        <img src={pdImg} className="rounded" alt="" />
      </div>
      <div className="pl-12">
        <h3 className="text-5xl font-bold mb-8">Our Tools</h3>
        <p className="text-justify">
          With over 250 tools, Shopio is the choice of demanding automotive and
          industrial tool users worldwide. Take a look at these innovative
          products in our latest downloadable catalogs.
        </p>
      </div>
    </div>
  );
};

export default OurProducts;
