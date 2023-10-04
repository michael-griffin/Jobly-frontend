import SearchBar from "./SearchBar";
import JobCardList from "./JobCardList";
import { useEffect, useState } from "react";
import JoblyApi from './api';
import _ from "lodash"; //possible alternative: import {debounce} from "lodash"

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(function getJobs() {
    async function getJobsFromApi() {
      const jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobsFromApi();
  }, []);

  const debounceTime = 1000; //time in ms
  const debounceSearch = _.debounce(searchJobsFromApi, debounceTime);

  async function searchJobsFromApi(searchTerm) {
    const jobs = await JoblyApi.getJobs(searchTerm);
    setJobs(jobs);
  }

  //previously handleSubmit, now handleChange
  return (
    <div className="JobList">
      <SearchBar handleSearch = {debounceSearch} />
      <JobCardList jobs={jobs} />
    </div>
  );
}

export default JobList;
