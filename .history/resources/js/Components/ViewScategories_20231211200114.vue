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
                    <tr v-for="cat in categories" :key="cat.id">
                        <td>
                            <img
                                :src="cat.imageCategorie"
                                width="250"
                                height="125"
                            />
                        </td>

                        <td>{{ cat.nomCategorie }}</td>
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
const categories = ref([]);
const isLoading = ref(true);
const getcategories = async () => {
    await axios
        .get("http://localhost:8000/api/scategories")
        .then((res) => {
            categories.value = res.data;
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
