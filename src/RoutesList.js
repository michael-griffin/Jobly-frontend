import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import NotFound from './NotFound';

//still need catch route "*"
function RoutesList() {
  return (

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:name" element={<CompanyDetail />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

  );
}

export default RoutesList;
