export const getAllPokemon = (url: RequestInfo | URL) => {
  return new Promise((resoleve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => resoleve(data));
  });
};
