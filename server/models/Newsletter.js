import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/database.js';

const Newsletter = sequelize.define('Newsletter', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  source: {
    type: DataTypes.ENUM('contact-form', 'resources-page', 'footer', 'popup'),
    defaultValue: 'resources-page'
  },
  subscribed: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  subscribedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  unsubscribedAt: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'newsletters',
  timestamps: false
});

export default Newsletter;
