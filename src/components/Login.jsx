import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import HelpIcon from './HelpIcon';

const Login = () => {
  const [age, setAge] = useState('');
  const navigate = useNavigate();
  const explanation = "Este componente usa o State Hook 'useState' para gerenciar o estado da idade do usuário e 'useNavigate' do React Router para navegação programática.";

  const handleLogin = () => {
    if (age >= 12) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/genre-selection');
    } else {
      alert('Você precisa ter pelo menos 12 anos para acessar os jogos.');
    }
  };

  return (
    <div className="login">
      <h2>Login <HelpIcon explanation={explanation} /></h2>
      <input 
        type="number" 
        placeholder="Digite sua idade" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
