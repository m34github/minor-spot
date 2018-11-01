import React from 'react';
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Switch
} from '@material-ui/core'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { Header } from '../containers/Login';
import styles from '../styles/';

class PasswordGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        length: 10,
        numbers: false,
        symbols: false,
        uppercase: false,
        strict: true
      }
    };
  }

  render() {
    const { props, state } = this;
    const { passwordGenerator } = styles;

    const handleChange = (option) => {
      this.setState({
        options: Object.assign({}, state.options, option)
      });
    };

    return (
      <article>
        <Header sub={true} title="Generate password" />

        <section>
          <List>
            <ListItem>
              <ListItemText primary="Use UPPERCASE" />
              <ListItemSecondaryAction>
                <Switch
                  color="primary"
                  checked={state.options.uppercase}
                  onChange={(event, action) => { handleChange({uppercase: action}); }}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Use symbol characters" />
              <ListItemSecondaryAction>
                <Switch
                  color="primary"
                  checked={state.options.symbols}
                  onChange={(event, action) => { handleChange({symbols: action}); }}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Use numbers" />
              <ListItemSecondaryAction>
                <Switch
                  color="primary"
                  checked={state.options.numbers}
                  onChange={(event, action) => { handleChange({numbers: action}); }}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary={state.options.length + " characters"} />
            </ListItem>
            <ListItem>
              <Slider
                value={state.options.length}
                min={6}
                max={20}
                step={1}
                onChange={(value) => { handleChange({length: value}); }}
                trackStyle={passwordGenerator.track}
                handleStyle={passwordGenerator.handle}
                railStyle={passwordGenerator.rail}
              />
            </ListItem>
          </List>
        </section>

        <section className={passwordGenerator.bottomButton}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              props.generatePassword(state.options);
              props.history.goBack();
            }}
          >
            Generate
          </Button>
        </section>
      </article>
    );
  }
}

export default PasswordGenerator;
