import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import { BsMoonStars } from "react-icons/bs";

function App() {
  return (
    <div className="App">
      <div className="moonApp">
        <div className="container">
          <h1>
            MOON PHASE <BsMoonStars />
          </h1>
          <Search defaultCity="London" />

          <footer>
            <a
              href="https://github.com/madisonmincevich/react-moon-app"
              target="_blank"
              rel="noreferrer"
            >
              Open source
            </a>{" "}
            code by{" "}
            <a
              href="https://maddiemincevich.netlify.app/index.html"
              target="_blank"
              rel="noreferrer"
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
