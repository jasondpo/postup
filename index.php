<?php include "includes/header.php"; ?>

<body id="homepage">
    
    <svg id="fader"></svg>

    <a href="index.php"><div id="logo"></div></a>

    <div id="registraion"><span id="signUpBtn">Sign up</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span id="logInBtn">Log in</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span id="chooseBtn">Or choose alias/theme</span></div>

    <div id="home-container">

        <div class="centerItemsVertically">
            <div class="selection-container">
                <h10>Choose an alias</h10>
                <select name="profiles" id="profiles" class="custom-select">
                    <option value="person_icon" selected>Select</option>
                    <option value="jason">J-Boi</option>
                    <option value="riri">RiRi</option>
                    <option value="barack">Barack</option>
                    <option value="michelle">Michelle</option>
                    <option value="rihanna">Rihanna</option>
                    <option value="omar">Omar</option>
                    <option value="tiger">Tiger</option>
                    <option value="dog">Dog</option>
                </select>
                <div id="profileSelectedBox" class="selectedItemBox"></div>
            </div>
        
            <div class="selection-container">
                <h10>Choose a theme</h10>
                <select name="theme" id="theme" class="custom-select">
                    <option value="picture_icon" selected>Select</option>
                    <option value="African">African Center</option>
                    <option value="JCCO">JCCO</option>
                    <option value="Breonna">Breonna Taylor</option>
                    <option value="Pigs">Pretty Pigs</option>
                    <option value="Backyards">Backyards</option>
                    <option value="Boudoir">Boudoir</option>
                </select>
                <div id="themeSelectedBox" class="selectedItemBox"></div>
            </div>
            
            <a href="main.php" id="enterBtnLink"><div id="enterBtn"><h11><i class="fas fa-lock"></i> Locked</h11></div></a>
            
        </div>

    </div>

    <div id="rectangleUnderLogin"></div>

    <div id="about">&#169; 2004-2021 Jason D Portfolio</span></div>

    <div id="wisdomBox" onclick="randomQuote()"><strong><span id="greet"></span> </strong> <span id="quote"></span> </div>
    <div id="logoBkGContainer2"></div>
    <div id="logoBkGContainer1"></div>


    <script src='assets/js/login.js?v<?php echo(rand(0,1000));?>'></script>
    <script src='assets/js/page_transition.js?v<?php echo(rand(0,1000));?>'></script>
</body>
</html>