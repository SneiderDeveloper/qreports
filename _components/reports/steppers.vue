
<template>
    <div class="q-pa-md">
        <q-stepper v-model="step" ref="stepper" color="primary" animated>
            <q-step
                v-for="section in sections"
                :key="section.id"
                :name="section.id" 
                :prefix="section.prefix"
                :title="section.title"
                :done="section.done"
                >
                <component :is="section.component" />
            </q-step>

            <template v-slot:navigation>
                <q-stepper-navigation>
                <q-btn @click="$refs.stepper.next()" :label="step === 4 ? 'Finish' : 'Continue'" />
                <q-btn v-if="step > 1" flat  @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                </q-stepper-navigation>
            </template>
        </q-stepper>
    </div>
</template>

<script>
import modelSections from './sections/Model/sections.js';
export default {
    data() {
        return {
            step: 1,
            sections: modelSections,
        }
    }
}
</script>