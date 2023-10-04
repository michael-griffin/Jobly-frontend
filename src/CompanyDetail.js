import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import { useParams, Navigate } from "react-router-dom";
import JoblyApi from "./api";


function CompanyDetail() {
  const [company, setCompany] = useState(null);
  // const [message, setMessage] = useState("is loading");
  const [isError, setIsError] = useState(false);

  const params = useParams();
  const handle = params.handle;

  useEffect(function getJobsAndCompany() {
    async function fetchCompanyInfo() {
      try {
        const company = await JoblyApi.getCompany(handle);
        setCompany(company);
      } catch (err){
        setIsError(true);
        // return <Navigate to="/NotFound" />
        // setMessage(<Navigate to="/NotFound" />)
        // setMessage(err[0].message);
      }
    }
    fetchCompanyInfo();
  }, []);

  return (
    <div className="CompanyDetail">
      {isError && <Navigate to="/NotFound" />}
      {company ?
        <>
          <h1>Jobs for {company.name}</h1>
          <p>{company.description}</p>
          <JobCardList jobs={company.jobs} />
        </>
        :
        <p>{"is loading"}</p>
      }

    </div>
  );
}


export default CompanyDetail;