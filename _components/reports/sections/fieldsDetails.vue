<template>
    <div>
        <div class="q-stepper-title">
            <h3 class="text-primary">Detail the filter options</h3>
            <div></div>
        </div>
        <h4 class="text-primary tw-text-base tw-font-extrabold tw-mb-6">Select the info you want to show for each filter</h4>
        <div class="
            tw-grid 
            tw-gap-x-8 
            tw-gap-y-6 
            tw-grid-cols-1 
            md:tw-grid-cols-2 
            lg:tw-grid-cols-3 
            tw-my-4 tw-overflow-hidden
            ">
            <div v-for="(field, name, keyField) in formFields.reportsForms" :key="keyField" >
              <dynamic-field class="input-report" :field="field"/>
            </div>
        <div>
    </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        };
    },
    computed: {
        formFields() {
            return {
                reportsForms: {
                    customers: {
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            label: 'Customers',
                            iconColor: 'primary',
                            options: [
                                {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                                {label: this.$tr('isite.cms.label.disabled'), value: '2'}
                            ],
                        },
                    },
                    status: {
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            label: 'Status',
                            options: [
                                {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                                {label: this.$tr('isite.cms.label.disabled'), value: '2'}
                            ],
                        },
                    },
                    campaign: {
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            label: 'Campaign',
                            multiple: true,
                            value: '0',
                            options: [
                                {label: 'Select the Campaign', value: '0'},
                                {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                                {label: this.$tr('isite.cms.label.disabled'), value: '2'}
                            ],
                        },
                    },
                    adHoc: {
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            label: 'Ad Hoc',
                            options: [
                                {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                                {label: this.$tr('isite.cms.label.disabled'), value: '2'}
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

</style>