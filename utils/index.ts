export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "1fe536ac92msh87ebccc10028af0p18e3e3jsna6f77b9a4e7b",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );

  const result = await response.json();

  return result;
}
