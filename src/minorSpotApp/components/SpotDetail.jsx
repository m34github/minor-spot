import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Icon, IconButton, Snackbar, TextField } from '@material-ui/core';

import Header from './Header.jsx';
import Loader from './Loader.jsx';
import Footer from './Footer.jsx';
import styles from '../styles/';

class SpotDetail extends React.Component {
  render() {
    const { props } = this;
    const { spotDetail   } = styles;

    if (!props.location.state) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <article>
        <Header sub={true} />

                <section
          style={{
            background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Yurikamome7300wiki.jpg/300px-Yurikamome7300wiki.jpg) center / cover',
            width: '100vw',
            height: '25vh'
          }}
          className={spotDetail.cover}
        >        
        </section>

        <section className={spotDetail.main}>
        <TextField
            label="開催日時"
            type="date"
            defaultValue="2018-11-12"
            margin="dense"
            fullWidth
          />
          <TextField
            label="開始時刻"
            type="time"
            defaultValue="02:00"
            margin="dense"
            fullWidth
          />
            <TextField
            label="終了時刻"
            type="time"
            defaultValue="04:00"
            margin="dense"
            fullWidth
          />
           <TextField
            type="text"
            value="夜中のゆりかもめ、新橋駅から芝浦ふ頭駅までの３キロのランニングイベントを開催します！"
            margin="dense"
            fullWidth
          />
        </section>


      </article>
    );
  }
}

export default SpotDetail;
