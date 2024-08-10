import PortfolioCard from './PortfolioCard';

const portfolioItems = [
  {
    id: 1,
    image: 'images/template/example-work01.jpg',
    title: 'ブログテンプレート',
    description: 'ここに説明文が入ります。',
  },
  {
    id: 2,
    image: 'images/template/example-work02.jpg',
    title: 'ブログテンプレート',
    description: 'ここに説明文が入ります。',
  },
  {
    id: 3,
    image: 'images/template/example-work03.jpg',
    title: 'ブログテンプレート',
    description: 'ここに説明文が入ります。',
  },
  {
    id: 4,
    image: 'images/template/example-work04.jpg',
    title: 'ブログテンプレート',
    description: 'ここに説明文が入ります。',
  },
  {
    id: 5,
    image: 'images/template/example-work05.jpg',
    title: 'ブログテンプレート',
    description: 'ここに説明文が入ります。',
  },
  {
    id: 6,
    image: 'images/template/example-work06.jpg',
    title: 'ブログテンプレート',
    description: 'ここに説明文が入ります。',
  },
];

function PortfolioGrid() {
  return (
    <div className="mdl-grid portfolio-max-width">
      {portfolioItems.map((item) => (
        <PortfolioCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default PortfolioGrid;