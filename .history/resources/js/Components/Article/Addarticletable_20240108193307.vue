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
</div>
<div class="col-md-6 ms-auto">
<label for="Quantité" class="form-label">Qtock</label>

<input type="texte" class="form-control" id="qtestock" v-
model="article.qtestock">

</div>
</div>
<div class="row">
<div class="col-md-6">.
<label for="prix" class="form-label">Prix</label>
<input type="text" class="form-control" id="prix" v-model="article.prix">

</div>
<div class="col-md-6 ms-auto">
<label for="scategorie" class="form-label">Sous Catégorie</label>
<select class="form-control" v-model="article.scategorieID">
<option v-for="sc in Scategories" :key="sc.id"
:value=sc.id>{{sc.nomscategorie}} </option>
</select>

</div>
</div>
<div class="row">
<file-pond
name="test"
ref="pond"
class-name="my-pond"
label-idle="Drop files here..."
allow-multiple="false"
accepted-file-types="image/jpeg, image/png"
v-bind:files="myFiles"
:server="serverOptions()"
/>
</div>
<br/>