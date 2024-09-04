import i1 from "./assets/1.jpg";
import i2 from "./assets/2.jpg";
import i3 from "./assets/3.jpg";
import i4 from "./assets/4.jpg";
import i5 from "./assets/5.jpg";
import i6 from "./assets/6.jpg";
import i7 from "./assets/7.jpg";
import i8 from "./assets/8.jpg";
import i9 from "./assets/9.jpg";
import i11 from "./assets/11.jpg";
import i12 from "./assets/12.jpg";
import i13 from "./assets/13.jpg";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <a target="_blank">
          <img src={i1} className="logo" alt="i1" />
        </a>
        <a target="_blank">
          <img src={i2} className="logo" alt="i2" />
        </a>
        <a target="_blank">
          <img src={i3} className="logo" alt="i3" />
        </a>
        <a target="_blank">
          <img src={i4} className="logo" alt="i4" />
        </a>
        <a target="_blank">
          <img src={i5} className="logo" alt="i5" />
        </a>
        <a target="_blank">
          <img src={i6} className="logo" alt="i6" />
        </a>
        <a target="_blank">
          <img src={i7} className="logo" alt="i7" />
        </a>
        <a target="_blank">
          <img src={i8} className="logo" alt="i8" />
        </a>
        <a target="_blank">
          <img src={i9} className="logo" alt="i9" />
        </a>
        <a target="_blank">
          <img src={i11} className="logo" alt="i11" />
        </a>
        <a target="_blank">
          <img src={i12} className="logo" alt="i12" />
        </a>
        <a target="_blank">
          <img src={i13} className="logo" alt="i13" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
