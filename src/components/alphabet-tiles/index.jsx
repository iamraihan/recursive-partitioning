import { useState } from "react";

const AlphabetTiles = () => {
  const [outputString, setOutputString] = useState("");

  // Letters
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const splitLetterArr = letters.split("");

  // Click handler
  const handleTileClick = (letter) => {
    let newOutputString = outputString + letter;
    newOutputString = newOutputString.replace(/(.)\1{2,}/g, (match) =>
      "_".repeat(match.length)
    );
    setOutputString(newOutputString);
  };

  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4">
        {splitLetterArr.map((letter) => (
          <button
            role="button"
            key={letter}
            className="tile"
            onClick={() => handleTileClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div id="outputString" className="mt-4 p-4 text-lg">
        {outputString}
      </div>
    </div>
  );
};

export default AlphabetTiles;
