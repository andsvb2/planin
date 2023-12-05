import React from 'react';
import '../src/assets/css/Login.css';

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <img src="../src/assets/img/logo.svg" alt="Logo" className="logo" />
      <div className="login-content">
        <img src="../src/assets/img//studying-background.png" alt="Imagem Lateral" className="side-image" />
        <h1>Planeje suas atividades com <br></br>mais facilidade e eficiência</h1>
      </div>
    </div>
  );
};

export default Login;
