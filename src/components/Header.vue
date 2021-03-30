<template>
    <div id="header">
        <RouterLink to="/" style="text-decoration: none">Home</RouterLink>
        <RouterLink to="/resume">Resume</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/aboutme">About Me</RouterLink>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#header {
    display: flex;
    justify-content: space-around;
}
</style>