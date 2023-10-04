import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";


function CompanyDetail() {
  const [company, setCompany] = useState(null);

  const params = useParams();
  const handle = params.handle;

  useEffect(function getJobsAndCompany() {
    async function fetchCompanyInfo() {
      const company = await JoblyApi.getCompany(handle);
      setCompany(company);
    }
    fetchCompanyInfo();
  }, []);

  return (
    <div className="CompanyDetail">
      {company ?
        <>
          <h1>Jobs for {company.name}</h1>
          <p>{company.description}</p>
          <JobCardList jobs={company.jobs} />
        </>
        :
        <p>Still loading!</p>
      }

    </div>
  );
}


export default CompanyDetail;