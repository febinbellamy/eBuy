import {Switch, Route, Router } from 'react-router-dom';
import Pay from './Pay';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/success">
          {/* <Success /> */}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
