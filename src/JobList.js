import SearchBar from "./SearchBar";
import JobCardList from "./JobCardList";
import { useEffect, useState } from "react";
import JoblyApi from './api';
import _ from "lodash"; //possible alternative: import {debounce} from "lodash"


/* Displays a list of jobs (which can be narrowed by Search)
 *
 * Props: None
 *
 * State:
 *  - jobs: The list of jobs
 *  - isError: Whether the API call is successful/not. If not, redirects to NotFound page.
 *
 * App -> RoutesList -> JobList -> JobCardList -> JobCard
 */
function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(function getJobs() {
    async function getJobsFromApi() {
      const jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    }
    getJobsFromApi();
  }, []);

  const debounceTime = 1000; // Time in ms
  const debounceSearch = _.debounce(searchJobsFromApi, debounceTime);

  async function searchJobsFromApi(searchTerm) {
    const jobs = await JoblyApi.getJobs(searchTerm);
    setJobs(jobs);
  }

  // Previously handleSubmit, now handleChange
  return (
    <div className="JobList">
      <SearchBar handleSearch = {debounceSearch} />
      <JobCardList jobs={jobs} />
    </div>
  );
}

export default JobList;
