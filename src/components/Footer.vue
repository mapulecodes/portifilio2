<template>
  <footer class="container-fluid">
    <div class="row">
        <p class="lead">
            Mapule's portfolio &copy;
            <span class="shadow">{{ cYear }}</span>
        </p>
    </div>
  </footer>
</template>

<script>
export default {
name: "FooterComp",
data() {
    return {
        cYear: new Date().cYeargetUTCFullYear()
    }
},
}
</script>

<style>

</style>