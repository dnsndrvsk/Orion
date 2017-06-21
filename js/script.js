(function() {
  
  var nav = document.querySelector("#header .main-nav");
  var rocket = document.querySelector('#header .rocket');
  var navCoordinates;
  var bodyCoordinates;
  var viewportSize = window.innerHeight;
  var body = document.querySelector('body');
  var counter = 0;
  var scrollTimeOut;
  var header = document.querySelector('#header');
  var counter = 100;

  window.addEventListener('scroll', function(e) {

//    if ( counter < 250 ) {
//      counter++;
//      header.style.cssText = 'background-size: ' + counter + '%';
//    } else {
//      header.style.cssText = 'background-size: cover';
//    }



    clearTimeout(scrollTimeOut);

    scrollTimeOut = setTimeout(function() {
      bodyCoordinates = body.getBoundingClientRect();

      if (bodyCoordinates.top < -20) {
        nav.classList.add('attached');
        rocket.style.marginTop = "160px";
      } else if (bodyCoordinates.top >= -20) {
        nav.classList.remove('attached');
        rocket.style.marginTop = "0";
      } 
    }, 100);
  });
})();

(function() {
  
  var nav = document.querySelector('.nav-list');
  var open_nav = document.querySelector('.open-nav');
  var close_nav = document.querySelector('.close-nav');
  
  
  open_nav.addEventListener('click', function(e) {
    e.preventDefault();

    nav.classList.remove('hide-nav');
    nav.classList.add('show-nav');
  });

  

  close_nav.addEventListener('click', function(e) {
    e.preventDefault();

    nav.classList.remove('show-nav');
  });
  
})();

(function() {
  var see_all = document.querySelector('.see-all');

  function show_all(e) {
    e.preventDefault();

    var list_red = document.querySelector('.item-list.red');

    var list_blue = document.querySelector('.item-list.blue');

    var li = document.createElement('li');

    li.classList.add('item');

    var headerP = document.createElement('p');

    headerP.textContent = 'header';

    headerP.classList.add('item-header');

    var textP = document.createElement('p');

    textP.textContent = 'lorem lalalal';

    li.appendChild(headerP);

    li.appendChild(textP);

    var newLi = li.cloneNode(true);

    list_red.appendChild(li);

    list_blue.appendChild(newLi);
  }

  see_all.addEventListener('click', show_all);
})();

(function() {
  
  var see_more = document.querySelector('#contacts .see-more');
  var contacts = document.querySelector('#contacts .contacts');
  
  
  contacts.classList.add('hide-contacts');
  
  see_more.addEventListener('click', function(e) {
    e.preventDefault();
    
    if ( !contacts.classList.contains('show-contacts') ) {
      contacts.classList.remove('hide-contacts');
      contacts.classList.add('show-contacts');
      this.textContent = 'Hide';
      return;
    }
    
    if ( contacts.classList.contains('show-contacts') ) {
      contacts.classList.remove('show-contacts');
      contacts.classList.add('hide-contacts');
      this.textContent = 'See more';
      return;
    }
    
  });
  
})();


(function() {
  
  var the_team = document.querySelector('#the-team');
  var items = document.querySelectorAll('#the-team .item');
  var clearTimeOut;
  var viewport;
  var the_team_coords;
  
  contacts.classList.add('hide-contacts');
  
  for ( var i = 0; i < items.length; i++ ) {
    items[i].style.display = 'none';
  }
  
  
  window.addEventListener('scroll', function(e) {
    
    clearTimeout(clearTimeOut);
    
    clearTimeOut = setTimeout(function() {
      
      the_team_coords = the_team.getBoundingClientRect();
      viewport = window.innerHeight;
      console.log(the_team_coords);
      console.log(viewport);
      
      if ( (the_team_coords.top - viewport) < 0 ) {
        
        for ( var i = 0; i < items.length; i++ ) {
          items[i].style.display = 'block';
        }
        
      }
      
      
    }, 100);
    
  });
  
})();