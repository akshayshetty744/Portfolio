import './App.css';
import data from './Data'
import Navbar from "./components/Navbar";
import Card from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
          <Navbar />
          {
            data.map((e)=>{
              return(
                  <Card
                      id={e.id}
                      title={e.title}
                      description={e.description}
                      GitHub={e.GitHub}
                      Hosted={e.Hosted}
                      Image={e.image}
                  />
              )
          }) 
          }
          <Footer/>
    </div>
  );
}

export default App;
