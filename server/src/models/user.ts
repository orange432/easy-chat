import { Sequelize, DataTypes } from "sequelize";
const DB_URI = process.env.DB_URI!
const sequelize = new Sequelize(DB_URI);

const User = sequelize.define('user',{
  id: { type: DataTypes.UUIDV4},

})

export default User;