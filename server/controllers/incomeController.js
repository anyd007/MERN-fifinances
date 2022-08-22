const Income = require('../models/incomeModel')
const mongoose = require('mongoose')

//pobieranie wszystkich przychodów
const getIncomes = async (req, res) =>{
    //find({}) - pobiera wszyskie dokunety z IncomeModel
    //sort({createAt: -1}) - sortuje wyświtlanie -1 od najnowszej
    const incomes = await Income.find({}).sort({createAt: -1})
    res.status(200).json(incomes)
}

//pobieranie jednego przychodu
const getSingleIncome = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
     return res.status(404).json({error: "nie ma takiego przychodu"})
    }

    const income = await Income.findById(id)

    if(!income){
    return res.status(404).json({error: "nie ma takiego przychodu"})
    }
    res.status(200).json(income)
}

//twożenie przuchodu
const createIncome = async (req, res)=>{
    const { title, incomeAmount, incomeDate, description } = req.body
    //dodawanie dokumentu do bazy danych
    try{
        const income = await Income.create({ title, incomeAmount, incomeDate, description })
        res.status(200).json(income)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//kasowanie pojedyńczego przychodu
const deleteIncome = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
     return res.status(404).json({error: "nie ma takiego przychodu"})
    }

    const income = await Income.findOneAndDelete({_id:id})

    if(!income){
        return res.status(400).json({error: "nie ma takiego przychodu"})
        }
        res.status(200).json(income)
}

//updateowanie przychodu
const updateIncome = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
     return res.status(404).json({error: "nie ma takiego przychodu"})
    }

    const income = await Income.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!income){
        return res.status(400).json({error: "nie ma takiego przychodu"})
        }
        res.status(200).json(income)

}

module.exports = {
    createIncome,
    getSingleIncome,
    getIncomes, 
    deleteIncome,
    updateIncome
}