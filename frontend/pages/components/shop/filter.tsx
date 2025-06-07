import React from "react";
import { useState, useEffect } from "react";
import "rc-slider/assets/index.css";
import Slider from 'rc-slider'


export default function filter() {
    const [values, setValues] = useState<[number, number]>([1, 25])

  return (
    <>
      <div className="w-4/5 ml-auto p-8 align-left">
        <h1>Filter Component</h1>

        <form>
          <label htmlFor="">Browse By:</label>
          <ul>
            <li>All Prodcut</li>
            <li>Bracelets</li>
            <li>Others</li>
          </ul>

          <label htmlFor="">Price Range:</label>

          <div className="relative">
            <Slider
              range
              min={1}
              max={25}
              step={1}
              pushable={1} 
              allowCross={false} // prevents thumbs from swapping
              value={values}
              onChange={(v) => setValues(v as [number, number])}
              
              
              trackStyle={[{ backgroundColor: "#000" }]}
              handleStyle={[{ borderColor: "#000" }, { borderColor: "#000" }]}
            />
            <div className="mt-2 text-sm">
              Price: ${values[0]} – ${values[1]}
            </div>
            <div className="flex justify-between mt2">
              {/* <span className="text-sm">{range[0]}</span>
              <span className="text-sm">{range[1]}</span> */}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
