const Repository = require('./repository');

module.exports.createUser = async(user_id) => {
    try {
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
    }
    catch(error) {
        console.log(error);
        return null;
    }
};

module.exports.getUser = async(idx) => {
    try {
        return await Repository.getUser(idx);
    }
    catch(error) {
        console.log(error);
        return null;
    }
};