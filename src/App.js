import {BrowserRouter, Route , Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import SubarraySum from './Page/SubarraySum';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/subarray" exact component={SubarraySum} />
          <Route render={()=><div className="main_title_error">404 : Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
