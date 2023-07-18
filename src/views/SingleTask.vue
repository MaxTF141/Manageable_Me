<template>
    <div id="single-task">
        <div v-if="task" class="p-2">
            <div class="top-container d-flex justify-content-between">
                <router-link to="/" class="go-back pt-2 ps-2">
                    <Icon icon="fluent-mdl2:back" color="5B5B5B" width="28" />
                </router-link>
                <div class="edit-icon">
                    <Icon icon="tabler:edit" :color="task.CategoryColor" width="28" />
                </div>
            </div>
            <div class="category py-4">
                <h5 class="category-bullet" :style="`background-color: ${ task.CategoryColor }`">{{ task.CategoryName }}</h5>
            </div>
            <div class="task-info py-3">
                <h2>{{ task.TaskTitle }}</h2>
                <p class="description">{{ task.TaskDescription }}</p>
            </div>
            <div class="more-details py-3">
                <div class="row">
                    <div class="col-4"><h4>Due Date</h4></div>
                    <div class="col-8"><h4>{{ formatDate(task.DueDate) }}</h4></div>
                </div>
                <div class="row align-items-end">
                    <div class="col-4"><h4>Priority</h4></div>
                    <div class="col-8"><h5 class="priority-bullet">{{ task.Priority }}</h5></div>
                </div>
            </div>
        <hr class="hr-line mx-auto">
        </div>
        <div class="subtasks p-2">
            <h2>Subtasks</h2>
            <div v-if="subtasks && subtasks.length" class="subtask-container">
                <div v-for="subtask in subtasks" :key="subtask.SubtaskID" class="row align-items-start">
                    <div @click="toggle(subtask)" class="col-1">
                        <Icon :icon="subtask.isDone === 1 ? 'mdi:checkbox-indeterminate' : 'material-symbols:indeterminate-check-box-outline' " color="#4d8ab2" width="30" />
                    </div>
                    <div class="col-11 ps-3"><p :style="textMuted(subtask)">{{ subtask.SubDescription }}</p></div>
                </div>
            </div>
            <div v-else class="no-subtasks">
                <p>No Subtasks</p>
            </div>
        </div>
    </div>
</template>
<script>
import { Icon } from '@iconify/vue';

export default {
    data() {
        return {
            isDoneToggle: true,
        }
    },
    components: {
      Icon,
    },
    props: ['id'],
    computed: {
        task() {
            console.log(this.id);
            return this.$store.state.task;
        },
        subtasks() {
            console.log(this.$store.state.subtasks);
            return this.$store.state.subtasks;
        }
    },
    mounted() {
        this.$store.dispatch('getTask', this.id);
        this.$store.dispatch('getSubtasks', this.id)
    },
    methods: {
        formatDate(dateStr) {
        const date = new Date(dateStr);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleString('en-UK', options);
        },
        toggle(subtask) {
            const updateSubtask = {
                ...subtask,           
                isDone: subtask.isDone === 1 ? 0 : 1,
            };
            this.$store.dispatch('updateSubtask', {
                subtaskID: subtask.SubtaskID, 
                payload: updateSubtask,
                taskID: this.id,
            });
            subtask.isDone = subtask.isDone === 1 ? 0 : 1
        },
        textMuted(subtask) {
          return subtask.isDone === 1 ? 'color: #999999;': 'color: #000;' ; 
        }
    },
} 
</script>
<style scoped>
    .category-bullet {
        padding: 4px;
        display: inline;
        border-radius: 0.3rem;
        color: #fff;
        background-color: #4d8ab2;
        box-shadow: -0.2rem 0.2rem 0.6rem 0.2rem #4d8ab231;
    }

    p {
        font-family: 'Comfortaa', cursive;
        font-size: 0.9rem;
        font-weight: 300;
    }

    .description {
        font-style: italic;
    }
    .priority-bullet {
        padding: 4px;
        display: inline;
        border-radius: 0.6rem;
        background-color: #4D8AB2;
        color: #fff;
        background-color: #4d8ab2;
        box-shadow: -0.2rem 0.2rem 0.6rem 0.2rem #4d8ab231;
    }

    .col-4 {
        color: #5B5B5B;
    }

    h2{
        font-weight: 400;
    }

    h4 {
        margin: 0px;
    }

    .hr-line {
        width: 250px;
        color: #4d8ab2;
    }
</style>