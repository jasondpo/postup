<?php include "includes/header.php"; ?>

<body id="homepage">
    
    <svg id="fader"></svg>

    <a href="index.php"><div id="logo"></div></a>

    <div id="registraion"><span id="signUpBtn">Sign up</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span id="logInBtn">Log in</span>&nbsp;&nbsp;•&nbsp;&nbsp;<span id="chooseBtn">Or choose alias/theme</span></div>

    <div id="home-container">

        <div class="centerItemsVertically">
            <div class="selection-container">
                <select name="profiles" id="profiles" class="custom-select">
                    <option value="person_icon" selected>Select Alias</option>
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
                <select name="theme" id="theme" class="custom-select">
                    <option value="picture_icon" selected>Select Theme</option>
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

    <div id="rectangleUnderLogin" ></div>

    <a href="#backToTop"><div id="aboutLink">About PostUp</div></a>


    <!-- <div id="about">&#169; 2021 Jason D Portfolio&nbsp;&nbsp;</div> -->

    <div id="wisdomBox" onclick="randomQuote()"><strong><span id="greet"></span> </strong> <span id="quote"></span> </div>
    <div id="logoBkGContainer2"></div>
    <div id="logoBkGContainer1"></div>

    <!------------------------ About Section ------------------------>

    <div id="aboutSection">
        <div id="aboutWrapper" >
            <div>
                <h3>About PostUp</h3>
                <h1 class="hideme">Share your success, passion and insight</h1>
                <p  class="hideme">PostUp is the Instagramification of Linkedin. Its mission is to provide an environment for <span>professionals</span> and <span>aficionados</span> to proudly display what they do best as well as be a platform that promotes professional discourse among its community.</p>   

                <p  class="hideme">Members are encouraged to post photos of their main <span>occupation, hobby,</span> favorite <span>pastime</span> and anything else they feel both passionate about and possess in-depth knowledge of. There is also the option to share bio and curriculum vitae information. </p> 

                <p  class="hideme">Users are also expected to <span>schedule</span> chats and video conferences with willing participants who have knowledge of a particular subject that others find interesting. This is PostUp’s way of spreading substantive, insightful and useful information throughout its user base. 👍🏽</p>
            </div> 
        </div>
        <a href="#home-container"><div id="backToTop">Back to Top</div></a>

        <div id="parallaxFront" class="scroll" data-rate="-.3"></div>
        <div id="parallaxBack" class="scroll" data-rate="-.07"></div>
        
    </div>


    <script src='assets/js/parallax.js?v<?php echo(rand(0,1000));?>'></script>
    <script src='assets/js/login.js?v<?php echo(rand(0,1000));?>'></script>
    <script src='assets/js/page_transition.js?v<?php echo(rand(0,1000));?>'></script>
</body>
</html>