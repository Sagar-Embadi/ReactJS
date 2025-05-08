const cron = require('node-cron');
const { sendOverdueTaskEmail } = require('../services/emailService');
const { db } = require('firebase-admin'); // Assuming you've set up Firebase Admin

const checkOverdueTasks = () => {
  // Run every hour
  cron.schedule('0 * * * *', async () => {
    const now = new Date();
    const tasksRef = db.collection('tasks');
    const snapshot = await tasksRef
      .where('dueDate', '<', now)
      .where('isCompleted', '==', false)
      .get();

    snapshot.forEach(async (doc) => {
      const task = doc.data();
      const user = await db.collection('users').doc(task.userId).get();
      
      if (user.exists) {
        await sendOverdueTaskEmail(user.data().email, {
          title: task.title,
          dueDate: task.dueDate.toDate()
        });
      }
    });
  });
};

module.exports = { checkOverdueTasks };