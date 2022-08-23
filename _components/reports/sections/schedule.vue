<template>
    <div>
        <div class="q-stepper-title">
            <h3 class="text-primary">Schedule your new report</h3>
            <div></div>
        </div>
        <div class="tw-flex tw-items-center tw-mb-6">
            <div class="tw-border-r-2 tw-pr-4">
                <h4 class="text-primary tw-text-base tw-font-extrabold">Do you want to schedule this report?</h4>
                <p class="tw-text-sm tw-text-black tw-mb-0">Please adjust the parameters below</p>
            </div>
            <div class="tw-pl-4">
                <dynamic-field  :field="formFields.reportsForms.toggle"/>
            </div>
        </div>

        <div class="
            tw-grid 
            tw-gap-x-10 
            tw-gap-y-4
            tw-grid-cols-1 
            md:tw-grid-cols-2
            tw-mt-4 
            tw-overflow-hidden
            ">
              <dynamic-field class="input-report" :field="formFields.reportsForms.timeInterval"/>
              <dynamic-field class="input-report" :field="formFields.reportsForms.timeZone"/>
        </div>
        <div class="
            tw-grid 
            tw-gap-x-10 
            tw-gap-y-4
            tw-grid-cols-1 
            md:tw-grid-cols-3
            tw-overflow-hidden 
            ">
            <div class="tw-flex tw-items-center">
                <label class="text-sm tw-text-black font-medium tw-mr-4 tw-pt-1.5">Every</label>
                <dynamic-field class="input-report tw-w-full" :field="formFields.reportsForms.every"/>
            </div>
            <div class="tw-flex tw-items-center">
                <label class="text-sm tw-text-black font-medium tw-mr-4 tw-pt-1.5">Month(s) at</label>
                <dynamic-field class="input-report tw-w-[73%]" :field="formFields.reportsForms.monthAt"/>
            </div>
            <div class="tw-flex tw-items-center">
                <label class="text-sm tw-text-black font-medium tw-mr-4 tw-pt-1.5">On</label>
                <dynamic-field class="input-report tw-w-full" :field="formFields.reportsForms.on"/>
            </div>

        </div>
        <div class="
            tw-grid 
            tw-gap-x-10 
            tw-gap-y-4
            tw-grid-cols-1 
            md:tw-grid-cols-2
            tw-my-4 tw-overflow-hidden
            ">
              <dynamic-field class="input-report" :field="formFields.reportsForms.startingOn"/>
              <dynamic-field class="input-report" :field="formFields.reportsForms.endingOn"/>
        </div>

        <p class="tw-text-sm tw-text-black">
            <q-icon name="emergency" class="tw-text-red-600"/>
            Remember to add all the emails you need to send this report on “Step 1”
        </p>
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
                    toggle: {
                        type: 'toggle',
                        value: '1',
                        props: {
                            size: 'lg',
                            options: [
                                {label: 'YES', value: '1'},
                                {label: 'NO', value: '0'},
                            ],
                        },
                    },
                    timeInterval: {
                        value: '0',
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            label: 'Time Interval',
                            icon: 'more_time',
                            options: [
                                {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                                {label: this.$tr('isite.cms.label.disabled'), value: '0'}
                            ],
                        },
                    },
                    timeZone: {
                        value: '0',
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            label: 'Time Zone',
                            icon: 'language',
                            options: [
                                {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                                {label: this.$tr('isite.cms.label.disabled'), value: '0'}
                            ],
                        },
                    },
                    every: {
                        value: '0',
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            icon: 'numbers',
                            options: [
                                {label: '1', value: '1'},
                                {label: '2', value: '0'}
                            ],
                        },
                    },
                    monthAt: {
                        value: '0',
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            icon: 'schedule',
                            options: [
                                {label: '1', value: '1'},
                                {label: '2', value: '0'}
                            ],
                        },
                    },
                    on: {
                        value: '0',
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            icon: 'event_available',
                            options: [
                                {label: '1', value: '1'},
                                {label: '2', value: '0'}
                            ],
                        },
                    },
                    startingOn: {
                        value: '0',
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            label: 'Starting On',
                            icon: 'calendar_month',
                            options: [
                                {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                                {label: this.$tr('isite.cms.label.disabled'), value: '0'}
                            ],
                        },
                    },
                    endingOn: {
                        value: '0',
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            label: 'Ending On',
                            icon: 'calendar_month',
                            options: [
                                {label: this.$tr('isite.cms.label.enabled'), value: '1'},
                                {label: this.$tr('isite.cms.label.disabled'), value: '0'}
                            ],
                        },
                    },

                },
            };
        },
    },
}
</script>

<style>

</style>