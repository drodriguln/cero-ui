import { createStyles, makeStyles } from '@material-ui/core';

const backgroundStyles = createStyles({
  root: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    minHeight: '100%',
  },
});

const useStyles = (currentCardColor: string) => makeStyles({
  currentImage: {
    ...backgroundStyles.root,
    backgroundColor: currentCardColor,
    zIndex: 0,
    animation: '0.7s ease-out 0s 1 $fadein',
  },
  '@keyframes fadeout': {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0.65,
    },
  },
  '@keyframes fadein': {
    from: {
      opacity: 0.65,
    },
    to: {
      opacity: 1,
    },
  },
});

export default useStyles;
