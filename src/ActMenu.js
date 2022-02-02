import React from 'react';
import Activity from './Activity'

//This is the division that holds all activities and has a loading conditional return
const ActMenu = ({activities, loading}) => {
  if(loading){
    return<div>
      <h1>Loading</h1>
    </div>
  }else{
  return<div className="activities">
            {activities.map(act=>{
                return <Activity key={act._id} {...act} />
            })}
         </div>;
  }
};

export default ActMenu;
