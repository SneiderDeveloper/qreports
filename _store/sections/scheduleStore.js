import { reactive, computed } from 'vue';

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
        state.form = data;
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
        if(state.timeInterval == 1) {
            state.form.on = null;
        }
        return { schedule: state.form };
    },
    reset() {
        state.form = {
            scheduleReport: 1,
            timeInterval: null,
            timeZone: null,
            on: null,
            at: null,
            startingOn: null,
            EndingOn: null,
            emails: [
                {
                    email: null,
                    status: 1,
                }
            ],
            format: 'pdf'
        }
    },
})).value


export default store;