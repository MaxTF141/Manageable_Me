<template>
    <div id="single-task">
        <div v-if="task">
            <p>{{ task.TaskDescription }}</p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['id'],
    computed: {
        task() {
            return this.$store.state.task;
        }
    },
    mounted() {
        this.$store.dispatch('getTask', this.id)
    }
}
</script>
<style>
    
</style>