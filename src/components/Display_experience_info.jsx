import { Fragment } from 'react';

const DisplayExperienceInfo = ({ data }) => {
  if (!data) return null;
  return (
    <div className='displayInformation'>
      <h3>Work Experience</h3>
      <p>Employer: {data.employer}</p>
      <p>Job Title: {data.jobTitle}</p>
      <p>Main Responsabilities: {data.mainResponsabilities}</p>
      <p>Start Date: {data.startDate}</p>
      <p>End Date: {data.endDate}</p>
    </div>
  )
}

export default DisplayExperienceInfo;