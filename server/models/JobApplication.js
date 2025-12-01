import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/database.js';

const JobApplication = sequelize.define('JobApplication', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  jobTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
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
  resumeUrl: {
    type: DataTypes.STRING
  },
  coverLetter: {
    type: DataTypes.TEXT
  },
  linkedIn: {
    type: DataTypes.STRING
  },
  portfolio: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.ENUM('submitted', 'reviewing', 'interview', 'offer', 'rejected', 'hired'),
    defaultValue: 'submitted'
  }
}, {
  tableName: 'job_applications',
  timestamps: true
});

export default JobApplication;
