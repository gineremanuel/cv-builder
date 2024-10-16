import { Fragment } from 'react';

const DisplayEducationInfo = ({ data }) => {
  if (!data) return null;
  return (
    <div className='displayInformation'>
      <h3>Education</h3>
      <p>School: {data.school}</p>
      <p>Degree: {data.degree}</p>
      <p>Start Date: {data.startDate}</p>
      <p>End Date: {data.endDate}</p>
    </div>
  )
}

export default DisplayEducationInfo;