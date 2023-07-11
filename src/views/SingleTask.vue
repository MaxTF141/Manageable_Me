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
                <!-- <datalist id="colors">
                    <option >{{ category.CategoryColor }}</option>
                </datalist>
                <input list="colors" type="color" v-model="add.CategoryColor" /> -->
                <select name="category" id="category" v-model="add.CategoryID">
                    <option v-for="category in categories" :key="category.CategoryID" :value="category.CategoryID">{{ category.CategoryName }}</option>
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
                TaskDescription: '' ,  
                CategoryID: '',
                DueDate: '',
            }
        }
    },
    computed: {
        categories() {
            return this.$store.state.categories;
        }
    },
    methods: {
        async addTask() {
            const selectedOption = document.querySelector(`option[value="${this.selectedColor}"]`);
            if (selectedOption) {
                this.add.CategoryID = selectedOption.getAttribute('data-id');
                this.add.Category = selectedOption.textContent;
            }
            await this.$store.dispatch('addTask', this.add);
            console.log(this.add);
        },  
        handleColorSelection(event) {
            this.selectedColor = event.target.value;
            const selectedOption = event.target.querySelector(`option[value="${this.selectedColor}"]`);
            if (selectedOption) {
                const selectedId = selectedOption.getAttribute('data-id');
                console.log('Selected color ID:', selectedId);
            }
        },
        CategoryID(task) {
            const category = this.categories.find(category => category.CategoryID === task.CategoryID);
            return category ? category.CategoryID : '';
        }

    },
    mounted() {
        this.$store.dispatch('getCategories', this.add)
    }
}
</script>
<style>
    #single-task {
        min-height: 100vh;
    }
</style>