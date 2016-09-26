import React, {Component} from 'react';

function MemberListHeader (props) {

    return (
      <li className = "row">
        <span className = "col-md-1">#</span>
        <span className = "col-md-5">Camper Name</span>
        <span className = "col-md-4 recent" onClick = { props.getData }>Points in past 30 days</span>
        <span className = "col-md-2 all-time" onClick = {  props.getAllData }>All time points </span>
      </li>
    );


};

export default MemberListHeader;
