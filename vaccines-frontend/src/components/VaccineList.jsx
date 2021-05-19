import React, { useState, useEffect } from "react";
import Vaccine from "./Vaccine";
import vaccineService from "../services/vaccine";

const VaccineList = () => {
  const [vaccines, setVaccines] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [areaFilter, setAreaFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const initialVaccines = await vaccineService.getAll();
      setVaccines(initialVaccines);
    };
    fetchData();
  }, []);

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value);
  };
  const handleAreaFilterChange = (event) => {
    setAreaFilter(event.target.value);
  };
  const handleTypeFilterChange = (event) => {
    setTypeFilter(event.target.value);
  };

  return (
    <div>
      <h1>Filter</h1>
      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <div>
          By Name{" "}
          <input onChange={handleNameFilterChange} placeholder="Jukka..." />
        </div>
        <div>
          By Area{" "}
          <input onChange={handleAreaFilterChange} placeholder="HYKS..." />
        </div>
        <div>
          By Vaccine Type{" "}
          <input onChange={handleTypeFilterChange} placeholder="Antiqua..." />
        </div>
      </div>
      <div>
        {vaccines
          .sort((max, min) => max.orderNumber - min.orderNumber)
          .filter((vaccine) =>
            vaccine.responsiblePerson
              .toLowerCase()
              .includes(nameFilter.toLowerCase())
          )
          .filter((vaccine) =>
            vaccine.healthCareDistrict
              .toLowerCase()
              .includes(areaFilter.toLowerCase())
          )
          .filter((vaccine) =>
            vaccine.vaccine.toLowerCase().includes(typeFilter.toLowerCase())
          )
          .map((vaccine) => (
            <Vaccine key={vaccine.id} vaccine={vaccine} />
          ))}
      </div>
    </div>
  );
};

export default VaccineList;
