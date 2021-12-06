import React from "react";
import { Character, CharacterDetailsEnum } from '../types/index'

type Props = {
  characters: Character[] | undefined
}

const CardDetails: React.FC<Props> = ({ characters }) => {
  return (
    <>
    {characters?.map(character =>
      <div className="card" key={character?.id}>
      <div className="card-desc">
        <div className="card-frente">
          <img src={character?.image} alt="" />
        </div>
        <div className="card-back">
          <h2>{character?.name}</h2>
          <ul>
            <li>
              <strong>{CharacterDetailsEnum.NAME}</strong>{character?.name}
            </li>
            <li>
              <strong>{CharacterDetailsEnum.GENDER}</strong>{character?.species}
            </li>
            <li>
              <strong>{CharacterDetailsEnum.SPECIES}</strong>{character?.location.name}
            </li>
            <li>
              <strong>{CharacterDetailsEnum.STATUS}</strong>{character?.status}
            </li>
            <li>
              <strong>{CharacterDetailsEnum.PLANET}</strong>{character?.origin.name}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )}
    </>
    
  );
}

export default CardDetails