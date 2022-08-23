
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
.stepper-report .q-stepper {
  @apply tw-rounded-xl;
}
.stepper-report  .q-stepper__header {
  @apply tw-border-b-0;
}
.stepper-report .q-stepper__tab  .q-stepper__dot {
    width: 50px;
    height: 50px;
    border-width: 2px;
    font-size: 16px;
    font-weight: 700;
}
.stepper-report .q-stepper__tab:not(.q-stepper__tab--active) .q-stepper__dot {
    border-color: rgba(0, 0, 0, 0.2);
    background-color: #fff;

}
.stepper-report .q-stepper__tab:not(.q-stepper__tab--active) .q-stepper__dot span {
    color: rgba(0, 0, 0, 0.5);
}
.stepper-report .q-stepper__tab--active .q-stepper__dot {
    border-color: currentColor;
}
.stepper-report .q-stepper__tab--active .q-stepper__dot span {
    color: #ffffff;
}
.stepper-report .q-stepper .q-stepper__dot:before {
    margin-right: 1px;
}
.stepper-report .q-stepper .q-stepper__dot:after {
    margin-left: 2px;
}
.stepper-report .q-stepper .q-stepper__line:after, 
.stepper-report .q-stepper .q-stepper__line:before {
    height: 2px;
}
.stepper-report .q-stepper__title {
    font-weight: 900;
    font-size: 16px;
}

.input-report  .q-field .q-field__label, 
.radio-report  .q-field .q-field__label {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #000000; 
  height: 30px;
  transform: none !important;
  top: 0;
}
.radio-report .q-field .q-radio__label {
  color: #000000; 
}
.input-report  .q-field .q-field__native {
  @apply tw-font-semibold tw-text-base tw-text-black;
  padding: 8px 20px !important;
  line-height: 22px;
  margin-bottom: -1px;
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
  border-radius: 5px !important;
  border: 1px solid rgba(0, 0, 0, 0.15);
  top: 25px;
}
.input-report .q-field .q-field__control:after  {
  margin-top: 25px;
  border-radius: 5px !important;
}
.input-report .q-field:not(.q-textarea)  .q-field__control:after {
  height: 35px;
}
.input-report .q-field .q-field__control-container {
  padding-top: 24px !important;
  padding-bottom: 0;
}
.input-report .q-field .q-icon {
  position: absolute;
  bottom: 1px;
  height: 33px;
  width: 33px;
  font-size: 16px;
  padding-left: 3px;
}
.input-report .q-field .q-field__before, .input-report .q-field .q-field__prepend {
  padding-right: 16px;
}
.input-report .q-field .q-field__append .q-icon {
  right: 0;
}
.input-report .q-field .q-field__prepend +  .q-field__control-container .q-field__label {
  left: -14px;
}
.input-report .q-field--outlined .q-field__control {
 padding: 0 !important;
}
</style>