/*    FOR ROOT STORE    */

const { sendEmail } = require('@/helpers').default

export default {
  SEND_EMAIL: async (context, data) => {
    const response = await sendEmail(data.name, data.email, data.phone, data.subject, data.message)
    console.log(response)
    context.commit(response.status === 200 ? 'EMAIL_SUCCESS' : 'EMAIL_FAILURE')
  }
}
