import React from "react";

export default function Tabs(props) {
  const { name } = props;
  let content;
  switch (name) {
    case "sport":
      content = <div>Đây là nội dung về Thể Thao.</div>;
      break;
    case "culture":
      content = <div>Đây là nội dung về Văn Hóa.</div>;
      break;
    case "science":
      content = <div>Đây là nội dung về Khoa Học.</div>;
      break;
  }
  return <div>{content}</div>;
}