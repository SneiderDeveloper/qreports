import description from '../description.vue';
import feature from '../feature';
import fieldsDetails from '../fieldsDetails';
import sort from '../sort';
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
        title: 'Sort',
        prefix: 4,
        component: sort,
        done: false,
    },
    {
        id: 5,
        title: 'Schedule',
        prefix: 5,
        component: schedule,
        done: false,
    },
];