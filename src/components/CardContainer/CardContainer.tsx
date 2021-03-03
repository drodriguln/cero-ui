import React, { forwardRef, ReactNode } from 'react';
import { Card as MuiCard } from '@material-ui/core';

type Props = {
  zIndex?: number;
  raised?: boolean;
  transparent?: boolean;
  className?: string;
  children: ReactNode;
}

const CardContainer = forwardRef(({
  zIndex = 0, raised = false, className, children,
}: Props, ref) => {
  const style = {
    backgroundColor: !raised ? 'rgba(40, 40, 40, 0.1)' : 'rgba(160, 160, 160, 0.5)',
    zIndex,
  }
  return (
    <MuiCard ref={ref} style={style} className={className} raised={raised}>
      {children}
    </MuiCard>
  );
});

export default CardContainer;
