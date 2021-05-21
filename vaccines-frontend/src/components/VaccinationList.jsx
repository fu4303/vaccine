import React, { useState } from "react";
import Vaccination from "./Vaccination";
import Switch from "@material-ui/core/Switch";

const VaccinationList = ({ vaccinations, vaccines }) => {
  const [idFilter, setIdFilter] = useState("");
  const [bottleFilter, setBottleFilter] = useState("");
  const [sortByDate, setSortByDate] = useState(false);
  const [sortByGender, setSortByGender] = useState(false);

  const handleIdFilterChange = (event) => {
    setIdFilter(event.target.value);
  };
  const handleBottleFilterChange = (event) => {
    setBottleFilter(event.target.value);
  };

  return (
    <div>
      <h2>Sort</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        By Date: <Switch onChange={() => setSortByDate(!sortByDate)} />
        By Gender: <Switch onChange={() => setSortByGender(!sortByGender)} />
      </div>

      <h2>Filter</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <div>
          By Vaccination Id{" "}
          <input
            onChange={handleIdFilterChange}
            placeholder="6ae207d9-6fa9-4b62..."
          />
        </div>

        <div>
          By Bottle Source{" "}
          <input
            onChange={handleBottleFilterChange}
            placeholder="75ae9638-3ad5-4433..."
          />
        </div>
      </div>

      <div>
        {vaccinations
          .sort((max, min) =>
            sortByDate
              ? new Date(max.vaccinationDate).getTime() -
                new Date(min.vaccinationDate).getTime()
              : max.vaccinationDate - min.vaccinationDate
          )
          .sort((a, b) => sortByGender && (a.gender > b.gender ? 1 : -1))
          .filter((vaccine) => vaccine["vaccination-id"].includes(idFilter))
          .filter((vaccine) => vaccine.sourceBottle.includes(bottleFilter))
          .map((vaccination) => (
            <Vaccination
              key={vaccination["vaccination-id"]}
              vaccination={vaccination}
              vaccines={vaccines}
            />
          ))}
      </div>
    </div>
  );
};

export default VaccinationList;
