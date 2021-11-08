import http from "./API";

async function fetchCountries() {
  try {
    const { data } = await http.get("/countries");
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchCountries;
