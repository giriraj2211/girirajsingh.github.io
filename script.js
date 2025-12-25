// small JS helpers
document.getElementById('year').textContent = new Date().getFullYear();

// placeholder: click on project card opens an alert (replace with modal or real link later)
document.querySelectorAll('.proj').forEach((el)=>el.addEventListener('click', ()=>alert('Open case study: '+ el.querySelector('h3').innerText)));

// simple fake submit behavior
document.getElementById('sendBtn').addEventListener('click', function(){
  const form = document.getElementById('contactForm');
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const msg = form.message.value.trim();
  if(!name || !email || !msg){ alert('Please fill all fields'); return; }
  alert('Message sent. (This is a demo — integrate real email/API later.)');
  form.reset();
});