module.exports = {

    user:(app, req, res)=>{

        req.assert('name', 'O nome é obrigatorio!').notEmpty();
        req.assert('email', 'O e-mail está invalido').notEmpty().isEmail();

        let errors = req.validationErrors();  // returna um array de erros se existir conforme validação acima. Se não existir erro, vai ser 'undefined' === false
        console.log("app", app);
        if(errors){
            app.utils.error.sendError(errors, req, res);
            return false;
        
        }else{
            return true;
        }
    }
};