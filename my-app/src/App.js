import { Component, StrictMode } from 'react';
import './App.css';

const Header = () => {
  return <h2>one strock structure</h2>
}

/* const Field = () => {
  const holder = 'Enter here';
  const styleField = {
    width: '300px'
  }
  return <input
    placeholder={holder}
    type="text"
    style={styleField} />
} */

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styleField = {
      width: '300px'
    };
    return <input
      placeholder={holder}
      type="text"
      style={styleField} />
  }
}

function Btn() {
  const text = "log in";
  const logged = false;
  return <button>{logged ? 'enter' : "wait"}</button >
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Btn />
    </div>
  );
}

export { Header };
export default App;
