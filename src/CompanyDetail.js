import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import { useParams } from "react-router-dom";
import jobData from "./utils/jobDataSmall";


function CompanyDetail () {
  const params = useParams();
  const companyName = params.name;

  const [jobs, setJobs] = useState([]);

  useEffect( function getJobsFromCompany(){

    const matchingJobs = jobData.filter(job => (
      job.companyHandle === companyName
    ))
    setJobs(matchingJobs);
  }, []);

  // useEffect(function fetchJobsFromCompany(){
  //   async function fetchJobs() {
  //     //joblyApi will take care of this.
  //   }
  // }, [companyName])
  //query backend with yet to be determined function

  return (
    <div className="CompanyDetail">
      <h1>Jobs for {companyName}</h1>
      <JobCardList jobs={jobs}/>
    </div>
  )
}


export default CompanyDetail;