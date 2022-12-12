import './App.css';
import { Travel } from './Travel';
import image from './travel.webp'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src={image} width='350px' alt='travel'/>
      </div>
    <div className='container'>
      <h1>My dream destinations</h1>
    </div>
    
   
      <Travel/>






    </div>
  );
}

export default App;
