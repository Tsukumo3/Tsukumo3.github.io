import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { loadMarkdownFile } from '../utils/markdownLoader';

function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchContent() {
      if (id) {
        try {
          const markdownContent = await loadMarkdownFile(id);
          setContent(markdownContent);
        } catch (err) {
          setError('コンテンツの読み込みに失敗しました');
          console.error('Error loading markdown:', err);
        }
      }
    }
    fetchContent();
  }, [id]);

  if (error) {
    return <div>エラー: {error}</div>;
  }

  return (
    <div>
      {content ? (
        <div className="markdown-content">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      ) : (
        <p>読み込み中...</p>
      )}
    </div>
  );
}

export default PortfolioDetail;