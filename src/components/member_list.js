import React from 'react';
import MemberListHeader from './member_list_header';
import MemberListItem from './member_list_item';

const MemberList = (props) => {
  const data = props.data;
  var keyNum = 0;
  const allList = data.map((value) => {
    return <MemberListItem key = {keyNum ++ } data={value}/>
  })

  return (
    <ul className = "member-list">
      <MemberListHeader />
      {allList}
    </ul>
  );
};

export default MemberList;
