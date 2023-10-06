import "./JobCard.css";
import { useContext } from "react";
import userContext from "./userContext";


/** Displays Job Card with info on company, salary, equity. */
function JobCard({title, companyHandle, salary, equity, jobId} ){
  const { user, apply } = useContext(userContext);
  console.log("JOB Card context", user, apply);

  return (
    <div className="JobCard">
      <h6>{title}</h6>
      <p>{companyHandle}</p>
      <div><small>Salary: {salary}</small></div>
      <div><small>Equity: {equity}</small></div>
      <button onClick={() => apply(user.username, jobId)}>Apply</button>
    </div>
  )
}


export default JobCard;