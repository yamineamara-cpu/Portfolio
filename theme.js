(function(){
  var KEY='yam-v1-theme';
  var saved=localStorage.getItem(KEY)||'light';
  var html=document.documentElement;
  var btn=document.getElementById('theme-toggle');
  function apply(t){
    html.setAttribute('data-theme',t);
    btn.textContent=t==='dark'?'☀️':'🌙';
    btn.title=t==='dark'?'Passer en mode clair':'Passer en mode sombre';
    localStorage.setItem(KEY,t);
  }
  apply(saved);
  btn.addEventListener('click',function(){
    apply(html.getAttribute('data-theme')==='dark'?'light':'dark');
  });

  // Hamburger menu
  var burger=document.getElementById('nav-burger');
  var nav=document.querySelector('.navbar-nav');
  if(burger&&nav){
    burger.addEventListener('click',function(){
      burger.classList.toggle('open');
      nav.classList.toggle('open');
    });
    // Ferme le menu en cliquant sur un lien
    nav.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){
        burger.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }
})();
