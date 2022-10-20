import Apps from './components/Apps';
import Banner from './components/Banner';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';
import Maps from './components/Maps';
import Menu from './components/Menu';
import './sass/main.scss';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Menu />
      <Maps />
      <Blog />
      <Apps />
      <Footer />
    </>
  );
}

export default App;
