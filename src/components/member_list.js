import React from 'react';
import MemberListHeader from './member_list_header';
import MemberListItem from './member_list_item';

const MemberList = (props) => {
  if(props.data.length === 0){
    return (
      <ul className = "member-list">
        <MemberListHeader />
        <h3>Loading...</h3>
      </ul>
    );
  }

  const data = props.data;
  var keyNum = 0;
  const allList = data.map((value, index) => {
    return <MemberListItem key = {keyNum ++ } num = {index+1} data={value}/>
  })

  return (
    <ul className = "member-list">
      <MemberListHeader getData={props.getData} getAllData={props.getAllData}/>
      {allList}
    </ul>
  );
};

export default MemberList;
