import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <Header />
      <Drawer />
      <main className="mdl-layout__content">
        <div className="page-content">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;