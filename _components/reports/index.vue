<template>
    <div>
        <mainComponent />
         <steppers />
    </div>
</template>

<script>
import steppers from './steppers';
import mainComponent from './main';
export default {
    components: {
       steppers,
       mainComponent,
    },
    data() {
        return {
        };
    }
}
</script>

<style>

</style>