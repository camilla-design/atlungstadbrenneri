const Mailchimp = require("mailchimp-api-v3")
require("dotenv").config({ path: __dirname + "/variables.env"});

const mcApiKey = process.env.MAILCHIMP_API_KEY;
const listId = process.env.MAILCHIMP_LIST_ID;

exports.handler = async (event, context, callback) => {
  try {
    const mailchimp = new Mailchimp(mcApiKey);
    return mailchimp.post(`lists/${listId}/members`, {
      email_address: event.queryStringParameters.email,
      status: "påmeldt"
    }).then(res => {
      console.log('Success!', res.email_address)
      return {
        statusCode: 200,
        body: JSON.stringify({msg: `Tusen takk! Email adressen ${res.email_address} har blitt lagt til vår nyhetsbrev liste.`})
      }
    }).catch(err => {
      console.log(err.message)
      return {
        statusCode: 500,
        body: JSON.stringify({msg: err.message})
      }
    })
  } catch (err) {
    console.log(err.message)
    return {
      statusCode: 500,
      body: JSON.stringify({msg: err.message})
    }
  }
};