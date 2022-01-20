import react from 'react';
import Navbar from './Components/Navbar';
import Banner from './Banner/Banner';
import RowPoster from './RowPoster/RowPoster';
import './App.css'
import {urlScifi,originals} from './urls'
function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPoster data= {originals} title={'Netflix Originals'}/>
      <RowPoster data={urlScifi} title={'Sci-fi'}/>


    </div>
  );
}

export default App;
