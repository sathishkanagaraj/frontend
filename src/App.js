import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "/api/records";  // Spring Boot serves it

function App() {
  const [records, setRecords] = useState([]);
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  // Fetch Records
  const fetchRecords = async () => {
    const res = await axios.get(API_URL);
    setRecords(res.data);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  // Add Record
  const addRecord = async () => {
    if (!name || !score) return;
    await axios.post(API_URL, { name, score: Number(score) });
    setName("");
    setScore("");
    fetchRecords();
  };

  // Delete Record
  const deleteRecord = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchRecords();
  };

  return (
      <div style={{ padding: "20px" }}>
        <h2>Records</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Score" value={score} onChange={(e) => setScore(e.target.value)} />
        <button onClick={addRecord}>Add</button>
        <ul>
          {records.map((record) => (
              <li key={record.id}>
                {record.name} - {record.score}
                <button onClick={() => deleteRecord(record.id)}>Delete</button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;