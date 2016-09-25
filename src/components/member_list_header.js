import React from 'react';

const MemberListHeader = () => {


  return (
    <li className = "row">
      <span className = "col-md-1">#</span>
      <span className = "col-md-5">Camper Name</span>
      <span className = "col-md-4">Points in past 30 days</span>
      <span className = "col-md-2">All time points </span>
    </li>
  );
};

export default MemberListHeader;
