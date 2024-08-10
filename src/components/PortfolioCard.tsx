import { Link } from "react-router-dom";

interface PortfolioCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

function PortfolioCard({ id, image, title, description }: PortfolioCardProps) {
  return (
    <div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
      <div className="mdl-card__media">
        <img className="article-image" src={image} alt="" />
      </div>
      <div className="mdl-card__title">
        <h2 className="mdl-card__title-text">{title}</h2>
      </div>
      <div className="mdl-card__supporting-text">{description}</div>
      <div className="mdl-card__actions mdl-card--border">
        <Link to={`/portfolio/${id}`} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent">
          詳細を読む
        </Link>
      </div>
    </div>
  );
}

export default PortfolioCard;