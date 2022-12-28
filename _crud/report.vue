<template></template>
<script>
export default {
  data() {
    return {
      crudId: this.$uid(),
    }
  },
  computed: {
    //Crud info
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {}
    },
    crudData() {
      return {
        crudId: this.crudId,
        entityName: config("main.qfly.entityNames.workOrder"),
        apiRoute: 'apiRoutes.qreports.reportData',
        create: false,
        read: {
          requestParams: {filter: {reportId: this.reportId}},
        },
        update: false,
        delete: false,
        formLeft: {}
      }
    },
  },
}
</script>
