import React, { useState, useEffect } from "react";
import { useGetProductColorsQuery } from "../../source/api/ProductsApi";

export const ColorNames = (colorId) => {
  const { data, isSuccess } = useGetProductColorsQuery();
  const [colorName, setColorName] = useState("no color");
  // console.log(data);
  useEffect(() => {
    if (isSuccess) {
      // Filter the Specific Color by its ID(which is the colorId)
      let myColorDisplay = data.filter((color) => color.id == colorId);
      // Mapping the filtered Color to get its name
      myColorDisplay.map((finalColor) => setColorName(finalColor.color));
    }
    // This useEffect functions always run when the data or colorName is updated
  }, [data, colorName]);

  return colorName;
};

const ColorSnippet = ({ color }) => {
  return <>{ColorNames(color)}</>;
};

export default ColorSnippet;
