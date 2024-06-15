import { useParams } from 'react-router-dom';
import GameGenre from './GameGenre';
import GameIcon from './GameIcon';
import '../css/GenreList.css';
import HelpIcon from './HelpIcon';

// Array de objetos representando os gêneros e jogos
const genres = {
  aventura: [
    { src: '/img/adventure1.png', alt: 'Batalha Naval' },
    { src: '/img/adventure2.png', alt: 'Piratas' },
    { src: '/img/adventure3.png', alt: 'Caça Tesouro' }
  ],
  esportes: [
    { src: '/img/sports1.png', alt: 'Basquete' },
    { src: '/img/sports2.png', alt: 'Boliche' },
    { src: '/img/sports3.png', alt: 'Futebol' }
  ],
  puzzle: [
    { src: '/img/puzzle1.png', alt: 'Blocky Puzzle' },
    { src: '/img/puzzle2.png', alt: 'Quebra-Cabeça' },
    { src: '/img/puzzle3.png', alt: 'Jogo da velha' }
  ],
  estratégia: [
    { src: '/img/strategy1.png', alt: 'Jogo da Velha' },
    { src: '/img/strategy2.png', alt: 'Xadrez' },
    { src: '/img/strategy3.png', alt: 'Bandeirinha' }
  ]
};

const GenreList = () => {
  const { genre } = useParams();
  const games = genres[genre];

  const explanation = "Este componente usa props e props.children para renderizar uma lista de ícones de jogos com base no gênero selecionado.";

  return (
    <div className="genre-list">
      <h2>Selecione um jogo <HelpIcon explanation={explanation} /></h2>
      <GameGenre title={genre}>
        {games.map((game) => (
          <div key={game.alt} className="game-icon-wrapper">
            <GameIcon src={game.src} alt={game.alt} />
            <p className="game-name">{game.alt}</p>
          </div>
        ))}
      </GameGenre>
    </div>
  );
};

export default GenreList;
