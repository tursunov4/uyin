import  "./assets/main.css"
import Header from "./components/Header/Header";
import MyForm from "./components/Form/Form";
import UserNumbers from "./components/UserNumbers/UserNumbers";

function App() {
  return (
    <div className="App">
       <Header/>
        <UserNumbers/>
        <MyForm/>
    </div>
  );
}

export default App;
