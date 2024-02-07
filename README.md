# 👓 Javascript & React Challenges

Just for personal training. A collection of Javascript and React challenges, most of them taken from [reacterry ❤️](https://www.reacterry.com/portal/challenges).

<p align='center'>
<img alt="Static Badge" src="https://img.shields.io/badge/Javascript-DDD?style=for-the-badge&logo=javascript&labelColor=333">
<img alt="Static Badge" src="https://img.shields.io/badge/React-DDD?style=for-the-badge&logo=react&labelColor=333">
<img alt="Static Badge" src="https://img.shields.io/badge/Jest-DDD?style=for-the-badge&logo=jest&logoColor=%23C21325&labelColor=333">
<img alt="Static Badge" src="https://img.shields.io/badge/Testing_Library-blue?style=for-the-badge&logo=testinglibrary&labelColor=333&color=DDD">
<img alt="Static Badge" src="https://img.shields.io/badge/Babel-blue?style=for-the-badge&logo=babel&labelColor=333&color=DDD">
<p>

## 📂 Folder structure

The project follows the next pattern:

```console
/
├── src/
│   ├── challenges/
│   │   └── myChallenge/
│   │        ├──myChallenge.md
│   │        ├──myChallenge.jsx
│   │        ├──myChallenge.test.jsx
│   │        └──myChallenge_base.jsx
│   └── main.jsx
└── package.json
```

### Notes

The main folder is called `challenges` and all challenges inside are separated by their folder by a name.

Every challenge folder has commonly 4 files:

- `myChallenge.md`: It's a markdown file with the Prompt of the challenge and the possible solution.
- `myChallenge.jsx`: it's my actual solution for the challenge.
- `myChallenge.test.jsx`: it's the test that should be successful in case the challenge is resolved.
- `myChallenge_base.jsx`: it's the original code before all my changes. The initial state of the challenge.

To try one of the challenges, simply import the `.jsx` file with the exact name of the folder (like `myChallenge.jsx`) and implement it in the `main.jsx`. If you want to try another challenge, it's recommended to replace the previous implementation challenge with the new one. Check the code below as an example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { SantaList } from './challenges/SantaList/SantaList.jsx';
import { HexColors } from './challenges/HexColors/HexColors.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HexColors />
  </React.StrictMode>
);
```

## 🛠️ Installation

Installing dependencies

```console
npm install
```

### Commands available

|   Command    | Description                  |
| :----------: | :--------------------------- |
| npm run dev  | run the `main.jsx` file      |
| npm run test | run all tests in the project |
