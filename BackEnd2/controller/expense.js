 const Expense = require('../model/expense');


 exports.saveDataToDatabase = async(req, res, next) => {
    try{
        const data = await Expense.create({
            description : req.body.description,
            price : req.body.amount,
            category : req.body.category,
        });
        res.status(201).json(data);
    }
    catch(error){
        console.log(error);
    }
 };



exports.deleteFromDatabase = async(req, res, next)=>{
    try{
        const id = req.params.id;
        const data = await Expense.destory({where:{id:id}})
        res.status(200).json({message:'Deleted Successfully'})
    }
    catch(error){
        console.log(error);
    }
}



exports.editDataInDatabase = async (req,res,next)=>{
    try{
        const id = req.params.id;

        const data = await Expense.update({
            description : req.body.description,
            price : req.body.price,
            category : req.body.category,
        },{where:{id:id}});

        const updateData = await Expense.findByPk(id)
        res.status(200).json(updateData.dataValues);
    }
    catch(error){
        console.log(error);
    }
}



exports.getAllDataFromDatabase = async(req ,res ,next)=>{
    try{
        const dbData = await Expense.findAll()
        const data = dbData.map(data => data.dataValues);
        res.status(201).json(data);
    }
    catch(err){
        console.error('Error Saving Data : ',err);
        res.status(500).json({error: 'Error getting data to the database'});
    }
}
