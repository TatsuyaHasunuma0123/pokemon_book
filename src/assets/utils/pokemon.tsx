export const getAllPokemon = (url: RequestInfo | URL) => {
  return new Promise((resoleve) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resoleve(data));
  });
};

export const getPokemon = (url: RequestInfo | URL) => {
  return new Promise((resolve) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
};
