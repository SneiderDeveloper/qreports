<template></template>
<script>
  export default {
    data() {
      return {
        crudId: this.$uid()
      }
    },
    computed: {
      crudData() {
        return {
          crudId: this.crudId,
          //apiRoute: 'apiRoutes.qpage.pages',
          //permission: 'page.pages',
          create: {
            title: 'Created',
          },
          read: {
            columns: [],
            requestParams: {}
          },
          update: {
            title: this.$tr('page.cms.updatePage')
          },
          delete: true,
          formLeft: {},
          formRight: {},
        }
      },
      //Crud info
      crudInfo() {
        return this.$store.state.qcrudComponent.component[this.crudId] || {}
      }
    },
  }
</script>
