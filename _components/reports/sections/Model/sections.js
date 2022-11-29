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
import { reactive } from '@vue/composition-api';

export default reactive([
    {
        id: STEP_DESCRIPTION,
        title: 'Description',
        prefix: 1,
        component: description,
        done: false,
        refs: 'descriptionForm'
    },
    {
        id: STEP_FEATURE,
        title: 'Feature',
        prefix: 2,
        component: feature,
        done: false,
        refs: 'featureForm'
    },
    {
        id: STEP_FIELDS_DETAILDS,
        title: 'Fields Details',
        prefix: 3,
        component: fieldsDetails,
        done: false,
        refs: 'fieldsDetailsForm'
    },
    {
        id: STEP_SORT,
        title: 'Sort',
        prefix: 4,
        component: sort,
        done: false,
        refs: 'sortForm'
    },
    {
        id: STEP_SCHEDULE,
        title: 'Schedule',
        prefix: 5,
        component: schedule,
        done: false,
        refs: 'schedule'
    },
]);