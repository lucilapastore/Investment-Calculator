import { useState } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 0,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />

      <main>
        <UserInput userInput={userInput} onChangeInput={handleChange} />

        {inputIsValid ? (
          <Results input={userInput} />
        ) : (
          <p className="center">Please enter a duration greater than zero.</p>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
