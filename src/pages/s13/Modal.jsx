import React, { useState } from "react";
import Box from "./Box";

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Ứng dụng với Modal</h1>
      <button onClick={handleOpen}>Open</button>
      <Box isOpen={isModalOpen} isClose={handleClose} />
    </div>
  );
}