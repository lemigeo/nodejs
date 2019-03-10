const Sequelize = require('sequelize');

const sequelize = new Sequelize('schema', 'username', 'password', {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true,
    },
    timezone: '+08:00',
    pool: {
        max: 5,
        min: 1,
        acquire: 3000,
        idle: 10000
    },
    // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
    operatorsAliases: false
});

const User = sequelize.define('user', {
    idx:  {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true },
    user_id: Sequelize.STRING(45),
    create_dt: Sequelize.DATE, 
    update_dt: Sequelize.DATE, 
});

module.exports.createUser = (async(info) => {
    return await User.build(info).save();
});

module.exports.getUser = (async(idx) => {
    return await User.findOne({
        where: {
            idx: idx
        }
    });
});