import { reactive } from '@vue/composition-api';
import baseService from '@imagina/qcrud/_services/baseService.js';
import Vue from "vue";
const modelEmailNotification = {
    email: null,
    status: false,
}
const descriptionModel = {
    reportType: null,
    folder: null,
    reportTitle: null,
    description: null,
    emailNotification: [
        {
            email: null,
            status: false,
        }
    ],
    attachReport: 'pdf'
}

const state = reactive({
    form: {...descriptionModel},
});

export default function descriptionStore() {
    function getDescriptionForm() {
        return state.form;
    }
    function addEmailNotification() {
        state.form.emailNotification.push({...modelEmailNotification});
    }
    function deleteEmailNotification(index) {
        state.form.emailNotification.splice(index, 1)
    }
    return {
        getDescriptionForm,
        addEmailNotification,
        deleteEmailNotification,
    }
}