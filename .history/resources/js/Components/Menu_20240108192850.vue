<template>
<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">E-commerce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">

<router-link class="nav-link active" to="/articletable">List Articles
</router-link>
</li>

        <li class="nav-item">
         <p class="nav-link" ><router-link to="/listarticles">Artciles</router-link></p>
        </li>
        <li class="nav-item">
            <p class="nav-link" ><router-link to="/listcategories">Categories</router-link></p>
        </li>
        <li class="nav-item">
            <p class="nav-link" ><router-link to="/listscategories">Scategories</router-link></p>
        </li>
       
        <li class="nav-item">     
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>