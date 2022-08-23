<template>
    <div>
        <div class="q-stepper-title">
            <h3 class="text-primary">Detail the options inside the fields</h3>
            <div></div>
        </div>
        <h4 class="text-primary tw-text-base tw-font-extrabold">How would you want to view the data?</h4>
        <p class="tw-text-sm tw-text-black tw-mb-6">Tick the info you want to view in each field</p>
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
                dealer: {
                    value: '0',
                    type: 'select',
                    isTranslatable: false,
                    props: {
                        label: 'Dealer',
                        options: [
                            {label: 'Select the dealers', value: '0'},
                            {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                            {label: this.$tr('isite.cms.label.disabled'), value: '2'}
                        ],
                    },
                },
                campaign: {
                    value: '0',
                    type: 'select',
                    isTranslatable: false,
                    props: {
                        label: 'Campaign',
                        options: [
                            {label: 'Select the Campaign', value: '0'},
                            {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                            {label: this.$tr('isite.cms.label.disabled'), value: '2'}
                        ],
                    },
                },
                subCampaign: {
                    value: '0',
                    type: 'select',
                    isTranslatable: false,
                    props: {
                        label: 'Sub Campaign',
                        options: [
                            {label: 'Select the Sub campaign', value: '0'},
                            {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                            {label: this.$tr('isite.cms.label.disabled'), value: '2'}
                        ],
                    },
                },
                leadType: {
                    value: '0',
                    type: 'select',
                    isTranslatable: false,
                    props: {
                        label: 'Lead Type',
                        options: [
                            {label: 'Select the Lead Type', value: '0'},
                            {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                            {label: this.$tr('isite.cms.label.disabled'), value: '2'}
                        ],
                    },
                },
                product: {
                    value: '0',
                    type: 'select',
                    isTranslatable: false,
                    props: {
                        label: 'Product',
                        options: [
                            {label: 'All', value: '0'},
                            {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                            {label: this.$tr('isite.cms.label.disabled'), value: '2'}
                        ],
                    },
                },
                status: {
                    value: '0',
                    type: 'select',
                    isTranslatable: false,
                    props: {
                        label: 'Status',
                        options: [
                            {label: 'Select the Status', value: '0'},
                            {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                            {label: this.$tr('isite.cms.label.disabled'), value: '2'}
                        ],
                    },
                },
            },
        };
    },
    }
}
</script>

<style>

</style>