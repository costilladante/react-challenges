import React, { useEffect, useState } from 'react';
import './HexColors.css';

const optionsCount = 3;

const hexValues = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];

const generateHexCode = () => {
  let hexCode = '#';
  for (let i = 0; i < 6; i++) {
    const hexIndex = Math.floor(Math.random() * 16);
    hexCode += hexValues[hexIndex];
  }
  return hexCode;
};

const generateColors = () => {
  let options = [{ hexCode: generateHexCode(), isCorrect: true }];
  for (let i = 0; i < optionsCount - 1; i++) {
    const newOption = {
      hexCode: generateHexCode(),
      isCorrect: false,
    };

    if (Math.round(Math.random()) === 0) {
      // Add as first
      options.unshift(newOption);
    } else {
      // Add as last
      options.push(newOption);
    }
  }
  return options;
};

const onColorBoxClick = (hexCode, isCorrect) => {
  console.log(
    `You selected ${hexCode} and it's ${isCorrect ? 'correct!' : 'incorrect'}`
  );
};

export const HexColors = () => {
  const [colors, setColors] = useState(generateColors());

  const correctColor = colors.find((c) => {
    return c.isCorrect;
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Color Codes</h1>
      {/* Randomly generate the HEX below. */}
      <h2>{correctColor.hexCode}</h2>
      <h2>What color is this?</h2>
      <div
        data-testid='color-container'
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        {colors.map((color) => (
          <div
            data-testid={color.isCorrect ? 'correct-color' : 'incorrect-color'}
            onClick={() => onColorBoxClick(color.hexCode, color.isCorrect)}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: color.hexCode,
            }}
          />
        ))}
        {/*
        <div data-testid="color-container">
          <div data-testid="incorrect-color"></div>
          <div data-testid="correct-color"></div>
        </div>
      */}
      </div>
    </div>
  );
};
