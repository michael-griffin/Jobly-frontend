import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import { useEffect, useState } from "react";
import JoblyApi from './api';


function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(function getJobs() {
    async function getJobsFromApi() {
      const jobs = await JoblyApi.getJobs();
      console.log("jobs list is: ", jobs);
      setJobs(jobs);
    }
    getJobsFromApi();
  }, []);

  function filterList(searchTerm) {
    console.log('tried to filter!');
  }


  return (
    <div className="JobList">
      <SearchForm handleList={filterList} />
      <JobCardList jobs={jobs} />
    </div>
  );
}

export default JobList;
