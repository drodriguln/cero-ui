import React from 'react';
import { makeStyles, Typography, TypographyProps } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles({
  root: {
    color: 'PaleGoldenRod',
    animation: '$glow 1.5s ease-in-out infinite alternate',
  },
  '@keyframes glow': {
    from: {
      textShadow: '0 0 10px gold, 0 0 20px gold, 0 0 30px gold, 0 0 40px gold, '
        + '0 0 70px gold, 0 0 80px gold, 0 0 100px gold, 0 0 150px gold',
    },
    to: {
      textShadow: '0 0 5px gold, 0 0 10px gold, 0 0 15px gold, 0 0 20px gold, '
        + '0 0 35px gold, 0 0 40px gold, 0 0 50px gold, 0 0 75px gold',
    },
  },
});

const GlowTypography = ({ children, className, ...otherProps }: TypographyProps) => {
  const classes = useStyles();
  return <Typography className={classNames(classes.root, className)} {...otherProps}>{children}</Typography>;
};

export default GlowTypography;
