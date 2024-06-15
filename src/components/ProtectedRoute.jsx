import { Navigate } from 'react-router-dom'; // Importação do Navigate para redirecionamento

const ProtectedRoute = ({ children }) => {
  // Verifica se o usuário está autenticado a partir do localStorage
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  // props.children: permite que este componente renderize seus filhos (children)
  // `children` representa o conteúdo passado entre as tags de abertura e fechamento deste componente
  // Router: usado para redirecionar para a página de login se o usuário não estiver autenticado
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
