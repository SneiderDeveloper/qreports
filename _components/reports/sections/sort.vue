<template>
    <div>
        <div class="q-stepper-title">
            <h3 class="text-primary">Choose column sorting</h3>
            <div></div>
        </div>
        <h4 class="text-primary tw-text-base tw-font-extrabold tw-mb-6">Do you want to schedule it? Adjust the following parameters:</h4>

        <table class="q-stepper-table tw-table-auto">
            <thead>
                <tr>
                    <th class="text-left tw-w-2/5 text-primary tw-text-base tw-font-extrabold">Attribute</th>
                    <th class="text-left text-primary tw-text-base tw-font-extrabold">Sort</th>
                </tr>
            </thead>
            <tbody> 
                <tr>
                    <td> 
                        <div class="text-primary tw-mr-4 tw-w-9 tw-h-9  tw-inline-flex tw-items-center tw-justify-center tw-font-extrabold tw-rounded-full tw-border-2 tw-border-slate-50">1</div> 
                        <span class="tw-text-base tw-font-extrabold">ID</span>  
                    </td>
                    <td>
                        <q-btn-toggle
                            v-model="prueba"
                            class="my-custom-toggle"
                            no-caps
                            rounded
                            spread
                            size="sm"
                            toggle-color="primary"
                            color="white"
                            unelevated
                            text-color="primary"
                            :options="[
                            { value: 'one', slot: 'one'},
                            { value: 'two', slot: 'two'}
                            ]"
                        >
                            <template v-slot:one>
                                <div class="row items-center no-wrap tw-px-4">
                                    <q-icon left name="fas fa-sort-amount-down" />
                                    <div class="tw-text-sm"> Ascending </div>
                                </div>
                            </template>

                            <template v-slot:two>
                                <div class="row items-center no-wrap tw-px-4">
                                    <q-icon left name="fas fa-sort-amount-up" />
                                    <div class="tw-text-sm"> Descending</div>
                                </div>
                            </template>

                        </q-btn-toggle>
                    </td>
                </tr>
                <tr>
                    <td> 
                        <div class="text-primary tw-mr-4 tw-w-9 tw-h-9  tw-inline-flex tw-items-center tw-justify-center tw-font-extrabold tw-rounded-full tw-border-2 tw-border-slate-50">2</div> 
                        <span class="tw-text-base tw-font-extrabold">Reference ID</span>  
                    </td>
                    <td>
                        <q-btn-toggle
                            v-model="prueba"
                            class="my-custom-toggle"
                            no-caps
                            rounded
                            spread
                            size="sm"
                            toggle-color="primary"
                            color="white"
                            unelevated
                            text-color="primary"
                            :options="[
                            { value: 'one', slot: 'one'},
                            { value: 'two', slot: 'two'}
                            ]"
                        >
                            <template v-slot:one>
                                <div class="row items-center no-wrap tw-px-4">
                                    <q-icon left name="fas fa-sort-amount-down" />
                                    <div class="tw-text-sm"> Ascending </div>
                                </div>
                            </template>

                            <template v-slot:two>
                                <div class="row items-center no-wrap tw-px-4">
                                    <q-icon left name="fas fa-sort-amount-up" />
                                    <div class="tw-text-sm"> Descending</div>
                                </div>
                            </template>

                        </q-btn-toggle>
                    </td>
                </tr>
                <tr>
                    <td> 
                        <div class="text-primary tw-mr-4 tw-w-9 tw-h-9 tw-inline-flex tw-items-center tw-justify-center tw-font-extrabold tw-rounded-full tw-border-2 tw-border-slate-50">3</div> 
                        <span class="tw-text-base tw-font-extrabold">Customers</span>  
                    </td>
                    <td>
                        <q-btn-toggle
                            v-model="prueba"
                            class="my-custom-toggle"
                            no-caps
                            rounded
                            spread
                            size="sm"
                            toggle-color="primary"
                            color="white"
                            unelevated
                            text-color="primary"
                            :options="[
                            { value: 'one', slot: 'one'},
                            { value: 'two', slot: 'two'}
                            ]"
                        >
                            <template v-slot:one>
                                <div class="row items-center no-wrap tw-px-4">
                                    <q-icon left name="fas fa-sort-amount-down" />
                                    <div class="tw-text-sm"> Ascending </div>
                                </div>
                            </template>

                            <template v-slot:two>
                                <div class="row items-center no-wrap tw-px-4">
                                    <q-icon left name="fas fa-sort-amount-up" />
                                    <div class="tw-text-sm"> Descending</div>
                                </div>
                            </template>

                        </q-btn-toggle>
                    </td>
                </tr>
                <tr>
                    <td> 
                        <div class="text-primary tw-mr-4 tw-w-9 tw-h-9  tw-inline-flex tw-items-center tw-justify-center tw-font-extrabold tw-rounded-full tw-border-2 tw-border-slate-50">4</div> 
                        <span class="tw-text-base tw-font-extrabold">Status</span>  
                    </td>
                    <td>
                        <q-btn-toggle
                            v-model="prueba"
                            class="my-custom-toggle"
                            no-caps
                            rounded
                            spread
                            size="sm"
                            toggle-color="primary"
                            color="white"
                            unelevated
                            text-color="primary"
                            :options="[
                            { value: 'one', slot: 'one'},
                            { value: 'two', slot: 'two'}
                            ]"
                        >
                            <template v-slot:one>
                                <div class="row items-center no-wrap tw-px-4">
                                    <q-icon left name="fas fa-sort-amount-down" />
                                    <div class="tw-text-sm"> Ascending </div>
                                </div>
                            </template>

                            <template v-slot:two>
                                <div class="row items-center no-wrap tw-px-4">
                                    <q-icon left name="fas fa-sort-amount-up" />
                                    <div class="tw-text-sm"> Descending</div>
                                </div>
                            </template>

                        </q-btn-toggle>
                    </td>
                </tr>
                <tr>
                    <td> 
                        <div class="text-primary tw-mr-4 tw-w-9 tw-h-9 tw-inline-flex tw-items-center tw-justify-center tw-font-extrabold tw-rounded-full tw-border-2 tw-border-slate-50">5</div> 
                        <span class="tw-text-base tw-font-extrabold">Operation Type</span>  
                    </td>
                    <td>
                        <q-btn-toggle
                            v-model="prueba"
                            class="my-custom-toggle"
                            no-caps
                            rounded
                            spread
                            size="sm"
                            toggle-color="primary"
                            color="white"
                            unelevated
                            text-color="primary"
                            :options="[
                            { value: 'one', slot: 'one'},
                            { value: 'two', slot: 'two'}
                            ]"
                        >
                            <template v-slot:one>
                                <div class="row items-center no-wrap tw-px-4">
                                    <q-icon left name="fas fa-sort-amount-down" />
                                    <div class="tw-text-sm"> Ascending </div>
                                </div>
                            </template>

                            <template v-slot:two>
                                <div class="row items-center no-wrap tw-px-4">
                                    <q-icon left name="fas fa-sort-amount-up" />
                                    <div class="tw-text-sm"> Descending</div>
                                </div>
                            </template>

                        </q-btn-toggle>
                    </td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            prueba: 'two',
        };
    },
    computed: {
        formFields() {
            return {
                reportsForms: {
                    idColumns: {
                        type: 'toggle',
                        isTranslatable: false,
                        props: {
                            label: 'ID',
                            noCaps: true,
                            rounded: true,
                            unelevated: true,
                            toggleColor: 'primary',
                            color: 'white',
                            textColor: 'primary',
                            options: [
                                {label: 'Ascending', value: '1'},
                                {label: 'Descending', value: '2'}
                            ],
                        },
                    },
                    sort: {
                        type: 'select',
                        isTranslatable: false,
                        props: {
                            options: [
                                {label: 'Ascending', value: '1'},
                                {label: 'Descending', value: '2'}
                            ],
                        },
                    },
                },
            };
        },
    }
}
</script>

<style>
.my-custom-toggle {
    border: 2px solid var(--q-color-primary);
}
.my-custom-toggle .q-btn.q-btn--rounded {
    border-radius: none; 
}
.my-custom-toggle .q-btn-item {
    border-radius: 20px 0 0 20px;
}
.my-custom-toggle .q-btn-item + .q-btn-item {
    border-radius: 0 20px 20px 0;
}
.q-stepper-table td, .q-stepper-table th {
    padding: 0.75rem;
}
</style>