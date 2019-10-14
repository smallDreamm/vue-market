import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store=new Vuex.Store({
    state:{
        // 存放数据
        carPanelData:[],
        // 是否为最大值
        maxOff:false,
        //控制购物车隐藏显示
        carShow:false,
        ball:{
            show:false,//显示或隐藏
            el:null,//哪一个
            img:''
        }
    },
    getters:{
        //购物车计算数量
        totleCount(state){
            let count=0
            state.carPanelData.forEach(goods=>{
              count+=goods.count
              if(goods.count>goods.limit_num){
                  goods.count--
                  state.maxOff=true
              }
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
                    if(goods.count>goods.limit_num){
                        goods.count=goods.limit_num
                        state.maxOff=true
                        bOff=false
                        return
                    }
                    bOff=false                   
                    state.carShow=true //添加商品进购物车则显示购物车
                    state.ball.show=true
                    state.ball.img=data.ali_image
                    state.ball.el=event.path[0]
                }

            })
            if(bOff){
                let goodsData=data
                Vue.set(goodsData,'count',1)
                state.carPanelData.push(goodsData)
                state.carShow=true
                state.ball.show=true
                state.ball.img=data.ali_image
                state.ball.el=event.path[0]
            }
        },
        //删除购物车中商品
        delCarpanelData(state,id){
            state.carPanelData.forEach((goods,index) => {
                if(goods.sku_id===id){
                    state.carPanelData.splice(index,1)
                    return
                }                
            })
        },
        closePrompt(state){
            state.maxOff=false
        },
        //移入显示购物车
        showCar(state){
            state.carShow=true
        },
        //移出隐藏购物车
        hideCar(state){
            state.carShow=false
        }

    }
})

export default store