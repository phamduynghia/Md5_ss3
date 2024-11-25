import React from "react";
import Carousel from "./Carousel";

export default function Image() {
  const images = [
    "https://tse1.mm.bing.net/th?id=OIP.JJzQ03RwgZT5qhXIHjgMXQHaJQ&pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th?id=OIP.cB806UVQVrDKQNHi65tORAHaLG&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.kGGuDWSJSgBhq9X_2a49WgHaJT&pid=Api&P=0&h=220",
    "https://tse3.mm.bing.net/th?id=OIP.ZQg6UeIUUM28czBm9XCQdwHaOJ&pid=Api&P=0&h=220",
  ];
  return (
    <div>
      <h1>Carousel Example</h1>
      <Carousel images={images} />
    </div>
  );
}