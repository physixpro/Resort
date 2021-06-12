import React from "react";
import "./explore.css";
import fish from "../images/fish.jpg"

const Explore = () => {
  return (
    <div className="explore-container">
      <div id="box-1">
        Enjoy Cross Cultural Cuisine From Every Continent, Here at Escondida We
        Cater To You.
      </div>
      <div id="box-2">
        <img
          id="box-2-img"
          src="https://sharp-wescoff-20e282.netlify.app/static/media/second.22f56107.jpg"
          alt=""
        />
      </div>
      <div id="box-3">
        World Class Yoga and Pilates Instruction Taught By Jessica Chen, Awarded
        America's Most Popular personal trainer of the year - "Sports Rush
        Magazine, 2020"
      </div>
      <div id="box-4">
        <img
          id="box-4-img"
          src="https://sharp-wescoff-20e282.netlify.app/static/media/comfort.7e671fc7.jpg"
          alt=""
        />
      </div>
      <div id="box-5">
        <img id="box-5-img"
          src={fish}
          alt=""
        />
      </div>
    </div>
  );
};
export default Explore;
