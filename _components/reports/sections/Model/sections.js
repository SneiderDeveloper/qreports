import description from 'src/modules/qreports/_components/reports/sections/description.vue';
import feature from 'src/modules/qreports/_components/reports/sections/feature.vue';
import fieldsDetails from 'src/modules/qreports/_components/reports/sections/fieldsDetails.vue';
import sort from 'src/modules/qreports/_components/reports/sections/sort.vue';
import schedule from 'src/modules/qreports/_components/reports/sections/schedule.vue';
import {
    STEP_DESCRIPTION,
    STEP_FEATURE,
    STEP_SCHEDULE,
    STEP_SORT,
    STEP_FIELDS_DETAILDS
} from './constants.js';
import { ref, markRaw } from 'vue';
import { i18n } from 'src/plugins/utils'

const data = ref([
    {
        id: STEP_DESCRIPTION,
        title: i18n.tr('isite.cms.form.description'),
        prefix: 1,
        component: markRaw(description),
        done: false,
        refs: 'descriptionForm',
        error: false
    },
    {
        id: STEP_FEATURE,
        title: i18n.tr('isite.cms.form.feature'),
        prefix: 2,
        component: markRaw(feature),
        done: false,
        refs: 'featureForm',
        error: false
    },
    {
        id: STEP_FIELDS_DETAILDS,
        title: i18n.tr('isite.cms.form.fieldsDetails'),
        prefix: 3,
        component: markRaw(fieldsDetails),
        done: false,
        refs: 'fieldsDetailsForm',
        error: false
    },
    {
        id: STEP_SORT,
        title: i18n.tr('isite.cms.form.sort'),
        prefix: 4,
        component: markRaw(sort),
        done: false,
        refs: 'sortForm',
        error: false
    },
    {
        id: STEP_SCHEDULE,
        title: i18n.tr('isite.cms.form.schedule'),
        prefix: 5,
        component: markRaw(schedule),
        done: false,
        refs: 'scheduleForm',
        error: false
    },
]);

export default data.value;
