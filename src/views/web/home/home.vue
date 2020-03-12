<template>
  <div class="homeCnt">
    <myHeader :scrollTop="scrollTop" :scrollMove="scrollMove" />
    <div class="banner"></div>
    <div class="scrollDown" @click="scrollMove(937)"></div>
    <div class="topTitle">
      <h1 class="title">静水流深.</h1>
      <div class="underline"></div>
      <p class="subTit">/* 这是我的个人主页 */</p>
    </div>
    <div class="about">
      <div class="title">关于我</div>
      <!-- <div class="tagBox">
        <div class="tag">95后</div>
        <div class="tag"></div>
        <div class="tag"></div>
        <div class="tag"></div>
      </div> -->
      <div class="aboutContent">
        <p>我是周锐斌，从爱运动到爱游戏最后选择编程行业。</p>
        <p>毕业于深圳技师学院，现出来寻找工作机会更快的提升自己。</p>
        <p>有很多大胆的想法，热衷于用代码实现自己想要的：</p>
        <p>身为懒癌晚期与日常修仙 的 拖延症患者，</p>
        <p>依然坚持努力成为一个善于谈笑风生、</p>
        <p>又热爱生活的社会主义好青年。请多指教！</p>
      </div>
    </div>
    <div class="work">
      <div class="title">突发奇想</div>
      <div class="workContent">
        <div
          class="workLink"
          v-for="(item, key) in workList"
          :key="key"
          @click="$router.push(item.router)"
        >
          <div class="workPic">
            <img :src="item.imgUrl" alt="" />
          </div>
          <div class="workDesc">
            <p class="descTit1">{{ item.name }}</p>
            <p class="descTit2">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <myFooter />
  </div>
</template>

<script>
import myHeader from "./components/homeHeader.vue";
import myFooter from "./components/homeFooter.vue";
import { debounce } from "@/plugins/common.js";
export default {
  components: {
    myHeader,
    myFooter
  },
  data() {
    return {
      scrollTop: document.body.scrollTop + document.documentElement.scrollTop,
      scrollTimer: null,

      workList: [
        {
          name: "博客",
          desc: "写下自己学习和成长的过程",
          imgUrl: "/img/artcle.jpg",
          router: "/w/artcle"
        },
        {
          name: "开始",
          desc: "简介美观的浏览器起始页",
          imgUrl: "/img/start.jpg",
          router: "/start"
        }
      ]
    };
  },
  methods: {
    scrollMove(val = 0) {
      clearInterval(this.scrollTimer);
      //设定一个值 判断所有属性是否到达目标值
      let flag = true;
      // console.log(this.scrollTimer, "timer");
      this.scrollTimer = setInterval(() => {
        flag = true;
        let speed = (val - this.scrollTop) / 8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (this.scrollTop != val) {
          flag = false;
        }
        document.body.scrollTop = this.scrollTop + speed;
        document.documentElement.scrollTop = this.scrollTop + speed;
        if (flag) {
          clearInterval(this.scrollTimer);
        }
      }, 1000 / 60);
    }
  },
  mounted() {
    this.__updateScrollTop = debounce(() => {
      // eslint-disable-next-line prettier/prettier
      this.scrollTop = document.body.scrollTop + document.documentElement.scrollTop
    }, 100);
    // window.addEventListener("scroll", this.__updateScrollTop);
    window.addEventListener("scroll", () => {
      // eslint-disable-next-line prettier/prettier
      this.scrollTop = document.body.scrollTop + document.documentElement.scrollTop
    });
  }
};
</script>

<style scoped>
.homeCnt {
  position: relative;
  height: 100%;
}
.banner {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("/img/banner1.jpg");
  background-size: cover;
  /* background-position: center; */
}
.topTitle {
  position: absolute;
  top: 30%;
  width: 100%;
  color: #fff;
  text-align: center;
}
.topTitle .title {
  font-size: 75px;
  line-height: 100px;
  margin: 25px 0;
  font-weight: 400;
}
.topTitle .subTit {
  padding: 15px 0;
}
.topTitle .underline {
  position: absolute;
  left: 50%;
  margin-left: -35px;
  margin-top: -15px;
  width: 70px;
  height: 4px;
  background-color: #70c000;
}
.about {
  position: relative;
  top: 100%;
  width: 100%;
  background-color: #fff;
  padding: 80px 0 100px;

  text-align: center;
}
.about .title {
  position: relative;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  margin: 40px 0;
  color: #3c3c3c;
}
.about .title::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -15px;
  margin-left: -25px;
  width: 50px;

  height: 4px;
  background-color: #70c000;
}
.aboutContent p {
  margin: 14px 0;
}

.work {
  position: relative;
  top: 100%;
  width: 100%;
  background-color: #f5f5f5;
  padding: 80px 0 100px;

  text-align: center;
}
.work .title {
  position: relative;
  font-weight: 400;
  font-size: 30px;
  line-height: 40px;
  margin: 40px 0;
  color: #3c3c3c;
}
.work .title::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -15px;
  margin-left: -25px;
  width: 50px;

  height: 4px;
  background-color: #70c000;
}
.workContent {
  width: 90%;
  margin: 0 auto;
  margin-top: 50px;
}
@media (min-width: 1200px) {
  .workContent {
    width: 80%;
  }
}
@media (min-width: 1600px) {
  .workContent {
    width: 60%;
  }
}
.workContent .workLink {
  display: inline-block;
  width: 300px;
  height: 250px;
  background-color: #fff;
  margin: 0 15px 30px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.workContent .workLink:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
.workContent .workLink:hover .workPic img {
  transform: scale(1.2);
}
.workLink .workPic {
  width: 100%;
  height: 165px;
  overflow: hidden;
}
.workLink .workPic img {
  width: 100%;
  height: 100%;
  transition: transform 0.25s ease;
}
.workLink .workDesc {
  box-sizing: border-box;
  text-align: left;
  padding: 15px;
}
.workLink .workDesc .descTit1 {
  font-weight: bold;
  margin: 6 0;
}
.workLink .workDesc .descTit2 {
  margin: 6px 0;
}

.scrollDown {
  position: absolute;
  bottom: 55px;
  left: 50%;
  margin-left: -10px;
  width: 20px;
  height: 20px;
  border-right: 3px solid rgba(255, 255, 255, 0.5);
  border-top: 3px solid rgba(255, 255, 255, 0.5);
  transform: rotate(135deg);
  cursor: pointer;
  animation: 1s linear 1s infinite myfirst;
}
@keyframes myfirst {
  from {
    bottom: 55px;
  }
  50% {
    bottom: 70px;
  }
  to {
    bottom: 55px;
  }
}
</style>
