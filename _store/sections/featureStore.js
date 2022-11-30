import { reactive } from '@vue/composition-api';
import baseService from '@imagina/qcrud/_services/baseService.js'
const modelColumnList = [
    {
        "id": 1,
        "title": 'ID',
        "field": 'id',
        "check": 0,
    },
    {
        "id": 2,
        "field": 'referenceId',
        "title": 'Reference Id',
        "check": 0,
    },
    {
        "id": 3,
        "field": 'customer',
        "title": 'Customer',
        "check": 0,
    },
    {
        "id": 4,
        "field": 'adHoc',
        "title": 'Ad Hoc',
        "check": 0,
    },
];
const modelFilterList =[
    {
        "id": 1,
        "field": 'status',
        "title": 'Status',
        "check": 0,
    },
    {
        "id": 2,
        "field": 'customer',
        "title": 'Customer',
        "check": 0,
    },
    {
        "id": 3,
        "field": 'date',
        "title": 'Date',
        "check": 0,
    },
]
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
        state.filterList = filters.map(item => ({
            ...item,
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