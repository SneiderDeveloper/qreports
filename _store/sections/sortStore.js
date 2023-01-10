import { reactive } from 'vue';
import baseService from '@imagina/qcrud/_services/baseService.js'
import featureStore from './featureStore.js';
import _ from 'lodash';
import qReportsStore from '../qReportsStore.js';

const state = reactive({
    form: {},
    sortList: [],
});

export default function sortStore() {
    function factoryOfDynamicSelect() {
        const data = {};
        const sort = qReportsStore().getSort();
        featureStore().getSelectedColumns().forEach(item => {
            const icon = state.form[item.id] === '1' ? 'fas fa-sort-amount-up'
            :'fas fa-sort-amount-down';
            const sortList = getSortList().find(item => item.id === item.id);
            if(sortList) {
                data[item.id] = {
                    value: sort[_.snakeCase(item.id)] || '1',
                    type: 'select',
                    props: {
                        label: item.title,
                        icon,
                        color: 'primary',
                        options: [
                            { label: 'Ascending', value: '1' },
                            { label: 'Descending', value: '0' }
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
            const filter = featureStore().getSelectedColumns().some(item => item.field === key);
            if (!filter) {
                delete state.form[key];
            }
        })
    }
    function payloadSort() {
        const sort = _.mapKeys(state.form, (v, k) => _.camelCase(k))
        return  {
            sort,
        }
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