<template>
    
</template>
<script>

export default {
  computed: {
    crudData() {
      return {
        crudId: this.$uid(),
        apiRoute: 'apiRoutes.qreports.reportTypes',
        permission: 'ireport.report-types',
        read: {
          columns: [
            {
              name: "id",
              label: this.$tr("isite.cms.form.id"),
              field: "id",
              style: "width: 50px",
            },
            {
              name: "name",
              label: "Name",
              field: "name",
              align: "left",
            },
            {
              name: "entity",
              label: "Entity",
              field: "entity",
              format: val => val ? val : '-',
              align: "left",
            },
            {
              name: "procedureName",
              label: "Procedure Name",
              field: "procedureName",
              format: val => val ? val : '-',
              align: "left",
            },
            {
              name: "actions",
              label: this.$tr("isite.cms.form.actions"),
              align: "left",
            },
          ],
        },
        create: {
          title: "Create report type",
        },
        update: {
          title: "Update report type",
        },
        delete: true,
        formLeft: {
          id: {
            value: null,
          },
          name: {
            name: "name",
            value: "",
            type: "input",
            props: {
              rules: [
                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
              ],
              label: "Name*",
              clearable: true,
              color: "primary",
            },
          },
          entity: {
            name: "entity",
            value: "",
            type: "input",
            props: {
              rules: [
                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
              ],
              label: "Entity*",
              clearable: true,
              color: "primary",
              "hide-bottom-space": false,
            },
          },
          procedureName: {
            value: "",
            type: "input",
            props: {
              label: "Procedure Name",
              clearable: true,
              color: "primary",
              "hide-bottom-space": false,
            },
          },
          columns: {
            value: [],
            type: "json",
            props: {
              label: "columns",
            },
          },
          filters: {
            value: [],
            type: "json",
            props: {
              label: "filters",
            },
          },
          sort: {
            value: [],
            type: "json",
            props: {
              label: "sort",
            },
          }
        },
      };
    },
  },
};
</script>
