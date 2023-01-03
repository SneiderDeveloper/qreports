<template>
  <div>
    <div class="q-stepper-title">
      <h3 class="text-primary">
        {{ $tr('ireports.cms.detailFilterOptions') }} 
      </h3>
      <div></div>
    </div>
    <h4 
      class="
        text-primary 
        tw-text-base 
        tw-font-extrabold 
        tw-mb-6"
    >
      {{ $tr('ireports.cms.selectInfoYouWantToShowForEachFilter') }} 
    </h4>
    <div
      class="
        tw-grid 
        tw-gap-x-8 
        tw-gap-y-6 
        tw-grid-cols-1
        md:tw-grid-cols-2
        lg:tw-grid-cols-3
        tw-my-4 
        tw-overflow-hidden
      "
    >
      <div 
        v-for="(field, keyField) in formFields.reportsForms" 
        :key="keyField"
      >
        <dynamic-field
          v-model="form[keyField]"
          class="input-report"
          :field="field"
        />
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
import fieldsDetailsStore from "../../../_store/sections/fieldsDetailsStore.js";
export default {
  data() {
    return {};
  },
  created() {
    fieldsDetailsStore().removeObjectIdentifiers();
  },
  computed: {
    form() {
      return fieldsDetailsStore().getForm();
    },
    formFields() {
      return {
        reportsForms: fieldsDetailsStore().factoryOfDynamicSelect(),
      };
    },
  },
};
</script>

<style>
</style>