// @flow

import React from 'react';
import {
  Button,
  Divider,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from '@material-ui/core';

import { Header } from '../containers/Login';
import Loader from './Loader.jsx';
import Footer from './Footer.jsx';
import styles from '../styles/';

type Props = {
  loadPersonalData: func
};

class Personal extends React.Component<Props> {
  constructor(props) {
    super(props);
    props.loadPersonalData();
  }

  render() {
    const { props } = this;
    const { personal } = styles;

    if (!props.personal.meta.isLoaded) {
      return (
        <Loader />
      );
    }

    return (
      <article>
        <Header />

        <section className={personal.main}>
          <List>
            {
              Object.values(props.personal.payload.data.user['user-id-01'].personal).map(d => (
                <section key={d.name}>
                  <ListItem button>
                    <ListItemIcon>
                      <Icon>folder</Icon>
                    </ListItemIcon>
                    <ListItemText primary={d.name} />
                    <ListItemSecondaryAction>
                      {
                        d.lock ?
                          <IconButton>
                            <Icon>lock</Icon>
                          </IconButton>
                          : null
                      }
                      <IconButton>
                        <Icon>more_vert</Icon>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </section>
              ))
            }

            <ListItem button>
              <ListItemIcon>
                <Icon>delete</Icon>
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem>
          </List>
        </section>

        <section className={personal.fab}>
          <Button variant="fab" color="primary">
            <Icon>add</Icon>
          </Button>
        </section>

        <Footer value="personal" />
      </article>
    );
  }
}

export default Personal;
