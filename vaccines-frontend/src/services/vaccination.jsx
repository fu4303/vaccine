import axios from "axios";
const baseUrl = "http://localhost:8000/api/vaccinations";
// const baseUrl = "https://polar-basin-63646.herokuapp.com/api/vaccinations"; - API on Heroku

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const exportedObject = {
  getAll,
};

export default exportedObject;
