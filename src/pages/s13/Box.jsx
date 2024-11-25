import React from "react";

export default function Box(props) {
  const { isOpen, isClose } = props;

  if (!isOpen) return false;
  return (
    <div>
      <p>Đây là nội dung của Modal!</p>
      <button onClick={isClose}>Close</button>
    </div>
  );
}