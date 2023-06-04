import React from 'react';
import {IconButton} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import RefreshIcon from "@material-ui/icons//Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

function EmaillistSetting()
{
    return(
        <div className='emailist_settings'>
            <div className='emailist_settings_left'>
            <IconButton>
                 <CheckBoxOutlineBlankIcon />
                 <ArrowDropDownRoundedIcon />
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
    )
}

export default EmaillistSetting