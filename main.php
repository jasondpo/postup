<?php include "includes/header.php"; ?>

<script>
 if(localStorage.profileName=="person_icon" || localStorage.themeName =="picture_icon" || localStorage.profileName==null || localStorage.themeName ==null || localStorage.profileName=="" || localStorage.themeName ==""){
    window.location = 'index.php';
 }
</script>

<body>

    <svg id="fader"></svg>

    <div id="overlayOptions">
        <div id="triangle-right"></div>
    </div>

    <div id="infoBox">
        <div class="nameHolder"></div>
        <div class="extend"></div>
    </div>
    
    <div id="rightRail">
        <div id="sectionHeaderAlbums" class="sectionHeaderClass">Albums</div>
        <div id="sectionHeaderContacts" class="sectionHeaderClass">Contacts</div>
    </div>
        <div id="chooseAlbumBox" class="railItemsClass infoHere">
            <span class="content">
                <h3>6 albums</h3>
                <ul>
                <li><input type="radio" id="AfricanAlbum" name="albums" value="african"><label for="AfricanAlbum"> African Center</label></li>
                <li><input type="radio" id="JccoAlbum" name="albums" value="jcco"><label for="JccoAlbum"> JCCO</label></li>
                <li><input type="radio" id="BreonnaAlbum" name="albums" value="breonna"><label for="BreonnaAlbum"> Breonna Taylor</label></li>                
                <li><input type="radio" id="PigsAlbum" name="albums" value="pigs"><label for="PigsAlbum"> Pretty Pigs</label></li>
                <li><input type="radio" id="BackyardsAlbum" name="albums" value="backyards"><label for="BackyardsAlbum"> Backyards</label></li>
                <li><input type="radio" id="BoudoirAlbum" name="albums" value="boudoir"><label for="BoudoirAlbum"> Boudoir</label></li>                
                </ul>
            </span>
        </div>
        <div id="uploadAlbumBox" class="railItemsClass infoHere">
            <span class="content">
                    <h3><i class="fas fa-exclamation-circle"></i> Uploading images and video</h3>
                    <h21><u>Images</u> must be at least 1200 by 675px (16:9 ratio) and 72 to 96 dpi for best results. <u>Videos</u> must be MP4 format and no larger than 24MB.</h21>
            </span>
        </div>

    <audio id="chime" style="display: hidden;">
        <source src="assets/sound/alert.mp3" type="audio/mpeg">
    </audio>

    <a href="index.php"><div id="logo"></div></a>

    <div id="profileBtn" class="infoHere">
        <div></div>
        <div id="logOutBtn"><i class="fas fa-times"></i></div>
    </div>

 <!-- Message Container STARTS -->

    <div id="mydiv" class="messageContainer">
        <div id="greyHeader"></div>
        <div id="senderProfilePic"></div>
        <div id="mydivheader"></div>
        <div id="messageBox"></div>
        <div id="senderProfileName"></div>
        <div id="senderProfileTheme"></div>
        <div id="video"></div>
        <div id="messageContainerClose"></div>
        <div id="closeChatAlt" class="altClass">Close chat</div>
        <div id="playThemeAlt" class="altClass">View albums</div>
        <div id="headerAlt" class="altClass">Reposition chat</div>
        <div id="videoAlt" class="altClass">Video Conference</div>


       <input id="namebox" type="text" placeholder="Name"
            onfocus="if(this.placeholder=='Name')[this.placeholder='']"
            onblur="if(this.placeholder=='')[this.placeholder='Name']" style="display:none">

        <div id="convoBoxWrapper">
            <div id="convoBox"></div>
        </div>            

        <textarea id="postBox" type="text" placeholder="What's on your mind?" onfocus="if(this.placeholder=='What\'s on your mind?')[this.placeholder='']" onblur="if(this.placeholder=='')[this.placeholder='What\'s on your mind?']"></textarea>
       
        <br>

        <button id="postBtn">Post</button>
        <button id="emojiBtn"></button>
        <br><br>
        <button id="update" style="display:none">UPDATE</button>
        <button id="delete" style="display:none">DELETE</button>

        <div id="emojiBar">
            <ul id="emojiList">
                <li class="emoji">😃</li>
                <li class="emoji">😉</li>                
                <li class="emoji">😜</li>
                <li class="emoji">🤔</li>
                <li class="emoji">🤮</li>
                <li class="emoji">😮</li>
                <li class="emoji">😡</li>
                <li class="emoji">😒</li>
                <li class="emoji">❤️</li>
                <li class="emoji">🔥</li>
                <li class="emoji">👍</li>
                <li class="emoji">✌️</li>
                <li class="emoji">👎</li>
                <li class="emoji">✋</li>
                <li class="emoji">👊</li>
                <li class="emoji">✊</li>
                <li class="emoji">🍑</li>
                <li class="emoji">🥜</li>
                <li class="emoji">🍆</li>
                <li class="emoji">🙈</li>
                <li class="emoji">🙉</li>
                <li class="emoji">🙊</li>
                <li class="emoji">🐖</li>
                <li class="emoji">🐴</li>
                <li class="emoji">💡</li>
                <li class="emoji">🛌</li>
                <li class="emoji">📺</li>
                <li class="emoji">🧨</li>
                <li class="emoji">🎉</li>
                <li class="emoji">💯</li>
                <li class="emoji">❓</li>
                <li class="emoji">❌</li>
            </ul>
        </div>
        <div id="videoConference">
            <div style='position:relative;bottom:0px;right:0px;z-index:999;background:transparent'>    <iframe id='videoFrame' src=''            style='display:block;border:1px solid #eee;border-radius:8px;box-shadow:2px 2px rgba(0,0,0,0.2);'            width=313 height=476 frameBorder='0'            allow='autoplay;encrypted-media;camera;microphone'            allowFullScreen></iframe>    <div id='frameBoxHandler'         style='display:flex;box-shadow: 2px 2px rgba(0,0,0,0.2);margin-top:10px;margin-left:auto;width:40px;height:40px;border-radius:8px;background:#fff;color:#ed2a67;align-items:center;justify-content:center;'>        X    </div></div><script>var bObj = document.getElementById('frameBoxHandler');bObj.onclick = function() {    if (document.getElementById('videoFrame').style.display === 'block') {        document.getElementById('videoFrame').style.display = 'none';        document.getElementById('frameBoxHandler').innerHTML = 'Call';        document.getElementById('frameBoxHandler').style.background = '#ed2a67';        document.getElementById('frameBoxHandler').style.color = '#fff';    } else {        document.getElementById('videoFrame').style.display = 'block';        document.getElementById('frameBoxHandler').innerHTML = 'X';        document.getElementById('frameBoxHandler').style.background = '#fff';        document.getElementById('frameBoxHandler').style.color = '#ed2a67';    }}; // Feel free to add any script as your needs to make your call more powerful, like sending a notifying email when the call is initiated every time.</script>
        </div>
    </div>

<!-- Message Container ENDS -->

    <div id="lines_overlay"></div>
    <div id="slideshow">
        <div id="slideshowFreezeFrame"></div>
        <div class="imgHolder pic1"></div>
        <div class="imgHolder pic2"></div>
        <div class="imgHolder pic3"></div>
        <div class="imgHolder pic4"></div>
        <div class="imgHolder pic5"></div>
        <div class="imgHolder pic6"></div>
        <div class="imgHolder pic7"></div>
        <div class="imgHolder pic8"></div>
    </div>

    <div id="slideShowNavContainer">
        <i id="navDot1" class="fas fa-circle"></i>
        <i id="navDot2" class="fas fa-circle"></i>
        <i id="navDot3" class="fas fa-circle"></i>
        <i id="navDot4" class="fas fa-circle"></i>
        <i id="navDot5" class="fas fa-circle"></i>
        <i id="navDot6" class="fas fa-circle"></i>
        <i id="navDot7" class="fas fa-circle"></i>
        <i id="navDot8" class="fas fa-circle"></i>
        <span>Restart</span>
    </div>
    
    <div class="startChatBottomBtn infoHere">
        <span>
            <div id="startChatWrapper">
                <div id="startChatProfile"></div>
                <div id="startChatProfileName"></div>
                <div id="startChatProfileOccupation">Farmer, Polster, Banker</div>
                <div class="startChatThemeWrapper">
                    <div class="startChatPicBoxContainer">
                        <div class="startChatPicBox african"></div>
                            <ul>
                            <li class="albumName">Name of album goes here goes here</li>
                            <li class="albumSubject">Polster</li>
                            <li class="albumStats"><i class="fas fa-heart"></i>15&nbsp;&nbsp;&nbsp;<i class="fas fa-eye"></i> 27</li>
                            </ul>
                    </div>
                    <div class="startChatPicBoxContainer">
                        <div class="startChatPicBox pigs"></div>
                        <ul>
                            <li class="albumName">Name of album goes</li>
                            <li class="albumSubject">Farmer</li>
                            <li class="albumStats"><i class="fas fa-heart"></i>14&nbsp;&nbsp;&nbsp;<i class="fas fa-eye"></i> 22</li>
                        </ul>
                    </div>
                    <div id="seeMoreGallery"><i class="fas fa-ellipsis-h"></i>&nbsp;&nbsp;See <span></span>'s Gallery</div> 
                </div>
            </div>
        </span>
    </div>

    <div class="startChatBottomActivityBtn"></div>

    <script type="module" src="assets/js/slideshow.js"></script>
    <script src="assets/js/draggable.js"></script>
    <script src="assets/js/chatBox.js"></script>
    <script src='assets/js/page_transition.js'></script>
    <script type="module" src='assets/js/main.js'> </script>

    <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-database.js"></script>
    <script src="assets/js/firebase.js"></script>
    <script src="assets/js/custom_dropDowns.js"></script>

</body>

</html>