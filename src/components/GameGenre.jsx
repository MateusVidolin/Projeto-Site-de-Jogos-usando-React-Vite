import '../css/GameGenre.css';
import HelpIcon from './HelpIcon';

// Componente que recebe props para renderizar um gênero de jogo
const GameGenre = ({ title, children }) => {
  const explanation = "Este componente usa props para receber o título e filhos. 'props.children' é usado para renderizar os filhos passados para este componente.";

  return (
    <div className="game-genre">
      <h3>{title} <HelpIcon explanation={explanation} /></h3>
      <div className="game-icons">
        {children}
      </div>
    </div>
  );
};

export default GameGenre;
