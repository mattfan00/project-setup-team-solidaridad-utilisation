import { useHistory } from "react-router-dom"
import JobList from "../../../Components/Dashboard/JobList"

const Dashboard = () => {
  const history = useHistory()
  return (
    <div>
      this is business home
      test
      <JobList></JobList>
      <button onClick={() => history.push("/business/listing/new")}>new listing</button>
    </div>
  )
}

export default Dashboard