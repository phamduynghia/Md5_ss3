import React from "react";

export default function Controls(props) {
  const { search, setSearch, handleChange, sortOrder, handleSortOrderChange } =
    props;
  return (
    <div>
      <h2>Danh sách học sinh</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleChange}>Tìm kiếm</button>
        <br />
        <label>Sắp Xếp</label>
        <select
          value={sortOrder}
          onChange={(e) => handleSortOrderChange(e.target.value)}
        >
          <option value="">Danh sách</option>
          <option value="asc">Tăng dần</option>
          <option value="desc">Giảm dần</option>
        </select>
      </form>
    </div>
  );
}