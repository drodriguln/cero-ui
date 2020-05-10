import React from 'react';
import classNames from 'classnames';
import { Card as MuiCard, makeStyles } from '@material-ui/core';

type Props = {
  zIndex?: number;
  raised?: boolean;
  className?: string;
  children: React.ReactNode;
}

type StyleProps = {
  zIndex: number;
}

const useStyles = makeStyles({
  root: ({ zIndex }: StyleProps) => ({
    backgroundColor: 'rgba(40, 40, 40, 0.2)',
    zIndex: zIndex
  })
});

const CardMat = React.forwardRef(({ zIndex = 0, raised = false, className, children }: Props, ref) => {
  const classes = useStyles({ zIndex });
  return (
    <MuiCard ref={ref} className={classNames(classes.root, className)} raised={raised}>
      {children}
    </MuiCard>
  );
});

export default CardMat;