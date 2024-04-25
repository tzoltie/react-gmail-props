import Email from "./Email"

export default function EmailList({emails, hideRead, currentTab, toggleRead, toggleStar}) {

    const getReadEmails = emails => emails.filter(email => !email.read)

    const getStarredEmails = emails => emails.filter(email => email.starred)
    
      let filteredEmails = emails

    if (hideRead) filteredEmails = getReadEmails(filteredEmails)

    if (currentTab === 'starred')
      filteredEmails = getStarredEmails(filteredEmails)

    return (
        <main className="emails">
        <ul>
          <Email filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar}/>
        </ul>
      </main>
    )
}