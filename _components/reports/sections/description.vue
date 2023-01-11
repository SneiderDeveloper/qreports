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
          tw-my-4 tw-overflow-hidden
        "
      >
        <div>
          <dynamic-field
            v-model="form.entity"
            class="input-report tw-mb-4"
            :field="formFields.reportsForms.entity"
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
        <div>
          <div v-if="false">
            <div
              class="
                tw-w-full
                tw-flex
                tw-flex-col
                tw-items-start
                tw-space-x-4
                tw-mb-6
                lg:tw-flex-row lg:tw-mb-8
              "
              v-for="(item, index) in form.emails"
            >
              <div class="tw-w-full tw-mb-4 lg:tw-mb-0 lg:tw-w-3/4">
                <dynamic-field
                  v-model="item.email"
                  class="input-report"
                  :field="formFields.reportsForms.email"
                />
              </div>
              <div class="tw-flex tw-w-full lg:tw-w-auto tw-overflow-hidden">
                <div>
                  <dynamic-field
                    v-model="item.status"
                    :field="formFields.reportsForms.status"
                  />
                </div>
                <div>
                  <q-btn
                    flat
                    round
                    color="primary"
                    icon="fa-regular fa-trash-can"
                    size="12px"
                    @click="deleteEmailNotification(index)"
                  />
                </div>
              </div>
            </div>
            <q-btn
              v-if="form.emails.length <= 4"
              outline
              color="primary"
              class="tw-mb-8"
              no-caps
              @click="addEmailNotification"
            >
              <q-icon left size="1em" name="fa fa-plus" />
              <div>Add another email</div>
            </q-btn>
          </div>
          <dynamic-field
            v-if="false"
            v-model="form.attachReport"
            class="q-mb-md radio-report"
            :field="formFields.reportsForms.attachReport"
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
  data() {
    return {};
  },
  computed: {
    form() {
      return descriptionStore().getDescriptionForm();
    },
    reportTypeList() {
      return descriptionStore().getReportTypeList();
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
              label: "Object",
              icon: "fa-solid fa-list-ul",
              color: "primary",
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
              label: "Report Type",
              icon: "description",
              color: "primary",
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
              label: "Folder",
              icon: "folder_open",
              color: "primary",
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
              crudData: import('@imagina/quser/_crud/roles'),
              crudProps: {
                label: `${this.$trp('isite.cms.label.role', {capitalize: true})}*`,
                multiple: true,
                useChips: true,
                rules: [
                  val => (!!val && val.length) || this.$tr('isite.cms.message.fieldRequired')
                ]
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
              icon: "text_fields",
              label: "Report Title",
              color: "primary",
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
          /*email: {
            type: "input",
            props: {
              rules: [
                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
              ],
              label: "Email Notification",
              icon: "mail",
              color: "primary",
              counter: true,
              maxlength: 40,
            },
          },
          status: {
            type: "toggle",
            value: "1",
            props: {
              rules: [
                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
              ],
              size: "md",
              options: [
                { label: "YES", value: "1" },
                { label: "NO", value: "0" },
              ],
            },
          },*/
          /*attachReport: {
            value: "pdf",
            type: "optionGroup",
            props: {
              rules: [
                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
              ],
              label: "Attach this report as:",
              inline: true,
              stackLabel: true,
              options: [
                { label: "PDF", value: "pdf" },
                { label: "CSV", value: "csv" },
                { label: "XLSX", value: "xlsx" },
              ],
            },
          },*/
        },
      };
    },
  },
  methods: {
    addEmailNotification() {
      if (this.form.emailNotification.length >= 5) return;
      descriptionStore().addEmailNotification();
    },
    deleteEmailNotification(index) {
      descriptionStore().deleteEmailNotification(index);
    },
    getSelectedReportType() {
      const reportTypeList = this.reportTypeList.find(item => item.id === Number(this.form.reportTypeId));
      if(reportTypeList) {
        featureStore().setColumnList(reportTypeList.columns || []);
        featureStore().setFilterList(reportTypeList.filters || []);
        sortStore().setSortList(reportTypeList.sort || []);
      }
    },
  },
};
</script>

<style>
</style>