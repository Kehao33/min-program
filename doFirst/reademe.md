
### 微信小程序 learn note book
#### pages 页面目录
pages下的每一个文件都需要在app.json全局配置文件下配置才能显示到小程序里边，每个文件夹都有着四个文件，js代表逻辑文件，json表示配置文件，wxml相当于web端的html文件，wxss对应web端的css文件

#### utils文件一般用来放置一些helper工具函数

#### app.js用来写全局逻辑文件
#### app.json 全局配置文件
#### app.wxss 全局样式文件
#### sitemap.json 为小程序新建索引，可以搜索到对应的页面，具体看官网 
  https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html

  字符串和花括号之间不要存在空格，佛则会导致识别失败

运算：
可以在花括号中加入表达式 (但是不能够放入语句)==》 语句 {{c = a+b}}
表达式： 指的是一些简单运算符，数字运算，字符串，凭借，逻辑运算
1. 数字的加减乘除
2. 字符串的拼接
3. 三元表达式
语句： 
  复杂的代码段
    if else
    switch
    do ... while
    for


#### wx:for实现循环
array = [
  {name: "jakequc23", age: 23},
  {name: "jakequc24", age: 24},
  {name: "jakequc25", age: 25},
]

<!-- 列表循环 -->
wx:for="{{数组或者对象}}"
<!-- 一下两个可以省略， wx:for="{{objName or arrayName}}"
的子孩子可以直接获取到item每一项的值，index为每一项的key
 -->

wx:for-item="循环项的名称"
wx:for-index="循环项的索引"

<view wx:for="{{list}}">
  索引： {{index}}
  循环项： {{item.key}}
</view>

> 注意：当wx:for="{{obj}}"的时候, item为key对应的value，index对应为obj的key
当wx:for="{{arr}}"的时候，item为array的每一项，index为array的索引

##### block标签包裹的childen不会生成多余的标签，他就好比是react中的<>标签（Fragement）标签一样，页面渲染的时候会消失，这个标签相当于只是一个占位标签

##### 条件渲染
  wx:if="{{true/false}}"为真的的时候显示，反之不显示

  <view wx:if="{{false}}">不显示</view>
  <view wx:if={{true}}>显示</view>

##### 事件绑定
事件绑定的关键字是bindxxx
微信小程序中e事件源 中的detail对象中value才保存有事件源的值

要改变Page对象中的数据，需要使用setDate({key:value})

小程序中无法直接向事件传递参数，解决方案是自定义属性来传递想要传递的参数 
比如： <button bindTap="handleAdd" data-xxx="{{1}}"/>
然后在handleAdd的实参中获取事件源，事件源下的e.currentTarget.dataset.xxx中获取到你的自定义参数


calc(express) 会计算表达式的结果


> 小程序中图片是支持懒加载的，只需要给图片加上lazy-load即可 

> 轮播图的外层容器swiper，每一个轮播项为： swiper-item

> navigator: 超链接,相当于a标签,但是navigator是是行标签，如果是跳转到自己的小程序，不需要家wxml后缀，target可以指定跳转的目的地是那里，默认是跳转到自己的页面中，miniProgram是跳转到其他的小程序

> rich-text 富文本标签
  nodes属性来实现
    接受标签字符串 
    接受对象数组


> button的开发能力
open-type：
1. contact： 直接打开客户的对话功能，需要在微信小程序的后台配置
2. share： 转发当前的小程序内容到其他模块中，但是不能把小程序分享到其他信息中
3. getPhoneNumber 获取当前用户的手机号信息，需要结合一个事件来获取信息，企业公众号才可以获取手机信息,但是获取的信息是加密的
4. getUserInfo 获取当前用户的信息： 获取的信息不是加密的
5. lauchApp 在小程序中直接打开app
  需要在app中通过app的某个链接打开
  在小程序中再通过这个功能重新打开app
  
6. openSetting 打开小程序内置的授权页面
7. feedback 打开小程序内置的一件反馈页面


> icon 微信的图标
icon有的属性： 
1. type = success | success_no_cricle,info,warn,waiting,cancel,downloading, search,clear
2. size icon的大小
3. color icon的颜色，同  css的color


> 使用组件
推荐在更目录下创建文件 components
1. 右键选择 新建组件 => 填写组件的名字
2. 在需要使用该组件的地方的json配置文件中的usingComponents: {
  "ComponentName": "ComponentName path"
}
3. 在页面中直接使用即可 <ComponentName name="jakequc"></ComponentName>
4. 如果父组件要向子组件传递属性，直接写在子组件里边就好，但是子组件中要在properties对象中写明传递的属性的描述符,最后在子组件中直接使用{{name}}差值表达式即可获取数据
eg： Component({
  propeties: {
    name: {
      <!-- type表示传递属性的类型,value是默认值 -->
      type: String,
      value: ""
    }
  }
})

子传递数据给父组件，通过事件的方式传递数据过去（数据以参数的形式传递给父组件）
  在子组件的标签加上一个自定义事件

> 子组件传递数据给父组件并且执行父组件里边的方法
this.triggerEvent("父组件自定义事件的名称",要传递的参数);
    
> page和components的区别
1. 页面.js文件中，回调函数/监听函数必须放到data的同层级下
2. component.js文件中，回调函数/监听函数 必须放到methods中！





结构其实就是复制了应用
eg: obj = {age: 23}
const {age} = obj; <=> const age = obj.age


