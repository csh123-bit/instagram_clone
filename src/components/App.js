import '../styles/App.scss';
import Navgation from "./Navigation";
import Cards from "./Cards"
import Sidebar from "./Sidebar"

function App() {
  return (
    <div className="App">
      <Navgation/>
      <main>
        <div className='container'>
          <Cards/>
          <Sidebar/>
        </div>
      </main>
    </div>
  );
}

export default App;
