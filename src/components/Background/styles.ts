import { createStyles, makeStyles } from '@material-ui/core';

const backgroundStyles = createStyles({
  root: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100%',
  },
});

const useStyles = (previousCardColor: string, currentCardColor: string) => makeStyles({
  previousImage: {
    ...backgroundStyles.root,
    backgroundImage: `radial-gradient(${previousCardColor}, ${previousCardColor})`,
    zIndex: -1,
    animation: '0.6s ease-in 0s 1 $fadeout',
  },
  currentImage: {
    ...backgroundStyles.root,
    backgroundImage: `radial-gradient(${currentCardColor} 10%, ${previousCardColor})`,
    zIndex: 0,
    animation: '0.6s ease-out 0s 1 $fadein',
  },
  '@keyframes fadeout': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  '@keyframes fadein': {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
});

export default useStyles;
