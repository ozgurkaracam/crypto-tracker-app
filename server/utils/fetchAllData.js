const axios=require('axios')

const fetchAllData=()=>{
    return axios.get("https://data.messari.io/api/v2/assets?fields=id,slug,symbol,metrics/market_data/price_usd").then(res=>{
        const {data:{data:results}}= res
        const newArr=results.map(result=>{
            return {
                id:result.id,
                symbol:result.symbol,
                slug:result.slug,
                price:result.metrics.market_data.price_usd
            }
        })
        return newArr
    })
}

module.exports=fetchAllData