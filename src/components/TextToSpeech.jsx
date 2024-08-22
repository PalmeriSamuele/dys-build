import { default as React, useEffect, useState } from "react";
import textToSpeechIcon from '../icons/textToSpeechIcon.svg';


const TextToSpeech = ({ text }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    }

    synth.speak(utterance);

    setIsPaused(false);
  };

  return (
    <div className="indyspensable-option-item-card" onClick={handlePlay}>
      <div className="indyspensable-dys-option-item">
        <img src={textToSpeechIcon} className="indyspensable-icon" alt="Text to speech option" />
      </div>
      Text to speech
    </div>
  );
};

export default TextToSpeech;