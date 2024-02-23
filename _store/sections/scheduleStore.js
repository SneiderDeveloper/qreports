import { reactive, computed } from 'vue';
import axios from "axios";

const defaultFormat = 'csv';
const model = {
    status: 0,
    timeInterval: null,
    timeZone: null,
    on: null,
    at: null,
    startingOn: null,
    endingOn: null,
    emails: [{
        email: null,
        status: 1,
    }],
    format: defaultFormat
}
const state = reactive({
    form: {
        status: 0,
        timeInterval: null,
        timeZone: axios.defaults.params.setting.timezone,
        on: null,
        at: null,
        startingOn: null,
        endingOn: null,
        emails: [{
            email: null,
            status: 1,
        }],
        format: defaultFormat
    }
});

const store = computed(() => ({
    get form() {
        return state.form
    },
    set form(data) {
        state.form.status = data.status || 0;
        state.form.timeInterval = data.timeInterval || null;
        state.form.timeZone = data.timeZone || axios.defaults.params.setting.timezone;
        state.form.on = data.on || null;
        state.form.at = data.at || null;
        state.form.startingOn = data.startingOn || null;
        state.form.endingOn = data.endingOn || null;
        state.form.emails = data.emails || [{
            email: null,
            status: 1,
        }];
        state.form.format = data.format || defaultFormat;
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
        if (state.form.status == 0) {
            state.form.timeZone = null;
        }
        return { schedule: state.form };
    },
    reset() {
        state.form = {...model }
    },
})).value


export default store;