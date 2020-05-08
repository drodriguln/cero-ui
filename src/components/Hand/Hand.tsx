import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';

import CardMat from '../CardMat';

type Props = {
  className?: string;
  children: React.ReactNode;
}

const useStyles = makeStyles({
  root: {
    margin: 10,
    maxWidth: 'calc(100% - 40px)', // strip margin and padding
    overflow: 'visible',
    backgroundColor: 'rgba(40, 40, 40, 0.2)',
    zIndex: 1
  }
});

const Hand = React.forwardRef(({ className, children }: Props, ref) => {
  const classes = useStyles();
  return (
    <CardMat ref={ref} className={classNames(classes.root, className)}>
      {children}
    </CardMat>
  );
});

export default Hand;