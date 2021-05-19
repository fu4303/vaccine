import React, { useState, useEffect } from "react";
import Vaccine from "./Vaccine";
import vaccineService from "./services/vaccine";

const App = () => {
  const [vaccines, setVaccines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const initialVaccines = await vaccineService.getAll();
      setVaccines(initialVaccines);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {vaccines.map((vaccine) => (
          <Vaccine key={vaccine.id} vaccine={vaccine} />
        ))}
      </div>
    </div>
  );
};

export default App;
