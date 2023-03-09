import { useState } from "react";
import "./App.css";

function App() {
  return (
    <form action="">
      <h3 className="text-3xl mb-8">Plese fill in the OTP</h3>
      <div>
        <input
          type="text"
          className="w-16 h-12 mr-3 bg-black rounded-md text-center text-xl"
        />
        <input
          type="text"
          className="w-16 h-12 mr-3 bg-black rounded-md text-center text-xl"
        />
        <input
          type="text"
          className="w-16 h-12 mr-3 bg-black rounded-md text-center text-xl"
        />
        <input
          type="text"
          className="w-16 h-12 mr-3 bg-black rounded-md text-center text-xl"
        />
      </div>

      <button>Submit</button>
    </form>
  );
}

export default App;
