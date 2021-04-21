<template>
    <div id="home-body">
        
        <div id="pic-quote">

            <div id="mypic">
                <img id="my-pic" src="../assets/connor_frendt_square.jpg" width="150px">
            </div>
            
            <div id="quote">
                "Sometimes life is like a dark tunnel.<br />
                You can't always see the light at the end of the tunnel,<br />
                but if you just keep moving, <br />
                you'll come to a better place."
            </div>

        </div>

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
    grid-template: repeat(2, 1fr) / 1fr;
    height: calc(100vh - 38px);
}

#pic-quote {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: end;
}

#mypic {
    text-align: right;
    padding-right: 20px;
}

#my-pic {
    border-radius: 200px;
}

#quote {
    text-align: left;
    padding-left: 20px;
    font-family: 'Shadows Into Light', cursive;
    
}

#footer {
    text-align: center;
}

</style>