<template>
  <div class="tw-overflow-x-hidden">
    <div class="q-stepper-title">
      <h3 class="text-primary">
        {{ $tr('ireports.cms.selectColumnsFilters')  }}
      </h3>
      <div></div>
    </div>
    <div class="tw-flex">
      <div>
        <h4
          class="
            text-primary
            tw-text-base
            tw-font-extrabold
            ">
          {{ $tr('ireports.cms.selectColumns') }}
        </h4>
      </div>
      <div class="tw--mt-1.5">
        <dynamic-field
            v-model="columnCheck"
            :field="check"
          />
      </div>
    </div>
    <div>
       <p class="tw-mb-6 tw-font-bold">{{ $tr('ireports.cms.dragColumns') }}</p>
    </div>
    <div>
      <draggable
        :list="columnList"
        :animation="300"
        ghostClass="ghost"
        handle=".check-report-icon"
        class="
          tw-grid
          tw-gap-6
          tw-grid-cols-1
          md:tw-grid-cols-2
          xl:tw-grid-cols-6
          tw-my-4
          tw-overflow-hidden
        "
        item-key="id"
      >
        <template #item="{ element }">
          <div class="check-report-div">
            <q-tooltip anchor="bottom middle" self="center middle">
              {{ element?.title }}
            </q-tooltip>
            <dynamic-field
              class="check-report-1"
              v-model="element.check"
              :field="formFields.reportsColumns[element?.id]"
              @input="checkIfAllChecksSelected('columnList')"
            />
            <q-btn
                flat
                round
                size="6px"
                class="f-cursor-grab check-report-icon"
              >
                <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
                  {{ $tr('ireports.cms.moveColumn') }}
                </q-tooltip>
              </q-btn>
          </div>
        </template>
      </draggable>
    </div>
    <div class="tw-flex tw-pt-5">
      <div>
        <h4
          class="
            text-primary
            tw-text-base
            tw-font-extrabold
          "
        >
          {{ $tr('ireports.cms.selectFirst') }}
        </h4>
      </div>
      <div class="tw--mt-1.5">
        <dynamic-field
            v-model="filterCheck"
            :field="check"
          />
      </div>
    </div>
    <div>
       <p class="tw-mb-6 tw-font-bold">{{ labelTotalFilter }}</p>
    </div>
    <div class="tw-flex tw-flex-wrap">
      <div
        v-for="filter in filterList"
        :key="filter?.id"
        class="tw-mr-2 tw-mb-2"
      >
        <dynamic-field
            v-model="filter.check"
            class="check-report-2"
            :class="{'check-report-text-white check-report-btn': Boolean(filter.check)}"
            :field="formFields.reportsFilters[filter?.id]"
            @input="checkIfAllChecksSelected('filterList')"
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
    return {
      check: {
        type: 'checkbox',
        value: 0,
        props: {
          label: this.$tr('ireports.cms.label.selectAll'),
        }
      }
    };
  },
  mounted() {
    this.columnCheck = Number(this.columnList.some(item => item.check));
    this.filterCheck = Number(this.filterList.some(item => item.check));
  },
  computed: {
    labelTotalFilter() {
      return `${this.$tr('ireports.cms.selectFirstSummary', {total: this.totalSelectedFilters} )}`;
    },
    columnList() {
      return featureStore().getColumnList();
    },
    filterList() {
      return featureStore().getFilterList();
    },
    totalSelectedFilters() {
      return featureStore().getSelectedFilters().length;
    },
    formFields() {
      return {
        reportsColumns: featureStore().factoryOfDynamicCheck("columnList"),
        reportsFilters: featureStore().factoryOfDynamicCheck("filterList"),
      };
    },
    columnCheck: {
      get() {
        return featureStore().getColumnCheck()
      },
      async set(value) {
        await featureStore().setColumnCheck(value)
        await featureStore().selecdAll("columnList");
      }
    },
    filterCheck: {
      get() {
        return featureStore().getFilterListCheck()
      },
      async set(value) {
        await featureStore().setFilterListCheck(value)
        await featureStore().selecdAll("filterList");
      }
    },
  },
  methods: {
    checkIfAllChecksSelected(type) {
      featureStore().checkIfAllChecksSelected(type)
    }
  }
};
</script>

<style lang="scss">
.ghost {
  @apply tw-bg-gray-100 tw-opacity-50 #{!important};
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
  @apply tw-right-2.5 tw-w-4 tw-h-4 tw-block tw-bg-no-repeat tw-bg-center tw-bg-contain tw-absolute tw-top-3 tw-z-10;
  content: "";
  background-image: url("data:image/svg+xml,%3Csvg width='15' height='5' viewBox='0 0 15 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.0835 1.75H0.583496V0.25H14.0835V1.75ZM14.0835 3.25H0.583496V4.75H14.0835V3.25Z' fill='black' fill-opacity='0.4'/%3E%3C/svg%3E");
}

.check-report-1 .q-hoverable:hover > .q-focus-helper {
  @apply tw-opacity-0 #{!important};
}

/* checkbox */
.check-report-2 .q-field__control-container {
  @apply tw-rounded-3xl tw-border;
  border-color: rgba(0, 0, 0, 0.24);
}

.check-report-btn .q-field__control-container {
  @apply tw-border-none;
}

.check-report-2 .q-hoverable:hover > .q-focus-helper {
  @apply tw-rounded-3xl;
}

.check-report-2 .q-item {
  @apply tw-pr-5 #{!important};
}

.check-report-2 .q-item__label {
  @apply tw-font-medium tw-text-gray-400 tw-text-sm;
}

.check-report-text-white .q-item__label {
  @apply tw-text-white #{!important};
}

.check-report-2 .q-field--focused {
  @apply tw-rounded-3xl;
}

.check-report-2 .q-checkbox[aria-checked="true"]:before {
  @apply tw-w-full tw-h-full tw-absolute tw-rounded-3xl tw-z-0;
  content: "";
  background: var(--q-primary);
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
.check-report-2.check-active .q-item__label {
    @apply tw-text-white;
}
.check-report-1 .q-item__label--caption .float-right {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>
