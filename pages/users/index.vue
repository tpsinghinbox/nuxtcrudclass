<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h1>Articles</h1>
      <nuxt-link to="/articles/add" class="btn btn-success">Add New</nuxt-link>
    </div>
    <hr>

    <div class="alert alert-success"
      v-if="$route.params.created=='yes'">Record added successfully</div>
    <div class="alert alert-success"
      v-if="$route.params.deleted=='yes'">Record deleted successfully</div>

    <div class="list-group">
      {{ users }} 
    </div>
  </div>
</template>

<script>
// export default{
//     data() {
//         return{
//             users:["sanjay", "ajay"]
//         }
//     },
//     async getuser(){
//         const
//     }
// }
export default {
 data() {
    return {
      messages: {
        'notfound': 'Can not found an article',
        'deleteerror': 'An error occurred while deleting article'
      }
    }
  },
  async asyncData({$axios}) {
    const {data} = await $axios.get(`/api/users`)
    return { users: data }
    
  },
 // this is working
//   async asyncData(context){
//     const {data} = await context.$axios.get('/api/users')
//     return {
//       users : data
//     }
//   },
}
</script>
