export default {
    folders: {
        //permission: 'page.pages.manage',
        activated: true,
        authenticated: true,
        path: '/folders/index',
        name: 'qreports.admin.folders',
        crud : import('@imagina/qreports/_crud/folders'),
        page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
        layout: () => import('@imagina/qsite/_layouts/master.vue'),
        title: 'ireports.cms.sidebar.foldersInfo',
        icon: 'fa-light fa-folder',
        subHeader: {
          refresh: true,
        }
    },
    report: {
      //permission: 'page.pages.manage',
      activated: true,
      authenticated: true,
      path: '/report/index/:id',
      name: 'qreports.admin.report',
      page: () => import('@imagina/qreports/_pages/pageReport'),
      layout: () => import('@imagina/qsite/_layouts/master.vue'),
      title: 'ireports.cms.sidebar.reportInfo',
      icon: 'fa-light fa-file-chart-column',
      subHeader: {
        refresh: true,
      }
    },
    reportCreate: {
      //permission: 'page.pages.manage',
      activated: true,
      authenticated: true,
      path: '/report/create/',
      name: 'qreports.admin.reportCreate',
      page: () => import('@imagina/qreports/_components/reports/steppers'),
      layout: () => import('@imagina/qsite/_layouts/master.vue'),
      title: 'ireports.cms.sidebar.reportCreate',
      icon: 'fa-light fa-file-chart-column',
      subHeader: {
        refresh: true,
      }
  }
}
