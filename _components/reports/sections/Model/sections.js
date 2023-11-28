import description from '../description.vue';
import feature from '../feature';
import fieldsDetails from '../fieldsDetails';
import sort from '../sort';
import schedule from '../schedule';
import { 
    STEP_DESCRIPTION, 
    STEP_FEATURE, 
    STEP_FIELDS_DETAILDS,
    STEP_SORT,
    STEP_SCHEDULE 
} from './constants.js';
import Vue , { ref } from 'vue';
const data = ref([
    {
        id: STEP_DESCRIPTION,
        title: Vue.prototype.$tr('isite.cms.form.description'),
        prefix: 1,
        component: description,
        done: false,
        refs: 'descriptionForm',
        error: false
    },
    {
        id: STEP_FEATURE,
        title: Vue.prototype.$tr('isite.cms.form.feature'),
        prefix: 2,
        component: feature,
        done: false,
        refs: 'featureForm',
        error: false
    },
    {
        id: STEP_FIELDS_DETAILDS,
        title: Vue.prototype.$tr('isite.cms.form.fieldsDetails'),
        prefix: 3,
        component: fieldsDetails,
        done: false,
        refs: 'fieldsDetailsForm',
        error: false
    },
    {
        id: STEP_SORT,
        title: Vue.prototype.$tr('isite.cms.form.sort'),
        prefix: 4,
        component: sort,
        done: false,
        refs: 'sortForm',
        error: false
    },
    {
        id: STEP_SCHEDULE,
        title: Vue.prototype.$tr('isite.cms.form.schedule'),
        prefix: 5,
        component: schedule,
        done: false,
        refs: 'scheduleForm',
        error: false
    },
]);

export default data.value;