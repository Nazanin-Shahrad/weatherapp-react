
import './App.css';
import Weather from './components/Weather';

function App() {
  return (
    <div className="WeatherApp">
      <div className='WeatherApp-container'>
        <Weather defaultCity="windsor"/>

      </div>
      <footer>
        <p> Built by Nazanin Shahrad ,2022 </p>
      </footer>
     
    </div>
  );
}

export default App;
