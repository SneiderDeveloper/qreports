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
    reportPermissionsEdit() {
      return this.$auth.hasAccess('ireport.reports.edit');
    },
    reportPermissionsIndex() {
      return this.$auth.hasAccess('ireport.reports.index');
    },
    crudData() {
      return {
        crudId: this.crudId,
        apiRoute: 'apiRoutes.qreports.folders',
        permission: 'ireport.folders',
        create: {
          title: 'Create Folders'
        },
        read: {
          showAs: 'folders',
          apiRouteOrderFolders: "apiRoutes.qreports.orderPosition",
          columns: [
            {
              name: 'id',
              label: this.$tr('isite.cms.form.id'),
              field: 'id',
              style: 'width: 50px'
            },
            {
                name: 'title',
                label: this.$tr('isite.cms.form.title'),
                field: 'title',
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
                name: this.$tr('isite.cms.label.show'),
                icon: 'fal fa-eye',
                label: this.$tr('isite.cms.label.show'),
                vIf: this.reportPermissionsIndex,
                action: (item) => {
                  this.$router.push({ name: 'qreports.admin.report', params: {id: item.id} });
                }
              },
              {
                name: this.$tr('isite.cms.label.edit'),
                icon: 'fa-regular fa-pencil',
                label: this.$tr('isite.cms.label.edit'),
                vIf: this.reportPermissionsEdit,
                action: (item) => {
                  this.$router.push({ name: 'qreports.admin.reportEdit', params: {id: item.id} });
                }
              },
            ],
          },
        },
        update: {
          title: 'Update Folders'
        },
        delete: true,
        formLeft: {
          id: {value: ''},
          is_scheduled: {
            value: false,
          },
          title: {
            value: null,
            type: 'input',
            props: {
              label: 'Title',
              rules: [
                val => !!val || this.$tr('isite.cms.message.fieldRequired')
              ],
            },
          },
          name: {
            value: '',
          },
          roles: {
            value: [],
            type: 'crud',
            props: {
              crudType: 'select',
              crudData: import('@imagina/quser/_crud/roles'),
              crudProps: {
                label: `${this.$trp('isite.cms.label.role', {capitalize: true})}*`,
                multiple: true,
                useChips: true,
              },
              config: {options: {label: 'name', value: 'id'}},
            }
          },
        },
        getDataForm: (formData, type) => {
          return new Promise(resolve => {
            if (type == 'create') {
              //Add system name
              const title = formData.title || '';
              formData.name = this.$helper.getSlug(title);
            }
            //Resolve
            resolve(formData)
          })
        }
      }
    },
  },
}
</script>
