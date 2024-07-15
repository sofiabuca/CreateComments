//Create the comments for the post
module.exports = (sequelize, DataTypes) =>{
    //Variable that represent the module
    const Comments = sequelize.define("Comments",{
        commentBody:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    });
    return Comments;
};