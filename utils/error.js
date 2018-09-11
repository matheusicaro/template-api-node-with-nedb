module.exports = (app) =>{

    sendError: (err, req, resp, code=400) => {
        
        console.log(`error: ${err}`);
                res.status(400).json({
                    error: err
        });
    }
}