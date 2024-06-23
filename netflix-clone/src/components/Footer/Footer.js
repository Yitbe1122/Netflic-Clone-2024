import React from 'react'
import "./footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
function Footer() {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className='footer_data'>
          <div>
            <ul>
               <li>Audio Description</li>
               <li>Investor Relations</li>
               <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>terms of use</li>
              <li>corporate information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>media center</li>
              <li>privacy</li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
        <div className='service_code'>
          <p>
            Service Code
          </p>
        </div>
        <div className='copy_write'>
          &copy; 1997-2024 Neflix, Inc.
        </div>
      </div>
    </div>
  )
}

export default Footer