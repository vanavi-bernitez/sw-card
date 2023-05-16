import React, { useState } from "react";
import { getCharacter } from "./helpers/getCharacter";
import male from "./images/men.png";
import female from "./images/women.png";
import na from "./images/na.png";

const avatarSource = {
  male,
  female,
  na,
};

let sourceImage;

const CharacterCard = () => {
  const [data, setData] = useState({});

  const fillCharacterCard = async () => {
    const id = Math.floor(Math.random() * 86) + 1;
    const characterData = await getCharacter(id);
    setData(characterData);
  };

  const handleClick = () => {
    fillCharacterCard();
    if (data.gender === "male") {
      sourceImage = avatarSource.male;
    } else if (data.gender === "female") {
      sourceImage = avatarSource.female;
    } else {
      sourceImage = avatarSource.na;
    }
  };

  return (
    <div className="characterCard">
      <div className="generalInfo">
        <h2>{data.name}</h2>
        <div className="avatarContainer">
          <img src={sourceImage} alt="Star wars avatar" />
        </div>
      </div>
      <div className="specificInfo">
        <div className="left">
          <p>{data.height}</p>
          <p>{data.hairColor}</p>
          <p>{data.skinColor}</p>
        </div>
        <div className="right">
          <p>{data.eyeColor}</p>
          <p>{data.birthYear}</p>
          <p>{data.gender}</p>
        </div>
      </div>

      <button onClick={handleClick}>Next character</button>
    </div>
  );
};

export default CharacterCard;
