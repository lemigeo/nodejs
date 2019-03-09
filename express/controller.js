const Repository = require('./repository');

module.exports.createUser = async(user_id) => {
    let now = new Date();
    let result = await Repository.createUser({
        user_id: user_id,
        create_dt: now,
        update_dt: now
    });
    if(result !== null) {
        return result.dataValues;
    }
    return result;
};

module.exports.getUser = async(idx) => {
    return await Repository.getUser(idx);
};