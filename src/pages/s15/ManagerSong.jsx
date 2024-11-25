import React, { useState } from "react";
import InputSong from "./InputSong";
import ListSongs from "./ListSongs";

export default function ManagerSong() {
  // Bước 1: Tạo state lưu trữ danh sách bài hát
  const [songs, setSongs] = useState([]);

  // Bước 2: Hàm thêm bài hát mới
  const addSong = (song) => {
    setSongs([...songs, song]);
  };

  // Bước 3: Hàm xóa bài hát
  const deleteSong = (index) => {
    // setSongs([...songs.slice(0,index), ...songs.slice(index+ 1)])
    const newSongs = [...songs];
    newSongs.splice(index, 1);
    setSongs(newSongs);
  };
  return (
    <div>
      <h1>Song Manager</h1>
      <InputSong addSong={addSong} />
      <ListSongs songs={songs} deleteSong={deleteSong} />
    </div>
  );
}