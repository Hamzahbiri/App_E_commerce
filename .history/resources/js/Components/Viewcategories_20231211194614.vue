<template>
    <div>

    </div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import axios from 'axios';
const articles=ref([])
const isLoading=ref(true)
const getarticles=async()=>{
await axios.get("http://localhost:8000/api/categories")
.then(res=>{
articles.value=res.data 
isLoading.value=false

})
.catch(error=>{
console.log(error)
})
}
onMounted(() => {
getarticles();
});
const deletearticle=async(id)=>{
try {await axios.delete(`http://localhost:8000/api/categories/${id}`)

getarticles()
} catch (error) {
console.log(error)
}
}

</script>


<style  scoped>

</style>