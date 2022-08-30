<template>
    <div>
        <div class="q-stepper-title">
            <h3 class="text-primary">Choose column sorting</h3>
            <div></div>
        </div>
        <h4 class="text-primary tw-text-base tw-font-extrabold tw-mb-6">Do you want to schedule it? Adjust the following parameters:</h4>

        <div class="md:tw-w-9/12 lg:tw-w-7/12">
    
            <div class="sm:tw-flex tw-items-center tw-space-x-4 tw-mb-4 tw-hidden">
                <div class="tw-w-1/2 text-primary tw-text-base tw-font-extrabold">Attribute</div>
                <div class="tw-w-1/2 text-primary tw-text-base tw-font-extrabold">Sort</div>
            </div>
            <div v-for="(field, name, keyField) in formFields.reportsForms" :key="keyField" 
                class="tw-flex tw-items-center tw-space-x-2 tw-w-full tw-mb-4">
                <div class="tw-w-auto sm:tw-w-1/2 
                            tw-text-center sm:tw-text-left 
                            tw-items-center 
                            tw-flex">
                    <div class="tw-mr-2 sm:tw-mr-4 ">
                        <div class="text-primary 
                                    tw-w-7 sm:tw-w-9 
                                    tw-h-7 sm:tw-h-9 
                                    tw-inline-flex 
                                    tw-items-center 
                                    tw-justify-center 
                                    tw-font-extrabold 
                                    tw-rounded-full 
                                    tw-border-2 
                                    tw-border-slate-50">{{keyField + 1 }}
                        </div>
                    </div>
                    <div class="tw-text-sm md:tw-text-base tw-hidden sm:tw-block
                                tw-font-extrabold"> {{field.props.label }}
                    </div>  
                </div>
                <div class="tw-w-full sm:tw-w-1/2">
                    <dynamic-field class="select-report" :field="field"/>
                </div>
            </div>

        </div>

        
    </div>
</template>



<script>
export default {
    data() {
        return {
            prueba: 'two',
        };
    },
    computed: {
        formFields() {
            return {
                reportsForms: {
                    id: {
                        value: '1',
                        type: 'select',
                        isTranslatable: false,
                        label: 'ID',
                        props: {
                            label: 'ID',
                            icon: 'fas fa-sort-amount-up',
                            color: 'primary',
                            options: [
                                {label: 'Ascending', value: '1'},
                                {label: 'Descending', value: '0'}
                            ],
                        },
                    },
                    referenceId: {
                        value: '1',
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            label: 'Reference ID',
                            icon: 'fas fa-sort-amount-up',
                            color: 'primary',
                            options: [
                                {label: 'Ascending', value: '1'},
                                {label: 'Descending', value: '0'}
                            ],
                        },
                    },
                    customers: {
                        value: '1',
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            label: 'Customers',
                            icon: 'fas fa-sort-amount-up',
                            color: 'primary',
                            options: [
                                {label: 'Ascending', value: '1'},
                                {label: 'Descending', value: '0'}
                            ],
                        },
                    },
                    status: {
                        value: '1',
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            label: 'Status',
                            icon: 'fas fa-sort-amount-up',
                            color: 'primary',
                            options: [
                                {label: 'Ascending', value: '1'},
                                {label: 'Descending', value: '0'}
                            ],
                        },
                    },
                    operationType: {
                        value: '1',
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            label: 'Operation Type',
                            icon: 'fas fa-sort-amount-up',
                            color: 'primary',
                            options: [
                                {label: 'Ascending', value: '1'},
                                {label: 'Descending', value: '0'}
                            ],
                        },
                    }
                },
            };
        },
    }
}
</script>

<style>
.select-report .q-field {
    padding-bottom: 0 !important;
}
.select-report  .q-field .q-field__label {
  @apply tw-font-medium sm:tw-hidden;
  color: var(--q-color-primary);
}
.select-report .q-field--labeled .q-field__control-container {
  @apply sm:tw-pt-px !important;
}
</style>