import React from 'react';
import { useState } from 'react';
import UserSubmissionForm from './UserSubmissionForm';
import AdminDashboard from './AdminDashboard';
import './App.css'

const App = () => {
  const [submissions, setSubmissions] = useState([]);

  const handleNewSubmission = (submission) => {
    setSubmissions([...submissions, submission]);  // Store submissions in state
  };

  return (
    <div>
      <h1 className="h1">User Submission Form</h1>
      <UserSubmissionForm onSubmit={handleNewSubmission} />
      <AdminDashboard submissions={submissions} />
    </div>
  );
};

export default App;