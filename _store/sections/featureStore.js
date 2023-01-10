import { reactive } from 'vue';
import baseService from '@imagina/qcrud/_services/baseService.js'
import qReportsStore from '../qReportsStore.js';
import _ from 'lodash';

const state = reactive({
    columnList: [],
    filterList: [],
});

export default function featureStore() {
    function getColumnList() {
        return state.columnList;
    }
    function setColumnList(columns) {
        const selectColumns = qReportsStore().getColumns();
        state.columnList = columns.map(item => ({
            ...item,
            check: selectColumns.some(column => column === item.id) ? 1 : 0,
        }));
    }
    function getFilterList() {
        return state.filterList;
    }
    function setFilterList(filters) {
        state.filterList = [];
        const selectFilters = qReportsStore().getFilters();
        state.filterList = Object.keys(filters).map(item => ({
            id: item,
            title: filters[item].props.label,
            ...filters[item],
            value: selectFilters[_.snakeCase(item)] || null,
            check: selectFilters[_.snakeCase(item)] ? 1 : 0,
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