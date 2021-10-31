import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Burn from './InnerPage';
import './App.css';

function App() {
  return (
  <>
  <Header />
  <Banner /> 
  <div id='center'></div>
  <div id='button'>
  <button id='button1' onClick={Burn}>* SPOILER *</button>
  </div>
  <Footer />
  </>
  );
}

export default App;
