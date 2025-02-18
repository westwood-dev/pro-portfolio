import { Link } from 'react-router-dom';
import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2 className="text-colour">404</h2>
      <p className="text-colour">Hmm, something isn't right here</p>
      <Link to="/" className="text-colour">Head home?</Link>
    </div>
  );
};

export default NotFound;