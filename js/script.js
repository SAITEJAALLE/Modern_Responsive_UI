function togglePassword(icon) {
  const input = icon.previousElementSibling;
  const isVisible = input.type === 'text';
  input.type = isVisible ? 'password' : 'text';
  icon.textContent = isVisible ? '👁️' : '🙈';
}

// Optional: Smooth page flip transition
document.querySelectorAll('.flip-transition').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.body.classList.add('flip-out');
    setTimeout(() => {
      window.location.href = link.getAttribute('href');
    }, 400);
  });
});

// Optional: Parallax Effect (Mouse Movement)
document.addEventListener('mousemove', e => {
  const layers = document.querySelectorAll('.glass-card, .logo span');
  const x = (window.innerWidth - e.pageX * 2) / 90;
  const y = (window.innerHeight - e.pageY * 2) / 90;

  layers.forEach(layer => {
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});