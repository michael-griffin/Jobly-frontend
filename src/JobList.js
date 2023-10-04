import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import { useEffect, useState } from "react";
import JoblyApi from './api';


function JobList() {
  const [jobs, setJobs] = useState([]);


  useEffect(function getJobs(){ async function getJobsFromApi() {
    const resp = await JoblyApi.getJobs();
    const jobs = await resp.json();
    setJobs(jobs);
  }
    getJobsFromApi();
  }, [])

  function filterList(searchTerm) {
    console.log('tried to filter!');
  }


  return (
    <div className="JobList">
      <SearchForm handleList={filterList}/>
      <JobCardList jobs={jobs}/>
    </div>
  )
}

export default JobList;
