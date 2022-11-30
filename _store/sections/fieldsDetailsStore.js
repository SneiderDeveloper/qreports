import { reactive } from '@vue/composition-api';
import baseService from '@imagina/qcrud/_services/baseService.js'
import featureStore from './featureStore.js';

const state = reactive({
    form: {},
});

export default function fieldsDetailsStore() {
    function factoryOfDynamicSelect(multiple) {
        const data = {};
        featureStore().getSelectedFilters().forEach(item => {
            let loadOptions = {};
            if(item.type.type === 'select' && item.type.loadOptions) {
                loadOptions = {
                    loadOptions: {
                        ...item.type.loadOptions
                    },
                }
            }
            data[item.id] = {
                value: item.type.value || null,
                type: item.type.type,
                props: {
                    ...item.type.props
                },
                ...loadOptions
            };
        });
        return data;
    }
    function getForm() {
        return state.form;
    }
    function removeObjectIdentifiers() {
        Object.entries(state.form).forEach(([key, value]) => {
            const filter = featureStore().getSelectedFilters().some(item => item.field === key);
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