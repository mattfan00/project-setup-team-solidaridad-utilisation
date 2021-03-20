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
import BusinessJobView from "./View/Business/JobView"
import BusinessApplicant from "./View/Business/Applicant"
import BusinessSignin from "./View/Business/Signin"
import NewListing from "./View/Business/NewListing"
import DescriptionForm from "./View/Business/Description"

import Application from "./View/Applicant/Application"
import ApplicationSuccess from "./View/Applicant/Success"
import ApplcationSignin from "./View/Applicant/Signin"
import ApplcationSignup from "./View/Applicant/Signup"

import { AuthProvider } from "./Context/AuthContext"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* Landing route */}
          <Route exact path="/" component={Landing} />
          
          {/* All Business routes  */}

          <Route path="/business/signup" component={BusinessSignup} />
          <Route path="/business/signin" component={BusinessSignup} />
          <Route exact path="/business/dashboard" component={BusinessDashboard} />
          <Route exact path="/business/dashboard/applications" component={BusinessJobView}/>
          <Route exact path="/business/dashboard/applications/applicant" component={BusinessApplicant}/>
          <Route path="/business/listing/new" component={BusinessNewListing} />
          <Route path="/business/newlisting/description" component={DescriptionForm} />
          <Route path="/business/newlisting/elements" component={NewListing} />
          {/* All Applicant routes  */}
          <AuthProvider>
            <Route path="/application/signin" component={ApplcationSignin} />
            <Route path="/application/signup" component={ApplcationSignup} />
            <Route exact path="/application/:company/:job/success" component={ApplicationSuccess} />
            <Route exact path="/application/:company/:job" component={Application} />
          </AuthProvider>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
