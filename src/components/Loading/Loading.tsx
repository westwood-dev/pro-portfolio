import './Loading.css';

export const Loading = () => {
  return (
    <div className="loading-container" data-testid="loading-container">
      <div className="loading-text text-colour">Loading...</div>
    </div>
  );
};

export default Loading;