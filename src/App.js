import logo from './logo.svg';
import './App.css';
import Reviews from './components/Reviews';
import AverageRating from './components/AverageRating';
import SentimentAnalysis from './components/SentimentAnalysis';
import WebsiteVisitors from './components/WebsiteVisitors';
import Panel from './components/Panel';


function App() {
  return (
    <div className="App">
      <main>              
        <Panel className="example">Panel</Panel>         
        <Reviews numReviews={1281} percentage={23+"%"}/>
        <AverageRating rating="4.6" diff={-0.3}/>
        <SentimentAnalysis numPos={960} numNeut={122} numNeg={321}/>
        <WebsiteVisitors numVisitors={821}/>        
      </main>
    </div>
  );
}

export default App;
