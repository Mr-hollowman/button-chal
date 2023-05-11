import MyButton from "./MyButton";
import "./App.css";

function App() {
  return (
    <div style={{ marginLeft: "10%" }}>
      <h1>Buttons</h1>
      <div className="dir-col">
        <span>{"<Button />"}</span>
        <MyButton />
      </div>
      <div className="dir-col">
        <span>{"<Button variant={'outlined'} />"}</span>
        <MyButton variant={'outlined'} />
        
      </div>
    </div>
  );
}

export default App;
