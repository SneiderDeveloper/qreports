<template>
  <div>
    <crud
      v-if="!loading"
      :crud-data="import('@imagina/qreports/_crud/report.vue')"
      :custom-data="crudData"
      ref="crudRequests"
    />
  </div>
</template>
<script>
import fieldsDetailsStore from "../_store/sections/fieldsDetailsStore.js";
export default {
  data() {
    return {
      columns: [],
      filters: {},
      loading: true,
    };
  },
  created() {
    this.$nextTick(async function () {
      this.getCrudReport();
    });
  },
  computed: {
    //Crud info
    reportId() {
      return this.$route.params.id || null;
    },
    crudInfo() {
      return this.$store.state.qcrudComponent.component[this.crudId] || {};
    },
    crudData() {
      return {
        read: {
          columns: [
            ...this.columns,
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
          ],
          filters: {
            ...this.filters,
          },
        },
      };
    },
  },
  methods: {
    async getCrudReport() {
      try {
        this.loading = true;
        const response = await this.$crud.show(
          "apiRoutes.qreports.reports",
          this.reportId,
          {
            refresh: true,
            params: {
              include: "reportType",
            },
          }
        );
        if (response.data.reportType) {
          this.columns = response.data.reportType.columns.map((item) => ({
            name: item.id,
            label: item.title,
            field: item.id,
            align: "left",
            format: (val) => (val ? val : "-"),
          }));
          const filters = response.data.reportType.filters;
          const filterList = Object.keys(response.data.reportType.filters).map(
            (item) => ({
              id: item,
              title: filters[item].props.label,
              ...filters[item],
            })
          );
          this.filters = await fieldsDetailsStore().buildfilters(
            filterList,
            true
          );
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
    },
  },
};
</script>
  