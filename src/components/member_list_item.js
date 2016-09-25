import React from 'react';

const MemberListItem = (props) => {
  const data = props.data;

  return (
    <li className = "row">
      <span className = "col-md-1 num">1</span>
      <span className = "col-md-5 name"><img className="avatar" src={data.img} />{data.username}</span>
      <span className = "col-md-4 points">{data.recent}</span>
      <span className = "col-md-2 all-time-points">3145</span>
    </li>
  );
};

export default MemberListItem;
