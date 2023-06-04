import React from 'react';
import './Emaillist.css';
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import './Emaillist.css';
import { openMessage } from './Features/mailSlice';
import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
function EmailBody({name,subject,message,time})
{
    const history = useNavigate();
    const dispatch = useDispatch();
    const setMail = ()=>{
          dispatch(openMessage({
              name,subject,message,time
          }));

          history.push('/mail');
    }
    return(
        <div className="emailbody" onClick={setMail}>
            <div className="emailbody_left">
              <CheckBoxOutlineBlankIcon />
              <StarBorderIcon />
              <LabelOutlinedIcon />
              <h4>{name}</h4>
            </div>
            <div className="emailbody_middle">
            <div className="emailbody_middle_message">
                 <p><b>{subject}</b>{message}</p>
                </div>
            </div>
            <div className="emailbody_right">
                 <p>{time}</p>
            </div>

        </div>)
}

export default EmailBody;