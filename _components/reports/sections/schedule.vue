<template>
    <div>
        <div class="q-stepper-title">
            <h3 class="text-primary">Schedule your new report</h3>
            <div></div>
        </div>
        <div class="tw-flex tw-items-center tw-mb-6">
            <div class="tw-border-r-2 tw-pr-4">
                <h4 class="text-primary tw-text-base tw-font-extrabold">Do you want to schedule it? Adjust the following
                    parameters:</h4>
            </div>
            <div class="tw-pl-4">
                <dynamic-field v-model="form.status" :field="formFields.reportsForms.status" />
            </div>
        </div>
        <div v-if="form.status == 1">
            <div class="
            tw-grid
            tw-gap-x-10
            tw-gap-y-4
            tw-grid-cols-1
            md:tw-grid-cols-2
            tw-mt-4
            tw-overflow-hidden
            ">
                <dynamic-field v-model="form.timeInterval" class="input-report"
                    :field="formFields.reportsForms.timeInterval" @input="changeTimeInterval"/>
                <dynamic-field v-model="form.timeZone" class="input-report" :field="formFields.reportsForms.timeZone" />
            </div>
            <div v-if="form.timeInterval" class="
            tw-grid
            tw-gap-x-10
            tw-gap-y-4
            tw-grid-cols-1
            md:tw-grid-cols-2
            tw-mt-4
            tw-overflow-hidden
            " :class="{ 'md:tw-grid-cols-1': form.timeInterval == 1 }">
                <dynamic-field v-if="this.form.timeInterval != 1" v-model="form.on"
                    class="input-report-nolabel tw-w-full input-report-on" :field="formFields.reportsForms.on" />
                <dynamic-field v-model="form.at" class="input-report-nolabel tw-w-full"
                    :field="formFields.reportsForms.at" />
            </div>
            <div class="
                tw-grid
                tw-gap-x-10
                tw-gap-y-4
                tw-grid-cols-1
                md:tw-grid-cols-2
                tw-my-4 tw-overflow-hidden
            ">
                <dynamic-field v-model="form.startingOn" class="input-report tw-mb-4"
                    :field="formFields.reportsForms.startingOn" @input="changeValidateDate" />
                <dynamic-field v-model="form.endingOn" class="input-report tw-mb-4"
                    :field="formFields.reportsForms.endingOn" />
            </div>
            <div>
                <div class="
                    tw-grid
                    tw-gap-x-10
                    tw-gap-y-4
                    tw-grid-cols-1
                    md:tw-grid-cols-2
                    tw-my-4 tw-overflow-hidden
                ">
                    <div>
                        <div>
                        <div class="
                        tw-w-full
                        tw-flex
                        tw-flex-col
                        tw-items-start
                        tw-space-x-4
                        tw-mb-6
                        sm:tw-flex-row lg:tw-mb-8
                        " v-for="(item, index) in form.emails">
                            <div class="tw-w-full tw-mb-4 lg:tw-mb-0">
                                <dynamic-field v-model="item.email" class="input-report"
                                    :field="formFields.reportsForms.email" />
                            </div>
                            <div class="tw-flex lg:tw-w-auto tw-overflow-hidden w-120">
                                <div>
                                    <dynamic-field v-model="item.status" :field="formFields.reportsForms.status" />
                                </div>
                                <div>
                                    <q-btn flat round color="primary" icon="fa-regular fa-trash-can" size="12px"
                                        @click="deleteEmailNotification(index)" />
                                </div>
                            </div>
                        </div>
                    </div>
                        <div>
                            <q-btn
                                rounded
                                v-if="form.emails.length <= 4"
                                outline
                                color="primary"
                                class="tw-mb-1" size="sm" no-caps
                                    @click="addEmailNotification">
                                    <q-icon size="1em" name="fa fa-plus" />
                                    <q-tooltip anchor="bottom middle" self="center middle">
                                        {{ $tr('ireports.cms.addAnotherEmail') }}
                                    </q-tooltip>
                                </q-btn>
                            </div>
                    </div>
                    <div class="
                        tw-w-full
                        tw-flex
                        tw-flex-col
                        sm:tw-flex-row
                        tw-items-start
                        sm:tw-space-x-4
                        tw-mb-4">
                        <dynamic-field v-model="form.format" class="q-mb-md radio-report"
                            :field="formFields.reportsForms.format" />

                    </div>
                </div>
            </div>
        </div>

        <!--
        <p class="tw-text-sm tw-text-black">
            <q-icon name="emergency" class="tw-text-red-600" />
            Remember to add all the emails you need to send this report on “Step 1”
        </p>-->
    </div>
</template>

<script>
import scheduleStore from '../../../_store/sections/scheduleStore.js'
import timeInterval from '../models/defaultModel/timeInterval.ts'
import monthly from '../models/defaultModel/monthly.ts'
import weekly from '../models/defaultModel/weekly.ts'
export default {
    data() {
        return {

        };
    },
    computed: {
        form() {
            return scheduleStore.form
        },
        modelOn() {
            return this.form.timeInterval == 2 ? weekly : monthly;
        },
        formFields() {
            return {
                reportsForms: {
                    status: {
                        type: 'toggle',
                        value: '1',
                        props: {
                            size: 'lg',
                            options: [
                                { label: 'YES', value: '1' },
                                { label: 'NO', value: '0' },
                            ],
                        },
                    },
                    timeInterval: {
                        value: null,
                        type: 'select',
                        props: {
                            rules: [
                                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
                            ],
                            label: 'Time Interval',
                            icon: 'more_time',
                            options: timeInterval,
                            sortOptions: false,
                        },
                    },
                    timeZone: {
                        value: '',
                        type: "select",
                        props: {
                            label: this.$tr('ifly.cms.form.timezone'),
                            rules: [(val) => !!val || this.$tr("isite.cms.message.fieldRequired")],
                        },
                        loadOptions: {
                            apiRoute: 'apiRoutes.qfly.timezones',
                            select: {
                                label: 'name',
                                id: 'value'
                            },
                            requestParams: { refresh: true }
                        }
                    },
                    at: {
                        value: null,
                        type: 'hour',
                        props: {
                            rules: [
                                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
                            ],
                            label: 'At',
                            icon: 'watch_later',
                        },
                    },
                    on: {
                        value: this.form.timeInterval == 2 ? [] : null,
                        type: 'select',
                        props: {
                            rules: [
                                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
                            ],
                            vIf: this.form.timeInterval != 1,
                            label: 'On',
                            icon: 'event_available',
                            options: this.modelOn,
                            multiple: this.form.timeInterval == 2 ? true : false,
                            sortOptions: false
                        },
                    },
                    startingOn: {
                        type: 'date',
                        props: {
                            rules: [
                                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
                            ],
                            label: 'Starting On',
                            icon: 'calendar_month',
                            hint: 'Format: MM/DD/YYYY',
                            mask: 'MM/DD/YYYY',
                            iconRight: 'watch_later',
                        },
                    },
                    endingOn: {
                        type: 'date',
                        isTranslatable: false,
                        props: {
                            rules: [
                                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
                            ],
                            label: 'Ending On',
                            icon: 'calendar_month',
                            hint: 'Format: MM/DD/YYYY',
                            mask: 'MM/DD/YYYY',
                            iconRight: 'watch_later',
                            options: this.validateDate,
                            readonly: !this.form.startingOn
                        },
                    },
                    email: {
                        type: "input",
                        props: {
                            rules: [
                                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
                                (val) => /.+@.+\..+/.test(val) || "Please enter a valid email address",
                            ],
                            label: "Email Notification",
                            icon: "mail",
                            counter: true,
                            maxlength: 40,
                        },
                    },
                    format: {
                        value: "csv",
                        type: "optionGroup",
                        props: {
                            rules: [
                                (val) => !!val || this.$tr("isite.cms.message.fieldRequired"),
                            ],
                            label: "Attach this report as:",
                            inline: true,
                            stackLabel: true,
                            options: [
                                //{ label: "PDF", value: "pdf" },
                                { label: "CSV", value: "csv" },
                                //{ label: "XLSX", value: "xlsx" },
                            ],
                        },
                    },
                },
            };
        },
    },
    methods: {
        addEmailNotification() {
            if (this.form.emails.length >= 5) return;
            scheduleStore.addEmailNotification();
        },
        deleteEmailNotification(index) {
            scheduleStore.deleteEmailNotification(index);
        },
        validateDate(date) {
            return date >= this.$moment(this.form.startingOn).format('YYYY/MM/DD');
        },
        changeValidateDate() {
            const start = this.$moment(this.form.startingOn).format('YYYY/MM/DD');
            const end = this.$moment(this.form.endingOn).format('YYYY/MM/DD');
            if (end < start) {
                this.form.endingOn = null;
            }
        },
        changeTimeInterval() {
            this.form.on = this.form.timeInterval == 2 ? [] : null;
        }
    }
}
</script>

<style>
.schedule-grid-3 {
    @apply tw-flex tw-flex-col tw-items-center tw-flex-wrap lg:tw-flex-row lg:tw-items-start md:tw-mt-3;
}

.schedule-grid-3 .col-auto {
    @apply tw-text-sm tw-font-medium tw-mr-4 tw-pt-1.5 tw-my-1 tw-hidden tw-max-w-full tw-w-auto lg:tw-block;
    flex: 0 0 auto;
}

.schedule-grid-3 .col {
    @apply tw-max-w-full tw-w-full lg:tw-w-2.5;
    flex-basis: 0;
    flex-grow: 1;
}

.w-120 {
    width: 120px;
}

.input-report-on .q-field__native span {
    margin-top: 12px;
}
</style>
