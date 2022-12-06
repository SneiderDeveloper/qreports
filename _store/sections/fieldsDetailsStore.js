import { reactive } from '@vue/composition-api';
import baseService from '@imagina/qcrud/_services/baseService.js'
import featureStore from './featureStore.js';
import Vue from "vue";

const state = reactive({
    form: {},
});

export default function fieldsDetailsStore() {
    function factoryOfDynamicSelect(multiple) {
        try {
            const data = {};
            featureStore().getSelectedFilters().forEach(item => {
                let loadOptions = {};
                const type = !item.type && item.id === 'date' ? 'select' : item.type;
                const options = !item.type && item.id === 'date' ? { options: optionDate() } : {};
                if (item.type && item.type === 'select' && item.loadOptions) {
                    loadOptions = {
                        loadOptions: {
                            ...item.loadOptions
                        },
                    }
                }
                data[item.id] = {
                    value: state.form[item.id] || item.value || null,
                    type: type,
                    props: {
                        rules: [
                            val => !!val || Vue.prototype.$tr('isite.cms.message.fieldRequired')
                        ],
                        ...item.props,
                        ...options
                    },
                    ...loadOptions
                };
            });
            return data;
        } catch (error) {
            console.log('Factory::FieldsDetaild', error);
        }
    }
    function optionDate() {
        return [
            { label: Vue.prototype.$tr('isite.cms.label.customRange'), value: 'customRange' },
            { label: Vue.prototype.$tr('isite.cms.label.today'), value: 'today' },
            { label: Vue.prototype.$tr('isite.cms.label.yesterday'), value: 'yesterday' },
            { label: Vue.prototype.$tr('isite.cms.label.tomorrow'), value: 'tomorrow' },
            { label: Vue.prototype.$tr('isite.cms.label.LastNumDays', { numDays: 7 }), value: 'lastSevenDays' },
            { label: Vue.prototype.$tr('isite.cms.label.LastNumDays', { numDays: 30 }), value: 'lastThirtyDays' },
            { label: Vue.prototype.$tr('isite.cms.label.LastNumDays', { numDays: 60 }), value: 'lastSixtyDays' },
            { label: Vue.prototype.$tr('isite.cms.label.currentWeek'), value: 'currentWeek' },
            { label: Vue.prototype.$tr('isite.cms.label.lastWeek'), value: 'lastWeek' },
            { label: Vue.prototype.$tr('isite.cms.label.nextWeek'), value: 'nextWeek' },
            { label: Vue.prototype.$tr('isite.cms.label.currentMonth'), value: 'currentMonth' },
            { label: Vue.prototype.$tr('isite.cms.label.lastMonth'), value: 'lastMonth' },
            { label: Vue.prototype.$tr('isite.cms.label.nextMonth'), value: 'nextMonth' },
            { label: Vue.prototype.$tr('isite.cms.label.numMonthsAgo', { numMonths: 2 }), value: 'twoMonthsAgo' },
            { label: Vue.prototype.$tr('isite.cms.label.currentYear'), value: 'currentYear' },
            { label: Vue.prototype.$tr('isite.cms.label.lastYear'), value: 'lastYear' },
            { label: Vue.prototype.$tr('isite.cms.label.numYearsAgo', { numYears: 2 }), value: 'twoYearsAgo' },
            { label: Vue.prototype.$tr('isite.cms.label.lastNumYears', { numYears: 2 }), value: 'lastTwoYears' },
        ]
    }
    function getForm() {
        return state.form;
    }
    function removeObjectIdentifiers() {
        Object.entries(state.form).forEach(([key, value]) => {
            const filter = featureStore().getSelectedFilters().some(item => item.id === key);
            if (!filter) {
                delete state.form[key];
            }
        })
    }
    function payloadFilter() {
        const filters = state.form;
        return {
            filters,
        }
    }
    return {
        factoryOfDynamicSelect,
        removeObjectIdentifiers,
        getForm,
        payloadFilter
    }
}