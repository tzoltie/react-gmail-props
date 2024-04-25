import { useState } from 'react'
import InboxList from "./InboxList"
import EmailList from './EmailList'

export default function Emails({initialEmails}) {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

    return (
        <>
          <InboxList emails={emails} hideRead={hideRead} currentTab={currentTab} setHideRead={setHideRead} setCurrentTab={setCurrentTab}/>
          <EmailList emails={emails} hideRead={hideRead} currentTab={currentTab} toggleRead={toggleRead} toggleStar={toggleStar}/>
        </>
    )
}