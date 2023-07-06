<template>
    <section id="single-task">
        <form action="" @submit.prevent="AddTask">
            <div class="row">
                <div class="col-4">
                    <label for="">Title</label>
                </div>
                <div class="col-8">
                    <input type="text">
                </div>
            </div>
            <div class="row">
                <label for="">Description</label>
                <input type="message">
            </div>
            <div class="row">
                <label for="">Due Date</label>
                <select name="category" id="category">
                    <option value="work-related">Work-related</option>
                    <option value="shopping">Shopping</option>
                    <option value="family-household">Family and Household</option>
                    <option value="health-fitness">Health and Fitness</option>
                    <option value="social-entertainment">Social and Entertainment</option>
                    <option value="financial-management">Financial Management</option>
                </select>
            </div>
            <div class="row">
                <label for="">Pick your color</label>
                <datalist id="colors">
                    <option value="#4169E1">Royal Blue</option>
                    <option value="#DC143C">Crimson</option>
                    <option value="#FF6347">Tomato</option>
                    <option value="#FFE4B5">Mocassin</option>
                    <option value="#228B22">Forest Green</option>
                    <option value="#48D1CC">Medium Turqoise</option>
                    <option value="#663399">Rebecca Purple</option>
                    <option value="#FF1493">Deep Pink</option>
                    <option value="#F5FFFA">Mint Cream</option>
                    <option value="#201D24">Black</option>
                </datalist>
                <input list="colors" type="color" value="#fffff">
            </div>
        </form>
    </section>
</template>
<script>
export default {
    
}
</script>
<style>
    .option1 {
        background-color: #FFB23F;
        width: 30px;
    }
    .option2 {
        background-color: #EE1A1A;
    }
    .option3 {
        background-color: #D01AEE;
    }
    .option4 {
        background-color: #74BB1B;
    }
    
</style>