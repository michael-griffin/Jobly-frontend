import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";


function CompanyDetail() {

  const initialCompanyInfo = {
    name: "",
    description: ""
  };
  const [company, setCompany] = useState(initialCompanyInfo);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jobs, setJobs] = useState([]);

  const params = useParams();
  const handle = params.handle;

  useEffect(function getJobsAndCompany() {
    async function fetchCompanyInfo() {
      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
      console.log("hurray success");
    }
    async function fetchJobsFromCompany() {
      const jobs = await JoblyApi.getJobsByCompany(handle);
      setJobs(jobs);
      setIsLoaded(true);
    }
    fetchCompanyInfo();
    fetchJobsFromCompany();

  }, []);

  // useEffect(function fetchJobsFromCompany(){
  //   async function fetchJobs() {
  //     //joblyApi will take care of this.
  //   }
  // }, [companyName])
  //query backend with yet to be determined function

  // const matchingJobs = jobData.filter(job => (
  //   job.companyHandle === companyName
  // ))

  return (
    <div className="CompanyDetail">
      {isLoaded ?
        <>
          <h1>Jobs for {company.name}</h1>
          <p>{company.description}</p>
          <JobCardList jobs={jobs} />
        </>
        :
        <p>Still loading!</p>
      }

    </div>
  );
}


export default CompanyDetail;