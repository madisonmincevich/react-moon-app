import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="moonApp">
        <div className="container">
          <h1>Moon Phase</h1>
          <Search defaultCity="London" />

          <footer>
            <a
              href="https://github.com/madisonmincevich/react-moon-app"
              target="_blank"
            >
              Open source
            </a>{" "}
            code by{" "}
            <a
              href="https://maddiemincevich.netlify.app/index.html"
              target="_blank"
            >
              Maddie Mincevich
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
