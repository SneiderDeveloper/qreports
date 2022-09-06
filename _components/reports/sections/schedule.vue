<template>
    <div>
        <div class="q-stepper-title">
            <h3 class="text-primary">Schedule your new report</h3>
            <div></div>
        </div>
        <div class="tw-flex tw-items-center tw-mb-6">
            <div class="tw-border-r-2 tw-pr-4">
                <h4 class="text-primary tw-text-base tw-font-extrabold">Do you want to schedule it? Adjust the following parameters:</h4>
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
            <div class="schedule-grid-3">
                <label class="col-auto text-primary">Every</label>
                <div class="col">
                    <dynamic-field class="input-report-nolabel tw-w-full" :field="formFields.reportsForms.every"/>
                </div>
            </div>
            <div class="schedule-grid-3">
                <label class="col-auto text-primary">Month(s) at</label>
                <div class="col">
                    <dynamic-field class="input-report-nolabel tw-w-full" :field="formFields.reportsForms.monthAt"/>
                </div>
            </div>
            <div class="schedule-grid-3">
                <label class="col-auto text-primary">On</label>
                <div class="col">
                    <dynamic-field class="input-report-nolabel tw-w-full" :field="formFields.reportsForms.on"/>
                </div>
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
              <dynamic-field class="input-report tw-mb-4" :field="formFields.reportsForms.startingOn"/>
              <dynamic-field class="input-report tw-mb-4" :field="formFields.reportsForms.endingOn"/>
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
                            color: 'primary',
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
                            icon: 'public',
                            color: 'primary',
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
                            label: 'every',
                            icon: 'numbers',
                            color: 'primary',
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
                            label: 'Month(s) at',
                            icon: 'watch_later',
                            color: 'primary',
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
                            label: 'On',
                            icon: 'event_available',
                            color: 'primary',
                            options: [
                                {label: '1', value: '1'},
                                {label: '2', value: '0'}
                            ],
                        },
                    },
                    startingOn: {
                        type: 'date',
                        isTranslatable: false,
                        props: {
                            label: 'Starting On',
                            icon: 'calendar_month',
                            color: 'primary',
                            hint: 'Format: MM/DD/YYYY HH:mm',
                            mask: 'MM/DD/YYYY HH:mm',
                            iconRight: 'watch_later',
                        },
                    },
                    endingOn: {
                        type: 'date',
                        isTranslatable: false,
                        props: {
                            label: 'Ending On',
                            icon: 'calendar_month',
                            color: 'primary',
                            hint: 'Format: MM/DD/YYYY HH:mm',
                            mask: 'MM/DD/YYYY HH:mm',
                            iconRight: 'watch_later',
                        },
                    },

                },
            };
        },
    },
}
</script>

<style>
.schedule-grid-3 {
    @apply tw-flex tw-flex-col tw-items-center tw-flex-wrap lg:tw-flex-row lg:tw-items-start md:tw-mt-3;
}
.schedule-grid-3 .col-auto {
    @apply  tw-text-sm tw-font-medium tw-mr-4 tw-pt-1.5 tw-my-1 tw-hidden tw-max-w-full tw-w-auto lg:tw-block;
    flex: 0 0 auto;
}
.schedule-grid-3 .col {
    @apply tw-max-w-full tw-w-full lg:tw-w-2.5;
    flex-basis: 0; 
    flex-grow: 1;
}
</style>