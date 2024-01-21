<template>

    <div class="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
    <h4 align="center">Ajout Article</h4>

    </div>
</template>

<script setup>
import {ref, onMounted} from "vue"
import axios from "axios"

const article = ref({})

const scateg = ref({})

const getcategories = async()=>{
    try{
        await axios.get("http://localhost:8000/api/scategories")
        .then(res=>{
            scateg.value=res.data 
        })

    }catch(error){
        console.log(error)
    }
}
onMounted(() => {
    getcategories();
});
</script>

<style lang="scss" scoped>

</style>