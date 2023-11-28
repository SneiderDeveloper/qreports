import { reactive } from 'vue';
import baseService from '@imagina/qcrud/_services/baseService.js'
import featureStore from './featureStore.js';
import _ from 'lodash';
import qReportsStore from '../qReportsStore.js';
import {DESCENDING, ASCENDING, NOT_SET} from './model/constants.js';

const state = reactive({
    form: {},
    sortList: [],
});

export default function sortStore() {
    function factoryOfDynamicSelect() {
        const data = {};
        const sort = qReportsStore().getSort();
        state.sortList.forEach(item => {
            let icon = 'fa-light fa-do-not-enter';
            if(state.form[item.id] === ASCENDING) {
                icon = 'fas fa-sort-amount-up'
            }
            if(state.form[item.id] === DESCENDING) {
                icon = 'fas fa-sort-amount-down'
            }
            const sortList = getSortList().find(item => item.id === item.id);
            if(sortList) {
                data[item.id] = {
                    value: sort[_.snakeCase(item.id)] || NOT_SET,
                    type: 'select',
                    props: {
                        label: item.title,
                        icon,
                        options: [
                            { label: 'Ascending', value: ASCENDING },
                            { label: 'Descending', value: DESCENDING },
                            { label: 'Not Set', value: NOT_SET },
                        ],
                    }
                };
            }
        });
        return data;
    }
    function getSortList() {
        return state.sortList;
    }
    function setSortList(value) {
        state.sortList = value;
    }
    function getForm() {
        return state.form;
    }
    function setForm(value) {
        state.form = value;
    }
    function removeObjectIdentifiers() {
        Object.entries(state.form).forEach(([key, value]) => {
            const filter = state.sortList.some(item => item.field === key);
            if (!filter) {
                delete state.form[key];
            }
        })
    }
    function payloadSort() {
        deleteNotSet();
        const sort = _.mapKeys(state.form, (v, k) => _.camelCase(k)) || {};
        return  {
            sort,
        }
    }
    function deleteNotSet() {
        Object.entries(state.form).forEach(([key, value]) => {
            if (state.form[key] === NOT_SET) {
                delete state.form[key];
            }
        })
    }
    function reset() {
        this.form = {};
        state.sortList = [];
    }
    return {
        factoryOfDynamicSelect,
        removeObjectIdentifiers,
        getForm,
        payloadSort,
        setSortList,
        getSortList,
        reset,
        setForm
    }
}