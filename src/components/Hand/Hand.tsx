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
    backgroundColor: 'rgba(255, 255, 255, 0.40)',
    zIndex: 1
  }
});

const Hand = React.forwardRef(({ className, children }: Props, ref) => {
  const classes = useStyles();
  return (
    <CardMat ref={ref} className={classNames(classes.root, className)} raised>
      {children}
    </CardMat>
  );
});

export default Hand;