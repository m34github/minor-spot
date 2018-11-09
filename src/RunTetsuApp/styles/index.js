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

const top = {
  root: css({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0 10vw 0 10vw'
  }),
  paper: {
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '5vh 10vw 5vh 10vw'
  },
  textField: css({
    paddingBottom: '5vh'
  }),
  backdrop: css({
    background: 'url(/assets/img/misc/top-2.jpg) center / cover'
  })
};

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

const spotDetail = {
  cover: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }),
  main: css({
    padding: '12px 24px 12px 24px'
  }),
  button: css({
    position: 'fixed',
    bottom: 0,
    width: '100vw'
  })
};

const spotRegist = {
  cover: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'url(/assets/img/misc/cover.jpg) center / cover',
    width: '100vw',
    height: '25vh'
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

const routeSelect = {
  map: css`
    height: calc(100vh - 88px);
    width: 100vw;
  `,
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
  top,
  header,
  loader,
  spotList,
  spotDetail,
  spotRegist,
  routeSelect,
  footer
};
