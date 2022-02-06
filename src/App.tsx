import { Route, Routes } from "react-router-dom";
import GuessNote from "./Pages/GuessNote";
import Home from "./Pages/Home";


const App: React.FunctionComponent = (props) => {
  return <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guess-note" element={<GuessNote />} />
    </Routes>
  </>;
};

export default App;
