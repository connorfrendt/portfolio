<template>
    <div id="home-body">
        
        <div id="mypic">
            <img id="my-pic" src="../assets/connor_frendt_square.jpg" width="150px">
        </div>
        
        <div id="asdf">"Sometimes life is like a dark tunnel.  You can't always see the light at the end of the tunnel, but if you just keep moving, you'll come to a better place."</div>

        <div id="footer">
            <div id="footer-links">
                <a href="https://www.linkedin.com/in/connorfrendt/"><img src="../assets/linkedin.png" style="height: 50px" /></a>
                <a href="https://www.github.com/connorfrendt" id="gh-link"><img src="../assets/github.jpg" style="height: 50px" /></a>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>
#home-body {
    display: grid;
    grid-template: repeat(3, 1fr) / 1fr;
}

#mypic {
    background: blue;
}

#footer {
    background: green;
}

#asdf {
    background: red;
}

/* #mypic {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#my-pic {
    border-radius: 500px;
}

#footer {
    bottom: 30px;
    width: 100%;
}

#footer-links {
    display: flex;
    justify-content: center;
}

a {
    padding: 0 5px;
    margin-bottom: 10px;
}

#gh-link {
    border-left: 1px solid black;
} */
</style>