import { Link } from 'react-router-dom';
import '../css/GenreSelection.css';
import HelpIcon from './HelpIcon';

// Dados dos gêneros de jogos
const genres = [
  { name: 'Aventura', image: '/img/adventure.png' },
  { name: 'Esportes', image: '/img/sports.png' },
  { name: 'Puzzle', image: '/img/puzzle.png' },
  { name: 'Estratégia', image: '/img/strategy.png' }
];

const GenreSelection = () => {
  const explanation = "Este componente usa o React Router para navegar para a página de gênero selecionado quando o usuário clica em uma imagem.";

  return (
    <div className="top-background">
    <div className="genre-selection">
      <h2>Escolha um gênero de jogo <HelpIcon explanation={explanation} /></h2>
      {genres.map((genre) => (
        <Link to={`/genres/${genre.name.toLowerCase()}`} key={genre.name} className="genre-link">
          <div className="genre-item">
            <img src={genre.image} alt={genre.name} />
            <h3>{genre.name}</h3>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default GenreSelection;
