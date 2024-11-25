import { useState } from "react"

export default function Table() {
    const [data,setData] = useState([
      {id:1,name:"nguyen van b",age:21,class:"10a2"},
      {id:2,name:"nguyen van c",age:20,class:"10a3"},
      {id:3,name:"nguyen van d",age:23,class:"10a4"},
      {id:4,name:"nguyen van a",age:25,class:"10a1"},
    ]);

  const [students, setStudents] = useState(listStudent);
  const [search, setSearch] = useState("");
  const [sortAge, setSortAge] = useState(listStudent);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleChange = () => {
    const fillterStudents = students.filter((s) =>
      s.name.toLowerCase().trim().includes(search.toLowerCase().trim())
    );
    setStudents(fillterStudents);
  };

  const handleSortAge = (order) => {
    const sortStudents = [...students].sort((a, b) => {
      if (order === "asc") {
        return a.age - b.age;
      } else {
        return b.age - a.age;
      }
    });
    setSortAge(sortStudents);
  };

  // Hàm gọi khi người dùng chọn sắp xếp
  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    handleSortAge(order); // Gọi hàm sắp xếp khi thay đổi thứ tự
  };
  return (
    <div>
      <Controls
        search={search}
        setSearch={setSearch}
        handleChange={handleChange}
        handleSortOrderChange={handleSortOrderChange}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {sortAge.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}