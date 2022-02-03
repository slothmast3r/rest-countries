export async function fetchAllCountriesRepository() {
  return fetch("https://restcountries.com/v2/all", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  }).then((res) => {
    return res.json();
  });
}

export async function fetchCountryByCode(code: string) {
  return fetch("https://restcountries.com/v2/alpha/" + code, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  }).then((res) => {
    return res.json();
  });
}
