import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Icon, IconButton, Snackbar, TextField } from '@material-ui/core';


import Header from './Header.jsx';
import Footer from './Footer.jsx';
import styles from '../styles/';
  
class SpotDetail extends React.Component {

  render() {
    const { props } = this;
    const { spotDetail } = styles;

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
            background: 'url(https://upload.wikimedia.org/wikipedia/commons/5/54/Yurikamome7300wiki.jpg) center / cover',
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
            
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <TextField
            label="開始時刻"
            type="time"
            value="02:00"
            margin="dense"
            fullWidth
            
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
            <TextField
            label="終了時刻"
            type="time"
            value="04:00"
            margin="dense"
            fullWidth                        
          />
          <TextField
            label="開催概要"
            type="text"
            value="終電終了後の深夜のゆりかもめ、新橋駅〜芝浦駅までを３キロのランニングコースを設定しました。午前２時から４時までの２時間で非日常の東京を楽しみましょう"
            margin="dense"
            multiline = {true}
            fullWidth
            variant="outlined"                        
          />
           
          </section>
          <section
                    style={{
                      paddingLeft: '0vw',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingBottom: 56
                    }}
          >


        <iframe src="https://www.youtube.com/embed/y57nOtkYtWA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
          

          </section>
      </article>
    );
  }
}

export default SpotDetail;
