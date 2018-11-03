import { colors } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { css } from 'emotion';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.lightBlue[600]
    },
    text: {
      primary: colors.blueGrey[900]
    }
  },
  typography: {
    useNextVariants: true
  }
});

const header = {
  root: css({
    flexGrow: 1
  }),
  grow: css({
    flexGrow: 1
  })
};

const loader = {
  root: css({
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  })
}

const spotList = {
  main: css({
    paddingBottom: 56
  }),
  fab: css({
    position: 'fixed',
    bottom: 18 + 56,
    right: 18
  })
};

const spotRegist = {
  cover: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }),
  main: css({
    padding: '12px 24px 12px 24px',
    paddingBottom: 56
  }),
  button: css({
    position: 'fixed',
    bottom: 0,
    width: '100vw'
  })
};

const footer = {
  root: css({
    position: 'fixed',
    bottom: 0,
    width: '100vw'
  })
};

export default {
  theme,
  header,
  loader,
  spotList,
  spotRegist,
  footer
};
