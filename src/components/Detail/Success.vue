<template>
  <div class="success">
    <div class="flex j-items a-items">
      <p class="xs"><span class="gray">至今出签率:</span><span class="xl">{{success}}%</span></p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.success {
  width: 90%;
  margin: -40px auto 10px;
  padding: 10px 20px;
  background: #fff;
  box-sizing: border-box;
}
</style>



<script>
export default {
  name: "success",
  data() {
    return {
      user: "第一种方法"
    };
  },
  props: {
    success: {
      type: Number,
      default: 100
    },
    bbb: {
      type: String
    }
  },
  mounted() {},
  methods: {
    sendPar() {
      this.$emit("pushParams", "第二种方法");
    },
    setUser(event) {
      this.$emit("getUser", event.target.value + "input传的");
      // console.log(event.target.value);
    }
  },
  watch: {}
};
</script>
