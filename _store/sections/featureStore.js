import { reactive } from 'vue';
import baseService from '@imagina/qcrud/_services/baseService.js'
import qReportsStore from '../qReportsStore.js';
import _ from 'lodash';

const state = reactive({
    columnList: [],
    filterList: [],
    selectedAll: {
        columnList: 0,
        filterList: 0,
    }
});

export default function featureStore() {
    function getColumnCheck() {
        return state.selectedAll.columnList
    }
    function setColumnCheck(value) {
        state.selectedAll.columnList = value;
    }
    function getFilterListCheck() {
        return state.selectedAll.filterList
    }
    function setFilterListCheck(value) {
        state.selectedAll.filterList = value;
    }
    function getColumnList() {
        return state.columnList;
    }
    function setColumnList(columns) {
        try {
            const selectColumns = qReportsStore().getColumns();
            const columnsList = columns.map(item => ({
                ...item,
                check: selectColumns.some(column => column === item.id) ? 1 : 0,
            }));
            const sortSelectedColumns = sortSelectedColumnsList(columnsList.filter(item => item.check === 1));
            state.columnList = [
                ...sortSelectedColumns,
                ...columnsList.filter(item => item.check === 0)
            ]
        } catch (error) {
            console.log(error);
        }

    }
    function sortSelectedColumnsList(columns) {
        try {
            const selectColumns = qReportsStore().getColumns();
            const data = [];
            selectColumns.forEach(item => {
                const column = columns.find(column => column.id === item);
                if (column) {
                    data.push({ ...column })
                }
            });
            return data;
        } catch (error) {
            console.log(error)
        }

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
            check: selectFilters.hasOwnProperty(_.snakeCase(item)) ? 1 : 0,
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
    function selecdAll(type) {
        state[type].forEach(item => {
            item.check = state.selectedAll[type];
        })
    }
    function checkIfAllChecksSelected(type) {
        state.selectedAll[type] = Number(state[type].every(item => item.check == 1));
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
        selecdAll,
        getColumnCheck,
        setColumnCheck,
        getFilterListCheck,
        setFilterListCheck,
        checkIfAllChecksSelected
    }
}