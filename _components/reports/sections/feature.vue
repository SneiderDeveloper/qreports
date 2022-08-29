<template>
  <div class="tw-overflow-x-hidden">
    <div class="q-stepper-title">
      <h3 class="text-primary">Select columns and filters</h3>
      <div></div>
    </div>
    <h4 class="text-primary tw-text-base tw-font-extrabold tw-mb-6">
      Select and sort the columns
    </h4>
    <div>
      <draggable
        :list="columnList"
        :animation="300"
        ghostClass="ghost"
        handle=".check-report-icon"
        class="
          tw-grid
          tw-grid
          tw-grid
          tw-gap-6
          tw-gap-6
          tw-gap-6
          tw-grid-cols-1
          tw-grid-cols-1
          tw-grid-cols-1
          md:tw-grid-cols-2 md:tw-grid-cols-2 md:tw-grid-cols-2
          xl:tw-grid-cols-3 xl:tw-grid-cols-3 xl:tw-grid-cols-3
          tw-my-4 tw-overflow-hidden
        "
      >
        <div v-for="list in columnList" :key="list.id" class="check-report-div">
          <dynamic-field
            class="check-report-1"
            v-model="list.check"
            :field="formFields.reportsColumns[list.field]"
          />
          <q-btn
              flat
              round
              size="6px"
              class="check-report-icon"
            >
              <q-tooltip> Move column </q-tooltip>
            </q-btn>
        </div>
      </draggable>
    </div>
    <h4 class="text-primary tw-text-base tw-font-extrabold tw-mt-8 tw-mb-6">
      Select the first 4 filters
    </h4>
    <div class="tw-flex tw-space-x-4">
      <div
        v-for="(filter) in filterList"
        :key="filter.id"
      >
        <dynamic-field
            v-model="filter.ckeck" 
            class="check-report-2" 
            :field="formFields.reportsFilters[filter.field]" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import featureStore from "../../../_store/sections/featureStore.js";
export default {
  components: {
    draggable,
  },
  data() {
    return {};
  },
  computed: {
    columnList() {
      return featureStore().getColumnList();
    },
    filterList() {
      return featureStore().getFilterList();
    },
    formFields() {
      return {
        reportsColumns: featureStore().factoryOfDynamicCheck("columnList"),
        reportsFilters: featureStore().factoryOfDynamicCheck("filterList"),
      };
    },
  },
};
</script>

<style>
.ghost {
  @apply tw-bg-gray-100 tw-opacity-50;
}
.check-report-div {
  @apply tw-relative tw-border tw-rounded-xl;
  border-color: rgba(0, 0, 0, 0.24);
  padding-right: 30px;
}

.check-report-1 .q-item__label--caption {
  @apply tw-font-medium tw-text-black tw-text-sm;
}

.check-report-icon {
  @apply tw-cursor-pointer tw-right-2.5 tw-w-4 tw-h-4 tw-block tw-bg-no-repeat tw-bg-center tw-bg-contain tw-absolute tw-top-3 tw-z-10;
  content: "";
  background-image: url("data:image/svg+xml,%3Csvg width='15' height='5' viewBox='0 0 15 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.0835 1.75H0.583496V0.25H14.0835V1.75ZM14.0835 3.25H0.583496V4.75H14.0835V3.25Z' fill='black' fill-opacity='0.4'/%3E%3C/svg%3E");
}

.check-report-1 .q-hoverable:hover > .q-focus-helper {
  @apply tw-opacity-0 !important;
}

/* checkbox */
.check-report-2 .q-field__control-container {
  @apply tw-rounded-3xl tw-border;
  border-color: rgba(0, 0, 0, 0.24);
}

.check-report-2 .q-hoverable:hover > .q-focus-helper {
  @apply tw-rounded-3xl;
}

.check-report-2 .q-item {
  @apply tw-pr-5 !important;
}

.check-report-2 .q-item__label {
  @apply tw-font-medium tw-text-gray-400 tw-text-sm;
}

.check-report-2 .q-field--focused {
  @apply tw-rounded-3xl;
}

.check-report-2 .q-checkbox[aria-checked="true"]:before {
  @apply tw-w-full tw-h-full tw-absolute tw-rounded-3xl tw-z-0;
  content: "";
  background: var(--q-color-primary);
}

.check-report-2 .q-item__label {
  @apply tw-relative;
  z-index: 1;
}

.check-report-2 .q-checkbox[aria-checked="false"] .q-checkbox__bg {
  @apply tw-border-0;
}

.check-report-2 .q-checkbox[aria-checked="false"] .q-checkbox__inner,
.check-report-2 .q-checkbox[aria-checked="mixed"] .q-checkbox__inner {
  @apply tw-w-0;
  min-width: 20px;
}

.check-report-2 .q-checkbox[aria-checked="true"] .q-checkbox__bg {
  @apply tw-border-0 tw-bg-transparent;
}

.check-report-2
  .q-checkbox[aria-checked="mixed"]
  .q-checkbox__inner--indet
  .q-checkbox__bg {
  @apply tw-hidden;
}
</style>
