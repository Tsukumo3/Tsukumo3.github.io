import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-name">つくも</h1>
      <p className="profile-description">
        音楽と自炊とテクノロジーが好きな人。<br></br>ネイティブ・Web・インフラなどざっくりやってた元SE。今はR&Dでアプリ開発してます。ベースとギターを弾いたり曲作ったりしてます。田舎に住みたい。
      </p>
      <div className="social-links">
        <a href="https://www.youtube.com/@tsukumo3" target="_blank" rel="noopener noreferrer">
          <img src="images/Youtube-logo/brand-full-color-dark-icon/youtube_monochrome_dark_icon/social/1024px/red/youtube_social_squircle_red.png" alt="YouTube" />
        </a>
        <a href="https://x.com/tsukumo_favo" target="_blank" rel="noopener noreferrer">
          <img src="images/x-logo/logo-black.png" alt="X" />
        </a>
        <a href="https://www.instagram.com/tsukumo3go/" target="_blank" rel="noopener noreferrer">
          <img src="images/Instagram-logo/01-Gradient-Glyph/Instagram_Glyph_Gradient.png" alt="Instagram" />
        </a>
        <a href="https://note.com/tsukumo9_9/" target="_blank" rel="noopener noreferrer">
          <img src="images/note-logo/icon.png" alt="Note" />
        </a>
      </div>
      <nav className="page-links">
        <Link to="/portfolio">Portpolio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default Profile;