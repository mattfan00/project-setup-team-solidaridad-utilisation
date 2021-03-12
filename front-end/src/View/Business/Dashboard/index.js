import { useHistory } from "react-router-dom"

const Dashboard = () => {
  const history = useHistory()
  return (
    <div>
      this is business home
      test
      
      <button onClick={() => history.push("/business/listing/new")}>new listing</button>
    </div>
  )
}

export default Dashboard