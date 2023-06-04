import React from "react";
import './Emaillist.css';
import {IconButton, Avatar} from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReplyIcon from '@material-ui/icons/Reply';
import StarIcon from '@material-ui/icons/Star';
import RefreshIcon from "@material-ui/icons//Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectedMail } from './Features/mailSlice';

function EmailDetail()
{
    const selectedMail = useSelector(selectedMail);
    const history = useNavigate();
    return (
        <div className="emaildetail">
          <div className='emaildetails_header'>
            <div className='emaildetails_headerLeft'>
            <IconButton>
                 <ArrowBackIcon onClick={()=>history.push('/')}/>
             </IconButton>
             <IconButton>
                 <RefreshIcon />
             </IconButton>
             <IconButton>
                 <MoreVertIcon />
             </IconButton>
            </div>
            <div className='emailist_settings_right'>
              <p>1-50 of 10,220</p>
              <IconButton>
              <ChevronLeftIcon />
              </IconButton>
              <IconButton>
              <ChevronRightIcon />
              </IconButton>
            </div>
        </div>
        <div className="emaildetails_message">
        <div className="emaildetails_middleheader">
           <div className="emaildetails_middleheaderLeft">
           <IconButton>
               <Avatar />
            </IconButton>
            <h4>This is Subject</h4>
            <p>naveen@gmail.com</p>
           </div>

           <div className="emaildetails_middleheaderRight">
               <p>Mon. 12 Jul 2021 14:23:14 GMT</p>
           <IconButton>
               <StarIcon />
            </IconButton>
            <IconButton>
               <ReplyIcon />
            </IconButton>
            <IconButton>
               <MoreVertIcon />
            </IconButton>
           </div>

        </div>
        </div>
        </div>
    )
}

export default EmailDetail;