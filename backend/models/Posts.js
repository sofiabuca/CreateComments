//Create a table
//Export a function that gives access to sequelize and DataTypes
module.exports = (sequelize, DataTypes) =>{
    //Variable that represent the module
    const Posts = sequelize.define("Posts",{
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        userName:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade",
        })
    };

    return Posts;
};