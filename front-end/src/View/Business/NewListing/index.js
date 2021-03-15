import ExtraQuestions from "./ExtraQuestions/ExtraQuestions";
import './index.css';

const NewListing = () => {
  return (
    <>
      <div className="header">
          The header!
      </div>
      <div className="grid-container">
        <div className="menu">
          <ExtraQuestions></ExtraQuestions>
        </div>
        <div className="template">

        </div>
      </div>
    </>
  )
}

export default NewListing