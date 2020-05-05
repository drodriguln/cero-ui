import React from 'react';
import { makeStyles } from '@material-ui/core';

import { CardColor } from '../../store/types';

type Props = {
  children?: React.ReactNode;
}

type GlobalStyleProps = {
  backgroundColor: {
    previous: CardColor,
    current: CardColor;
  };
}

const useStyles = makeStyles({
  root: ({backgroundColor}: GlobalStyleProps) => ({
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundImage: `radial-gradient(
      ${backgroundColorMap[backgroundColor.current]} 50%,
      ${backgroundColorMap[backgroundColor.previous]}
    )`,
    minHeight: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  })
});

const backgroundColorMap = {
  blue: 'rgb(145, 179, 236)',
  green: 'rgb(150, 236, 145)',
  red: 'rgb(236, 151, 145)',
  yellow: 'rgb(244, 243, 184)'
}

const Background = ({ children }: Props) => {
  /*
  const [backgroundColor, setBackgroundColor] = React.useState({
    previous: 'green' as CardColor,
    current: 'blue' as CardColor,
  });
   */

  const classes = useStyles({
    backgroundColor: {
      previous: 'green' as CardColor,
      current: 'blue' as CardColor,
    }
  });

  /*
  const onChangeBackground = () => {
    const newColor = backgroundColor.current === 'green' ? 'blue' : 'green';
    setBackgroundColor({ previous: backgroundColor.current, current: newColor });
    console.log(backgroundColorMap[backgroundColor.previous], backgroundColorMap[backgroundColor.current])
  }
   */

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

export default Background;