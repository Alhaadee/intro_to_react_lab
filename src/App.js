
import './App.css';
import Title from './components/Title.js'
import Nav from './components/Nav';
import Search from './components/Search';
import DisplayRecipes from './components/DisplayRecipes';

function App() {
  return (
    <div>
      <Title/>
      <Nav/>
      <Search/>
      <DisplayRecipes/>
    </div>
  );
}

export default App;
