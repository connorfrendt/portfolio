<template>
    <div id="home-body">
        
        <div id="pic-quote">

            <div id="mypic">
                <img id="my-pic" src="../assets/connor_frendt_square.jpg" width="150px">
            </div>
            
            <div id="quote">
                "Sometimes life is like a dark tunnel.<br />
                You can't always see the light at the end of the tunnel,<br />
                But if you just keep moving, <br />
                You'll come to a better place."
            </div>

        </div>

        <div id="footer">
            <div id="footer-links">
                <a href="https://www.linkedin.com/in/connorfrendt/" id="LI-pic" target="_blank">
                    <img src="../assets/linkedin.png" style="height: 50px" />
                </a>
                <a href="https://www.github.com/connorfrendt" target="_blank">
                    <img src="../assets/github.jpg" style="height: 50px" />
                </a>
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
    display: flex;
    align-items: center;
    text-align: left;
    padding-left: 20px;
    height: 150px;
    font-family: 'Courgette', cursive;
    font-size: 20px;
}

#footer {
    position: absolute;
    text-align: center;
    left: calc(50% - 50px);
    bottom: 0;
}

#LI-pic {
    padding-right: 10px;
}
</style>