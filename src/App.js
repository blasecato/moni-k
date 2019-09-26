import React from 'react';
import 'antd/dist/antd.css';
import Home from '../src/scenes/Home/Home';
import Login from '../src/scenes/Login/Login';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Register from '../src/scenes/Register/Register';
import List_usuario from '../src/scenes/list-usuario/List_usuario';
import Store from '../src/scenes/Store/Store';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/home/" component={Home} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
        <Route path="/usuarios/" component={List_usuario} />
        <Route path="/store/" component={Store} />
      </Router>
    </div>
  );
}

export default App;
