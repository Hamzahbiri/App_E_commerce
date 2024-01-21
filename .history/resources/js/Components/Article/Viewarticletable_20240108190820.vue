<template>
    <Addarticletable/>
    
    <div class="card">
    <DataTable :value="articles" stripedRows paginator showGridlines
    
    :rows="8" dataKey="id" :loading="isLoading">
    
    <Column header="Image">
    <template #body="{ data }" >
    <img :src="data.imageart"
    :alt=data.reference class="shadow-4" width="65"/>
    
    </template>
    </Column>
    <Column field="reference" header="Référence" ></Column>