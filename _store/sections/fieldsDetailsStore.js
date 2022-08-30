import { reactive } from '@vue/composition-api';
import baseService from '@imagina/qcrud/_services/baseService.js'
import featureStore from './featureStore.js';

const state = reactive({
    form: {},
});

export default function fieldsDetailsStore() {
    function factoryOfDynamicSelect() {
        const data = {}
        featureStore().getSelectedFilters().forEach(item => {
            data[item.field] = {
                value: [],
                type: 'select',
                props: {
                    label: item.title,
                    multiple: true,
                    options: [
                        {label: 'enable', value: '1'},
                        {label: 'disabled', value: '2'}
                    ]
                }
            };
        });
        return data;
    }
    function getForm() {
        return state.form;
    }
    return {
        factoryOfDynamicSelect,
        getForm,
    }
}