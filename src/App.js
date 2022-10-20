import "./App.css";
import Search from './Search'

function App() {
  return (
    <div className="App">
      <div className="section-one">
        
      <header className="App-header">
        Let's get cooking
      </header>
      <p>Find the most delicious recipes to impress yourself and your loved ones</p>


      <main>
        <Search />
      </main>

      </div>

    <div className="section-two">
      <footer className="App-footer">
          {" "}
          <a
            href="https://github.com/Bianca-Slavov/dictionary-project-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/biancaslavov/"
            target="_blank"
            rel="noreferrer"
          >
            Bianca Slavov
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
