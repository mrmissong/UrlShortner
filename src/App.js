import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from "./components/Nav";
import Shorty from "./components/Shorty";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Nav />
			<Shorty />
			<Footer />
		</div>
	);
}

export default App;
