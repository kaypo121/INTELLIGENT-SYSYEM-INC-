import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/database.js';

const Contact = sequelize.define('Contact', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  phone: {
    type: DataTypes.STRING
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  inquiryType: {
    type: DataTypes.ENUM('demo', 'enterprise', 'support', 'partnership', 'other'),
    allowNull: false
  },
  industry: {
    type: DataTypes.ENUM('healthcare', 'finance', 'manufacturing', 'retail', 'technology', 'other'),
    allowNull: false
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  subscribe: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  status: {
    type: DataTypes.ENUM('new', 'contacted', 'qualified', 'closed'),
    defaultValue: 'new'
  }
}, {
  tableName: 'contacts',
  timestamps: true
});

export default Contact;
