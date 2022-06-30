const Router = require('express');
const { Memory } = require('../models/Memory');
const { Notifications } = require('../models/Notifications');
const NotificationsRouter = Router();
const Email = require('../utils/email');

//Send Notification
NotificationsRouter.post('/sendNotificationEmail', async (req, res) => {
  try {
    await new Email({email:req.body.email}).sendFriendNotification(
      req.body.userName,
      req.body.profileName
    );

  } catch (error) {
    res.send(error);
  }
});

//Update User
NotificationsRouter.post('/addnotifications', async (req, res) => {
  try {
    let { profileId, loggedInId, notificationType } = req.body;
    console.log(loggedInId);
    let createNotifications = new Notifications({
      memoryCreatorNotification: profileId,
      logedInUser: loggedInId,
      notificationType: notificationType,
    });
    let res = await createNotifications.save();
    res.send(res);
  } catch (error) {
    res.send(error);
  }
});

NotificationsRouter.get('/getallNotifications', (req, res) => {
  Notifications.find({})
    .sort({ createdAt: -1 })
    .populate('memoryCreatorNotification')
    .populate('logedInUser') // key to populate
    .then((resonse) => {
      if (!resonse) {
        return res.status(404).json({
          message: 'data not found',
        });
      }
      res.json(resonse);
    });
});

module.exports = { NotificationsRouter };
