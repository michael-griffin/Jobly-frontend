import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import { useState } from "react";
// import api from './api';

function JobList() {
  const [jobs, setJobs] = useState([]);

  function filterList(searchTerm) {


  }


  return (
    <div className="JobList">
      <SearchForm handleList={filterList}/>
      <JobCardList />

    </div>
  )
}

export default CompanyList;
