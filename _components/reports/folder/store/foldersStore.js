import { reactive } from '@vue/composition-api';
import baseService from '@imagina/qcrud/_services/baseService.js'

const state = reactive({
    dragReports: false,
});

export default function foldersStore() {
    function getDragReports() {
        return state.dragReports;
    }
    function setDragReports(value) {
        state.dragReports = value;
    }
    return {
        getDragReports,
        setDragReports,
    }
}