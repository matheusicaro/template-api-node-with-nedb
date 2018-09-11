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
    
}