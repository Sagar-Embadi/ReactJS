const transporter = require('../config/emailConfig');

const sendNewTaskEmail = async (to, taskDetails) => {
  const mailOptions = {
    from: `"Timetable Scheduler" <${process.env.EMAIL_USER}>`,
    to,
    subject: `New Task Added: ${taskDetails.title}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Task Created</h2>
        <p><strong>Task:</strong> ${taskDetails.title}</p>
        <p><strong>Due:</strong> ${new Date(taskDetails.dueDate).toLocaleString()}</p>
        <p><strong>Description:</strong> ${taskDetails.description || 'No description provided'}</p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};

const sendOverdueTaskEmail = async (to, taskDetails) => {
  const mailOptions = {
    from: `"Timetable Scheduler" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Task Overdue: ${taskDetails.title}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ff0000;">Task Overdue!</h2>
        <p><strong>Task:</strong> ${taskDetails.title}</p>
        <p><strong>Was Due:</strong> ${new Date(taskDetails.dueDate).toLocaleString()}</p>
        <p>Please complete this task as soon as possible.</p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendNewTaskEmail, sendOverdueTaskEmail };