<template>
  <div class="step1 has-header">
    <HeadTitle :title="id"></HeadTitle>
    <mt-field label="姓名" placeholder="请输入姓名" v-model="name"></mt-field>
    <mt-field label="联系方式" placeholder="请输入联系方式" type="tel" v-model="phone"></mt-field>
    <a class="mint-cell mint-field">
      <div class="mint-cell-left"></div>
      <div class="mint-cell-wrapper">
        <div class="mint-cell-title">
          <span class="mint-cell-text">护照签发地</span>
        </div>
        <div class="mint-cell-value">
          <div
            placeholder="请选择护照签发地"
            class="mint-field-core block"
            readonly
            @click="showPopup"
          >{{child_city}}</div>
        </div>
      </div>
      <div class="mint-cell-right"></div>
    </a>
    <a class="mint-cell mint-field">
      <div class="mint-cell-left"></div>
      <div class="mint-cell-wrapper">
        <div class="mint-cell-title">
          <span class="mint-cell-text">预计出行日期</span>
        </div>
        <div class="mint-cell-value">
          <div
            placeholder="请选择预计出行日期"
            class="mint-field-core block"
            readonly
            @click="showDatePicker"
          >{{date}}</div>
        </div>
      </div>
      <div class="mint-cell-right"></div>
    </a>

    <a class="mint-cell mint-field">
      <div class="mint-cell-left"></div>
      <div class="mint-cell-wrapper">
        <div class="mint-cell-title">
          <span class="mint-cell-text">是否在职</span>
        </div>
        <div class="mint-cell-value">
          <select class="w100 xs" v-model="has_job">
            <option :value="'true'">是</option>
            <option :value="'false'">否</option>
          </select>
        </div>
      </div>
      <div class="mint-cell-right"></div>
    </a>

    <!-- 所需要的材料 -->
    <Material :city="child_city" :has_job="has_job" ref="Material" @onPrice="onPrice"></Material>
    <mt-popup v-model="popupVisible" position="bottom" class="w100">
      <div class="confirm">
        <a @click="confirm" class="blue">确定</a>
      </div>
      <div @touchmove="handleTouchmove">
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      </div>
    </mt-popup>
    <mt-datetime-picker
      ref="picker"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="startDate"
      :endDate="endDate"
      @confirm="confrimDate"
      @touchmove="handleTouchmove"
    ></mt-datetime-picker>


    <!-- 确认的弹窗 -->
      <confirm v-if="obj.length > 0" :obj="obj"></confirm>
    <!-- 底部 -->
    <footer class="bg-white">
      <div class="flex center j-items a-items">
        <div class="flex2">
          <a class="xs">
            金额:￥
            <span class="xxxl">{{price}}</span>
          </a>
        </div>
        <div class="flex1">
          <mt-button type="primary" size="small" @click="submit" class="w100">提交信息</mt-button>
        </div>
      </div>
    </footer>
  </div>
</template>


<style lang="scss">
select {
  -webkit-appearance: none;
  background: transparent;
}
.confirm {
  text-align: right;
  padding: 10px 7px;
}
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  padding: 4px;
  box-sizing: border-box;
  border-top: 1px solid #eee;
}
</style>


<script>
import HeadTitle from "../HeadTitle/HeadTitle.vue";
import { CommonClass, CityList } from "../common/common.js";
import Material from "./Material";
import Confirm from "./Confirm";
export default {
  name: "step1",
  components: {
    HeadTitle,
    Material,
    Confirm
  },
  mounted() {
    this.id = this.$route.params.id;
    this.$refs.Material.initComponent("shanghai", this.child_city);
  },
  data() {
    return {
      popupVisible: false,
      name: "",
      phone: "",
      pro: CityList[CityList.indexOf("上海")],
      id: "",
      slots: [
        {
          flex: 1,
          values: CityList
        }
      ],
      date: "请选择预计的出行日期",
      startDate: new Date(new Date().getTime() + 3600 * 24 * 10 * 1000),
      endDate: new Date(new Date().getTime() + 3600 * 24 * 30 * 3 * 1000),
      child_city: CityList[CityList.indexOf("上海")],
      has_job: "false",
      price: "",
      obj:[]
    };
  },
  methods: {
    onValuesChange(picker, values) {
      this.pro = values[0];
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    showPopup() {
      this.popupVisible = true;
    },
    handleTouchmove(e) {
      e.preventDefault();
    },
    showDatePicker() {
      this.$refs.picker.open();
    },
    confirm() {
      this.popupVisible = false;
      this.child_city = this.pro;
    },
    confrimDate(v) {
      let fullDate =
        v.getFullYear() +
        "年" +
        (v.getMonth() + 1 < 10 ? "0" + (v.getMonth() + 1) : v.getMonth() + 1) +
        "月" +
        (v.getDate() < 10 ? "0" + v.getDate() : v.getDate()) +
        "日";
      this.date = fullDate;
    },
    submit() {
      let obj = {};
      obj.city = this.child_city;
      obj.name = this.name;
      obj.phone = this.phone;
      obj.has_job = this.has_job;
      obj.date = this.date;
      this.obj.push(obj);
  },
    onPrice(price) {
      console.log(price);
      this.price = price;
    }
  },
  computed: {},
  watch: {
    popupVisible: {
      handler(c, o) {}
    }
  },
  beforeRouteLeave(to, from, next) {
    if (confirm("信息未保存,确定要离开?")) {
      next();
    } else {
      next(false);
    }
  }
};
</script>
