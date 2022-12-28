<template></template>
<script>
export default {
  data() {
    return {
      crudId: this.$uid()
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
        apiRoute: 'apiRoutes.qreports.folders',
        create: true,
        read: {
          showAs: 'folders',
          columns: [
            {
              name: 'id',
              label: this.$tr('isite.cms.form.id'),
              field: 'id',
              style: 'width: 50px'
            },
            {
              name: 'name',
              label: this.$tr('isite.cms.form.name'),
              field: 'name',
            },
            {
              name: "created_at",
              label: this.$tr("isite.cms.form.createdAt"),
              field: "createdAt",
              align: "left",
              format: (val) => (val ? this.$trd(val) : "-"),
            },
            {
              name: "updated_at",
              label: this.$tr("isite.cms.form.updatedAt"),
              field: "updatedAt",
              align: "left",
              format: (val) => (val ? this.$trd(val) : "-"),
            },
            { name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left' },
          ],
          filters: {},
          requestParams: {},
          actions: [],
          relation: {
            //permission: "",
            apiRoute: 'apiRoutes.qreports.reports',
            requestParams: (row) => {
              return {
                filter: { folderId: row.id },
              }
            },
            columns: [
              {
                name: 'id',
                label: this.$tr('isite.cms.form.id'),
                field: 'id',
                style: 'width: 50px'
              },
              {
                name: 'name',
                label: this.$tr('isite.cms.form.name'),
                field: 'name',
              },
              {
                name: "created_at",
                label: this.$tr("isite.cms.form.createdAt"),
                field: "createdAt",
                align: "left",
                format: (val) => (val ? this.$trd(val) : "-"),
              },
              {
                name: "updated_at",
                label: this.$tr("isite.cms.form.updatedAt"),
                field: "updatedAt",
                align: "left",
                format: (val) => (val ? this.$trd(val) : "-"),
              },
              { name: 'actions', label: this.$tr('isite.cms.form.actions'), align: 'left' },
            ],
            actions: [
              {
                name: 'show',
                icon: 'fal fa-eye',
                label: this.$tr('isite.cms.label.show'),
                action: (item) => {
                  this.$router.push({ name: 'qreports.admin.report', params: {id: item.id} });
                }
              },
            ],
          },
        },
        update: false,
        delete: true,
        formLeft: {
          id: {value: ''},
          name: {
            value: null,
            type: 'input',
            props: {
              label: 'title'
            },
          }
        }
      }
    },
  },
}
</script>
