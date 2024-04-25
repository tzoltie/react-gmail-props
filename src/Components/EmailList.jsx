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
          {filteredEmails.map((email, index) => (
            <li
              key={index}
              className={`email ${email.read ? 'read' : 'unread'}`}
            >
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email)}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStar(email)}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          ))}
        </ul>
      </main>
    )
}