import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");
  const add = () => {
    setCount(count + 1);
    setError("");
  };

  const sub = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
      setError("has to be greater than zero to work");
    }
  };

  const reset = () => {
    setCount(0);
    setError("");
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="mb-4">Counter App</h1>

      <div className="align-items-center mb-3">
        <h2 className="text-center  me-4 ">{count}</h2>

        <div className="d-flex">
          <button onClick={add} className="btn btn-success me-3">
            Add
          </button>
          <button onClick={reset} className="btn btn-warning me-3">
            Reset
          </button>
          <button onClick={sub} className="btn btn-danger">
            Subtract
          </button>
        </div>
      </div>

      <div>
        <p className="fw-bold fs-5 text-danger">{error}</p>
      </div>
    </div>
  );
}

export default App;
