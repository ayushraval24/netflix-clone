import './App.css';
import requests from './requests';
import Row from './Components/Row'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="netflix">
      <Navbar />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchComedy} isLargeRow />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopular} />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchAction} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
      <Row title="Crime Movies" fetchUrl={requests.fetchCrime} />
      <Row title="Documentry Movies" fetchUrl={requests.fetchDocumentry} />
      <Row title="Thriller Movies" fetchUrl={requests.fetchThriller} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMystery} />
    </div>
  );
}

export default App;
