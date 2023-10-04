import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import { useEffect, useState } from "react";
// import api from './api';
import jobData from "./utils/jobDataSmall";


function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(function getJobs(){
    //This will eventually be a fetch request.
    setJobs(jobData);
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
