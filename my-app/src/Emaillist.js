import React, { useEffect } from 'react';
import EmaillistSetting from './EmailSetting';
import EmailType from './EmailType';
import EmailBody from './Emailbody';
import { useState } from 'react';
import {db} from './firebaseFile';
import './Emaillist.css';
function Emaillist()
{

    const [emails, setEmails] = useState([]);

    useEffect(()=>{
         db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot =>{
             setEmails(snapshot.docs.map(doc =>({
                 id: doc.id,
                 data: doc.data()
             }))
         )})
    },[]);

    console.log(emails)
    return(
        <div className='emailist'>
           <EmaillistSetting />
           <EmailType />
        { emails.map(({id,data})=>{
            return <EmailBody name={data.to} subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}/>
        })
        }
        </div>
    )
}

export default Emaillist