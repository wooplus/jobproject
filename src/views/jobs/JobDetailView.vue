<template>
  <!-- <h1>Job Detail {{id}}</h1>   -->
  <div v-if="job">
    <h1>Job Title - {{job.title}}</h1>
    <h1>Job Detail - {{job.detail}}</h1>
  </div>
</template>

<script>
export default {
  props:['id'],
  data() {
    return {
      job:null
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.job = data;
    })
  }
//   data() {
//     return{
//       props:[]
//     }
//   }
}
</script>

<style>

</style>