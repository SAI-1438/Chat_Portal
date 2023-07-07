const {login} = require ('../Controller/Api')

const apiroutes = require ('express').Router()

apiroutes.post("/login",login)

module.exports = apiroutes