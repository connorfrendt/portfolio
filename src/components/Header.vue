<template>
    <div id="header">
        <div id="header-links">
            <RouterLink to="/" class="router-links">Home</RouterLink>
            <RouterLink to="/resume" class="router-links">Resume</RouterLink>
            <RouterLink to="/projects" class="router-links">Projects</RouterLink>
            <RouterLink to="/aboutme" class="router-links">About Me</RouterLink>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#header-links {
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-family: 'Monda', sans-serif;
}

.router-links {
    width: 100%;
    padding: 10px;
    text-decoration: none;
}

.router-links:hover {
    text-decoration: underline;
}
</style>