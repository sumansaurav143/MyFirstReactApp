
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">Tic Tac Toe</div>
        <div id="board">
          <div className="grid-row">
            <div className="grid-item" onClick="playTurn(this)" id="1"></div>
            <div className="grid-item" onClick="playTurn(this)" id="2"></div>
            <div className="grid-item" onClick="playTurn(this)" id="3"></div>
          </div>
          <div className="grid-row">
            <div className="grid-item" onClick="playTurn(this)" id="4"></div>
            <div className="grid-item" onClick="playTurn(this)" id="5"></div>
            <div className="grid-item" onClick="playTurn(this)" id="6"></div>
          </div>
          <div className="grid-row">
            <div className="grid-item" onClick="playTurn(this)" id="7"></div>
            <div className="grid-item" onClick="playTurn(this)" id="8"></div>
            <div className="grid-item" onClick="playTurn(this)" id="9"></div>
          </div>
        </div>
      </div>grid[5]
    </div>
      );
}

      export default App;
