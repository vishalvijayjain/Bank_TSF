import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
