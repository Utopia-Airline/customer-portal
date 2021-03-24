import React from 'react';
import '../../styles/components/LinearProgress.scss';

const LinearProgress = () => {
  return (
    <div className="progress"
         style={{position: "relative"}}>
      <div className="progress-bar indeterminate"
           style={{width: "100%", height: "3px"}}/>
    </div>
  );
};

export default LinearProgress;
