import React from 'react'; 
import './index.css'; 
import 'antd/dist/antd.css'; 

import { Button } from 'antd'; 

const Landing = () => {
  return (
    // <body className="Landing-body">
      <div className="business-main">
          <h1>Copply</h1>
          <h2>Making the application process seamless for both parties</h2>
        <p>Are you an applicant or Company?</p> 
<<<<<<< HEAD
        <div class="button">
          <Button size="large" href="/application/signup">Applicant</Button>
=======
        <div className="signup-buttons">
          <Button size="large" href="/applicant/signup">Applicant</Button>
>>>>>>> cbf34bf94edf37e74f272f33046f892dc79a548e
          <Button size="large" href="/business/signup">Company</Button>
        </div>
      </div>
    // </body>
  )
}

export default Landing