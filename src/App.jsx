import React, { useState } from 'react';
import './App.css';
import Widget from './components/Widget';
import { createPortal } from 'react-dom';

function App() {
  const [highlightedText, setHighlightedText] = useState('');

  const handleTextSelection = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText != '')
      setHighlightedText(selectedText);

  };



  return (
    <div onMouseUp={handleTextSelection}>
      {createPortal(<Widget highlightedText={highlightedText} setHighlightedText={setHighlightedText} />, document.body)}
    </div>
  );
}

export default App;
