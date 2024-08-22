import React, { useState } from 'react';
import './App.css';
import Widget from './components/Widget';

function App() {
  const [highlightedText, setHighlightedText] = useState('');

  const handleTextSelection = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText != '')
      setHighlightedText(selectedText);

  };



  return (
    <div className="App" onMouseUp={handleTextSelection}>
      {/* <h1> Pourquoi ? Posez-nous vos questions sur l’école</h1>
      <p>« Le Soir » relance son opération « Pourquoi ? » dans le cadre des rentrées de l’enseignement obligatoire (le 26 août) et du supérieur (le 16 septembre). Votre mission : nous poser les questions qui vous taraudent sur le fonctionnement de l’école, le Pacte d’excellence, les relations parents/enseignants, les examens… Même principe pour le supérieur : questionnez-nous sur tout ce que vous avez envie de savoir et que vous n’avez jamais osé demander à propos des universités et hautes écoles.</p>   <h1> Pourquoi ? Posez-nous vos questions sur l’école</h1>
      <p>« Le Soir » relance son opération « Pourquoi ? » dans le cadre des rentrées de l’enseignement obligatoire (le 26 août) et du supérieur (le 16 septembre). Votre mission : nous poser les questions qui vous taraudent sur le fonctionnement de l’école, le Pacte d’excellence, les relations parents/enseignants, les examens… Même principe pour le supérieur : questionnez-nous sur tout ce que vous avez envie de savoir et que vous n’avez jamais osé demander à propos des universités et hautes écoles.</p>   <h1> Pourquoi ? Posez-nous vos questions sur l’école</h1>
      <p>« Le Soir » relance son opération « Pourquoi ? » dans le cadre des rentrées de l’enseignement obligatoire (le 26 août) et du supérieur (le 16 septembre). Votre mission : nous poser les questions qui vous taraudent sur le fonctionnement de l’école, le Pacte d’excellence, les relations parents/enseignants, les examens… Même principe pour le supérieur : questionnez-nous sur tout ce que vous avez envie de savoir et que vous n’avez jamais osé demander à propos des universités et hautes écoles.</p>   <h1> Pourquoi ? Posez-nous vos questions sur l’école</h1>
      <p>« Le Soir » relance son opération « Pourquoi ? » dans le cadre des rentrées de l’enseignement obligatoire (le 26 août) et du supérieur (le 16 septembre). Votre mission : nous poser les questions qui vous taraudent sur le fonctionnement de l’école, le Pacte d’excellence, les relations parents/enseignants, les examens… Même principe pour le supérieur : questionnez-nous sur tout ce que vous avez envie de savoir et que vous n’avez jamais osé demander à propos des universités et hautes écoles.</p>   <h1> Pourquoi ? Posez-nous vos questions sur l’école</h1>
      <p>« Le Soir » relance son opération « Pourquoi ? » dans le cadre des rentrées de l’enseignement obligatoire (le 26 août) et du supérieur (le 16 septembre). Votre mission : nous poser les questions qui vous taraudent sur le fonctionnement de l’école, le Pacte d’excellence, les relations parents/enseignants, les examens… Même principe pour le supérieur : questionnez-nous sur tout ce que vous avez envie de savoir et que vous n’avez jamais osé demander à propos des universités et hautes écoles.</p>   <h1> Pourquoi ? Posez-nous vos questions sur l’école</h1>
      <p>« Le Soir » relance son opération « Pourquoi ? » dans le cadre des rentrées de l’enseignement obligatoire (le 26 août) et du supérieur (le 16 septembre). Votre mission : nous poser les questions qui vous taraudent sur le fonctionnement de l’école, le Pacte d’excellence, les relations parents/enseignants, les examens… Même principe pour le supérieur : questionnez-nous sur tout ce que vous avez envie de savoir et que vous n’avez jamais osé demander à propos des universités et hautes écoles.</p>
      <h1> Pourquoi ? Posez-nous vos questions sur l’école</h1>
      <p>« Le Soir » relance son opération « Pourquoi ? » dans le cadre des rentrées de l’enseignement obligatoire (le 26 août) et du supérieur (le 16 septembre). Votre mission : nous poser les questions qui vous taraudent sur le fonctionnement de l’école, le Pacte d’excellence, les relations parents/enseignants, les examens… Même principe pour le supérieur : questionnez-nous sur tout ce que vous avez envie de savoir et que vous n’avez jamais osé demander à propos des universités et hautes écoles.</p> */}
      <Widget highlightedText={highlightedText} setHighlightedText={setHighlightedText} />
    </div>
  );
}

export default App;
