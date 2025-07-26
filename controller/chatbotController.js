const {processQuery}=require('../services/chatbotService');

exports.handleQuery=(req,res)=>{
    const{query}=req.body;

    if(!query){
        return res.status(400).json({erroe:'Query is required'});
    }
    const response=processQuery(query);
    res.json({response});
}; 