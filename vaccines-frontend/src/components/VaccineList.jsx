import React, { useState } from "react";
import Vaccine from "./Vaccine";
import Switch from "@material-ui/core/Switch";

const VaccineList = ({ vaccines }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [areaFilter, setAreaFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortByDate, setSortByDate] = useState(false);
  const [sortByVaccine, setSortByVaccine] = useState(false);
  const [sortByArea, setSortByArea] = useState(false);

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
      <h2>Sort</h2>
      <p>Sorted by order number by default</p>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        By Date: <Switch onChange={() => setSortByDate(!sortByDate)} />
        By Vaccine: <Switch onChange={() => setSortByVaccine(!sortByVaccine)} />
        By Area: <Switch onChange={() => setSortByArea(!sortByArea)} />
      </div>
      <h2>Filter</h2>
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
          .sort((max, min) =>
            sortByDate
              ? new Date(max.arrived).getTime() -
                new Date(min.arrived).getTime()
              : max.orderNumber - min.orderNumber
          )
          .sort((a, b) => sortByVaccine && (a.vaccine > b.vaccine ? 1 : -1))
          .sort(
            (a, b) =>
              sortByArea &&
              (a.healthCareDistrict > b.healthCareDistrict ? 1 : -1)
          )
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
