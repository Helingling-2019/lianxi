// pages/check/check.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     is:true,
     val:"",
     newarr:[]
  },
  input:function(e){
      this.setData({
        val:e.detail.value
      })
  },
  check(e){
    this.setData({
      "is":false
    })
    var that = this;
    wx.request({
      url: 'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel='+this.data.val,
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(typeof res);
        if(res.statusCode==200){
          var newstr = res.data.slice(res.data.indexOf("{") + 1, res.data.indexOf("}"));
          
           var pattern = /\s/g;
           newstr = newstr.replace(pattern,'');
           console.log(newstr);
           var newp = newstr.split(",");
           console.log(newp);
           var obj = {};
           for(var i=0; i<newp.length; i++){
             var ii = newp[i].split(":");
             //console.log(ii[1]);
             if(ii[0]=="province"){ ii[0]="所属省份";
               ii[1] = ii[1].replace(/'/g, '');
               console.log(ii[1]);
               obj[ii[0]] = ii[1];
             }else if (ii[0] == "catName") { ii[0] = "运营商";
               ii[1] = ii[1].replace(/'/g, '');
               console.log(ii[1]);
               obj[ii[0]] = ii[1];
              }else if (ii[0] == "areaVid") { ii[0] = "区域代号";
               ii[1] = ii[1].replace(/'/g, '');
               console.log(ii[1]);
               obj[ii[0]] = ii[1];
               }
             
           };
           console.log(obj);
           that.setData({
             "newarr": obj
           })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})