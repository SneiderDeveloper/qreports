<template>
  <div>
    <div class="tw-relative tw-mb-6 tw-overflow-x-hidden">
      <h3 class="
        tw-text-lg 
        tw-font-bold 
        text-primary 
        tw-bg-white
        tw-pr-4
        tw-inline-block
        tw-z-[2]
        tw-relative
        ">
          Identify your report
        </h3>
        <div class="
          tw-block
          tw-w-full
          tw-h-px
          tw-bg-gray-200
          tw-top-2/4
          tw-absolute
          tw-z-[1]
        "></div>
    </div>
    <div class="
        tw-grid 
        tw-gap-4 
        tw-grid-cols-1 
        md:tw-grid-cols-2 
        lg:tw-grid-cols-3 
        tw-my-4 tw-overflow-hidden
        ">
        <div>

          <dynamic-field class="input-report tw-mb-2" :field="formFields.reportsForms.reportType"/>
          <dynamic-field class="input-report tw-mb-2" :field="formFields.reportsForms.folder"/>
          <dynamic-field class="input-report tw-mb-2" :field="formFields.reportsForms.reportTitle"/>

        </div>
        <div>

          <dynamic-field class="input-report tw-mb-2" :field="formFields.reportsForms.description"/>
          <dynamic-field class="input-report tw-mb-2" :field="formFields.reportsForms.shortDescription"/>
          
        </div>
        <div>

          <div class="tw-w-full tw-flex tw-items-end tw-space-x-4 tw-mb-8 ">
            <div class="tw-w-4/5 lg:tw-w-3/4">
              <dynamic-field class="input-report" :field="formFields.reportsForms.email"/>
            </div> 
            <div class="tw-w-1/5 lg:tw-w-1/4 tw-overflow-hidden">
              <dynamic-field :field="formFields.reportsForms.toggle"/>
            </div> 
          </div>
          
          <q-btn outline color="primary" class="tw-mb-6" no-caps>
            <q-icon left size="1em" name="fa fa-plus" />
            <div>Add another email</div>
          </q-btn>

          <dynamic-field class="q-mb-md radio-report" :field="formFields.reportsForms.AttachReport"  />

        </div>
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
              icon: 'description',
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
              icon: 'folder_open',
              options: [
                {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                {label: this.$tr('isite.cms.label.disabled'), value: '0'}
              ],
            },
          },
          reportTitle: {
            type: 'input',
            props: {
              icon: 'text_fields', 
              label: 'Report Title'
            }
          },
          description: {
            type: 'input',
            props: {
              label: 'Description',
              type: 'textarea',
              counter: true,
              maxlength: 300,
              rows: '6'
            }
          },
          shortDescription: {
            type: 'input',
            counter: 70,
            props: {
                label: 'Short Description',
                type: 'textarea',
                counter: true,
                maxlength: 70,
                rows: '3'
            }
          },
          email: {
            type: 'input',
            props: {
              label: 'Email Notification',
              icon: 'mail',
            }
          },
          toggle: {
            type: 'toggle',
            value: '1',
            props: {
                size: 'lg',
                options: [
                    {label: 'YES', value: '1'},
                    {label: 'NO', value: '0'},
                ],
            },
          },
          AttachReport: {
            value: 'pdf',
            type: 'optionGroup',
            props: {
              label: 'Attach this report as:',
              inline: true,
              stackLabel: true,
              options: [
                {label: 'PDF', value: 'pdf'},
                {label: 'CSV', value: 'csv'},
                {label: 'XLSX', value: 'xlsx'}
              ]
            }
          }
        },
      };
    },
  },
};
</script>

<style>
</style>