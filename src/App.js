import "./App.css";

//components
import { TwitchConnect } from "./components/TwitchConnect";

//state Variables
import { useAppContext } from "./context/appContext";

function App() {
  return (
    <main>
      <TwitchConnect />
    </main>
  );
}

export default App;
