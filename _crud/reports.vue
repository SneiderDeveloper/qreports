<template>
  <sectionReports />
</template>
<script>
import sectionReports from '@imagina/qreports/_components/reports/index.vue';
  export default {
    components: {
      sectionReports
    },
    data() {
      return {
        crudId: this.$uid()
      }
    },
    computed: {
      //Crud info
      crudInfo() {
        return this.$store.state.qcrudComponent.component[this.crudId] || {}
      }
    },
  }
</script>
