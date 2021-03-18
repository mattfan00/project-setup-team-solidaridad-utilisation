import React from "react"
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

import Landing from "./View/Landing"

import BusinessDashboard from "./View/Business/Dashboard"
import BusinessNewListing from "./View/Business/NewListing"
import BusinessSignup from "./View/Business/Signup"
import NewListing from "./View/Business/NewListing"
import DescriptionForm from "./View/Business/Description"

import Application from "./View/Applicant/Application"
import ApplicationSuccess from "./View/Applicant/Success"
import ApplcationSignin from "./View/Applicant/Signin"
import ApplcationSignup from "./View/Applicant/Signup"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* All Business routes  */}
          <Route path="/business/signup" component={BusinessSignup} />
          <Route path="/business/dashboard" component={BusinessDashboard} />
          <Route path="/business/listing/new" component={BusinessNewListing} />
          <Route path="/business/newlisting/description" component={DescriptionForm} />
          <Route path="/business/newlisting/elements" component={NewListing} />

          {/* All Applicant routes  */}
          <Route path="/application/signin" component={ApplcationSignin} />
          <Route path="/application/signup" component={ApplcationSignup} />
          <Route path="/application/:company/:job/success" component={ApplicationSuccess} />
          <Route path="/application/:company/:job" component={Application} />

          {/* Landing route */}
          <Route exact path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
