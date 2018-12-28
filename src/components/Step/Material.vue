<template>
  <div class="material">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">所需材料</mt-tab-item>
      <mt-tab-item id="2">基本信息</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <h4 class="center">所需材料</h4>

        <!-- 上海领区 -->
        <div class="content" v-if="type == 'shanghai'">
          <p class="xl">
            <i class="fa fa-hand-o-right xxl blue"></i>
            <span>材料</span>
          </p>
          <div class="inner_content">
            <ul>
              <li class="xs gray" v-for="(item,key) in shanghai_district.material">{{item}}</li>
              <!-- <li class="xs gray">白底彩照(45mm*45mm) x2</li> -->
            </ul>
          </div>
          <p class="xl">
            <i class="fa fa-money xxl blue"></i>
            <span>价格</span>
          </p>
          <div class="inner_content job_price_wrap">
            <transition name="fade">
              <ul v-if="has_job == 'true'">
                <li class="xs gray" v-for="(item,key) in shanghai_district.job_price">{{item}}</li>
              </ul>
            </transition>
            <transition name="fade">
              <ul v-if="has_job == 'false'">
                <li class="xs gray" v-for="(item,key) in shanghai_district.no_job_price">{{item}}</li>
              </ul>
            </transition>
          </div>
        </div>

        <!-- 非上海领区 -->
        <div class="content" v-if="type == 'out_shanghai'">
          <p class="xl">
            <i class="fa fa-hand-o-right xxl blue"></i>
            <span>材料</span>
          </p>
          <div class="inner_content">
            <ul>
              <li class="xs gray" v-for="(item,key) in out_shanghai_district.material">{{item}}</li>
            </ul>
          </div>
          <p class="xl">
            <i class="fa fa-money xxl blue"></i>
            <span>价格</span>
          </p>
          <div class="inner_content">
            <ul>
              <li class="xs gray" v-for="(item,key) in out_shanghai_district.job_price">{{item}}</li>
            </ul>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <h4 class="center">基本信息</h4>
        <div class="content">
          <p class="xl">
            <i class="fa fa-globe xxl blue"></i>
            <span>服务包含</span>
          </p>
          <div class="inner_content">
            <ul>
              <li class="xs gray">签证专家审核资料费+签证专家专业方案+签证领馆代缴+签证1对1服务+签证专人送签+签证出签顺丰寄回+签证申请免担保金</li>
            </ul>
          </div>
          <p class="xl">
            <i class="fa fa-book xxl blue"></i>
            <span>出签率</span>
          </p>
          <div class="inner_content">
            <ul>
              <li class="xs gray">脚踏实地不保签,实际的出签率要以你提供的材料和你户籍所在地为准</li>
            </ul>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<style lang="scss" scoped>
h4 {
  margin-top: 20px;
}
.content {
  padding: 14px;
  & > p {
    margin: 16px auto -1px;
  }
  .inner_content {
    &.job_price_wrap {
      position: relative;
      li {
        position: absolute;
        left: 24px;
        top: 6px;
        width: 100%;
      }
    }
    ul {
      padding-left: 23px;
      padding-top: 7px;
      li {
        list-style: disc;
        line-height: 18px;
      }
    }
  }
}
</style>


<script>
export default {
  name: "Material",
  data() {
    return {
      shanghai_district: {
        material: ["护照原件x1", "白底彩照照片(45mm*45mm)x2"],
        job_price: ["270(签证费)+30(服务费)=300元"],
        no_job_price: ["350(签证费)+30(服务费)=380元"],
        out_day: "约8个工作日",
        _no_job_price: 380,
        _job_price: 300
      },
      out_shanghai_district: {
        material: ["护照原件x1", "白底彩照照片(45mm*45mm)x2"],
        job_price: ["270(签证费)+30(服务费)+650(外领区费用)=950元"],
        no_job_price: ["270(签证费)+30(服务费)+650(外领区费用)=950元"],
        out_day: "约8个工作日",
        _no_job_price: 950,
        _job_price: 950
      },
      type: "out_shanghai",
      price: "",
      selected: "1"
    };
  },
  props: {
    city: {
      type: String
    },
    has_job: {
      type: String
    }
  },
  mounted() {},
  methods: {
    initComponent(type, city) {
      this.type = type;
      this.city = city;

      //判断价格
      this.getPrice();
    },
    getPrice() {
      const normal = ["上海", "江西", "江苏", "浙江", "安徽"];
      if (this.type == "shanghai") {
        if (this.has_job == "true") {
          this.$emit("onPrice", this.shanghai_district._job_price);
        } else {
          this.$emit("onPrice", this.shanghai_district._no_job_price);
        }
      } else {
        this.$emit("onPrice", this.out_shanghai_district._job_price);
      }
    }
  },
  watch: {
    city(v) {
      //材料的区域
      console.log(v);
      const normal = ["上海", "江西", "江苏", "浙江", "安徽"];
      if (normal.indexOf(v) > -1) {
        this.type = "shanghai";
      } else {
        this.type = "out_shanghai";
      }
      this.getPrice();
    },
    has_job() {
      this.getPrice();
    }
  }
};
</script>
