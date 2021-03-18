import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'

const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img src="https://lh3.googleusercontent.com/proxy/7A-PHeUEkF_0_ORDfZxZ-yWNsKVk_19y-k_w2-s3W-1JdzaIlrTrDXi0yhFO4rlwvLtcDsyKiUMS7REuN__qjY5auIuf-kQ7lElN9UXOOeWqvldgbus52bsbEJxjUw82zWE" alt="" className="header__logo" />
      <IconButton>
      <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  )
}

export default Header
