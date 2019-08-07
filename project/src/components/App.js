import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./Header";
import TaskCreate from "./Tasks/TaskCreate";
import TaskHome from "./Tasks/TaskHome";
import TaskList from "./Tasks/TaskList";
import TaskEdit from "./Tasks/TaskEdit";
import TaskDelete from "./Tasks/TaskDelete";
import TaskGraph from "./Tasks/TaskGraph";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={TaskHome} />
          <Route path="/tasks" exact component={TaskList} />
          <Route path="/tasks/new" exact component={TaskCreate} />
          <Route path="/tasks/edit/:id" exact component={TaskEdit} />
          <Route path="/tasks/delete" exact component={TaskDelete} />
          <Route path="/tasks/graph" exact component={TaskGraph} />
        </div>
      </Router>
    </div>
  );
};

export default App;
