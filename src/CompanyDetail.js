import { useEffect } from "react";
import JobCardList from "./JobCardList";
import { useParams } from "react-router-dom";

function CompanyDetail () {
  const params = useParams(); // { name: ... }
  const companyName = params.name;

  useEffect(function fetchJobsFromCompany(){
    async function fetchJobs() {
      //joblyApi will take care of this.
    }
  }, [companyName])
  //query backend with yet to be determined function

  return (
    <div className="CompanyDetail">
      <h1>Company Details go here</h1>
    </div>
  )
}


export default CompanyDetail;