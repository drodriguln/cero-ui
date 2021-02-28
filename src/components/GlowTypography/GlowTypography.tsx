import React from 'react';
import { makeStyles, Typography, TypographyProps } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles({
  root: {
    color: 'DimGray',
    animation: '$glow 2.5s ease-in-out infinite alternate',
  },
  '@keyframes glow': {
    from: {
      textShadow: '0 0 15px PaleGoldenRod, 0 0 30px PaleGoldenRod, 0 0 20px PaleGoldenRod, 0 0 15px PaleGoldenRod, '
        + '0 0 20px PaleGoldenRod, 0 0 25px PaleGoldenRod',
    },
    to: {
      textShadow: '0 0 20px #ffec80, 0 0 15px #ffec80, 0 0 25px #ffec80, 0 0 15px #ffec80, '
        + '0 0 30px #ffec80, 0 0 25px #ffec80',
    },
  },
});

const GlowTypography = ({ children, className, ...otherProps }: TypographyProps) => {
  const classes = useStyles();
  return <Typography className={classNames(classes.root, className)} {...otherProps}>{children}</Typography>;
};

export default GlowTypography;
