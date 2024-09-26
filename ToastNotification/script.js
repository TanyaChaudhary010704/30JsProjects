let toast = document.getElementById('toast');
let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>Please fix the error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, check again';

function showToast(msg) {
  let t = document.createElement("div");
  t.classList.add("t");
  t.innerHTML = msg;
  toast.appendChild(t);

  if (msg.includes('error')) {
    t.classList.add('error');
  }
  if (msg.includes('Invalid')) {
    t.classList.add('invalid');
  }

  setTimeout(() => {
    t.remove();
  }, 6000);
}