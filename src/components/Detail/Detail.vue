<template>
  <div class="detail">
    <head-title :title="name"></head-title>

    <div class="content-wrap">
      <div class="content center">
        <h3 class="white">日本签证极简办理</h3>
        <p class="white center price">
          ￥280
          <span class="gray">起</span>
        </p>
        <p class="white use-time">
          <span>办理时长</span>
          7-8 工作日
        </p>
      </div>
      <div class="success-wrap">
        <success :success="success" @pushParams="pushParams" @getUser="getUser" :bbb="text"></success>
      </div>
      <detail-footer :id="id"></detail-footer>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.content-wrap {
  background: #f1f1f1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slider {
  height: 200px;
}

.content {
  background: #e75f53;
  min-height: 140px;
  margin-top: 40px;
  padding-top: 40px;
  h3 {
    font-size: 16px;
    font-weight: 600;
  }
  .price {
    margin-top: 15px;
    font-size: 26px;
    span {
      font-size: 14px;
    }
  }
  .use-time {
    font-size: 14px;
    margin: 15px 0;
    span {
      font-size: 12px;
    }
  }
}
</style>


<script>
import HeadTitle from "@/components/HeadTitle/HeadTitle";
import Success from "./Success.vue";
import DetailFooter from "./DetailFooter.vue";
export default {
  data() {
    return {
      name: "日本签证",
      success: 100,
      way1: "子向父传参",
      way2: "",
      text: "从父到子",
      id:''
    };
  },
  components: {
    HeadTitle,
    Success,
    DetailFooter,
  },
  mounted() {
    this.id = this.$route.query.id;
  },
  methods: {
    pushParams(data) {
      this.way2 = data;
    },
    getUser(data) {
      this.way1 = data;
    },
    chuan() {
      this.text = "变化";
    }
  }
};
</script>
