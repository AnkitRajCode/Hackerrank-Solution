import {BrowserRouter, Route , Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import SubarraySum from './Page/SubarraySum';
import TaskOfPairing from './Page/TaskOfPairing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/subarray" exact component={SubarraySum} />
          <Route path="/Task-of-Pairing" exact component={TaskOfPairing} />
          <Route render={()=><div className="main_title_error">404 : Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
