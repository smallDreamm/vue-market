import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store=new Vuex.Store({
    state:{
        carPanelData:[]
    },
    getters:{
        //购物车计算数量
        totleCount(state){
            let count=0
            state.carPanelData.forEach(goods=>{
              count+=goods.count
            })
              return count
        },
        // 购物车计算价格
        totlePrice(state){
            let totle=0
            state.carPanelData.forEach(goods=>{
                totle+=goods.count*goods.price
            })
            return totle
        }

    },
    mutations:{
        // 判断商品是否在购物车有过
        addCarpanelData(state,data){
            let bOff=true
            state.carPanelData.forEach(goods=>{
                if(goods.sku_id===data.sku_id){
                    goods.count++
                    bOff=false
                }
            })
            if(bOff){
                let goodsData=data
                Vue.set(goodsData,'count',1)
                state.carPanelData.push(goodsData)
            }
            console.log(state.carPanelData)
        }

    }
})

export default store