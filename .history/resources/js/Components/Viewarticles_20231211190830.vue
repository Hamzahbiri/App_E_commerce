<template>
    <div >
    <div v-if="isLoading">
    <h2> Loading .... </h2>
    </div>
    <div v-else class="py-6">
    <table class="table table-striped shadow">
    <thead>
    <tr>
    <th scope="col">Image</th>
    <th scope="col">Référence</th>
    <th scope="col">Désignation</th>
    <th scope="col">Marque</th>
    <th scope="col">Quantité Stock</th>
    <th scope="col">Prix</th>
    <th scope="col">View</th>
    <th scope="col">Modifier</th>
    <th scope="col">Supprimer</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="art in articles" :key="art.id">

<script setup>

</script>

<style scoped>

</style>