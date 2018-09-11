let dataBase = require('nedb');
let db = new dataBase({
    filename: 'users.db',
    autoload: true      // assim que salvar o objeto, fica com ele na memoria para uso.
})

module.exports = (app)=>{

    app.get('/users', (req, res) => {

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            user:[{
                name: 'matheus',
                id: 1
            }]
        });
    })

    app.post('/users', (req, res) => {

        db.insert(req.body, (err, user) =>{
            
            if(err){
                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
                });

            }else{
                res.status(200).json(user);
            }
        })
    })
    
}