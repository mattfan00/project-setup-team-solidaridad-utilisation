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
import ApplcationSignin from "./View/Applicant/Signin"
import ApplcationSignup from "./View/Applicant/Signup"

import { AuthProvider } from "./Context/AuthContext"
import { BusinessAuthProvider } from "./Context/BusinessAuthContext"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* Landing route */}
          <Route exact path="/" component={Landing} />
          
          {/* All Business routes  */}
          <BusinessAuthProvider>
            <Route exact path="/business/signup" component={BusinessSignup} />
            <Route exact path="/business/signin" component={BusinessSignin} />
            <Route exact path="/business/dashboard/applications/applicant" component={BusinessApplicant}/>
            <Route exact path="/business/dashboard/applications" component={BusinessJobView}/>
            <Route exact path="/business/dashboard" component={BusinessDashboard} />
            <Route exact path="/business/newlisting/description" component={BusinessNewListing} />
            {/* <Route exact path="/business/newlisting/description" component={DescriptionForm} /> */}
            {/* <Route exact path="/business/newlisting/elements" component={NewListing} /> */}
            <Route exact path="/business/dashboard/editprofile" component={BusinessEditProfile} />
          </BusinessAuthProvider>

          {/* All Applicant routes  */}
          <AuthProvider>
            <Route exact path="/application/signin" component={ApplcationSignin} />
            <Route exact path="/application/signup" component={ApplcationSignup} />
            <Route exact path="/application/:company/:job/success" component={ApplicationSuccess} />
            <Route exact path="/application/:company/:job" component={Application} />
          </AuthProvider>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
