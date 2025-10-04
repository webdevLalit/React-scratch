import Header from './Components/Header.jsx'
import Coreconcepts  from './Components/CoreConcepts.jsx'
import { CORE_CONCEPTS } from './data.js';

function App() {
  return (
    <div>  
      <Header />   
      <main>
        <section id="core-concepts">
          <ul>
            <Coreconcepts {...CORE_CONCEPTS[0]}/> {/* this is an alterntive as we have same name of keys as we have defined */ }
            <Coreconcepts {...CORE_CONCEPTS[1]}/>
            <Coreconcepts {...CORE_CONCEPTS[2]} />
            <Coreconcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
