import React from "react";
import ReorderIcon from "@material-ui/icons/Reorder";
import {IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps'
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
             <IconButton>
                 <ReorderIcon>

                 </ReorderIcon>
             </IconButton>
             <img width="109px" height="40px" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png" alt="logo"></img>
            </div>
            <div className="header-middle">
                <div className="search_mail">
                <IconButton>
                 <SearchIcon>

                 </SearchIcon>
             </IconButton>
             <input type="text" placeholder="search_mail"></input> 
             <IconButton>
                 <ExpandMoreIcon>

                 </ExpandMoreIcon>
             </IconButton>
            </div>
        </div>
        <div className="header-right">
        <IconButton>
            <HelpRoundedIcon />
        </IconButton>
        <IconButton>
            <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
            <AppsIcon />
        </IconButton>
        </div>
        </div>
    )
}
<IconButton>
</IconButton>

export default Header;