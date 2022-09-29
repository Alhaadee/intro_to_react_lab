
import './App.css';
import Title from './components/Title.js'
import Nav from './components/Nav';
import Search from './components/Search';
import DisplayRecipes from './components/DisplayRecipes';
import Form from './components/Form';

function App() {
  return (
    <div>
      <header>
      <Title/>
      <Nav/>
      <Search/>
      </header>
      <DisplayRecipes/>
      <Form/>
    </div>
  );
}

export default App;
