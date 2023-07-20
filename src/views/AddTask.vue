<template>
    <section id="single-task" class="p-2">
        <router-link to="/" class="go-back pt-2 ps-2">
            <Icon icon="fluent-mdl2:back" color="5B5B5B" width="28" />
        </router-link>
        <div class="task-box">
        <h2>Create Task</h2>
            <form action="" @submit.prevent="addTask()">
                <div class="task-input">
                    <input type="text" name="title" required="" v-model="add.TaskTitle">
                    <label>Title</label>
                </div>
                <div class="task-input">
                    <textarea name="description" rows="4" required="" v-model="add.TaskDescription"></textarea>
                    <label>Description</label>
                </div>
                <div class="task-input">
                    <input type="date" name="due_date" required="" v-model="add.DueDate" placeholder="">
                    <label>Due Date</label>
                </div>
                <div class="task-input">
                    <select name="category" id="category" v-model="add.CategoryID">
                        <option v-for="category in categories" :key="category.CategoryID" :value="category.CategoryID">{{ category.CategoryName }}</option>
                    </select>
                    <label for="category">Category</label>
                </div>
                <button class="create-task mx-auto">Create Task</button>
            </form>
        </div>
    </section>
</template>
<script>

import { Icon } from '@iconify/vue';
export default {
    components: {
        Icon
    },
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
<style scoped>
    #single-task {
        min-height: 100vh;
    }

                                     /*  */
                                    /*  */
.task-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  /* background: rgba(0, 0, 0, .5); */
  box-sizing: border-box;
  /* box-shadow: 0 15px 25px rgba(0, 0, 0, .6); */
  border-radius: 10px;
}

.task-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #000;
  text-align: center;
}

.task-box .task-input {
  position: relative;
}

.task-box .task-input input,
.task-box .task-input textarea,
.task-box .task-input select {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #000;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
  background: transparent;
  appearance: none; /* Remove default styles on some browsers */
}

.task-box .task-input textarea {
  resize: vertical; /* Allow vertical resizing of the textarea */
}

.task-box .task-input label {
  position: absolute;
  top: 10px; /* Adjust the top position as needed */
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #000;
  pointer-events: none;
  transition: .5s;
}

.task-box .task-input input:focus ~ label,
.task-box .task-input textarea:focus ~ label,
.task-box .task-input select:focus ~ label,
.task-box .task-input input:valid ~ label,
.task-box .task-input textarea:valid ~ label,
.task-box .task-input select:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.task-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.task-box a:hover {
  background: #03e9f4;
  color: #000;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4,
              0 0 25px #03e9f4,
              0 0 50px #03e9f4,
              0 0 100px #03e9f4;
}

.task-box a span {
  position: absolute;
  display: block;
}

.task-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
}

.task-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
}

.task-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
}

.task-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
}

button{
    font-size: 1rem;
    font-family: 'Comfortaa', cursive;
    padding: 1rem;
    border: 0px;
    border-radius: 1rem;
}
</style>