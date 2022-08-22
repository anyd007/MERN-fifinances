const express = require('express')

const { createIncome, getSingleIncome, getIncomes, deleteIncome, updateIncome } = require('../controllers/incomeController')

const router = express.Router()

//pobieranie wszystkich przychodów
router.get('/', getIncomes)

//pobieranie pojedyńczego przychodu
router.get('/:id', getSingleIncome)

//tworzenie nowego przychodu
router.post('/', createIncome)

//kasowanie pojedyńczego przychodu
router.delete('/:id', deleteIncome)

//updateowanir przychodu
router.patch('/:id', updateIncome)

module.exports = router