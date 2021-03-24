import React from 'react';
import {Spinner} from "react-bootstrap";
import '../../styles/components/LoadingSpinner.scss';


const LoadingSpinner = ({className}: LoadingProps) => {
  return (
    <div className={`m-2 ${className}`}>
      <Spinner className='slow-spin' variant='danger' animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

interface LoadingProps {
  className?: any;
}

export default LoadingSpinner;
