import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

import Landing from "./View/Landing"

import BusinessDashboard from "./View/Business/Dashboard"
import BusinessNewListing from "./View/Business/NewListing"
import BusinessSignup from "./View/Business/Signup"

import Application from "./View/Applicant/Application"
import NewListing from "./View/Business/NewListing"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* All Business routes  */}
          <Route path="/business/signup" component={BusinessSignup} />
          <Route path="/business/dashboard" component={BusinessDashboard} />
          <Route path="/business/listing/new" component={BusinessNewListing} />
          <Route path="/business/newlisting/elements" component={NewListing} />

          {/* All Applicant routes  */}
          <Route path="/application/:company/:job" component={Application} />

          {/* Landing route */}
          <Route exact path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
