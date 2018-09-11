let dataBase = require('nedb');
let db = new dataBase({
    filename: 'users.db',
    autoload: true      // assim que salvar o objeto, fica com ele na memoria para uso.
})

module.exports = (app)=>{

    app.get('/users', (req, res) => {

        db.find({}).sort({name:1}).exec((err, user) => {

            if(err){
                app.utils.error.sendError(err, req, resp);
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    user : user
                });
            }
        });
    })

    app.post('/users', (req, res) => {

        db.insert(req.body, (err, user) =>{
            
            if(err){
                app.utils.error.sendError(err, req, resp);
            }else{
                res.status(200).json(user);
            }
        })
    })
    
}