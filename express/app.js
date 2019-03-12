const Express = require("express");
const Parser = require('body-parser');
const User = require('./user');

const app = Express();
app.use(Parser.json());
app.use(Parser.urlencoded({ extended: true }));

app.post('/user/create', async(req, res) => {
    console.log(req.body.user_id);
    const user = await User.createUser(req.body.user_id);
    if(user && user.idx !== null){
        res.status(200).send({
            result: true,
            idx: user.idx,
            user_id : user.user_id,
        });
    }
    else {
        res.status(200).send({
            result: false
        });
    }
});

app.get('/user/:idx', async(req, res) => {
    const user = await User.getUser(req.params.idx);
    if(user !== null) {
        res.status(200).send({
            result: true,
            user: user
        });
    }
    else {
        res.status(200).send({
            result: false
        });
    }
});

const server = app.listen(9091, function () {
    console.log('api server running');
});