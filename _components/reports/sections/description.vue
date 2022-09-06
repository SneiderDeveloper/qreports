<template>
  <div>
    <div class="q-stepper-title">
      <h3 class="text-primary">Identify your report</h3>
      <div></div>
    </div>
    <div
      class="
        tw-grid tw-gap-6 tw-grid-cols-1
        md:tw-grid-cols-2
        xl:tw-grid-cols-3
        tw-my-4 tw-overflow-hidden
      "
    >
      <div>
        <dynamic-field
          v-model="form.object"
          class="input-report tw-mb-4"
          :field="formFields.reportsForms.object"
        />
        <dynamic-field
          v-model="form.reportType"
          class="input-report tw-mb-4"
          :field="formFields.reportsForms.reportType"
        />
        <dynamic-field
          v-model="form.folder"
          class="input-report tw-mb-4"
          :field="formFields.reportsForms.folder"
        />
        <dynamic-field
          v-model="form.reportTitle"
          class="input-report tw-mb-4"
          :field="formFields.reportsForms.reportTitle"
        />
      </div>
      <div>
        <dynamic-field
          v-model="form.description"
          class="input-report tw-mb-4"
          :field="formFields.reportsForms.description"
        />
      </div>
      <div>
        <div
          class="
            tw-w-full tw-flex tw-flex-col tw-items-start tw-space-x-4 tw-mb-6
            lg:tw-flex-row lg:tw-mb-8
          "
          v-for="(item, index) in form.emailNotification"
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
          v-if="form.emailNotification.length <= 4"
          outline
          color="primary"
          class="tw-mb-8"
          no-caps
          @click="addEmailNotification"
        >
          <q-icon left size="1em" name="fa fa-plus" />
          <div>Add another email</div>
        </q-btn>

        <dynamic-field
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
export default {
  data() {
    return {};
  },
  computed: {
    form() {
      return descriptionStore().getDescriptionForm();
    },
    formFields() {
      return {
        reportsForms: {
          object: {
            value: "1",
            type: "select",
            isTranslatable: false,
            props: {
              label: "Object",
              icon: "fa-solid fa-list-ul",
              color: "primary",
              options: [
                { label: this.$tr("isite.cms.label.enabled"), value: "1" },
                { label: this.$tr("isite.cms.label.disabled"), value: "0" },
              ],
            },
          },
          reportType: {
            value: "1",
            type: "select",
            isTranslatable: false,
            props: {
              label: "Report Type",
              icon: "description",
              color: "primary",
              options: [
                { label: this.$tr("isite.cms.label.enabled"), value: "1" },
                { label: this.$tr("isite.cms.label.disabled"), value: "0" },
              ],
            },
          },
          folder: {
            value: "1",
            type: "select",
            isTranslatable: false,
            props: {
              label: "Folder",
              icon: "folder_open",
              color: "primary",
              options: [
                { label: this.$tr("isite.cms.label.enabled"), value: "1" },
                { label: this.$tr("isite.cms.label.disabled"), value: "0" },
              ],
            },
          },
          reportTitle: {
            type: "input",
            props: {
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
          email: {
            type: "input",
            props: {
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
              size: "md",
              options: [
                { label: "YES", value: "1" },
                { label: "NO", value: "0" },
              ],
            },
          },
          attachReport: {
            value: "pdf",
            type: "optionGroup",
            props: {
              label: "Attach this report as:",
              inline: true,
              stackLabel: true,
              options: [
                { label: "PDF", value: "pdf" },
                { label: "CSV", value: "csv" },
                { label: "XLSX", value: "xlsx" },
              ],
            },
          },
        },
      };
    },
  },
  methods: {
    addEmailNotification() {
      if(this.form.emailNotification.length >= 5) return;
      descriptionStore().addEmailNotification();
    },
    deleteEmailNotification(index) {
      descriptionStore().deleteEmailNotification(index);
    }
  },
};
</script>

<style>
</style>