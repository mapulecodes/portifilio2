<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <div id="details">
                <h1 class="display-1">Experiences</h1>
                <p v-if="experiences">
                    <span>Hey there</span>
                    <span>{{ experiences }}</span>
                </p>
                <Spinner v-else/>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import Spinner from './Spinner.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const experiences =
computed(() => store.state.experiences);
onMounted(() => {
    store.dispatch('fetchExperiences')
})
</script>

<style>
</style>