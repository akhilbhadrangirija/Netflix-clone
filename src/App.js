import react from 'react';
import Navbar from './Components/Navbar';
import Banner from './Banner/Banner';
import RowPoster from './RowPoster/RowPoster';
import './App.css'
function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPoster/>
      <RowPoster/>

    </div>
  );
}

export default App;
