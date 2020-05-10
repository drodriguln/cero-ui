import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

type Props = {
  page: number;
  lastPage: number;
  onChange: (page: number) => void;
  children: React.ReactNode;
}

const useStyles = makeStyles({
  root: {
    display: 'flex'
  },
  button: {
    flex: '0 0 30px',
    minWidth: '30px',
    width: '30px',
    borderRadius: 0,
    color: 'white'
  },
  buttonLabel: {
    transform: 'scale(4)',
  },
  children: {
    width: 760,
    flex: 1
  }
});

const Paginator = ({ page, lastPage, onChange, children }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        classes={{root: classes.button, label: classes.buttonLabel}}
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        &lsaquo;
      </Button>
      <div className={classes.children}>
        {children}
      </div>
      <Button
        classes={{root: classes.button, label: classes.buttonLabel}}
        onClick={() => onChange(page + 1)}
        disabled={page === lastPage}
      >
        &rsaquo;
      </Button>
    </div>
  );
}

export default Paginator;