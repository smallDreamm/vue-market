<template>
<div class="carousel-wrap" id="carousel">
    <transition-group tag="ul" class="slide-ul" name="list">
        <li v-for="(list,index) in slideList" :key="index" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
            <a :href="list.clickUrl">
                <img :src="list.image" :alt="list.desc">
            </a>
        </li>
    </transition-group>
    <div class="carousel-items">
        <span :class="{'active' :index===currentIndex}" v-for="(item,index) in slideList.length" :key="index" @mouseup="change(index)" >
        </span>
    </div>

</div>
  
</template>

<script>
export default {
  data(){
    return{
      slideList:[
        {
          'clickUrl' : '#',
          'desc' : '第一张图',
          'image' : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571034592713&di=763440dbada250a4c148a57c185755c5&imgtype=0&src=http%3A%2F%2Fe0.ifengimg.com%2F10%2F2019%2F0218%2F4EC7F4D01CB48B0543BCB33FA2E053B9E355E334_size59_w1080_h608.jpeg'
        },
        {
          'clickUrl' : '#',
          'desc' : '第二张图',
          'image' : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571034492905&di=3b5903bb07a449aaae4e3c2e2c769d48&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1902%2F21%2F12325119_pic3_thumb.jpg'
        },
        {
          'clickUrl' : '#',
          'desc' : '第三张图',
          'image' : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571034443841&di=697206d06666e3eea20cb1ab8921a27a&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fd1d40c91885dcddb46ba6bfe82677f0c.jpeg'
        },
        {
          'clickUrl' : '#',
          'desc' : '第三张图',
          'image' : 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3299424993,1937032660&fm=26&gp=0.jpg'
        }
      ],
      currentIndex:0,
      timer:''

    }
  },
  methods:{
    go(){
      this.timer=setInterval(()=>{
        this.autoPlay()
      },4000)
    },
    stop(){
      clearInterval(this.timer)
      this.timer=null
    },
    change(index){
      this.currentIndex=index
    },
    autoPlay(){
      this.currentIndex++
      if(this.currentIndex>this.slideList.length-1){
        this.currentIndex=0
      }
    },
    created(){
      //异步处理
      this.$nextIndex(()=>{
        this.timer=setInterval(()=>{
          this.autoPlay()
        },4000)
      })
    }
  }

}
</script>

<style>
 .carousel-wrap {
   height: 453px;
   width: 100%;
   overflow: hidden;
   background-color: #fff;
   border-radius: 10px;
   margin-bottom: 1.5rem;
}

.slide-ul {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
}

img {
  width: 100%;
  height: 100%;
}

.carousel-items {
  position: absolute;
  z-index: 10;
  top: 480px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}

.carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
}
.carousel-items .active {
  background-color: orange;
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%)
}

.list-enter {
  transform: translateX(100%)
}

.list-leave {
  transform: translateX(0)
}

</style>