import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import HeightIcon from '@material-ui/icons/Height';
import CloseIcon from '@material-ui/icons/Close';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import LinkIcon from '@material-ui/icons/Link';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import PhotoIcon from '@material-ui/icons/Photo';
import PhonelinkLockIcon from '@material-ui/icons/PhonelinkLock';
import CreateIcon from '@material-ui/icons/Create';
import MoreVertIcon  from '@material-ui/icons/MoreVert';
import DeleteIcon  from '@material-ui/icons/Delete';
import './compose.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { closeSendMessage } from './Features/mailSlice';
import {db} from './firebaseFile';
import firebase from './firebaseFile';
function Compose()
{
    const [to,setTo] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
        if(to==="")
        {
            return alert("to is Required");
        }
        if(subject==="")
        {
            return alert("subject is Required");
        }
        if(message==="")
        {
            return alert("message is Required");
        }
        db.collection("emails").add({
         to,subject,message,timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setTo("");
        setSubject("");
        setMessage("");
        alert(`Email sent successfully`);
        dispatch(closeSendMessage());
    }
   const dispatch = useDispatch();
    return( 
        <div className='compose'>
        <div className='compose_header'>
        <div className='compose_header_left'>
         New Message
        </div>
        <div className='compose_header_right'>
        <RemoveIcon />
        <HeightIcon />
        <CloseIcon onClick={()=>dispatch(closeSendMessage())}/>
        </div>
        </div>
        <form onSubmit={formSubmit}>
        <div className='compose_body'>
            <div className='compose_bodyForm'>
                <input type="mail" placeholder='Receipents' value={to} onChange={(e)=>setTo(e.target.value)}/>
                <input type="text" placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                <textarea rows={20} value={message} onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>
            </div>
        </div>
        <div className='compose_footer'>
            <div className='compose_footerLeft'>
                <button type='submit'>
                    Send <ArrowDropDownIcon/>
                </button>
            </div>    
            <div className='compose_footerRight'>
                <FormatColorTextIcon />
                <AttachFileIcon />
                <LinkIcon />
                <InsertEmoticonIcon />
                <NoteAddIcon />
                <PhotoIcon />
                <PhonelinkLockIcon />
                <CreateIcon />
                <MoreVertIcon />
                <DeleteIcon />
            </div>
        </div>
        </form>
        </div>
    )
}

export default Compose;