class CommonClass {
  //运行脚本
  constructor() {

  }

  init() {
    this.closeTouch();
    this.openTouch();
  }

  //滑动
  handle(e) {
    e.preventDefault()
  }

  closeTouch() {
    document.getElementsByTagName('body')[0].addEventListener('touchmove', this.handler, {
      passive: false
    }) //阻止默认事件
  }
  openTouch() {
    document.getElementsByTagName('body')[0].removeEventListener('touchmove', this.handler, {
      passive: false
    }) //打开默认事件
  }

}

let CityList = [
  "北京",
  "天津",
  "上海",
  "重庆",
  "河北",
  "山西",
  "辽宁",
  "吉林",
  "黑龙江",
  "江苏",
  "浙江",
  "安徽",
  "福建",
  "江西",
  "山东",
  "河南",
  "湖北",
  "湖南",
  "广东",
  "海南",
  "四川",
  "贵州",
  "云南",
  "陕西",
  "甘肃",
  "青海",
  "内蒙古",
  "广西",
  "西藏",
  "宁夏",
  "新疆维吾尔自治区"
]

export {
  CityList,
  CommonClass
}
