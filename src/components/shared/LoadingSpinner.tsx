import React from 'react';
import {Spinner} from "react-bootstrap";
import '../../styles/components/LoadingSpinner.scss';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStylesFacebook = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
    },
    bottom: {
      color: `${theme.palette.grey[200]} !important`,
    },
    top: {
      color: '#1a90ff',
      animationDuration: '550ms',
      position: 'absolute',
      left: 0,
    },
    circle: {
      strokeLinecap: 'round',
    },
  }),
);
const LoadingSpinner = ({className, style}: LoadingProps) => {
  const classes = useStylesFacebook();
  return (
    <div className={`d-flex m-2 ${className} justify-content-center align-items-center align-self-center`}
         style={style}>
      {/*<Spinner className='slow-spin' variant='danger' animation="border" role="status">*/}
      {/*  <span className="sr-only">Loading...</span>*/}
      {/*</Spinner>*/}
      <div className={classes.root}>
        <CircularProgress
          variant="determinate"
          className={classes.bottom}
          size={70}
          thickness={2.5}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={70}
          thickness={2.5}
        />
      </div>
    </div>
  );
};

interface LoadingProps {
  className?: any;
  style?: any;
}

export default LoadingSpinner;
