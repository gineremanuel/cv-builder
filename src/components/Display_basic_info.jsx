import { Fragment } from 'react';

const DisplayBasicInfo = ({ data }) => {
  if (!data) return null;
  return (
    <div className="displayInformation">
      <h2>Personal Information</h2>
      <p>Name: {data.name} </p>
      <p>Email: {data.email} </p>
      <p>Phone Number: {data.phoneNumber}</p>
      <p>Address: {data.address} </p>
    </div>
  )
}

export default DisplayBasicInfo;