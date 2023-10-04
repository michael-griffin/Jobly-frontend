import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import { useEffect, useState } from "react";
import JoblyApi from './api';


function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(function getJobs() {
    async function getJobsFromApi() {
      const jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobsFromApi();
  }, []);


  async function searchJobsFromApi(searchTerm) {
    const jobs = await JoblyApi.getJobs(searchTerm);
    setJobs(jobs);
  }


  return (
    <div className="JobList">
      <SearchForm handleSubmit={searchJobsFromApi} />
      <JobCardList jobs={jobs} />
    </div>
  );
}

export default JobList;
