import http from "./API";

async function fetchDailyDate() {
  try {
    const { data } = await http.get("/daily");
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchDailyDate;
