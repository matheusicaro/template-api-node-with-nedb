let dataBase = require('nedb');
let db = new dataBase({
    filename: 'users.db',
    autoload: true      // assim que salvar o objeto, fica com ele na memoria para uso.
})

module.exports = (app)=>{

    let router = app.route('/users');

    router.get((req, res) => {

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

    router.post((req, res) => {

        if( !app.utils.validator.user(app, req, res) ) return false;    // se retornar false, é porque existe erros, então pare a execução do codigo retornando false.

        db.insert(req.body, (err, user) =>{
            
            if(err){
                app.utils.error.sendError(err, req, resp);
            }else{
                res.status(200).json(user);
            }
        })
    })

    let routerId = app.route('/users/:id');
    routerId.get((req, res) => {
        
        db.findOne({_id:req.params.id}).exec((err, user) => {

            if(err){
                app.utils.error.sendError(err, req, resp);
            }else{
                res.status(200).json(user);
            }
        });
    })

    routerId.put((req, res) => {
       
        if( !app.utils.validator.user(app, req, res) ) return false;    // se retornar false, é porque existe erros, então pare a execução do codigo retornando false.

        db.update({_id:req.params.id}, req.body, err => {

            if(err){
                app.utils.error.sendError(err, req, res);
            }else{
                res.status(200).json(Object.assign(req.params, req.body)); // object.assing é para juntar os objetos em um apenas, para mandar na resposta.
            }
        });
    })

    
    routerId.delete((req, res) => {

        db.remove({_id:req.params.id}, {}, err => {

            if(err){
                app.utils.error.sendError(err, req, res);
            }else{
                res.status(200).json({
                    'Success delete': req.params
                });
            }
        });
    })
    
}