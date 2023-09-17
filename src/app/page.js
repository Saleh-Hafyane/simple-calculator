"use client";
import { useState, useRef } from "react";
import "./page.css";

export default function Home() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  const add = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };
  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };
  const multiply = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };
  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };
  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };
  const resetResult = (e) => {
    e.preventDefault();
    setResult((result) => result * 0);
  };

  return (
    <main>
      <h1>Simple Calculator</h1>
      <h3>Result: {result} </h3>

      <form>
        <div className="form-input">
          <label htmlFor="number">Type a Number: </label>
          <input
            type="number"
            name="number"
            id="number"
            pattern="[0-9]"
            ref={inputRef}
          />
        </div>

        <div className="calc-btn">
          <button onClick={add}>+</button>
          <button onClick={minus}>-</button>
          <button onClick={multiply}>*</button>
          <button onClick={divide}>/</button>
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button>
        </div>
      </form>
    </main>
  );
}
