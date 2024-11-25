import { useState } from "react";

export default function Form() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleButtonClick = () => {
    setDisplayValue(inputValue);
  };
  return (
    <>
      <h1>nhập nội dung</h1>
      <input
        type="text"
        placeholder="Nhập nội dung..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Hiển thị</button>
      <p>{displayValue}</p>
      </>
  )
}

