// pages/demo/demo.js
Page({
  getphone: (da) => {
    console.log("da<",da);
  },
  data: {
    html: '<a class="sc-gzVnrw bhThaH" href="https://www.tmall.com/wow/z/heybox/heyboxrax/heybox?utparam=%7B%22ranger_buckets_native%22%3A%22tsp2584_31920%22%7D&amp;spm=a2141.1.iconsv5.1&amp;scm=1007.home_icon.tmallxp.d&amp;wh_biz=tm&amp;disableNav=YES"><img class="sc-htoDjs gRQzSI" src="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1"><p class="sc-dnqmqq blJSr">天猫新品</p></a>',
    html1: [
      {
        // div 标签由name来指定
        name: "div",
        // 2. attrs决定标签上由哪些属性
        attrs: {
          class: "div_class",
          style: "color:red"
        },
        // 3. 定义该标签的名字children指定接受的数据类型和nodes的第二种渲染方式的数组一直
        chilren: [
          {
            name: "p",
            attrs: {style: "color:#f00"},
            children: [{
              type: "text",
              text: "Hello Grame"
            }]
          }
        ]
      }
    ]
  },

  handleClickShare(e){
    console.log('')
    this.setData({
      shareShow: true
    })
  },
})
