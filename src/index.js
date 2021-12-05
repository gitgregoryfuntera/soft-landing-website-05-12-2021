onToggleSidebar = () => {
  document.getElementById("sidebar").classList.toggle("active");
};

window.onscroll = () => {
  document.getElementById("sidebar").classList.remove("active");
};
