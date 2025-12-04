import React, { useRef, useState } from "react";

function SimpleToDo() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const add = () => {
    if (!text.trim()) return;
    setList((prev) => {
      return [...prev, text];
    });

    setText("");
  };

  const edit = () => {};
  const deleteToDo = (clickedIndex) => {
    setList((prev) => prev.filter((item, i) => i !== clickedIndex));
  };
console.log(list);

  return (
    <div>
      <div className=" flex flex-col justify-center items-center w-screen h-screen">
        <h1 className="text-xl font-bold">SimpleToDo</h1>
        <div className="input-container flex">
          <input
            type="text"
            value={text}
            placeholder="Add to do"
            className="border border-black rounded-2xl p-2 m-2 w-xs bg-gray-50 "
            onChange={(e) => {
              setText(e.target.value);
            }}
          />

          <button
            className="bg-gray-700 text-white p-2 px-2 m-2 rounded-xl hover:bg-gray-600"
            onClick={add}
          >
            Add
          </button>
        </div>
        <div className="lists-container flex flex-col">
          {list.map((item, index) => (
            <div key={index} className="flex">
              <span
                key={index}
                className="px-4 p-2 m-2 bg-pink-200 w-sm rounded-l-lg mr-0  "
              >
                {item}
              </span>
              <button
                className="bg-red-500 hover:bg-red-700 px-4 p-2 m-2 ml-0 rounded-r-lg font-medium text-white "
                onClick={() => deleteToDo(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SimpleToDo;
