import React, { useState } from "react";

export default function InputSong({ addSong }) {
  // Bước 1: Quản lý input bài hát
  const [song, setSong] = useState("");

  // Bước 2: Xử lý thay đổi khi người dùng nhập liệu
  const handleInputSong = (e) => {
    setSong(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (song.trim()) {
      addSong(song.trim());
      setSong("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={song} onChange={handleInputSong} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}