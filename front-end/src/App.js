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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* All Business routes  */}
          <Route path="/business/signup" component={BusinessSignup} />
          <Route path="/business/dashboard" component={BusinessDashboard} />
          <Route path="/business/listing/new" component={BusinessNewListing} />

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
