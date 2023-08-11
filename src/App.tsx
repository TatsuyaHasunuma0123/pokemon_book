import { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "./assets/utils/pokemon";
import "./App.css";
import Card from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<unknown[]>([]);
  const [prevURL, setPrevURL] = useState("");
  const [nextURL, setNextURL] = useState("");

  useEffect(() => {
    const fetchPokemonData = async (): Promise<void> => {
      //全てのポケモンデータを取得
      const res: any = await getAllPokemon(initialURL);
      //各ポケモンの詳細なデータを取得
      laodPokemon(res.results);
      setPrevURL(res.previous);
      setNextURL(res.next);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const laodPokemon = async (data: any[]): Promise<void> => {
    const _pokemonData: any = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const handlePrevPage = async (): Promise<void> => {
    if (!prevURL) return;

    setLoading(true);
    let data: any = await getAllPokemon(prevURL);
    laodPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const handleNextPage = async (): Promise<void> => {
    setLoading(true);
    let data: any = await getAllPokemon(nextURL);
    laodPokemon(data.results);
    setPrevURL(data.previous);
    setNextURL(data.next);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <h1>ロード中...</h1>
      ) : (
        <>
          <Navbar />
          <div className="pokemonCardContainer">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </div>
          <div className="btn">
            <button onClick={handlePrevPage}>前へ</button>
            <button onClick={handleNextPage}>次へ</button>
          </div>
        </>
      )}
    </>
  );
}

export default App;
