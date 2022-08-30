
<template>
    <div class="stepper-report">
      <div class="tw-flex tw-flex-col sm:tw-flex-row sm:tw-items-end tw-justify-between">
        <h2 class="text-primary tw-text-2xl tw-font-semibold tw-mb-4">Create a Report</h2>
        <div class="text-right">
          <q-btn rounded outline color="primary" label="Discard" class="q-mr-sm tw-mb-4" no-caps />    
          <q-btn rounded color="primary" label="Save" class="tw-mb-4" no-caps/>
        </div>
      </div>
        <q-stepper v-model="step" ref="stepper" color="primary" alternative-labels active-color="primary"  animated class="tw-bg-white">
            <q-step
                v-for="section in sections"
                :key="section.id"
                :name="section.id" 
                :prefix="section.prefix"
                :title="section.title"
                :done="section.done"
                >
                <component :is="section.component" />
            </q-step>

            <template v-slot:navigation>
                <q-stepper-navigation class="text-right tw-border-t">
                    <q-btn rounded no-caps outline icon="fas fa-arrow-left" label="Back" color="primary" v-if="step > 1"  @click="$refs.stepper.previous()" class="q-mr-sm tw-mt-6 text-sm btn-small rounded-sm" />   
                    <q-btn rounded no-caps color="primary" icon-right="fas fa-arrow-right" @click="$refs.stepper.next()" :label="step === 5 ? 'Finish' : 'Next'" class="tw-mt-6 text-sm btn-small"/>
                </q-stepper-navigation>
            </template>
        </q-stepper>
    </div>
</template>

<script>
import modelSections from './sections/Model/sections.js';
export default {
    data() {
        return {
            step: 1,
            sections: modelSections,
        }
    }
}
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
  border-color: #D3DAEC;
}
.stepper-report  .q-stepper__header {
  @apply tw-border-b-0;
}
.stepper-report .q-stepper__tab  .q-stepper__dot {
  @apply tw-w-10 tw-h-10 tw-font-bold tw-text-base tw-border-0;
}
.stepper-report .q-stepper__tab:not(.q-stepper__tab--active) .q-stepper__dot {
  @apply tw-border-2;
  background-color: #F1F4FA;
  border-color: #D3DAEC;
}
.stepper-report .q-stepper__tab:not(.q-stepper__tab--active) .q-stepper__dot span {
   @apply tw-text-gray-400;
}
.stepper-report .q-stepper__tab--active .q-stepper__dot {
  @apply tw-border-current tw-border-2;
  border-color: var(--q-color-primary);
}
.stepper-report .q-stepper__tab--active .q-stepper__dot span {
  @apply tw-text-white;
}
.stepper-report .q-stepper .q-stepper__dot:before {
  @apply tw-mr-8;
}
.stepper-report .q-stepper .q-stepper__dot:after {
  @apply tw-ml-8;
}
.stepper-report .q-stepper .q-stepper__line:after, 
.stepper-report .q-stepper .q-stepper__line:before {
  @apply tw-h-0.5;
}
.stepper-report .q-stepper__title {
  @apply tw-text-base tw-font-normal tw-text-black;
}
.stepper-report  .q-stepper__nav {
  background-color: #F1F4FA;
}
.stepper-report .q-stepper__step-inner {
  @apply tw-p-4 lg:tw-p-5;
}

.input-report  .q-field.q-field--float .q-field__label {
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
.input-report-nolabel  .q-field .q-field__label {
  @apply tw-font-medium lg:tw-hidden;
  color: var(--q-color-primary);
}
.input-report  .q-field .q-field__native input {
  @apply lg:tw--mt-3;
}
.input-report .q-field__native .q-field__input[aria-expanded="false"] ~ .q-field__label {
  color: red;
}
.input-report-nolabel .q-field--labeled .q-field__control-container {
  @apply lg:tw-pt-px !important;
}
.input-report .q-icon, .input-report-nolabel .q-select__dropdown-icon {
  color: var(--q-color-primary);
}
</style>