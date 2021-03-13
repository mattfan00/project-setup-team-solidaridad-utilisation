import { useHistory } from "react-router-dom"
import JobList from "../../../Components/Dashboard/JobList"
import {Button} from "antd"

//import stylesheet

const Dashboard = () => {
  const history = useHistory()
  return (
    <div>
      <h1>Welcome to your business dashboard</h1>
      <div>
        <Button 
          type="primary"
          onClick={() => history.push("/business/listing/new")}
        >
          new job listing
        </Button>
      </div>
      
      <JobList></JobList>
      
    </div>
  )
}

export default Dashboard