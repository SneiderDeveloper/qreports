import { reactive } from '@vue/composition-api';
import baseService from '@imagina/qcrud/_services/baseService.js';
import Vue from "vue";

const descriptionModel = {
    reportType: null,
    folder: null,
    reportTitle: null,
    description: null,
    shortDescription: null,
    emailNotification: null,
    isEmail: false,
    typeReport: null,
}

const state = reactive({
    form: {...descriptionModel},
});

export default function descriptionStore() {
    function getDescriptionForm() {
        return state.form;
    }
    return {
        getDescriptionForm,
    }
}