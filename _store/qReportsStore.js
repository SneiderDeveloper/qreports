import { reactive } from 'vue';
import baseService from '@imagina/qcrud/_services/baseService.js'
import descriptionStore from './sections/descriptionStore';
import featureStore from './sections/featureStore.js'
import fieldsDetailsStore from './sections/fieldsDetailsStore.js';
import sortStore from './sections/sortStore.js';
import scheduleStore from './sections/scheduleStore.js';

const state = reactive({
    columns: [],
    filters: [],
    sort: [],
});

export default function qReportsStore() {
    async function saveReport(reportId = null) {
        try {
            const route = 'apiRoutes.qreports.reports';
            const descriptionForm = descriptionStore().getDescriptionForm();
            const columns = featureStore().payloadColumns();
            const filters = fieldsDetailsStore().payloadFilter();
            const sort = sortStore().payloadSort()
            const schedule = scheduleStore.payload();
            const data = {
                ...descriptionForm,
                ...columns,
                ...filters,
                ...sort,
                ...schedule
            }
            if (reportId) {
                await baseService.update(route, reportId, data);
                return;
            }
            await baseService.create(route, data);
        } catch (error) {
            console.log(error);
        }

    }
    async function showReport(reportId) {
        try {
            const response = await baseService
                .show('apiRoutes.qreports.reports', reportId,
                    {
                        refresh: true,
                    }
                );
            setColumns(response.data.columns || []);
            setFilters(response.data.filters || {});
            setSort(response.data.sort || {});
            descriptionStore().setForm(response.data);
            scheduleStore.form = response.data.schedule || {};
        } catch (error) {
            console.log(error);
        }
    }
    function setColumns(value) {
        state.columns = value;
    }
    function getColumns() {
        return state.columns;
    }
    function setFilters(value) {
        state.filters = value;
    }
    function getFilters() {
        return state.filters;
    }
    function setSort(value) {
        state.sort = value;
    }
    function getSort() {
        return state.sort;
    }
    function reset() {
        descriptionStore().reset();
        featureStore().reset();
        sortStore().setForm({});
        scheduleStore.reset();
        fieldsDetailsStore().setForm({});
        setColumns([]);
        setFilters({});
        
    }
    return {
        saveReport,
        showReport,
        getColumns,
        setColumns,
        setFilters,
        getFilters,
        getSort,
        setSort,
        reset,
    }
}