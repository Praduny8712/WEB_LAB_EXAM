import React, { useEffect, useState } from "react";

export default function ShowTV() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/getdata")
      .then((res) => res.json())
      .then((val) => {
        setData(val);
        console.log(val);
      })
      .catch((err) => console.error("Unable to fetch", err));
  });
  return (
    <div className="show">
      <h1>Show Tv</h1><br />
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">ModelName</th>
            <th scope="col">brand</th>
            <th scope="col">price</th>
            <th scope="col">size</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((value) => {
              return (
                <tr>
                  <td>{value.id}</td>
                  <td>{value.modelName}</td>
                  <td>{value.brand}</td>
                  <td>{value.price}</td>
                  <td>{value.size}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
