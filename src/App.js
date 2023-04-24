import './App.css';
import Row from "./components/Row"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import { categories } from './api';

function App() {


  return (
    <div className="App">
      {/* Navbar */}
      {/* destaque */}
      {/* Em alta */}

      <Nav></Nav>
      <Banner></Banner>

      {categories.map( (category) => {
        return <Row 
                  key={category.name} 
                  title={category.title} 
                  path={category.path}
                  isLarge={category.isLarge}
                 />
      } )}

    </div>
  );
}

export default App;
