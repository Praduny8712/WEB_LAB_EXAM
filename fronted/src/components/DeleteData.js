import React, { useRef } from "react";

export default function DeleteData() {
  var x1 = useRef();

  function f1() {
    var data = {
      id:x1.current.value,
    };
    data = JSON.stringify(data);
    console.log(data);

    fetch(`http://localhost:9000/delete/${x1.current.value}`, {
      method: "DELETE",
    })
      .then((val) => {
        console.log(val);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="delete">
      <h1>Delete Tv</h1><br />
      <input type="text" ref={x1} placeholder="Enter Deleted ID" />
      <br></br>
      <br />
      <button className="btn btn-danger" onClick={f1}>
        Delete Tv
      </button>
    </div>
  );
}
