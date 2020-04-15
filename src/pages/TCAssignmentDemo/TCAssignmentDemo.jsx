import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPropsSelector} from 'reselect-immutable-helpers';
import * as $ from 'jquery';
import {getRoute} from './../TCAssignmentHome/selectors'
import './TCAssignmentDemo.module.scss';
import sampleResponse from './../../temp/sampleResponse.json'

const TCAssignmentDemo = ({route}) => {

  if (!route) {
    route = sampleResponse
  }
  // console.log(route)
  const ilist = [];
  for (let i = 0; i < 10; i++) {
    const jlist = []
    ilist[i] = jlist
    for (let j = 0; j < 10; j++) {
      jlist[j] = (i + 1) + "-" + (j + 1);
    }
  }

  // console.log(ilist)

  let emptygrid = ilist.map((jlist, keyRow) => {
    return <div className={`row iRow-${keyRow + 1}`} id={`row-${keyRow + 1}`} key={keyRow}>
          <div className="col-1"/>
          {
            jlist.map((num, keyCol) => {
              return <div className={`col-1 jCol-${keyCol + 1}`} id={`col-${(keyRow + 1) + "-" + (keyCol + 1)}`} key={keyCol} onClick={(ev) => ev.target.classList.add("tile-animation")}>{num}</div>
            })
          }
          <div className="col-1" />
      </div>
  })

  const delayLoop = (fn, y, delay) => {
    return (x, i) => {
      setTimeout(() => {
        fn(x, y);
      }, i * delay);
    }
  }

  const animateTile = (tile, previousTileDetails) => {
    const identifier = "col-" + tile.row + "-" + tile.column
    const allowedTilesString = tile.allowedMoves
    const allowedTilesList = allowedTilesString.split(",  ")
    let previousAllowedTileList = previousTileDetails.previousAllowedTileList
    const previousElement = previousTileDetails.previousElement
    previousElement && previousElement.classList.remove('current-tile');
    previousAllowedTileList.length > 0
      && previousAllowedTileList.forEach(tileElement => {
        tileElement.classList.remove('tile-highlighted')
      })
    previousAllowedTileList.splice(0, previousAllowedTileList.length)
    allowedTilesList && allowedTilesList.forEach(tile => {
      const rowNcol = tile.split('-')
      const identifier = "col-" + rowNcol[0] + "-" + rowNcol[1]
      const element = document.getElementById(identifier)
      if (element == null) {
        console.log(allowedTilesList)
      }
      previousAllowedTileList.push(element)
      element.classList.add('tile-highlighted')
    })
    const element = document.getElementById(identifier)
    const elemjq = $(element)
    const position = elemjq.text()
    const spanelem = $('<span />')
    spanelem.append(position)
    $(element).empty();
    $(element).append(spanelem);
    element.classList.add('tile-animation', 'current-tile')
    previousTileDetails.previousElement = element;
    console.log(element);
  }

  const startTour = () => {
    let previousTileDetails = {};
    previousTileDetails.previousAllowedTileList = []
    route && route.forEach(delayLoop(animateTile, previousTileDetails, 1000))
  }

  return (
    <div className="c-TCAssignmentDemo">
      <button type="button" className="btn btn-primary" onClick={startTour}>Start Tour</button>
      <div className="container">
        {emptygrid}
      </div>
    </div>
  );
};

TCAssignmentDemo.propTypes = {
  route: PropTypes.array
};

const mapStateToProps = createPropsSelector({
  route: getRoute
})

export default connect(mapStateToProps)(TCAssignmentDemo)