import { reactive } from '@vue/composition-api';
import baseService from '@imagina/qcrud/_services/baseService.js';
import Vue from "vue";
const modelEmailNotification = {
    email: null,
    status: false,
}
const descriptionModel = {
    entity: null,
    reportTypeId: null,
    folderId: null,
    title: null,
    description: null,
    /*emails: [ // tenerlo encuenta para schedule
        {
            email: null,
            status: false,
        }
    ],*/
    //attachReport: 'pdf'
}

const state = reactive({
    form: {...descriptionModel},
    reportTypeList: [],
});

export default function descriptionStore() {
    /**
     * Mutation
    */
    function getDescriptionForm() {
        return state.form;
    }
    function getReportTypeList() {
        return state.reportTypeList.map(item => ({
            label: item.name,
            value: item.id,
            ...item
        }));
    }
    function setReportTypeList(value) {
        state.reportTypeList = value;
    }
    function addEmailNotification() {
        state.form.emailNotification.push({...modelEmailNotification});
    }
    function deleteEmailNotification(index) {
        state.form.emailNotification.splice(index, 1)
    }
    function reset() {
        state.form = {...descriptionModel};
    }
    /**
     * Action
     *
     * @return {Promise} get list of report types.
    */
    async function getListOfReportTypes() {
        try {
            const response = await baseService.index('apiRoutes.qreports.reportTypes');
            setReportTypeList(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return {
        getDescriptionForm,
        addEmailNotification,
        deleteEmailNotification,
        reset,
        getReportTypeList,
        setReportTypeList,
        getListOfReportTypes,
    }
}