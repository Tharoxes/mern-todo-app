import { useState } from "react";
import Button from "./shared/button";
import axios from "axios";

function CreateTodo() {
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [priority, setPriority] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleResponsible = (e) => {
    setResponsible(e.target.value);
  };
  const handlePriority = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("works");

    const newTodo = {
      description: description,
      responsible: responsible,
      priority: priority,
      completed: completed,
    };

    axios
      .post("http://localhost:4000/todos/add", newTodo)
      .then((res) => console.log(res.data));

    setDescription('');
    setResponsible('');
    setPriority('');
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Create New Todo</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={handleDescription}
          />
        </div>
        <div className="form-group">
          <label>Responsible: </label>
          <input
            type="text"
            className="form-control"
            value={responsible}
            onChange={handleResponsible}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Low"
              checked={priority === "Low"}
              onChange={handlePriority}
            />
            <label className="form-check-label">Low</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Medium"
              checked={priority === "Medium"}
              onChange={handlePriority}
            />
            <label className="form-check-label">Medium</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="High"
              checked={priority === "High"}
              onChange={handlePriority}
            />
            <label className="form-check-label">High</label>
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Todo"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateTodo;
