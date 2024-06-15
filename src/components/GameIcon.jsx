import '../css/GameIcon.css';
import HelpIcon from './HelpIcon';

// Componente que representa um ícone de jogo
const GameIcon = ({ src, alt }) => {
  const explanation = "Este componente recebe 'src' e 'alt' como props para definir a imagem do ícone do jogo.";

  return (
    <div className="game-icon" onClick={() => alert('Desculpe, esse jogo será disponibilizado em breve')}>
      <img src={src} alt={alt} />
      <HelpIcon explanation={explanation} />
    </div>
  );
};

export default GameIcon;
