const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    originalUser: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    addAdmins: [
      {
        user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        isAdmin: {
          type: Boolean,
        },
      },
    ],

    addFriends: [
      {
        user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        isFriend: {
          type: Boolean,
        },
      },
    ],
    friendRequests: [
      {
        user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        requested: {
          type: Boolean,
        },
      },
    ],

    profileImg: {
      type: String,
      default: 'picUploader/avatar.png',
    },
    facebookUrl: {
      type: String,
    },
    instagramUrl: {
      type: String,
    },
    privacy: {
      type: String,
    },
    hebBirthDate: {
      type: String,
    },
    wallImg: {
      type: String,
      default: 'picUploader/cover.png',
    },
    graveImg: {
      type: String,
      default: 'picUploader/grave.png',
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    birthDate: {
      type: String,
    },
    deathDate: {
      type: String,
    },
    hebDeathDate: {
      type: String,
    },
    gender: {
      type: String,
    },
    wazeLocation: {
      type: String,
    },
    googleLocation: {
      type: String,
    },
    description: {
      type: String,
    },
    gallery: {
      type: Array,
    },
    axisImages: {
      type: Array,
    },
    lifeAxis: {
      type: String,
    },
    privacy: {
      type: String,
    },
    degree: {
      type: String,
    },
    city: {
      type: String,
    },
    isMain: {
      type: Boolean,
    },
    objectYPos: {
      type: Number,
      default: 50,
    },
  },

  { timestamps: true }
);

const profileModel = mongoose.model('Profile', PostSchema);

module.exports = { profileModel };
