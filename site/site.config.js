module.exports = {
  documents: [
    {
      key: 'quick-start',
      name: '快速上手',
      module: () => import('@/README.md'),
      style: false,
    },
    // {
    //   key: 'change-log',
    //   name: '更新日',
    //   module: () => import('@/CHANGELOG.md'),
    //   style: false,
    // },
  ],
  components: {
    general: [
      {
        key: 'button',
        name: '按钮',
        module: () => import('@/components/button/demo.md'),
        style: true,
      },
      {
        key: 'icon',
        name: '图标',
        module: () => import('@/components/icon/demo.md'),
        style: true,
      },
    ],
    layout: [
      // {
      //   key: 'layout',
      //   name: '布局',
      //   module: () => import('@/components/layout/layout.md'),
      //   style: false,
      // },
      // {
      //   key: 'grid',
      //   name: '栅格',
      //   module: () => import('@/components/grid/grid.md'),
      //   style: true,
      // },
    ],
    form: [
      {
        key: 'radio',
        name: '单选框',
        module: () => import('@/components/radio/demo.md'),
        style: false,
      },
      {
        key: 'checkbox',
        name: '复选框',
        module: () => import('@/components/checkbox/demo.md'),
        style: false,
      },
      {
        key: 'input',
        name: '输入框',
        module: () => import('@/components/input/demo.md'),
        style: true,
      },
      // {
      //   key: 'number-input',
      //   name: 'NumberInput',
      //   module: () => import('@/components/number-input/numberinput.md'),
      //   style: false,
      // },
      // {
      //   key: 'select',
      //   name: 'Select',
      //   module: () => import('@/components/select/select.md'),
      //   style: false,
      // },
      {
        key: 'switch',
        name: '开关',
        module: () => import('@/components/switch/demo.md'),
        style: false,
      },
      // {
      //   key: 'slider',
      //   name: '滑动输入条',
      //   module: () => import('@/components/slider/slider.md'),
      //   style: false,
      // },
      // {
      //   key: 'calendar',
      //   name: '日历',
      //   module: () => import('@/components/calendar/calendar.md'),
      //   style: false,
      // },
      // {
      //   key: 'date-picker',
      //   name: '日期选择器',
      //   module: () => import('@/components/date-picker/datepicker.md'),
      //   style: false,
      // },
      // {
      //   key: 'time-picker',
      //   name: '时间选择器',
      //   module: () => import('@/components/time-picker/timepicker.md'),
      //   style: false,
      // },
      // {
      //   key: 'upload',
      //   name: '上传',
      //   module: () => import('@/components/upload/upload.md'),
      //   style: false,
      // },
      // {
      //   key: 'form',
      //   name: '表单',
      //   module: () => import('@/components/form/form.md'),
      //   style: false,
      // },
      // {
      //   key: 'transfer',
      //   name: '穿梭框',
      //   module: () => import('@/components/transfer/transfer.md'),
      //   style: false,
      // },
    ],
    view: [
      {
        key: 'badge',
        name: '徽标',
        module: () => import('@/components/badge/demo.md'),
        style: true,
      },
      // {
      //   key: 'table',
      //   name: '表格',
      //   module: () => import('@/components/table/table.md'),
      //   style: false,
      // },
      {
        key: 'tag',
        name: '标签',
        module: () => import('@/components/tag/demo.md'),
        style: false,
      },
      {
        key: 'progress',
        name: '进度条',
        module: () => import('@/components/progress/demo.md'),
        style: true,
      },
      // {
      //   key: 'panel',
      //   name: '面板',
      //   module: () => import('@/components/panel/panel.md'),
      //   style: false,
      // },
      // {
      //   key: 'pagination',
      //   name: '分页器',
      //   module: () => import('@/components/pagination/pagination.md'),
      //   style: false,
      // },
      // {
      //   key: 'tree',
      //   name: '树形控件',
      //   module: () => import('@/components/tree/tree.md'),
      //   style: false,
      // },
      {
        key: 'avatar',
        name: '头像',
        module: () => import('@/components/avatar/demo.md'),
        style: true,
      },
      // {
      //   key: 'swipe',
      //   name: '走马灯',
      //   module: () => import('@/components/swipe/swipe.md'),
      //   style: false,
      // },
      {
        key: 'tooltip',
        name: '文字提示',
        module: () => import('@/components/tooltip/demo.md'),
        style: true,
      },
    ],
    feedback: [
      // {
      //   key: 'alert',
      //   name: '警告提示',
      //   module: () => import('@/components/alert/alert.md'),
      //   style: false,
      // },
      {
        key: 'loading',
        name: '加载',
        module: () => import('@/components/loading/demo.md'),
        style: true,
      },
      {
        key: 'message',
        name: '消息提示',
        module: () => import('@/components/message/demo.md'),
        style: true,
      },
      // {
      //   key: 'modal',
      //   name: '对话框',
      //   module: () => import('@/components/modal/modal.md'),
      //   style: false,
      // },
      // {
      //   key: 'confirm',
      //   name: '确认框',
      //   module: () => import('@/components/confirm/confirm.md'),
      //   style: false,
      // },
      {
        key: 'notification',
        name: '通知提醒框',
        module: () => import('@/components/notification/demo.md'),
        style: true,
      },
      {
        key: 'popover',
        name: '气泡卡片',
        module: () => import('@/components/popover/popover.md'),
        style: false,
      },
      // {
      //   key: 'popconfirm',
      //   name: '气泡确认框',
      //   module: () => import('@/components/popconfirm/popconfirm.md'),
      //   style: false,
      // },
    ],
    navigation: [
      {
        key: 'menu',
        name: '导航菜单',
        module: () => import('@/components/menu/demo.md'),
      },
      {
        key: 'tabs',
        name: '标签页',
        module: () => import('@/components/tabs/demo.md'),
        style: true,
      },
      {
        key: 'breadcrumb',
        name: '面包屑',
        module: () => import('@/components/breadcrumb/demo.md'),
        style: false,
      },
      {
        key: 'steps',
        name: '步骤条',
        module: () => import('@/components/steps/demo.md'),
        style: false,
      },
      {
        key: 'dropdown',
        name: '下拉框',
        module: () => import('@/components/dropdown/demo.md'),
        style: true,
      },
      {
        key: 'drawer',
        name: '抽屉',
        module: () => import('@/components/drawer/demo.md'),
        style: false,
      },
    ],
    other: [
      // {
      //   key: 'mask',
      //   name: '遮罩',
      //   module: () => import('@/components/mask/mask.md'),
      //   style: false,
      // },
      // {
      //   key: 'transition',
      //   name: '动画',
      //   module: () => import('@/components/transition/transition.md'),
      //   style: false,
      // },
      {
        key: 'locale-provider',
        name: '国际化',
        module: () => import('@/components/locale-provider/demo.md'),
        style: false,
      },
    ],
  },
};
