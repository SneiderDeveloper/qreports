
<template>
    <div class="q-pa-md stepper-report">
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
                    <q-btn outline color="primary" v-if="step > 1"   @click="$refs.stepper.previous()" label="Back" class="q-mr-sm tw-mt-6" />    
                    <q-btn color="primary" @click="$refs.stepper.next()" :label="step === 4 ? 'Finish' : 'Continue'" class="tw-mt-6"/>
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
  @apply tw-rounded-xl;
}
.stepper-report  .q-stepper__header {
  @apply tw-border-b-0;
}
/* cuando se actualice colocar w y h 50px */
.stepper-report .q-stepper__tab  .q-stepper__dot {
  @apply tw-w-12 tw-h-12 tw-font-bold tw-text-base tw-border-2;
}
.stepper-report .q-stepper__tab:not(.q-stepper__tab--active) .q-stepper__dot {
  @apply tw-bg-white tw-border-gray-300;
}
.stepper-report .q-stepper__tab:not(.q-stepper__tab--active) .q-stepper__dot span {
   @apply tw-text-gray-400;
}
.stepper-report .q-stepper__tab--active .q-stepper__dot {
  @apply tw-border-current;
}
.stepper-report .q-stepper__tab--active .q-stepper__dot span {
  @apply tw-text-white;
}
.stepper-report .q-stepper .q-stepper__dot:before {
  @apply tw-mr-px;
}
.stepper-report .q-stepper .q-stepper__dot:after {
  @apply tw-ml-0.5;
}
.stepper-report .q-stepper .q-stepper__line:after, 
.stepper-report .q-stepper .q-stepper__line:before {
  @apply tw-h-0.5;
}
.stepper-report .q-stepper__title {
  @apply tw-text-base tw-font-black;
}
.input-report  .q-field .q-field__label, 
.radio-report  .q-field .q-field__label {
  @apply tw-text-black tw-font-medium tw-text-sm tw-top-0;
  height: 30px;
  transform: none !important;
}
.radio-report .q-field .q-radio__label {
  @apply tw-text-black;
}
.input-report  .q-field .q-field__native {
  @apply tw-font-normal tw-text-sm tw-text-gray-600 tw--mb-1;
  padding: 8px 20px !important;
}
.input-report  .q-field.q-textarea .q-field__native {
  padding: 10px 15px !important;
}
.input-report  .q-field .q-field__control {
  min-height: 35px;
}
.input-report .q-field:not(.q-textarea) .q-field__control {
  height: 60px;
}
.input-report .q-field .q-field__control:before {
  @apply tw-border tw-border-gray-300;
  border-radius: 5px !important;
  top: 25px;
}
.input-report .q-field .q-field__control:after  {
  @apply tw-mt-6;
  border-radius: 5px !important;
}
.input-report .q-field:not(.q-textarea)  .q-field__control:after {
  height: 35px;
}
.input-report .q-field .q-field__control-container {
  @apply tw-pb-0;
  padding-top: 24px !important;
}
.input-report .q-field .q-icon {
  @apply tw-absolute tw-bottom-px tw-text-base;
  height: 33px;
  width: 33px;
  padding-left: 3px;
}
.input-report .q-field .q-field__before, .input-report .q-field .q-field__prepend {
   @apply tw-pr-4;
}
.input-report .q-field .q-field__append .q-icon {
  @apply tw-right-0;
}
.input-report .q-field .q-field__prepend +  .q-field__control-container .q-field__label {
  @apply tw--left-3.5;
}
.input-report .q-field--outlined .q-field__control {
  padding: 0 !important;
}
</style>