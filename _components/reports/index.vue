<template>
    <div>
        <folder />
        <steppers />
    </div>
</template>

<script>
import steppers from './steppers';
import folder from './folder/index.vue';
export default {
    components: {
       steppers,
       folder,
    },
    data() {
        return {
        };
    }
}
</script>

<style>

</style>