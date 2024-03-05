import logo from "./logo.svg";
import "./App.css";
import SearchBox from "./layout/searchBar";
import Footer from "./layout/footer";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import MainPoke from "./mainPoke";
// import store from "./store";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <SearchBox />
        </header>
        <main>
          <MainPoke />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Provider>
  );
}

export default App;
