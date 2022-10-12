
import './App.css';
import Weather from './components/Weather';

function App() {
  return (
    <div className="WeatherApp">
      <div className='WeatherApp-container'>
        <Weather defaultCity="windsor"/>

      </div>
      <footer>
        <p> CopyRight</p>
      </footer>
     
    </div>
  );
}

export default App;
