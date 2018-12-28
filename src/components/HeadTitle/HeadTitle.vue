<template>
  <!-- <div class="header"> -->
    <mt-header :title="title" fixed>
      <router-link to="" slot="left">
        <mt-button icon="back" @click="$router.back(-1)">返回</mt-button>
      </router-link>
    </mt-header>
  <!-- </div> -->
</template>


<style lang="scss" scoped>
</style>


<script>
export default {
  name:'HeadTitle',
  props:{
    title:String,
    required:true
  },
  methods:{

  },

};
</script>
