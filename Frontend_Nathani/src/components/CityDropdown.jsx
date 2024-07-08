import React, { useEffect, useState } from "react";
import AllCities from "../constant/config.json";

function CityDropdown({ state,onChange,value,name }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cities = AllCities[state];
    setCities(cities);
  }, [state]);
  
  return (
    <select
      class="form-control"
      name={name}
      value={value}
        onChange={onChange}
    >
      <option value="">--select--</option>
      {cities?.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </select>
  );
}

export default CityDropdown;
