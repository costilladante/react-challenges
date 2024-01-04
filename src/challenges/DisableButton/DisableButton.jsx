import { useState } from 'react';

const App = () => {
  const [text, setText] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleTextChange = (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
    setButtonDisabled(inputValue.length < 3);
  };

  return (
    <>
      <input data-testid='input-id' onChange={handleTextChange} value={text} />
      <button data-testid='button-id' disabled={buttonDisabled}>
        Click
      </button>
    </>
  );
};

export default App;
