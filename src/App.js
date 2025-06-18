import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss'

import { Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Nav class="navbar bg-dark text-light px-2 p-2 fs-3">
       <div class="container">
          <span><img src="../shaurma.png" style={{width: 30, height: 30, marginTop: -8}}/>Шаурма и точка</span>
       </div>
      </Nav>
    </div>
  );
}

export default App;
