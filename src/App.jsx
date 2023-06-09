import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Signup from "./components/Signup";
import Signup2 from "./components/Formikpractice/Signup2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gradient-to-br from-slate-500 to-slate-800 bg-no-repeat h-screen ">
      <div className="flex justify-center items-center h-screen">
        <Signup2 />
      </div>
    </div>
  );
}

export default App;
