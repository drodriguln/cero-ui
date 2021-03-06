import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Button, makeStyles } from '@material-ui/core';

export type PaginatorClasses = {
  root?: string;
  children?: string;
};

type Props = {
  page: number;
  lastPage: number;
  onChange: (page: number) => void;
  children: ReactNode;
  classes?: PaginatorClasses;
};

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  button: {
    flex: '0 0 40px',
    minWidth: '40px',
    color: 'white',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
  },
  buttonLeft: {
    borderRadius: '4px 0 0 4px',
  },
  buttonRight: {
    borderRadius: '0 4px 4px 0',
  },
  buttonLabel: {
    transform: 'scale(4)',
  },
  children: {
    overflowX: 'auto',
    width: 760,
    flex: 1,
  },
});

const Paginator = ({
  page, lastPage, onChange, children, classes: externalClasses,
}: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        classes={{
          root: classNames(classes.button, classes.buttonLeft, externalClasses?.root),
          label: classes.buttonLabel,
        }}
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
      >
        &lsaquo;
      </Button>
      <div className={classNames(classes.children, externalClasses?.children)}>
        {children}
      </div>
      <Button
        classes={{ root: classNames(classes.button, classes.buttonRight), label: classes.buttonLabel }}
        onClick={() => onChange(page + 1)}
        disabled={page === lastPage}
      >
        &rsaquo;
      </Button>
    </div>
  );
};

export default Paginator;
