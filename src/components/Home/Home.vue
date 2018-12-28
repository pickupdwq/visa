<template>
  <div class="home-wrap">
    <div class="header radius relative overflow-h">
      <img src="../../../static/header.jpeg" class="w100 block">
      <!-- <div class="mask"></div> -->
      <p class="title center white">什马签证</p>
    </div>

    <div class="body">
      <p class="center">热门签证</p>
      <div class="list" v-for="(item,index) in list">
        <div class="radius relative overflow-h" @click="goDetail(item.id)">
          <img :src="item.src" class="w100 block">
          <div class="mask"></div>
          <div class="info-wrap">
            <p class="white">{{item.name}}</p>
            <p class="white right">{{item.price}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "什马签证",
      list: [
        {
          name: "日本签证(极简)",
          price: "￥280起",
          src: "./static/tokyo.jpg",
          id: "111"
        },
        {
          name: "日本签证(极简)",
          price: "￥280起",
          src: "./static/tokyo.jpg",
          id: "111"
        },
        {
          name: "日本签证(极简)",
          price: "￥280起",
          src: "./static/tokyo.jpg",
          id: "111"
        },
        {
          name: "日本签证(极简)",
          price: "￥280起",
          src: "./static/tokyo.jpg",
          id: "111"
        },
        {
          name: "日本签证(极简)",
          price: "￥280起",
          src: "./static/tokyo.jpg",
          id: "111"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    goDetail(id) {
      this.$router.push({ path: "/detail", query: { id: id } });
    }
  }
};
</script>

<style lang="scss">
.home-wrap {
  margin-top: 5px;
  padding: 0 5px;
  .header {
    .title {
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 2;
      font-size: 16px;
    }
  }

  .body {
    margin-top: 15px;
    & > p {
      font-size: 17px;
    }
    .list {
      margin: 5px 0;
    }
    .info-wrap {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      line-height: 20px;
    }
  }
}
</style>
