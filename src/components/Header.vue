<template>
    <div id="header">
        <div id="header-links">
            <RouterLink to="/" class="router-links" style="text-decoration: none">Home</RouterLink>
            <RouterLink to="/resume" class="router-links" style="text-decoration: none">Resume</RouterLink>
            <RouterLink to="/projects" class="router-links" style="text-decoration: none">Projects</RouterLink>
            <RouterLink to="/aboutme" class="router-links" style="text-decoration: none">About Me</RouterLink>
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
}

.router-links:hover {
    background: #3B9CB8;
    transition: 0.5s;
}
</style>