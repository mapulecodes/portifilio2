<template>
  <div class="container">
    <div class="row">
        <div class="col">
            <div id="details">
                <h1 class="display-1">Education</h1>
                <p v-if="education">
                    <span>{{ education }}</span>
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
const education =
computed(() => store.state.education);
onMounted(() => {
    store.dispatch('fetchEducation')
})
</script>

<style>
</style>