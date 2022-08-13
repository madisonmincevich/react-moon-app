import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";
import { BsMoonStars } from "react-icons/bs";
import Task from "./Task";

function App() {
  return (
    <div className="App">
      <div className="moonApp">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 mb-3">
              <h1>
                TODAY'S MOON PHASE <BsMoonStars />
              </h1>
              <Search defaultCity="London" />
            </div>
            <div className="col-sm-6">
              <div className="tasklist">
                <Task />
              </div>
            </div>
          </div>
        </div>
      </div>
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
  );
}

export default App;
