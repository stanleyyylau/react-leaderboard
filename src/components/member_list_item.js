import React from 'react';

const MemberListItem = (props) => {
  const data = props.data;
  const num = props.num;

  return (
    <li className = "row">
      <span className = "col-md-1 num">{num}</span>
      <span className = "col-md-5 name"><a href={"https://www.freecodecamp.com/"+data.username} target="_blank"><img className="avatar" src={data.img} />{data.username}</a></span>
      <span className = "col-md-4 points">{data.recent}</span>
      <span className = "col-md-2 all-time-points">{data.alltime}</span>
    </li>
  );
};

export default MemberListItem;
