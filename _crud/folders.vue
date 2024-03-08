<template></template>
<script>
import { store, i18n, helper } from 'src/plugins/utils'

export default {
  data() {
    return {
      crudId: this.$uid()
    }
  },
  computed: {
    //Crud info
    crudInfo() {
      return store.state.qcrudComponent.component[this.crudId] || {}
    },
    reportPermissionsEdit() {
      return store.hasAccess('ireport.reports.edit');
    },
    reportPermissionsIndex() {
      return store.hasAccess('ireport.reports.index');
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
              label: i18n.tr('isite.cms.form.id'),
              field: 'id',
              style: 'width: 50px'
            },
            {
                name: 'title',
                label: i18n.tr('isite.cms.form.title'),
                field: 'title',
            },
            {
              name: "created_at",
              label: i18n.tr("isite.cms.form.createdAt"),
              field: "createdAt",
              align: "left",
              format: (val) => (val ? i18n.trd(val) : "-"),
            },
            {
              name: "updated_at",
              label: i18n.tr("isite.cms.form.updatedAt"),
              field: "updatedAt",
              align: "left",
              format: (val) => (val ? i18n.trd(val) : "-"),
            },
            { name: 'actions', label: i18n.tr('isite.cms.form.actions'), align: 'left' },
          ],
          filters: {},
          requestParams: {},
          actions: [],
          relation: {
            //permission: "",
            apiRoute: 'apiRoutes.qreports.reports',
            requestParams: (row) => {
              return {
                filter: { folderId: row?.id },
              }
            },
            columns: [
              {
                name: 'id',
                label: i18n.tr('isite.cms.form.id'),
                field: 'id',
                style: 'width: 50px'
              },
              {
                name: 'name',
                label: i18n.tr('isite.cms.form.name'),
                field: 'name',
              },
              {
                name: "created_at",
                label: i18n.tr("isite.cms.form.createdAt"),
                field: "createdAt",
                align: "left",
                format: (val) => (val ? i18n.trd(val) : "-"),
              },
              {
                name: "updated_at",
                label: i18n.tr("isite.cms.form.updatedAt"),
                field: "updatedAt",
                align: "left",
                format: (val) => (val ? i18n.trd(val) : "-"),
              },
              { name: 'actions', label: i18n.tr('isite.cms.form.actions'), align: 'left' },
            ],
            actions: [
              {
                name: i18n.tr('isite.cms.label.show'),
                icon: 'fal fa-eye',
                label: i18n.tr('isite.cms.label.show'),
                vIf: this.reportPermissionsIndex,
                action: (item) => {
                  this.$router.push({ name: 'qreports.admin.report', params: {id: item?.id} });
                }
              },
              {
                name: i18n.tr('isite.cms.label.edit'),
                icon: 'fa-regular fa-pencil',
                label: i18n.tr('isite.cms.label.edit'),
                vIf: this.reportPermissionsEdit,
                action: (item) => {
                  this.$router.push({ name: 'qreports.admin.reportEdit', params: {id: item?.id} });
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
                val => !!val || i18n.tr('isite.cms.message.fieldRequired')
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
              crudData: import('modules/quser/_crud/roles'),
              crudProps: {
                label: `${i18n.trp('isite.cms.label.role', {capitalize: true})}*`,
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
              formData.name = helper.getSlug(title);
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
