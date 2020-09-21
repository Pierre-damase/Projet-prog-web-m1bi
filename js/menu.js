function menu(){
    var element = document.getElementById("navbar");
    var value =
        '<ul class="menu_list" id="menu_list"> \
              <li> \
                  <a class="menu_name" id="accueil" href="./Accueil.html">Accueil</a> \
                 <div class="dropdown-responsive"></div> \
              </li> \
              <li class="dropdown"> \
                  <a href="#" class="dropbtn" onclick="return false;">France <i class="fas fa-caret-down" aria-hidden="true"></i></a> \
                  <div class="dropdown-content"> \
                      <a class="menu_name" id="paris" href="./Paris.html" onmouseover="menuHover(this)" onmouseleave="menuLeave(this)">Paris</a> \
                      <a class="menu_name" id="bretagne" href="./Bretagne.html" onmouseover="menuHover(this)" onmouseleave="menuLeave(this)">Bretagne</a> \
                  </div> \
              </li> \
              <li class="dropdown"> \
                  <a href="#" class="dropbtn" onclick="return false;">Italie <i class="fas fa-caret-down"></i></a> \
                  <div class="dropdown-content"> \
                      <a class="menu_name" id="rome" href="./Rome.html" onmouseover="menuHover(this)" onmouseleave="menuLeave(this)">Rome</a> \
                  </div> \
              </li> \
              <li class="dropdown"> \
                  <a href="#" class="dropbtn" onclick="return false;">Allemagne <i class="fas fa-caret-down" aria-hidden="true"></i></a> \
                  <div class="dropdown-content"> \
                      <a class="menu_name" id="berlin" href="./Berlin.html" onmouseover="menuHover(this)" onmouseleave="menuLeave(this)">Berlin</a> \
                  </div> \
              </li> \
              <li class="dropdown"> \
                  <a href="#" class="dropbtn" onclick="return false;">Auteur <i class="fas fa-caret-down" aria-hidden="true"></i></a> \
                  <div class="dropdown-content"> \
                      <a class="menu_name" id="cv - gwendolyn" href="./CV_gwendolyn.html" onmouseover="menuHover(this)" onmouseleave="menuLeave(this)">Gwendolyn</a> \
                      <a class="menu_name" id="cv - pierre" href="./CV_pierre.html" onmouseover="menuHover(this)" onmouseleave="menuLeave(this)">Pierre</a> \
                  </div> \
              </li> \
          </ul>';
    element.innerHTML = value;
}
