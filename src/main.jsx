import React from 'react';
import ReactDOM from 'react-dom/client';
import { HexColors } from './challenges/HexColors/HexColors.jsx';
import { SantaList } from './challenges/SantaList/SantaList.jsx';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HexColors /> */}
    <SantaList />
  </React.StrictMode>
);
