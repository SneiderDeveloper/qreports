
<template>
  <div class="stepper-report">
    <div
      class="
        tw-flex tw-flex-col
        sm:tw-flex-row sm:tw-items-end
        tw-justify-between
      "
    >
      <h2 class="text-primary tw-text-2xl tw-font-semibold tw-mb-4">
        Create a Report
      </h2>
      <div class="text-right">
        <q-btn
          rounded
          outline
          color="primary"
          label="Discard"
          class="q-mr-sm tw-mb-4"
          no-caps
        />
        <q-btn rounded color="primary" label="Save" class="tw-mb-4" no-caps />
      </div>
    </div>
    <q-stepper
      v-model="step"
      :contracted="$q.screen.lt.sm"
      ref="stepper"
      color="primary"
      alternative-labels
      active-color="primary"
      animated
      class="tw-bg-white"
    >
      <q-step
        v-for="section in sections"
        :key="section.id"
        :name="section.id"
        :prefix="section.prefix"
        :title="section.title"
        :done="section.done"
      >
        <div>
          <q-form :ref="section.refs">
            <component :is="section.component" />
          </q-form> 
        </div> 
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation class="text-right tw-border-t">
          <q-btn
            rounded
            no-caps
            outline
            icon="fas fa-arrow-left"
            label="Back"
            color="primary"
            v-if="step > 1"
            @click="$refs.stepper.previous()"
            class="q-mr-sm tw-mt-6 text-sm btn-small rounded-sm"
          />
          <q-btn
            rounded
            no-caps
            color="primary"
            icon-right="fas fa-arrow-right"
            @click="saveFormReports"
            :label="step === sections.length ? 'Finish' : 'Next'"
            class="tw-mt-6 text-sm btn-small"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import modelSections from "./sections/Model/sections.js";
import qReportsStore from "../../_store/qReportsStore.js";
import { 
    STEP_DESCRIPTION, 
    STEP_FEATURE, 
    STEP_FIELDS_DETAILDS,
    STEP_SORT,
    STEP_SCHEDULE 
} from './sections/Model/constants.js';
export default {
  data() {
    return {
      step: 1,
    };
  },
  beforeDestroy() {
    this.$nextTick(function () {
      qReportsStore().reset();
    })
  },
  computed:{
    sections() {
      return modelSections;
    },
  },
  methods: {
    async saveFormReports() {
      const form = this.sections.find(item => item.id === this.step);
      if(this.$refs[form.refs] && this.$refs[form.refs].length > 0) {
        this.$refs[form.refs][0].validate().then(async (success) => {
          if (success) {
            if (this.step === this.sections.length) {
              await qReportsStore().saveReport();
              return;
            }
            this.$refs.stepper.next();
            return;
          }
        });
      }
    }
  },
};
</script>
<style>
.stepper-report .q-stepper .q-stepper-title {
  @apply tw-relative tw-mb-6 tw-overflow-x-hidden;
}
.stepper-report .q-stepper .q-stepper-title > h3 {
  @apply tw-text-lg tw-font-bold tw-bg-white tw-pr-4 tw-inline-block tw-z-20 tw-relative;
}
.stepper-report .q-stepper .q-stepper-title > div {
  @apply tw-block tw-w-full tw-h-px tw-bg-gray-200 tw-top-2/4 tw-absolute tw-z-10;
}
.stepper-report .q-stepper {
  @apply tw-rounded-xl tw-border tw-shadow-none;
  border-color: #f1f4fa;
}
.stepper-report .q-stepper__header {
  @apply tw-border-b-0;
}
.stepper-report .q-stepper__tab .q-stepper__dot {
  @apply sm:tw-w-10 sm:tw-h-10 tw-font-bold sm:tw-text-base tw-border-0;
}
.stepper-report .q-stepper__tab:not(.q-stepper__tab--active) .q-stepper__dot {
  @apply tw-border-2;
  background-color: #f1f4fa;
  border-color: #f1f4fa;
}
.stepper-report
  .q-stepper__tab:not(.q-stepper__tab--active)
  .q-stepper__dot
  span {
  color: #8a98c3;
}
.stepper-report .q-stepper__tab--active .q-stepper__dot {
  @apply tw-border-current tw-border-2;
}
.stepper-report .q-stepper__tab--active .q-stepper__dot span {
  @apply tw-text-white;
}
.stepper-report .q-stepper .q-stepper__dot:before {
  @apply sm:tw-mr-4 md:tw-mr-8;
}
.stepper-report .q-stepper .q-stepper__dot:after {
  @apply sm:tw-ml-4 md:tw-ml-8;
}
.stepper-report .q-stepper .q-stepper__line:after,
.stepper-report .q-stepper .q-stepper__line:before {
  @apply tw-h-0.5;
}
.stepper-report .q-stepper__title {
  font-size: 0.5rem;
  @apply tw-font-bold sm:tw-text-xs md:tw-text-base md:tw-font-normal tw-text-black;
}
.stepper-report .q-stepper__nav {
  background-color: #f1f4fa;
}
.stepper-report .q-stepper__step-inner {
  @apply tw-p-4 lg:tw-p-5;
}
.stepper-report .q-form .q-field {
  @apply tw-p-0 !important;
}
.input-report .q-field.q-field--float .q-field__label {
  @apply tw-font-medium;
  color: var(--q-color-primary);
}
.radio-report .q-field .q-field__label {
  @apply tw-font-medium tw-top-0 tw-text-black;
  height: 30px;
  transform: none !important;
}
.radio-report .q-radio__label {
  @apply tw-text-black;
}
.input-report .q-field__bottom .q-field__messages {
  @apply tw-text-xs;
  color: #818181;
}
.input-report .q-field__bottom .q-field__counter {
  @apply tw-text-xs;
}
.input-report-nolabel .q-field .q-field__label {
  @apply tw-font-medium lg:tw-hidden;
  color: var(--q-color-primary);
}
.input-report .q-field .q-field__native input {
  @apply lg:tw--mt-3;
}
.input-report-nolabel .q-field--labeled .q-field__control-container {
  @apply lg:tw-pt-px !important;
}
.input-report .q-icon,
.input-report-nolabel .q-select__dropdown-icon {
  color: var(--q-color-primary);
}
</style>