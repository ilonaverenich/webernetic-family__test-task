const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementsByClassName('modal__content_close-btn')[0];
const modalBody = document.getElementById('modal-body');

openModalBtn.onclick = function () {
  modal.style.display = 'flex';
  modalBody.innerHTML = `
        <div>Модальное окно</div>
        
    `;
};

closeBtn.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
