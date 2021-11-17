import './App.scss';
import Header from './Components/Header';
import MobileMenu from './Components/Header/MobileMenu';
import Banner from './Components/Banner/index';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

function App() {
	return (
		<>
			<Header />
			<MobileMenu />
			<Banner />
			<Portfolio />
			<Footer />
		</>
	);
}

export default App;
