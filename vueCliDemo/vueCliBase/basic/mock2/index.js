const Mock = require('mockjs')
const util = require('./util')


module.exports = app=>{
    app.get('/api/index',function(req,res){
        const json = util.getJsonFile('./index.json')

        res.json(Mock.mock(json))
    })
}