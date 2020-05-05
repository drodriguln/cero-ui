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
    backgroundColor: 'rgba(255, 255, 255, 0.40)',
    padding: 10,
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