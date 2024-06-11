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
    loading: false,
});

export default function qReportsStore() {
    async function saveReport(reportId = null) {
        try {
            const params = {
                notToSnakeCase: ['filters'],
            }
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
                await baseService.update(route, reportId, data, params);
                return;
            }
            await baseService.create(route, data, params);
        } catch (error) {
            console.log(error);
        }

    }
    async function showReport(reportId) {
        try {
            state.loading = true;
            const response = await baseService
                .show('apiRoutes.qreports.reports', reportId,
                    {
                        refresh: true,
                        params: {
                            include: "users,roles",
                        }
                    }
                );
            await setColumns(response.data.columns || []);
            await setFilters(response.data.filters || {});
            await setSort(response.data.sort || {});
            await descriptionStore().setForm(response.data);
            scheduleStore.form = response.data.schedule || {};
            setTimeout(() => {
                state.loading = false;
            }, 1000);
            
        } catch (error) {
            state.loading = false;
            console.log(error);
        }
    }
    function setLoading(value) {
        state.loading = value;
    }
    function getLoading() {
        return state.loading;
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
        getLoading,
        setLoading
    }
}