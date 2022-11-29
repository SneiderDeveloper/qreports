import { reactive } from '@vue/composition-api';
import baseService from '@imagina/qcrud/_services/baseService.js'
import descriptionStore from './sections/descriptionStore';

const state = reactive({
});

export default function qReportsStore() {
    async function saveReport() {
        const descriptionForm = descriptionStore().getDescriptionForm();
        const data = {
            attributes: {...descriptionForm},
        }
    }
    function reset() {
        descriptionStore().reset();
    }
    return {
        saveReport,
        reset,
    }
}