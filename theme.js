
(function(){
  const key = "rl-theme";
  const root = document.documentElement;
  const stored = localStorage.getItem(key);
  if(stored){
    root.setAttribute("data-theme", stored);
  }else{
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }
  window.toggleTheme = function(){
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem(key, next);
    const label = document.getElementById("theme-label");
    if(label){ label.textContent = next === "light" ? "Dark" : "Light"; }
  }
})();
