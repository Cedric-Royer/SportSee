import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

/**
 * Composant de connexion pour l'utilisateur.
 * Permet à l'utilisateur d'entrer son ID pour accéder à son profil.
 *
 * @function
 *
 * @returns {React.Element} Le rendu du composant Login.
 */

const Login = () => {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userId) {
      navigate(`/user/${userId}`);
    }
  };

  return (
    <div className="login">
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="userId">Entrez votre ID utilisateur :</label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="ID utilisateur"
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
