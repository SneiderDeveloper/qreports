import { reactive, computed } from 'vue';
const model = {
    scheduleReport: 1,
    timeInterval: null,
    timeZone: null,
    on: null,
    at: null,
    startingOn: null,
    endingOn: null,
    emails: [
        {
            email: null,
            status: 1,
        }
    ],
    format: 'pdf'
}
const state = reactive({
    form: {
        scheduleReport: 1,
        timeInterval: null,
        timeZone: null,
        on: null,
        at: null,
        startingOn: null,
        endingOn: null,
        emails: [
            {
                email: null,
                status: 1,
            }
        ],
        format: 'pdf'
    }
});

const store = computed(() => ({
    get form() {
        return state.form
    },
    set form(data) {
        state.form.scheduleReport = data.scheduleReport || 0;
        state.form.timeInterval = data.timeInterval || null;
        state.form.timeZone = data.timeZone || null;
        state.form.on = data.on || null;
        state.form.at = data.at || null;
        state.form.startingOn = data.startingOn || null;
        state.form.endingOn = data.endingOn || null;
        state.form.emails = data.emails || [
            {
                email: null,
                status: 1,
            }
        ];
        state.form.format = data.format || 'pdf';
    },
    addEmailNotification() {
        state.form.emails.push({
            email: null,
            status: 1
        });
    },
    deleteEmailNotification(index) {
        state.form.emails.splice(index, 1)
    },
    payload() {
        if (state.timeInterval == 1) {
            state.form.on = null;
        }
        return { schedule: state.form.scheduleReport == 0 ? {} : state.form };
    },
    reset() {
        state.form = { ...model }
    },
})).value


export default store;