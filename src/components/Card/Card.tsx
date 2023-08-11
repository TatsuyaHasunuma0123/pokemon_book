import React from "react";
import "./card.css";

interface CardProps {
  pokemon: any;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <>
      <div className="card">
        <div className="cardImg">
          <img src={props.pokemon.sprites.front_default}></img>
        </div>
        <h3 className="cardName">{props.pokemon.name}</h3>
        <div className="cardTypes">
          <div>タイプ</div>
          {props.pokemon.types.map((type: any) => {
            return (
              <div key={type.type.name}>
                <span className="typeName">{type.type.name}</span>
              </div>
            );
          })}
        </div>
        <div className="cardInfo">
          <div className="cardData">
            <p>重さ:{props.pokemon.weight}</p>
          </div>
          <div className="cardData">
            <p>高さ:{props.pokemon.height}</p>
          </div>
          <div className="cardData">
            <p>アビリティ:{props.pokemon.abilities[0].ability.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
