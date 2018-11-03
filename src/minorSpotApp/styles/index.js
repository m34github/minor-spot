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

const login = {
  root: css({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0 10vw 0 10vw'
  }),
  paper: {
    background: 'rgba(255, 255, 255, 0.7)',
    padding: '5vh 10vw 5vh 10vw'
  },
  textField: css({
    paddingBottom: '5vh'
  }),
  backdrop: css({
    background: 'url(/assets/img/misc/login-backdrop.jpg) center / cover'
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

const personal = {
  main: css({
    paddingBottom: 56
  }),
  fab: css({
    position: 'fixed',
    bottom: 18 + 56,
    right: 18
  })
};

const password = {
  main: css({
    paddingBottom: 56
  }),
  fab: css({
    position: 'fixed',
    bottom: 18 + 56,
    right: 18
  })
};

const passwordRegister = {
  cover: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  title: {
    color: colors.grey[50],
    fontSize: 'x-large',
    fontWeight: 'bold'
  },
  label: {
    color: colors.grey[50],
  },
  main: css({
    paddingLeft: 18,
    paddingRight: 18
  }),
  bottomButton: css({
    position: 'fixed',
    bottom: 0,
    width: '100vw'
  })
};

const passwordGenerator = {
  bottomButton: css({
    position: 'fixed',
    bottom: 0,
    width: '100vw'
  }),
  track: {
    height: 10
  },
  handle: {
    height: 20,
    width: 20,
    background: theme.palette.primary.main,
    border: 'none'
  },
  rail: {
    height: 10
  }
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
  login,
  header,
  loader,
  personal,
  password,
  passwordRegister,
  passwordGenerator,
  footer
};
