import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


class Encyclopedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const tilesData = [
      {
        img: 'https://cdn.pixabay.com/photo/2015/07/06/20/12/lorenzo-833726_960_720.jpg',
        title: 'Race',
        author: 'All About The Lean',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2017/03/29/21/27/motorcycle-2186589_960_720.jpg',
        title: 'Coummute',
        author: 'Everydayer',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2017/08/17/15/23/harley-davidson-2651708_960_720.jpg',
        title: 'Cruiser',
        author: 'Good Ole Boys',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343_960_720.jpg',
        title: 'Naked',
        author: 'Tight Jeans Day',
      },
      {
        img: 'https://cdn.pixabay.com/photo/2017/10/30/12/15/monument-valley-2902313_960_720.jpg',
        title: 'Tourer',
        author: 'Better Posture',
      },

    ];

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 700,
        height: 450,
        overflowY: 'auto',
      },
    };
    return (
      <div className='home'>
        <div style={styles.root}>
          <GridList
            cellHeight={180}
            style={styles.gridList}
          >
            <Subheader
              style={{ fontSize: '34', color: '#000000' }}
            >Pick your poison</Subheader>
            {tilesData.map((tile) => (
              <GridTile
                key={tile.img}
                title={tile.title}
                subtitle={<span> <b>{tile.author}</b></span>}
                actionIcon={<IconButton><StarBorder color='white' /></IconButton>}
              >
                <img src={tile.img} />
              </GridTile>
            ))}
          </GridList>
        </div>
        );

      </div >

    );
  }
}

export default Encyclopedia;
