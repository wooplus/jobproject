<template>
    <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
   
    <router-link :to="{name:'jobDetail', params:{id:job.id}}">
        <h1>{{job.title}}</h1>
    </router-link>
  </div>

</template>

<script>
export default {
    data() {
        return {
            jobs: [
        
            ]
        }
    },
    mounted() {
        fetch("http://localhost:3000/jobs")
        .then((response) => {
            return response.json();
        })
        .then((datas) => {
            console.log(datas)
            this.jobs = datas;

        })
        .catch((err) => {
            console.log(err.message());
        })
    }
}
</script>

<style>
    .job{
        color: crimson;
    }
</style>