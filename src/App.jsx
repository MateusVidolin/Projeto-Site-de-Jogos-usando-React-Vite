import AppRouter from './router';
import './css/App.css';

const App = () => {
  return (
    <div className="app">
      <AppRouter /> {/* Router: usado para encapsular toda a aplicação com as rotas definidas */}
    </div>
  );
};

export default App;
