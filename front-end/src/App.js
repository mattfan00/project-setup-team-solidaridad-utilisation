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
// import NewListing from "./View/Business/NewListing"
// import DescriptionForm from "./View/Business/Description"
import BusinessEditProfile from "./View/Business/EditProfile"

import Application from "./View/Applicant/Application"
import ApplicationSuccess from "./View/Applicant/Success"
import ApplicationSignin from "./View/Applicant/Signin"
import ApplicationSignup from "./View/Applicant/Signup"

import { AuthProvider } from "./Context/AuthContext"
import { BusinessAuthProvider } from "./Context/BusinessAuthContext"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* Landing route */}
          <Route exact path="/" component={Landing} />

          <AuthProvider>
            {/* All Business routes  */}
            <Route exact path="/business/signup" component={BusinessSignup} />
            <Route exact path="/business/signin" component={BusinessSignin} />
            <Route exact path="/business/dashboard/applications/:applicantID" component={BusinessApplicant}/>

            {/* <Route exact path="/business/dashboard/applications" component={BusinessJobView}/> */}
            <Route exact path="/business/dashboard/job/:jobID" component={BusinessJobView}/>
            <Route exact path="/business/dashboard" component={BusinessDashboard} />
            <Route exact path="/business/newlisting/description" component={BusinessNewListing} />
            <Route exact path="/business/dashboard/editprofile" component={BusinessEditProfile} />
            {/* <Route exact path="/business/newlisting/description" component={DescriptionForm} /> */}
            {/* <Route exact path="/business/newlisting/elements" component={NewListing} /> */}

            {/* All Applicant routes  */}
            <Route exact path="/application/signin/job/:job" component={ApplicationSignin} />
            <Route exact path="/application/signup/job/:job" component={ApplicationSignup} />
            <Route exact path="/application/:job/success" component={ApplicationSuccess} />
            <Route exact path="/application/:job" component={Application} />
          </AuthProvider>

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
