import "./App.css";
import Card from "./commponents/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind CSS</h1>
      <Card username="Peter" btnText="visit me" />
      <Card username="Mandy" />
    </>
  );
}

export default App;
