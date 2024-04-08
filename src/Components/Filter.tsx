import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Styles from "./filter.module.scss";

const Filter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("location", location);
  const [colors, setColors] = useState<string[]>(
    searchParams.getAll("color") || []
  );

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = e.target.value;
    setColors((prevColors) => {
      if (prevColors.includes(selectedColor)) {
        return prevColors.filter((color) => color !== selectedColor);
      } else {
        return [...prevColors, selectedColor];
      }
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("color");
    colors.forEach((color) => params.append("color", color));
    setSearchParams(params);
  }, [colors, setSearchParams]);

  return (
    <div>
      <div>
        <h3>Filters</h3>
        <div style={{ color: "orangered" }}>Choose your color</div>
        <div data-testid="filter-category" className={Styles.filter}>
          <div className={Styles.filterBodyTextTwo}>
            <label>
              <input
                type="checkbox"
                value="blue"
                onChange={handleColorChange}
                checked={colors.includes("blue")}
              />
              Blue
            </label>
          </div>

          <label>
            <div className={Styles.filterBodyTextTwo}>
              <input
                type="checkbox"
                value="red"
                onChange={handleColorChange}
                checked={colors.includes("red")}
              />
              Red
            </div>
          </label>
          <label>
            <div className={Styles.filterBodyTextTwo}>
              <input
                type="checkbox"
                value="black"
                onChange={handleColorChange}
                checked={colors.includes("black")}
              />
              Black
            </div>
          </label>
          <label>
            <div className={Styles.filterBodyTextTwo}>
              <input
                type="checkbox"
                value="yellow"
                onChange={handleColorChange}
                checked={colors.includes("yellow")}
              />
              Yellow
            </div>
          </label>
        </div>
      </div>
      <div className={Styles.boleft}></div>
    </div>
  );
};

export default Filter;
