import React from 'react';
import 'antd/dist/antd.css';
import Home from '../src/scenes/Home/Home';
import Login from '../src/scenes/Login/Login';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Register from '../src/scenes/Register/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/home/" component={Home} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
      </Router>
    </div>
  );
}

export default App;
