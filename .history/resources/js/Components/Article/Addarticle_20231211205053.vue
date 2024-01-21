<template>
    <div>

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