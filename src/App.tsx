import { Route, Routes } from "react-router-dom";
import Fretboard from "./Components/Fretboard/Fretboard";
import Home from "./Home";


const App: React.FunctionComponent = (props) => {
  return <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fretboard" element={<Fretboard />} />
    </Routes>
  </>;
};

export default App;
