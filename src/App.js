import './App.css';
 import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

import ContentCard from './components/ContentCard/ContentCard';

function App() {
  return (
    <div className="App">
     <Header />
     <Content />
     <ContentCard />
     <Footer />


    </div>
  );
}

export default App;
