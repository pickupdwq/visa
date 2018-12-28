<template>
  <div class="detail-footer bg-white">
    <div class="flex center j-items a-items">
      <div class="flex1">
        <i class="fa fa-phone"></i>
        <p class="xs">咨询</p>
      </div>
      <div class="flex2 consult">
        <mt-button type="primary" size="small" @click="goHandle">开始办理</mt-button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.detail-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 7px 0;

  .consult {
    padding: 0 7px;
    button {
      width: 100%;
    }
  }
}
</style>


<script>
export default {
  name: "detail-footer",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: ""
    };
  },
  methods: {
    goHandle() {
      this.$router.push({ name: "step1", params: { id: this.id } });
    }
  }
};
</script>
