export default {
  nav: {
    home: 'Home',
    download: 'Download',
    detail: 'Details',
    fqa: 'FAQ',
    sponsor: 'Sponsor',
    version: 'Version Info',
  },
  baseInfo: {
    title: 'Open Source PlayStation 4/5 Remote Streaming Application',
    desc: 'PeaSyo, also known as Pixiu, is a PS4/5 streaming application for Android that supports remote wake-up, remote streaming, button mapping, controller vibration, and other rich features. You can play your PS anywhere using your phone, tablet, or handheld device.',
  },
  download: {
    title: 'Download',
    last_version: 'Current Version',
    github: 'Download from GitHub Releases',
  },
  detail: {
    matting: {
      title: '',
      desc: 'A user-friendly PlayStation streaming application that supports PS4 (firmware 8+ and above) and PS5 console streaming. You can complete console binding and remote play in just a few simple steps. PeaSyo also provides rich streaming configurations with support for personalized settings.',
      feature1: 'Support for multiple console registration',
      feature2: 'Support for local and remote streaming (gateway configuration required)',
      feature3: 'Up to 1080P resolution with HDR support',
      feature4: 'Support for button mapping',
      feature5: 'Streaming performance monitoring',
      feature6: 'Quick menu support',
    },
  },
  fqa: {
    title: 'Frequently Asked Questions',
    fqas: [{
        question: 'Is gyroscope supported?',
        answer: 'Yes, the gyroscope function is disabled by default. You need to go to Settings - Sensors to enable it.',
      },
      {
        question: 'What if the controller doesn\'t vibrate?',
        answer: 'Controller vibration is related to the Android device\'s kernel. If the controller doesn\'t vibrate, please try switching controller mode or using Android controller driver override.',
      },
      {
        question: 'How to stream remotely?',
        answer: 'Remote streaming requires your home network to have IPv4/6 public network access, with ports 987/9302/9295/9296/9297 forwarded, or use networking tools like ZeroTier to create a virtual LAN.',
      },
    ],
  },
  sponsor: {
    title: 'Sponsor',
    desc: 'If you find the application useful, consider supporting the development',
  },
};
