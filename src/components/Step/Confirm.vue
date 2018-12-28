<template>
  <div class="confrm-window">
    <div class="inner">
      <!-- 地图 -->
      <p class="center">
        <i class="fa fa-map xxxl"></i>
      </p>

      <!-- 信息 -->
      <div class="inner_info">
        <ul class="xs">
          <!-- <li>姓名：张三</li>
          <li>联系方式：13127569976</li>
          <li>预计出行日期:2019-02-02</li>
          <li>办理类型：上海领区</li>
          <li>费用：￥100</li>-->
          <transition-group name="fade-up">
            <li v-for="item in ullist" :key="item">{{item}}</li>
          </transition-group>
        </ul>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
export default {
  name: "confirm",
  data() {
    return {
      ullist: []
    };
  },
  mounted() {
    let index = 0;
    let time = setInterval(() => {
      index++;
      console.log(index);
      this.ullist.push(index);
      if (index === 4) {
        clearInterval(time);
      }
    }, 500);
  },
  props: {
    obj: {
      type: Array
    }
  },
  watch: {
    obj(v) {
      console.log(v);
    }
  }
};
</script>

<style lang="scss">
.confrm-window {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .inner_info li {
    &:first-child {
      margin-top: 20px;
    }
    margin: 7px 0;
  }
  .inner {
    position: absolute;
    transition: all 0.2s;
    min-height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 250px;
    padding: 20px 10px;
    z-index: 10;
    background: #fff;
    border-radius: 10px;
  }
}
</style>
