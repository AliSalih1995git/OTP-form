import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef({});

  const [otp, setOtp] = useState({
    digitOne: "",
    digitTwo: "",
    digitThree: "",
    digitFour: "",
    digitFive: "",
    digitSix: "",
  });

  useEffect(() => {
    inputRef.current[0].focus();
    inputRef.current[0].addEventListener("paste", pasteText);
    return () => inputRef.current[0].removeEventListener("paste", pasteText);
  }, []);

  const pasteText = (event) => {
    const pastedText = event.clipboardData.getData("text");
    const fieldValues = {};
    Object.keys(otp).forEach((keys, index) => {
      fieldValues[keys] = pastedText[index];
    });
    setOtp(fieldValues);
    inputRef.current[5].focus();
  };

  const handelChange = (event, index) => {
    const { value, name } = event.target;
    if (/[a-z]/gi.test(value)) return;
    setOtp((prev) => ({
      ...prev,
      [name]: value.at(-1),
    }));

    if (value && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };
  const handleBackSpace = (event, index) => {
    if (event.key === "Backspace") {
      if (index > 0) {
        inputRef.current[index - 1].focus();
      }
    }
  };

  const renderInput = () => {
    return Object.keys(otp).map((keys, index) => (
      <input
        keys={index}
        ref={(elem) => (inputRef.current[index] = elem)}
        type="text"
        value={otp[keys]}
        name={keys}
        className="w-16 h-12 mr-3 bg-[#3b3b3b] rounded-md text-center text-xl text-white"
        onChange={(event) => handelChange(event, index)}
        onKeyUp={(event) => handleBackSpace(event, index)}
      />
    ));
  };

  return (
    <form action="">
      <h3 className="text-3xl mb-8">Plese fill in the OTP</h3>
      <div>{renderInput()}</div>

      <button className="mt-4 w-32 border border-solid bg-[#3b3b3b] text-white rounded hover:bg-white hover:text-black hover:border-[#3b3b3b]">
        Submit
      </button>
    </form>
  );
}

export default App;
