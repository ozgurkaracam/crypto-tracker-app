const router=require('express').Router()
const axios=require('axios')
router.get('/marketdata/:id',function (req,res){
    const {id:assetId}=req.params
    axios.get(`https://data.messari.io/api/v1/assets/${assetId}/metrics/market-data`).then(response=>{
        res.json({data:response.data.data})
    }).catch(err=>{
        console.log(err.message)
    })
})

router.get('/profile/:id',function (req,res){
    const {id:assetKey}= req.params
    axios.get(`https://data.messari.io/api/v2/assets/${assetKey}/profile`).then(response=>{
        res.send(response.data)
    }).catch(err=>{
        console.log(err.message)
        res.json({message:err.message})
    })
})

module.exports=router