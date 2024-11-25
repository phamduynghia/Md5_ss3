import React from "react";

export default function ListSongs({ songs, deleteSong }) {
  return (
    <div>
      <ul>
        {/* Duyệt qua mảng songs và hiển thị từng bài hát */}
        {songs.map((song, index) => {
          return (
            <li key={index}>
              {/* Hiển thị tên bài hát */}
              {song}
              {/* Nút xóa bài hát, khi nhấn gọi hàm deleteSong */}
              <button onClick={() => deleteSong(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}