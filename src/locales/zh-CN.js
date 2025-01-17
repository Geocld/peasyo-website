export default {
  nav: {
    home: '首页',
    download: '下载',
    detail: '详情',
    fqa: '问题',
    sponsor:'赞助',
    version: '版本信息',
  },
  baseInfo: {
    title: '开源Play Station4/5远程串流应用',
    desc: 'PeaSyo，也称貔貅(pixiu)，是一款PS4/5串流应用，支持Android端，支持远程唤醒、远程串流、按键映射、手柄振动等丰富的功能，你可以在任何地方使用你的手机、平板和掌机游玩PS。',

  },
  download: {
    title: '下载',
    last_version: '当前版本',
    github: 'GitHub releases 下载',
  },
  detail: {
    matting: {
      title: '',
      desc: '简单易用的PlayStation串流应用，支持PS4(系统固件8+以上)和PS5主机串流，你只需简单几步即可完成主机绑定并远程游玩，同时PeaSyo还提供了丰富的串流配置，支持个性化配置。',
      feature1: '支持注册多主机',
      feature2: '支持本地串流和远程串流(需配置网关)',
      feature3: '最高支持1080P，支持HDR',
      feature4: '支持按键映射',
      feature5: '支持串流性能查看',
      feature6: '支持快捷菜单',
    },
  },
  fqa: {
    title: '常见问题',
    fqas: [{
        question: '是否支持陀螺仪？',
        answer: '支持，陀螺仪功能默认关闭，你需要到设置 - 传感器开启。'
      },
      {
        question: '手柄没有振动怎么办？',
        answer: '手柄振动与安卓设备的内核有关，如手柄无法振动，请切换手柄模式或使用覆盖安卓手柄驱动尝试。'
      },
      {
        question: '如何远程串流？',
        answer: '远程串流需要家庭网络已经具备IPv4/6公网，同时转发端口987/9302/9295/9296/9297，或者使用zerotier等组网工具组件虚拟局域网。'
      },
    ],
  },sponsor: {
    title: '赞助',
    desc: '如果觉得应用好用，不妨支持下开发',
  },
};