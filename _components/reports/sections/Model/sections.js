import description from '../description.vue';
import feature from '../feature';
import fieldsDetails from '../fieldsDetails';
import schedule from '../schedule';

export default [
    {
        id: 1,
        title: 'Description',
        prefix: 1,
        component: description,
        done: false,
    },
    {
        id: 2,
        title: 'Feature',
        prefix: 2,
        component: feature,
        done: false,
    },
    {
        id: 3,
        title: 'Fields Details',
        prefix: 3,
        component: fieldsDetails,
        done: false,
    },
    {
        id: 4,
        title: 'schedule',
        prefix: 4,
        component: schedule,
        done: false,
    },
];