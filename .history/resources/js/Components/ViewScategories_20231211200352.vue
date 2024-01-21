<template>
    <div>
        <div v-if="isLoading">
            <h2>Loading ....</h2>
        </div>
        <div v-else class="py-6">
            <table class="table table-striped shadow">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Nom</th>
                        <th scope="col">View</th>
                        <th scope="col">Modifier</th>
                        <th scope="col">Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="scat in scategories" :key="scat.id">
                        <td>
                            <img
                                :src="scat.imagescategorie"
                                width="250"
                                height="125"
                            />
                        </td>

                        <td>{{ scat.nomCategorie }}</td>
                        <td>
                            <button class="btn btn-outline-success mx-2">
                                <i class="fa-solid fa-pen-to-square"></i>
                                View
                            </button>
                        </td>
                        <td>
                            <button class="btn btn-outline-primary mx-2">
                                <i class="fa-solid fa-pen-to-square"></i>
                                Edit
                            </button>
                        </td>
                        <td>
                            <button
                                class="btn btn-outline-danger mx-2"
                                @click="deletearticle(cat.id)"
                            >
                                <i class="fa-solid fa-trash-can"></i>
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
const scategories = ref([]);
const isLoading = ref(true);
const getscategories = async () => {
    await axios
        .get("http://localhost:8000/api/scategories")
        .then((res) => {
            getscategories.value = res.data;
            isLoading.value = false;
        })
        .catch((error) => {
            console.log(error);
        });
};
onMounted(() => {
    getscategories();
});
</script>

<style scoped></style>
