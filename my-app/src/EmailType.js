import React from 'react';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './Emaillist.css';
function EmailType()
{
    return(
        <div className='EmailType'>
           <div className='EmailTypeOptions EmailTypeOptions--active'>
               <InboxIcon />
                <p>Primary</p>
           </div>
           <div className='EmailTypeOptions'>
               <PeopleIcon />
                <p>Social</p>
           </div>
           <div className='EmailTypeOptions'>
               <LocalOfferIcon />
                <p>Promotions</p>
           </div>
        </div>
    )
}

export default EmailType;