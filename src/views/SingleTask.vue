<template>
    <section id="single-task">
        <form action="" @submit.prevent="addTask()">
            <div class="row">
                <div class="col-4">
                    <label for="">Title:</label>
                </div>
                <div class="col-8">
                    <input type="text" v-model="add.TaskTitle">
                </div>
            </div>
            <div class="row">
                <div class="col-4">
                    <label for="">Description</label>
                </div>
                <div class="col-8">
                    <textarea type="message" v-model="add.TaskDescription"></textarea>
                </div>
            </div>
            <div class="row">
                <label for="">Category</label>
                <select name="category" id="category" v-model="add.Category">
                    <option value="work-related">Work-related</option>
                    <option value="shopping">Shopping</option>
                    <option value="family-household">Family and Household</option>
                    <option value="health-fitness">Health and Fitness</option>
                    <option value="social-entertainment">Social and Entertainment</option>
                    <option value="financial-management">Financial Management</option>
                </select>
            </div>
            <div class="row">
                <label>Due Date:</label>
                <input type="date" v-model="add.DueDate"/>
            </div>
            <button type="submit" class="button  mb-4">Add</button>
        </form>
    </section>
</template>
<script>
export default {
    data() {
        return {
            add: {
                TaskTitle: '',
                TaskDescription: '',
                Category: '',
                DueDate: ''
            }
        }
    },
    methods: {
        addTask() {
            this.$store.dispatch('addTask', this.add)
        }
    }
}
</script>
<style>
    
</style>