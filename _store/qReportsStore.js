import { reactive } from 'vue';
import baseService from '@imagina/qcrud/_services/baseService.js'
import descriptionStore from './sections/descriptionStore';
import featureStore from './sections/featureStore.js'
import fieldsDetailsStore from './sections/fieldsDetailsStore.js';
import sortStore from './sections/sortStore.js';

const state = reactive({
});

export default function qReportsStore() {
    async function saveReport() {
        try {
            const descriptionForm = descriptionStore().getDescriptionForm();
            const columns = featureStore().payloadColumns();
            const filters = fieldsDetailsStore().payloadFilter();
            const sort = sortStore().payloadSort()
            const data = {
                ...descriptionForm,
                ...columns,
                ...filters,
                ...sort
            }
            baseService.create('apiRoutes.qreports.reports', data);
        } catch (error) {
            console.log(error);
        }
        
    }
    function reset() {
        descriptionStore().reset();
        featureStore().reset();
        sortStore().setForm({});
        fieldsDetailsStore().setForm({});
    }
    return {
        saveReport,
        reset,
    }
}