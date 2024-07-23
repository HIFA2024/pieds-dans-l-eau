const {DataTypes}=require('sequelize')
const sequelize=require('../../indexx.js')


const blog = sequelize.define('blog',{
    content :{
        type:DataTypes.TEXT,
        allowNull: false
    },
image_url:{
    type:DataTypes.STRING,
}
})


module.exports=blog