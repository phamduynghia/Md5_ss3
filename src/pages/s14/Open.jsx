import React, { useState } from "react";
import Tabs from "./Tabs";

export default function Open() {
  const [name, setName] = useState("");

  const handleSport = () => {
    setName("sport");
  };

  const handleCulture = () => {
    setName("culture");
  };

  const handleScience = () => {
    setName("science");
  };

  return (
    <div>
      <h1>Môn Thể Thao</h1>
      <button onClick={handleSport}>Thể Thao</button>
      <button onClick={handleCulture}>Văn Hóa</button>
      <button onClick={handleScience}>Khoa Học</button>
      <Tabs name={name} />
    </div>
  );
}