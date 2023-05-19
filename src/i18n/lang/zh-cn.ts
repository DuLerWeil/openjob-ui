// 定义内容
export default {
  codeMsg: {
    c200: '命名空间下存在应用',
    c300: '应用名称已经存',
    c301: '应用下存在定时任务或延时任务',
    c400: '时间表达式解析失败',
    c401: '存在任务实例',
    c500: '主题已存在',
    c501: '存在延时实例',
  },
  commonMsg:{
    emptyInput: '请输入',
    emptySelect: '请选择',
    all: '全部',
    tip: '提示',
    deleteSuccess: '删除成功',
    updateSuccess: '更新成功',
    stopSuccess: '终止成功',
    operation: '操作',
    stopFail: '任务实例未运行',

  },
  dateMsg:{
    rangeMsg: '时间范围',
    startDate: '开始时间',
    endDate: '结束时间',
    oneMinute: '1分钟',
    fiveMinute: '5分钟',
    fifteenMinute: '15分钟',
    oneHours: '1小时',
    today: '今天',
    oneDay: '1天',
    oneWeek: '1周',
  },
  commonBtn: {
    confirm: '确认',
    cancel: '取消',
    query: "查询",
    reset: "重置",
    log: '日志',
    view: "查看",
    update: "更新",
    copy: '复制',
    more: '更多',
    delete: "删除",
    add: "新增",
    online: "在线",
    offline: "离线",
    stop: '终止',
    instance: '实例',
  },
  instanceStatus:{
    waiting: '等待',
    running: '运行',
    success: '成功',
    fail: '失败',
    stop: '停止',
    cancel: '取消',
  },
  taskStatus:{
    init: '初始化',
    failover: '故障',
    running: '运行',
    success: '成功',
    failed: '失败',
    stop: '停止',
  },
  router: {
    // 路由
    dashboard: '首页',
    namespace: '命名空间',
    application: '应用管理',
    cronJob: '定时任务',
    cronJobJob: '任务管理',
    cronJobInstance: '任务实例',
    delayJob: '延时任务',
    delayJobJob: '任务管理',
    delayJobInstance: '任务实例',
    clusterManager: '集群管理',
    clusterNode: '集群节点',
    clusterWorker: '工作节点',
    systemManager: '系统管理',
    systemConfiguration: '系统配置',
    systemSlots: '系统分片',

    // 框架默认路由
    home: '首页',
    system: '系统设置',
    systemMenu: '菜单管理',
    systemRole: '角色管理',
    systemUser: '用户管理',
    systemDept: '部门管理',
    systemDic: '字典管理',
    limits: '权限管理',
    limitsFrontEnd: '前端控制',
    limitsFrontEndPage: '页面权限',
    limitsFrontEndBtn: '按钮权限',
    limitsBackEnd: '后端控制',
    limitsBackEndEndPage: '页面权限',
    menu: '菜单嵌套',
    menu1: '菜单1',
    menu11: '菜单11',
    menu12: '菜单12',
    menu121: '菜单121',
    menu122: '菜单122',
    menu13: '菜单13',
    menu2: '菜单2',
    funIndex: '功能',
    funTagsView: 'tagsView 操作',
    funCountup: '数字滚动',
    funWangEditor: 'Editor 编辑器',
    funCropper: '图片裁剪',
    funQrcode: '二维码生成',
    funEchartsMap: '地理坐标/地图',
    funPrintJs: '页面打印',
    funClipboard: '复制剪切',
    funGridLayout: '拖拽布局',
    funSplitpanes: '窗格拆分器',
    funDragVerify: '验证器',
    pagesIndex: '页面',
    pagesFiltering: '过滤筛选组件',
    pagesFilteringDetails: '过滤筛选组件详情',
    pagesFilteringDetails1: '过滤筛选组件详情111',
    pagesIocnfont: 'ali 字体图标',
    pagesElement: 'ele 字体图标',
    pagesAwesome: 'awe 字体图标',
    pagesFormAdapt: '表单自适应',
    pagesTableRules: '表单表格验证',
    pagesFormI18n: '表单国际化',
    pagesFormRules: '多表单验证',
    pagesDynamicForm: '动态复杂表单',
    pagesWorkflow: '工作流',
    pagesListAdapt: '列表自适应',
    pagesWaterfall: '瀑布屏',
    pagesSteps: '步骤条',
    pagesPreview: '大图预览',
    pagesWaves: '波浪效果',
    pagesTree: '树形改表格',
    pagesDrag: '拖动指令',
    pagesLazyImg: '图片懒加载',
    makeIndex: '组件封装',
    makeSelector: '图标选择器',
    makeNoticeBar: '滚动通知栏',
    makeSvgDemo: 'svgIcon 演示',
    makeTableDemo: '表格封装演示',
    paramsIndex: '路由参数',
    paramsCommon: '普通路由',
    paramsDynamic: '动态路由',
    paramsCommonDetails: '普通路由详情',
    paramsDynamicDetails: '动态路由详情',
    chartIndex: '大数据图表',
    visualizingIndex: '数据可视化',
    visualizingLinkDemo1: '数据可视化演示1',
    visualizingLinkDemo2: '数据可视化演示2',
    personal: '个人中心',
    tools: '工具类集合',
    layoutLinkView: '外链',
    layoutIframeViewOne: '内嵌 iframe1',
    layoutIframeViewTwo: '内嵌 iframe2',
  },
  staticRoutes: {
    signIn: '登录',
    notFound: '找不到此页面',
    noPower: '没有权限',
  },
  user: {
    title0: '组件大小',
    title1: '语言切换',
    title2: '菜单搜索',
    title3: '布局配置',
    title4: '消息',
    title5: '开全屏',
    title6: '关全屏',
    dropdownLarge: '大型',
    dropdownDefault: '默认',
    dropdownSmall: '小型',
    dropdown1: '首页',
    dropdown2: '个人中心',
    dropdown3: '404',
    dropdown4: '401',
    dropdown5: '退出登录',
    dropdown6: '代码仓库',
    searchPlaceholder: '菜单搜索：支持中文、路由路径',
    newTitle: '通知',
    newBtn: '全部已读',
    newGo: '前往通知中心',
    newDesc: '暂无通知',
    logOutTitle: '提示',
    logOutMessage: '此操作将退出登录, 是否继续?',
    logOutConfirm: '确定',
    logOutCancel: '取消',
    logOutExit: '退出中',
  },
  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOther: '关闭其它',
    closeAll: '全部关闭',
    fullscreen: '当前页全屏',
    closeFullscreen: '关闭全屏',
  },
  notFound: {
    foundTitle: '地址输入错误，请重新输入地址~',
    foundMsg: '您可以先检查网址，然后重新输入或给我们反馈问题。',
    foundBtn: '返回首页',
  },
  noAccess: {
    accessTitle: '您未被授权，没有操作权限~',
    accessMsg: '联系方式：加QQ群探讨 665452019',
    accessBtn: '重新授权',
  },
  layout: {
    configTitle: '布局配置',
    oneTitle: '全局主题',
    twoTopTitle: '顶栏设置',
    twoMenuTitle: '菜单设置',
    twoColumnsTitle: '分栏设置',
    twoTopBar: '顶栏背景',
    twoTopBarColor: '顶栏默认字体颜色',
    twoIsTopBarColorGradual: '顶栏背景渐变',
    twoMenuBar: '菜单背景',
    twoMenuBarColor: '菜单默认字体颜色',
    twoMenuBarActiveColor: '菜单高亮背景色',
    twoIsMenuBarColorGradual: '菜单背景渐变',
    twoColumnsMenuBar: '分栏菜单背景',
    twoColumnsMenuBarColor: '分栏菜单默认字体颜色',
    twoIsColumnsMenuBarColorGradual: '分栏菜单背景渐变',
    twoIsColumnsMenuHoverPreload: '分栏菜单鼠标悬停预加载',
    threeTitle: '界面设置',
    threeIsCollapse: '菜单水平折叠',
    threeIsUniqueOpened: '菜单手风琴',
    threeIsFixedHeader: '固定 Header',
    threeIsClassicSplitMenu: '经典布局分割菜单',
    threeIsLockScreen: '开启锁屏',
    threeLockScreenTime: '自动锁屏(s/秒)',
    fourTitle: '界面显示',
    fourIsShowLogo: '侧边栏 Logo',
    fourIsBreadcrumb: '开启 Breadcrumb',
    fourIsBreadcrumbIcon: '开启 Breadcrumb 图标',
    fourIsTagsview: '开启 Tagsview',
    fourIsTagsviewIcon: '开启 Tagsview 图标',
    fourIsCacheTagsView: '开启 TagsView 缓存',
    fourIsSortableTagsView: '开启 TagsView 拖拽',
    fourIsShareTagsView: '开启 TagsView 共用',
    fourIsFooter: '开启 Footer',
    fourIsGrayscale: '灰色模式',
    fourIsInvert: '色弱模式',
    fourIsDark: '深色模式',
    fourIsWartermark: '开启水印',
    fourWartermarkText: '水印文案',
    fiveTitle: '其它设置',
    fiveTagsStyle: 'Tagsview 风格',
    fiveAnimation: '主页面切换动画',
    fiveColumnsAsideStyle: '分栏高亮风格',
    fiveColumnsAsideLayout: '分栏布局风格',
    sixTitle: '布局切换',
    sixDefaults: '默认',
    sixClassic: '经典',
    sixTransverse: '横向',
    sixColumns: '分栏',
    tipText: '点击下方按钮，复制布局配置去 `src/stores/themeConfig.ts` 中修改。',
    copyText: '一键复制配置',
    resetText: '一键恢复默认',
    copyTextSuccess: '复制成功！',
    copyTextError: '复制失败！',
  },
  upgrade: {
    title: '新版本升级',
    msg: '新版本来啦，马上更新尝鲜吧！不用担心，更新很快的哦！',
    desc: '提示：更新会还原默认配置',
    btnOne: '残忍拒绝',
    btnTwo: '马上更新',
    btnTwoLoading: '更新中',
  },
  namespace: {
    id: '空间ID',
    name: '空间名称',
    uniqueId: '空间标识',
    status: "空间状态",
    createTime: '创建时间',
    addTitle: '新增命名空间',
    editTitle: '更新命名空间',
    deleteTitle: '你确定要删除命名空间',
  },
  app:{
    id : "ID",
    namespace: "命名空间",
    name: "应用名称",
    desc: "应用描述",
    status: "应用状态",
    createTime:"创建时间",
    updateTime:"更新时间",
    addTitle: '新增应用',
    editTitle: "更新应用",
    deleteTitle: '你确定要删除应用',
    validateName: "格式为英文字母、数字、.、_或-"
  },
  job:{
    job:{
      instanceBtn: '实例',
      application: "应用名称",
      executeOnce: '执行',
      nameAndDesc: '名称/描述',
      name: '任务名称',
      description: '任务描述',
      status: '任务状态',
      workflowId: '工作流ID',
      processorType: '执行器类型',
      processorInfo: '执行器',
      executeType: '执行方式',
      paramsType: '参数类型',
      params: '参数',
      extendParamsType: '扩展参数类型',
      extendParams: '扩展参数',
      timeExpressionType: '表达式类型',
      timeExpression: '时间表达式',
      executeStrategy: '执行策略',
      failRetryTimes: '失败重试次数',
      failRetryInterval: '失败重试间隔',
      concurrency: '并发',
      createTime: '创建时间',
      processorAndExecuteType: '类型/方式',
      expressionAndType: '时间类型/表达式',
      deleteTitle: '你确定要删除任务',
      executeTypeList: {
        standalone: '单机',
        broadcast: '广播',
        mapReduce: 'Map Reduce',
        sharding: '分片',
      },
      executeStrategyList: {
        discard: '丢弃',
        overlay: '覆盖',
        concurrency: '并发',
      },
      timeExpressionTypeList: {
        cron: '定时任务',
        secondDelay: '秒级任务',
        fixedRate: '固定频率',
        oneTime: '一次性',
        secondDelayTitle: '固定延迟',
        fixedRateTitle: '固定频率',
        oneTimeTitle: '执行时间',
      },
      validateName: {
        fixed: '格式为数字',
      },
      timeExpressionTitle: '最近6次执行时间',
      timeExpressionValidMsg: '时间表达式格式错误',
      executeJobTitle: '执行一次',
      addJobTitle: '新增任务',
      updateJobTitle: '更新任务',
      copyJobTitle: '复制任务',
    },
    instance: {
      id: '实例ID',
      jobId: '任务ID',
      status: '任务状态',
      workerAddress: '工作节点',
      executeTime: '执行时间',
      completeTime: '完成时间',
      lastReportTime: '最近上报时间',
      createTime: '创建时间',
      deleteTitle: '你确定要删除实例',
      stopTitle: '你确定要终止任务实例',
    }
  },
  delay: {
    job: {
      nsName: 'Namespace',
      appName: '应用名称',
      nameAndDesc: '任务名称/任务描述',
      name: '任务名称',
      processorInfo: '执行器',
      topic: '任务主题',
      total: '总数',
      ready: '消费队列',
      failCount: '失败队列',
      failTopicEnable: '失败主题',
      failTopicConcurrency: '失败并发',
      status: '任务状态',
      description: '任务描述',
      failRetryTimes: '重试次数',
      failRetryInterval: '重试间隔',
      executeTimeout: '超时时间',
      concurrency: '并发',
      blockingSize: '缓存大小',
      createTime: '创建时间',
      deleteTitle: '你确定要删除延时任务',
      addJobTitle: '新增延时任务',
      updateJobTitle: '更新延时任务',
      copyJobTitle: '复制延时任务',
    },
    instance: {
      namespaceId: '命名空间',
      appId: '应用名称',
      appName: '应用名称',
      delayId: '延迟任务Id',
      taskId: '任务ID',
      topic: '任务主题',
      delayParams: '任务参数',
      delayExtra: '扩展参数',
      status: '任务状态',
      executeTime: '执行时间',
      completeTime: '完成时间',
      createTime: '创建时间',
      deleteTitle: '你确定要删除延时任务实例',
      stopTitle: '你确定要终止延时任务实例',
    }
  },
  server: {
    slots: {
      id: 'ID',
      serverId: '节点编号',
      serverAddress: "节点地址",
      serverStatus: "节点状态",
      createTime: "创建时间",
      updateTime: "更新时间",
    },
    node: {
      id: 'ID',
      ip: "节点IP",
      akkaAddress: "节点地址",
      status: "节点状态",
      createTime: "创建时间",
      updateTime: "更新时间",
    },
    worker: {
      appName: '应用名称',
      address: '节点地址',
      protocolType: '节点协议',
      version: '节点版本',
      lastHeartbeatTime: '上次心跳',
      status: '节点状态',
      createTime: "创建时间",
    },
    system: {
      version: '系统版本',
      maxSlot: '任务分片',
      workerSupervisorSlot: '节点分片',
      clusterVersion: '任务版本',
      clusterDelayVersion: '延时版本',
      delayZsetSlot: '延时有序集合分片',
      delayAddListSlot: '延时队列分片',
      delayStatusListSlot: '延时状态分片',
      delayDeleteListSlot: '延时删除分片',
      delayFailZsetSlot: '延时有序失败分片',
      jobKeepDays: '保持任务实例',
      delayKeepDays: '保持延时实例',
      serverKeepDays: '保持集群节点',
      workerKeepDays: '保持工作节点',
      updateTitle: '你确定更新系统参数?',
    }
  }
};
