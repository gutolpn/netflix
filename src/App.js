import './App.css';
import Row from "./components/Row"
import { categories } from './api';

function App() {


  return (
    <div className="App">
      {/* Navbar */}
      {/* destaque */}
      {/* Em alta */}
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
