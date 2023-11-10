import React from "react"

type TileProps = {
  type: "grass" | "water" | "rock" | "house"
  onClick: () => void
}

const tileBackground = {
  grass: 'bg-green-200',
  water: 'bg-blue-300',
  rock: 'bg-gray-400',
  house: 'bg-yellow-500',
};

const Tile: React.FC<TileProps> = ({ type, onClick }) => {
  return (
    <div
      className={`h-10 w-100 ${tileBackground[type]} border border-gray-200 cursor-pointer`} onClick={onClick}>
    </div>
  );
};


export default Tile
