import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import NotFound from './NotFound';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';


function RoutesList({ user, signup, login }) {

  return (
    <>
      {user ?
        <Routes>
          <Route path="/" element={<Homepage user={user} />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/signup" element={<Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        :
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignupForm handleSubmit={signup}/>} />
          <Route path="/login" element={<LoginForm handleSubmit={login}/>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      }
    </>
  );
}


export default RoutesList;
