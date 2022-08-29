<template>
  <div>
    <div class="q-stepper-title">
      <h3 class="text-primary">Identify your report</h3>
      <div></div>
    </div>
    <div class="
        tw-grid 
        tw-gap-6 
        tw-grid-cols-1 
        md:tw-grid-cols-2 
        xl:tw-grid-cols-3 
        tw-my-4 tw-overflow-hidden
        ">
        <div>

          <dynamic-field class="input-report tw-mb-4" :field="formFields.reportsForms.reportType"/>
          <dynamic-field class="input-report tw-mb-4" :field="formFields.reportsForms.folder"/>
          <dynamic-field class="input-report tw-mb-4" :field="formFields.reportsForms.reportTitle"/>

        </div>
        <div>

          <dynamic-field class="input-report tw-mb-4" :field="formFields.reportsForms.description"/>
          <dynamic-field class="input-report tw-mb-4" :field="formFields.reportsForms.shortDescription"/>
          
        </div>
        <div>

          <div class="
            tw-w-full tw-flex tw-flex-col tw-items-start tw-space-x-4 tw-mb-6 
            lg:tw-flex-row lg:tw-mb-8
            ">
            <div class="tw-w-full tw-mb-4 lg:tw-mb-0 lg:tw-w-3/4">
              <dynamic-field class="input-report" :field="formFields.reportsForms.email"/>
            </div> 
            <div class="tw-w-full lg:tw-w-1/4 tw-overflow-hidden">
              <dynamic-field :field="formFields.reportsForms.toggle"/>
            </div> 
          </div>
          
          <q-btn outline color="primary" class="tw-mb-8" no-caps>
            <q-icon left size="1em" name="fa fa-plus" />
            <div>Add another email</div>
          </q-btn>

          <dynamic-field class="q-mb-md radio-report" :field="formFields.reportsForms.attachReport"  />

        </div>
    </div>
  </div>
</template>

<script>
import { controllers } from 'chart.js'
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
              color: 'primary',
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
              color: 'primary',
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
              label: 'Report Title',
              color: 'primary',
            }
          },
          description: {
            type: 'input',
            props: {
              label: 'Description',
              type: 'textarea',
              counter: true,
              maxlength: 300,
              rows: '6',
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
              color: 'primary',
              counter: true,
              maxlength: 40,
            }
          },
          toggle: {
            type: 'toggle',
            value: '1',
            props: {
                size: 'md',
                options: [
                    {label: 'YES', value: '1'},
                    {label: 'NO', value: '0'},
                ],
            },
          },
          attachReport: {
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