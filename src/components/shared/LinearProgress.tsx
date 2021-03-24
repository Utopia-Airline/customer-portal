import React from 'react';
import '../../styles/components/LinearProgress.scss';
import {ProgressBar} from "react-bootstrap";

const LinearProgress = () => {
  return (
    <div className="progress"
         style={{position: "relative"}}>
      <ProgressBar className="progress-bar indeterminate"
           style={{width: "100%", height: "3px"}}/>
    </div>
  );
};

export default LinearProgress;
