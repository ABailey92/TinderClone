import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from '@material-ui/core/IconButton'



const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton>
        <ReplayIcon style={{color: 'red'}} className="swipeButtons__repeat" fontSize="large"></ReplayIcon></IconButton>
      <IconButton>
        <CloseIcon style={{color: 'orange'}} className="swipeButtons__repeat"
        fontSize="large" />
      </IconButton>
      <IconButton>
        <StarRateIcon style={{color: 'pink'}} className="swipeButtons__repeat"
          fontSize="large" />
      </IconButton>
      <IconButton>
        <FavoriteIcon style={{color: 'blue'}} className="swipeButtons__repeat"
          fontSize="large" />
      </IconButton>
      <IconButton>
        <FlashOnIcon style={{color: 'purple'}} className="swipeButtons__repeat"
          fonSize="large" />
      </IconButton>



    </div>
  )
}

export default SwipeButtons
