import { reactive } from 'vue';
import baseService from '@imagina/qcrud/_services/baseService.js'

const state = reactive({
    columnList: [],
    filterList: [],
});

export default function featureStore() {
    function getColumnList() {
        return state.columnList;
    }
    function setColumnList(columns) {
        state.columnList = columns.map(item => ({
            ...item,
            check: 0,
        }));
    }
    function getFilterList() {
        return state.filterList;
    }
    function setFilterList(filters) {
        state.filterList = [];
        state.filterList = Object.keys(filters).map(item => ({
            id: item,
            title: filters[item].props.label,
            ...filters[item],
            check: 0,
        }));
    }
    function factoryOfDynamicCheck(type) {
        const data = {};
        state[type].forEach(item => {
            data[item.id] = {
                type: 'checkbox',
                value: 0,
                props: {
                    label: item.title,
                }
            };
        })
        return data;
    }
    function getSelectedFilters() {
        return state.filterList.filter(item => Boolean(item.check));
    }
    function getSelectedColumns() {
        return state.columnList.filter(item => Boolean(item.check));
    }
    function reset() {
        setColumnList([]);
        setFilterList([]);
    }
    function payloadColumns() {
        const columns = getSelectedColumns().map(item => item.id)
        return {
            columns,
        }
    }
    return {
        getColumnList,
        getFilterList,
        factoryOfDynamicCheck,
        getSelectedFilters,
        getSelectedColumns,
        setColumnList,
        setFilterList,
        reset,
        payloadColumns,
    }
}