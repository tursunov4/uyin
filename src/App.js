import  "./assets/main.css"
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Homepage/>} path="/"/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
