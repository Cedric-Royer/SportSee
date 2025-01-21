import { useNavigate } from "react-router-dom";
import "./ErrorPage.scss";

/**
 * Page d'erreur affichée lorsqu'une ressource est introuvable.
 *
 * @returns {JSX.Element} Composant ErrorPage.
 */
const ErrorPage = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/login");
  };

  return (
    <div className="error-page">
      <p className="error-page__code">404</p>
      <p className="error-page__message">Page introuvable</p>
      <button className="error-page__button" onClick={handleRetry}>
        Essayez de vous reconnecter
      </button>
    </div>
  );
};

export default ErrorPage;
