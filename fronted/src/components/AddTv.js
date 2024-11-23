import React, { useRef } from "react";

export default function AddTv() {
  var x1 = useRef();
  var x2 = useRef();
  var x3 = useRef();
  var x4 = useRef();
  var x5 = useRef();

  function f1() {

    var data = {
      id: x1.current.value, 
      modelName: x2.current.value, 
      brand: x3.current.value, 
      price: x4.current.value, 
      size: x5.current.value, 
    };

  
    data = JSON.stringify(data);
    console.log("Sending Data:", data);

    
    fetch("http://localhost:9000/adddata", {
      method: "POST",
      body: data,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  return (
    <div className="adddata">
      <h1> Add Tv Details</h1>
      <br />
      <input type="text" ref={x1} placeholder="Id" /> <br />
      <br />
      <input type="text" ref={x2} placeholder="Model Name" /> <br />
      <br />
      <input type="text" ref={x3} placeholder="Brand" /> <br />
      <br />
      <input type="text" ref={x4} placeholder="Price" /> <br />
      <br />
      <input type="text" ref={x5} placeholder="Size" /> <br />
      <br />
      <button className="btn btn-danger" onClick={f1}>
        Add TV
      </button>
    </div>
  );
}

