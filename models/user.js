"use strict";
const {
  Model
} = require("sequelize");
const {isBefore}=require('date-fns');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {User.hasMany(models.Task,{
      foreignKey:"userId"
    });
      // define association here
    }
  }
  User.init({
    firstName: {
      field:"first_name",
      type:DataTypes.STRING(64),
      allowNull: false
    },
    lastName: {
      field:"last_name",
      type:DataTypes.STRING(64),
      allowNull: false},
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    password: {
      field:"password_hash",
      type:DataTypes.TEXT,
      allowNull: false,
    validate:{
      notNull:true,
      notEmpty:true,
    },
    set(v){
      this.setDataValue('password','password_hash')
    }
    },
    birthday: {type:DataTypes.DATEONLY,
      validate:{
        isDate:true,
        isValidate(value){
          if(isBefore(new Date(),new Date(value))){
            throw new Error('check your birthday')
          }
        }
      }
    },
    isMale: {
      field:"is_male",
      type:DataTypes.BOOLEAN,
      
    },
 
  }, {
    sequelize,
    modelName: "User",
    tableName:"users",
    underscored:true

  });
  return User;
};