<template>
    <div id="app">
    </div>
</template>

<script>
import Axios from "axios"

export default {
    name: "App",
    created() {
        Axios.get("/api/getTeamData").then(res => {
            console.log(res)
        })
    },
    methods: {}
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
