<template>
  <div>
    <div class="q-stepper-title">
      <h3 class="text-primary">
        {{  $tr('ireports.cms.identifyYourReport') }}
      </h3>
      <div></div>
    </div>
      <div
        class="
          tw-grid tw-gap-6 tw-grid-cols-1
          md:tw-grid-cols-2
          xl:tw-grid-cols-2
          tw-my-4
        "
      >
        <div>
          <dynamic-field
            v-model="form.entity"
            class="input-report tw-mb-4"
            :field="formFields.reportsForms.entity"
            @input="changeEntity"
          />
          <dynamic-field
            v-model="form.reportTypeId"
            class="input-report tw-mb-4"
            :field="formFields.reportsForms.reportTypeId"
            @input="getSelectedReportType"
          />
          <dynamic-field
            v-model="form.folderId"
            class="input-report tw-mb-4"
            :field="formFields.reportsForms.folderId"
          />
          <dynamic-field
            v-model="form.roles"
            class="input-report tw-mb-4"
            :field="formFields.reportsForms.roles"
          />
        </div>
        <div>
          <dynamic-field
            v-model="form.title"
            class="input-report tw-mb-4"
            :field="formFields.reportsForms.title"
          />
          <dynamic-field
            v-model="form.description"
            class="input-report tw-mb-4"
            :field="formFields.reportsForms.description"
          />
        </div>
      </div>
  </div>
</template>

<script>
import descriptionStore from "../../../_store/sections/descriptionStore.js";
import featureStore from "../../../_store/sections/featureStore.js";
import sortStore from "../../../_store/sections/sortStore.js"
export default {
  created() {
    this.$nextTick(async function () {
      await descriptionStore().getListOfReportTypes();
    });
  },
  watch: {
    'form.reportTypeId': function(newValue, oldValue) {
      this.getSelectedReportType();
    }
  },
  data() {
    return {};
  },
  computed: {
    form() {
      return descriptionStore().getDescriptionForm();
    },
    reportTypeList() {
      const reportType = descriptionStore()
        .getReportTypeList()
        .filter(item => item.entity.includes(this.form.entity));
      return reportType;
    },
    formFields() {
      return {
        reportsForms: {
          entity: {
            value: null,
            type: "select",
            isTranslatable: false,
            props: {
              rules: [
                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
              ],
              selectByDefault: true,
              label: "Object*",
              icon: "fa-solid fa-list-ul",
            },
            loadOptions: {
              apiRoute: "apiRoutes.qreports.entities",
              select: {label: 'label', id: 'value'},
            },
          },
          reportTypeId: {
            value: null,
            type: "select",
            isTranslatable: false,
            props: {
              rules: [
                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
              ],
              label: "Report Type*",
              icon: "fa-thin fa-file-lines",
              options: this.reportTypeList,
            },
          },
          folderId: {
            value: null,
            type : 'treeSelect',
            isTranslatable: false,
            props: {
              rules: [
                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
              ],
              label: "Folder*",
              icon: "folder_open",
            },
            loadOptions: {
              apiRoute: "apiRoutes.qreports.folders",
            },
          },
          roles: {
            value: [],
            type: 'crud',
            props: {
              crudType: 'select',
              crudData: import('modules/quser/_crud/roles'),
              crudProps: {
                label: `${this.$trp('isite.cms.label.role', {capitalize: true})}`,
                multiple: true,
                useChips: true,
              },
              config: {options: {label: 'name', value: 'id'}},
            }
          },
          title: {
            value: null,
            type: "input",
            props: {
              rules: [
                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
              ],
              icon: "fa-regular fa-text-size",
              label: "Report Title*",
            },
          },
          description: {
            type: "input",
            props: {
              label: "Description",
              type: "textarea",
              counter: true,
              maxlength: 300,
              rows: "6",
            },
          },
        },
      };
    },
  },
  methods: {
    getSelectedReportType() {
      const reportTypeList = this.reportTypeList.find(item => item.id === Number(this.form.reportTypeId));
      if(reportTypeList) {
        featureStore().setColumnList(reportTypeList.columns || []);
        featureStore().setFilterList(reportTypeList.filters || []);
        sortStore().setSortList(reportTypeList.sort || []);
      }
    },
    changeEntity() {
      this.form.reportTypeId = null;
    }
  },
};
</script>

<style>
</style>
