<template>
  <div>
    <div v-for="(field, keyField) in formFields.reportsForms" :key="keyField" class="col-12">
        <dynamic-field class="q-mb-md" :field="field"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    formFields() {
      return {
        reportsForms: {
          reportType: {
            value: '1',
            type: 'select',
            isTranslatable: false,
            props: {
              label: 'Report Type',
              options: [
                {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                {label: this.$tr('isite.cms.label.disabled'), value: '0'}
              ],
            },
         },
         folder: {
            value: '1',
            type: 'select',
            isTranslatable: false,
            props: {
              label: 'Folder',
              options: [
                {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                {label: this.$tr('isite.cms.label.disabled'), value: '0'}
              ],
            },
         },
         reportTitle: {
            type: 'input',
            props: {label: 'Report Title'}
         },
         description: {
            type: 'input',
            props: {
                label: 'Description',
                type: 'textarea',
            }
         },
         shortDescription: {
            type: 'input',
            props: {
                label: 'Short Description',
                type: 'textarea',
            }
         },
         email: {
            type: 'input',
            props: {
                label: 'Email Notification',
            }
         },
         checkboxPDF: {
          type: 'checkbox',
          props: {label: 'PDF'}
        },
        checkboCSV: {
          type: 'checkbox',
          props: {label: 'CSV'}
        },
        checkboXLS: {
          type: 'checkbox',
          props: {label: 'XLS'}
        },
        toggle: {
          type: 'toggle',
        }
        },
      };
    },
  },
};
</script>

<style>
</style>