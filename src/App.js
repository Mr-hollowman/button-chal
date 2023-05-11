import MyButton from "./MyButton";
import "./App.css";
import MySidebar from "./Sidebar";
import Right from "./Right";
import Left from "./Left";

function App() {
  return (
    <div className="d-flex">
      <div style={{ maxWidth: "200px" }}>
        <MySidebar />
      </div>
      <div className="d-flex" style={{width:'100%', margin:"10px"}}>
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
