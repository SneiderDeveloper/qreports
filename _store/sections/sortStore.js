import { reactive } from '@vue/composition-api';
import baseService from '@imagina/qcrud/_services/baseService.js'
import featureStore from './featureStore.js';

const state = reactive({
    form: {},
});

export default function sortStore() {
    function factoryOfDynamicSelect() {
        const data = {};
        featureStore().getSelectedColumns().forEach(item => {
            data[item.field] = {
                value: '1',
                type: 'select',
                props: {
                    label: item.title,
                    icon: 'fas fa-sort-amount-up',
                    color: 'primary',
                    options: [
                        { label: 'Ascending', value: '1' },
                        { label: 'Descending', value: '0' }
                    ],
                }
            };
        });
        return data;
    }
    function getForm() {
        return state.form;
    }
    function removeObjectIdentifiers() {
        Object.entries(state.form).forEach(([key, value]) => {
            const filter = featureStore().getSelectedColumns().some(item => item.field === key);
            if (!filter) {
                delete state.form[key];
            }
        })
    }
    return {
        factoryOfDynamicSelect,
        removeObjectIdentifiers,
        getForm,
    }
}