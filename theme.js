
(function(){
  const key="rl-theme"; const root=document.documentElement;
  const stored=localStorage.getItem(key);
  root.setAttribute("data-theme", stored ? stored : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light'));
  window.toggleTheme=function(){
    const next=(root.getAttribute('data-theme')||'light')==='light'?'dark':'light';
    root.setAttribute('data-theme',next); localStorage.setItem(key,next);
    const l=document.getElementById('theme-label'); if(l){l.textContent=next==='light'?'Dark':'Light';}
  };
})();
