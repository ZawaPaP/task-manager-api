const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'cqcsolid@gmail.com',
        subject: 'Thanks for joining us!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendFollowUpEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'cqcsolid@gmail.com',
        subject: 'Are you sure to leave?',
        text: `Hi, ${name}. Let me ask why you leave our app`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFollowUpEmail
}