import http from "./API";

async function fetchCovidReport(url: string | null) {
  const urlString = url ? `/countries/${url}` : "/";
  console.log(urlString);

  try {
    const { data } = await http.get<any>(urlString);

    return data;
  } catch (error) {
    console.log("Error Found");
  }
}

export default fetchCovidReport;
