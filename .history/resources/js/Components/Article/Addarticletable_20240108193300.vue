<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container-fluid">

<button type="button" class="btn btn-warning rounded-
circle" @click="visible = true">

<span style="color: rgb(43, 27, 27)">
<i class="fa-solid fa-square-plus"> </i>
</span>
New
</button>
</div>
</nav>
<form >
<div class="card flex justify-content-center">
<Dialog
v-model:visible="visible"
>

<div class="row">
<div class="col-md-6">.
<label for="reference" class="form-label">Référence</label>

<input type="text" class="form-control" id="reference" v-
model="article.reference">

</div>
<div class="col-md-6 ms-auto">
<label for="designation" class="form-label">Désignation</label>

<input type="texte" class="form-control" id="designation" v-
model="article.designation">

</div>
</div>

<div class="row">
<div class="col-md-6">.
<label for="marque" class="form-label">Marque</label>

<input type="text" class="form-control" id="marque" v-
model="article.marque">
