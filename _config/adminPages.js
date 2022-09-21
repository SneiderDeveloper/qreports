export default {
    reports: {
        //permission: 'page.pages.manage',
        activated: true,
        authenticated: true,
        path: '/reports/index',
        name: 'qreports.admin.reports',
        crud : import('@imagina/qreports/_crud/reports'),
        page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
        layout: () => import('@imagina/qsite/_layouts/master.vue'),
        title: 'ireports.cms.sidebar.reportsInfo',
        icon: 'fal fa-file-alt',
        subHeader: {
          refresh: true,
        }
    }
}
