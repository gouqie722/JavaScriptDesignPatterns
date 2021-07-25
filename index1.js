  // 在GitHub上创建储存库  复制
  // git clone git@github.com:15016788356/JavaScriptDesignPatterns.git
  // git remote -v 查看远程分支
  // git add 'fileName'
  // git add . 添加所有文件
  // git commit describe 对当前提交进行描述
  // git state 查看当前提交的状态


  // 什么是设计模式, 原则
  // 设计模式是一套被反复使用，多数人知晓的，经过分类的，代码设计经验的总结
  // 推荐书籍 ==> js设计模式， js模式

  // 创建型-研究高效的创建对象
  // 单例模式
  // 抽象工厂模式
  // 建造者模式
  // 工厂模式
  // 原型模式

  // 结构型模式-> 设计对象的结构和关系
  // 适配器模式
  // 桥接模式
  // 装饰模式
  // 组合模式
  // 外观模式
  // 享元模式
  // 代理模式

  // 行为型模式-> 设计对象的行为
  // 模板方法模式, 命令模式, 迭代器模式, 观察者模式, 中介者模式, 备忘录模式, 解释器模式, 状态模式, 策略模式, 职责链模式
  // 访问者模式, 发布订阅模式


  // 设计模式的六大原则
  // 减少耦合(功能与功能之间或者对象和对象之间有必然的联系), 增强复用性, 降低代码的开发维护扩展成本
  
  // 优先降低复杂度，尽量降低耦合度
  // 1. 利用单一职责原则, 开闭原则, 里氏代换原则降低耦合度
  // 2. 通过迪米特法则减少耦合
  // 3. 通过依赖倒置原则消除可以没有的耦合

  
  // 耦合度和复杂度的危害
  // 复杂度: 高，但代码质量不高, 可维护性差， 复用性差，不易扩展
  // 耦合度: 没有耦合度不可能，低耦合---> 合理, 过高不易维护, 但复用性和扩展性好

  // 开发时优先降低复杂度, 尽量降低耦合度

  // 设计模式的六大原则之一
  // 单一职责原则
  // 一个方法只做一件事情


  // 设计模式的六大原则之二
  // 开闭原则 OCP  核心 ----> 专注扩展
  // 一个软件实体如类，模块和函数应该对扩展开放，对修改关闭
  // 面向扩展开放，面向修改关闭jQuery extend， 同时增强代码复用性

  // 设计模式的六大原则之三
  // 里氏代换原则 L Subsituation Principle
  // 任何基类可以出现的地方，子类一定可以出现，通俗的来讲就是：子类可以扩展父类的功能，但不能改变父类原有的功能
  // 一个宴会邀请父亲去，父亲去不了儿子去
  // 一个父类可以访问的接口，父类忙着其他事情，子类可以去访问

  // 设计模式的六大原则之四
  // 迪米特法则 (最小知道原则) LD
  // 一个接口和一个方法，传入的参数越少越好，降低耦合度的同时也会让复杂程度降低
  // 谍战片中间谍，两个同一伙间谍互相不知道，为什么要这样呢
  // 为了最大程度较少伤害，死只死在一条线上的人
  // 形成的关联越少越好，依赖最少

  // 设计模式的六大原则之五
  // 依赖倒置原则 DIP
  // 最常用的原则，依赖接口，不依赖方法，底层的东西不用了解，我们只需知道表现就可以，降低耦合度
  // 前端应用中可以理解成多者之间依赖状态，而不依赖彼此
  // Js中没有接口的概念

  // 设计模式的六大原则之六
  // 接口分离原则
  // 把大接口拆分成小接口，不能一个接口实现增删改查
  // 比如说我写作业， 要细分成，写数学，语文，英语等作业，同时降低了耦合度



  // 设计模式 ---> 单例模式
  // 定义: 保证一个类只有一个实例，并提供一个访问它的全局访问点

  // 可以实现，但有缺点
  // function Test(name) {
  //   var instace = this
  //   this.name = name
  //   Test = function () {
  //     return instace
  //   }
  // }
  // var a = new Test('a')
  // var b = new Test('b')
  // console.log(a === b)

  // var Test = (function () {
  //   var instace
  //   return function (name) {
  //     if (typeof instace === 'object') {
  //       return instace
  //     }
  //     instace = this
  //     this.name = name
  //   }
  // })()

  // var a = new Test()
  // var b = new Test()
  // console.log(a === b)

  // 终极版
  // var getSingle = function (func) {
  //   var result
  //   return function () {
  //     if (!result) {
  //       result = func.apply(this, arguments)
  //     }
  //     return result
  //     // if (result != null) {
  //     //   return result
  //     // }
  //     // result = func.apply(this, arguments)
  //     // return result
  //   }
  // }


  // 设计模式 ----> 代理模式
  // 定义: 为一个对象提供一种代理以控制对这个对象的访问
  // 场景: 图片懒加载
  // 虚拟代理：虚拟代理是把一些开销很大的对象，延迟到真正需要它的时候才去创建执行   ---->图片懒加载, 文件上传
  // 安全代理: 控制真实对象的访问权限
  // 保护代理-登录操作后才能看全功能，前端校验
  // 远程代理(一个对象将不同空间的对象进行局部代理)-监控多个对象的状态, 总机监控分店
  // 智能代理(调用对象代理处理另一些事情如垃圾回收机制增加额外的服务)-提供额外的其他服务 火车站代售处
  var MyImage = function () {
    var oImg = new Image()
    this.setSrc = function (src) {
      oImg.src = src
    }
    document.body.appendChild(oImg)
  }

  // var oMyImg = new MyImage()
  // oMyImg.setSrc('https://img.mp.itc.cn/upload/20170504/75a7369fe13e4ad7bf1f344edd858dfe')

  // var ProxyImage = (function () {
  //   var oNewImage = new Image()
  //   var oMyImg = new MyImage()
  //   oNewImage.onload = function () {
  //     oMyImg.setSrc(oNewImage.src)
  //   }
  //   return function (src) {
  //     // 占位图
  //     oMyImg.setSrc('https://img.mp.itc.cn/upload/20170504/75a7369fe13e4ad7bf1f344edd858dfe')
  //     oNewImage.src = src
  //   }
  // })()

  // ProxyImage('https://img.mp.itc.cn/upload/20170504/804510648534430cb3d1087da08313a5')

  // 设计模式 -----> 策略模式
  // 策略模式是指对一系列的算法定义，并将每个算法封装起来
  // 而且使它们还可以相互替换，策略模式让算法独立于使用它的客户而独立变化

  // 策略模式的优点有：策略模式提供了管理相关的算法族的办法，策略模式提供了可以替换继承关系的办法，
  // 使用策略模式可以避免使用多重条件转移语句

  // 策略模式的特点：策略模式支持你正在运行时选择算法，把他们封装成一个个封装起来，并且使它们可以相互替换
  // 该对象要能，相应的主动添加对规则的相应处理办法，校验数据的时候可以相应的返回相关信息


  // 设计模式 ------> 工厂模式
  // 定义: 工厂模式定义创建对象的接口，但是让子类去真正的实例化，也就是工厂方法将类的实例化延迟到子类

  // 设计模式 ------> 工厂方法模式
  // 工厂方法模式: 不再有一个唯一的工厂类就创建产品，而是将不同的产品交给对应的工厂子类去实现，每个产品负责生产的子工厂来创造，如果添加新的产品，需要
  // 做的是添加新的子工厂和产品，而不需要修改其他的工厂代码

  // 设计模式 ------> 装饰者模式
  // 定义: 在不改变元对象的基础上，通过对其进行包装扩展(添加属性方法)

  // 设计模式 ------> 观察者模式
  // 定义: 观察者模式, 定义对象间的一种一对多的依赖关系, 当一种对象的状态发生改变时，所有依赖于它的对象都将得到通知
  // 事实上, 只要你曾经在DOM节点上绑定过事件函数，那么你就曾经使用过观察者模式了


  // Event
  // 1. Event on emit remove once
  // 2. 有助于了解 观察者模式
  // 3. node

  function Event() {
    // 存储 不同事件类型对应的不同的处理函数
    this.cache = {}
  }

  Event.prototype.on = function (type, handle) {
    if (!this.cache[type]) {
      this.cache[type] = [handle]
    } else {
      this.cache[type].push(handle)
    }
  }

  Event.prototype.emit = function () {
    var type = arguments[0]
    var args = [].slice.call(arguments, 1)
    for (var i = 0; i < this.cache[type].length; i ++) {
      this.cache[type][i].apply(this, args)
    }
  }

  Event.prototype.empty = function (type) {
    this.cache[type] = []
  }

  Event.prototype.remove = function (type, handle) {
    this.cache[type] = this.cache[type].filter(function (ele) {
      return !(ele == handle)
    })
  }

  Event.prototype.once = function (type, handle) {

  }

  function deal1(time) {
    console.log('over time1:', time)
  }

  function deal2(time) {
    console.log('over time2:', time)
  }

  var oEvent = new Event()
  oEvent.on('over', deal1)

  oEvent.on('over', deal2)

  oEvent.emit('over', '1')

  oEvent.remove('over', deal2)
  oEvent.remove('over', deal1)

  oEvent.emit('over', '2')
