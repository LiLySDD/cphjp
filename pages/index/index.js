// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    licensePlate:[{name:'京'},{name:'津'},{name:'沪'},{name:'渝'},{name:'苏'},{name:'浙'},{name:'豫'},{name:'粤'},{name:'川'},{name:'陕'},{name:'冀'},{name:'辽'},{name:'吉'},{name:'皖'},{name:'闽'},{name:'鄂'},{name:'湘'},{name:'鲁'},{name:'晋'},{name:'黑'},{name:'赣'},{name:'贵'},{name:'甘'},{name:'桂'},{name:'琼'},{name:'云'},{name:'青'},{name:'蒙'},{name:'藏'},{name:'宁'},{name:'新'},{name:'使'},{name:'领'},{name:'警'},{name:'港'},{name:'澳'},{name:'台'},{name:'学'}],
    licensePlate1:[{name:'京'},{name:'津'},{name:'沪'},{name:'渝'},{name:'苏'},{name:'浙'},{name:'豫'},{name:'粤'},{name:'川'},{name:'陕'}],
    licensePlate2:[{name:'冀'},{name:'辽'},{name:'吉'},{name:'皖'},{name:'闽'},{name:'鄂'},{name:'湘'},{name:'鲁'},{name:'晋'},{name:'黑'}],
    licensePlate3:[{name:'赣'},{name:'贵'},{name:'甘'},{name:'桂'},{name:'琼'},{name:'云'},{name:'青'},{name:'蒙'},{name:'藏'},{name:'宁'}],
    licensePlate4:[{name:'新'},{name:'使'},{name:'领'},{name:'警'},{name:'港'},{name:'澳'},{name:'台'},{name:'学'}],
    sta:3,
    text1:"辽",
    text2:"B",
    numx:[{name:'0'},{name:'1'},{name:'2'},{name:'3'},{name:'4'},{name:'5'},{name:'6'},{name:'7'},{name:'8'},{name:'9'}],
    zm1:[{name:'A'},{name:'B'},{name:'C'},{name:'D'},{name:'E'},{name:'F'},{name:'G'},{name:'H'},{name:'I'},{name:'J'}],
    zm2:[{name:'K'},{name:'L'},{name:'M'},{name:'N'},{name:'O'},{name:'P'},{name:'Q'},{name:'R'},{name:'S'},{name:'T'}],
    zm3:[{name:'U'},{name:'V'},{name:'W'},{name:'X'},{name:'Y'},{name:'Z'}],
    text3:'',
    text4:'',
    text5:'',
    text6:'',
    text7:'',
    text8:'',
    xin:true,
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  
  //获取点击的输入框的id,如果id=1,就显示文字键盘，否则显示数字和字母键盘
  inpzm:function inpzm(e){
    let id = Number(e.currentTarget.id)
    this.setData({
      sta: id,
    })
  },
  //获取点击的文字，赋值给第一个框的value，因为只有第一个框会调起文字键盘，并给下一个输入框增加样式
  zim:function zim(e){
    let text1 = e.currentTarget.dataset.text
    this.setData({
      text1,
      sta: 2, 
    })
  },
  //回退事件--把当前输入框Value给空值，给上一个输入框增加样式
  del:function del(){
    let info = 'text' + this.data.sta
    this.setData({
      [info]: '',
      sta: this.data.sta - 1,
    })
  },
  //动态赋值，先获取点击的value，然后赋值给点击的输入框，同时给下一个输入框增加样式
  zim2:function zim(e){
    let text2 = e.currentTarget.dataset.text
    let info = 'text' + this.data.sta
    this.setData({
      [info]: text2,
      sta: this.data.sta + 1,
    })
  },
  //新能源和非新能源的切换
  xin:function xin(){
    this.setData({
      xin: !this.data.xin,
    })
  },
  submit() {
    if(this.data.xin){
      this.setData({
        text8: ''
      })
    }
    let car_plate = this.data.text1 + this.data.text2 + this.data.text3+ this.data.text4 + this.data.text5 + this.data.text6 + this.data.text7 + this.data.text8
    console.log("s",car_plate)
    if(car_plate.length != 7 && car_plate.length != 8 ) {
      wx.showToast({
        title: '请输入完整的车牌号！',
        icon: 'none'
      })
      return;
    }
   //自己的逻辑代码
   //省略......
},


})
