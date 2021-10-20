import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Campus from '../pages/Campus'
import Contact from '../pages/Contact'
import Courses from '../pages/Courses'
import Faq from '../pages/Faq'
import Home from '../pages/Home'
function AppRouter() {


  return (
    <Router>
      <Switch>
        <Route exact path={`/`} component={Home} />
        <Route exact path={`/institucion`} component={Courses} />
        <Route exact path={`/cursos`} component={Courses} />
        <Route exact path={`/galeria`} component={Courses} />
        <Route exact path={`/contacto`} component={Contact} />
        <Route exact path={`/sedes`} component={Campus} />
        <Route exact path={`/faq`} component={Faq} />
      </Switch>
    </Router>
  );
}

export default AppRouter;