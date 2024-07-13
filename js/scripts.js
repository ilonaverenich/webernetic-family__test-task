const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementsByClassName('modal__content_close-btn')[0];
const modalBody = document.getElementById('modal-body');

openModalBtn.onclick = function () {
  modal.style.display = 'flex';
  modalBody.innerHTML = `
        <h2 class="modal__title">Войти в систему</h2>

        <div class="form-group-input">
            <input type="text" placeholder="Email/Телефон" id="email" name="email" required>
            <input type="password" placeholder="Пароль" id="password" name="password" required>
        </div>

        <div class="form-group-checkbox">
            <input type="checkbox" id="remember" name="remember">
            <label for="remember">Запомнить пароль</label>
        </div>
        <a href="#" class="restore">Восстановить</a>
        <div class="form-group-button">
            <button class="submit" type="submit">Войти</button>
            <button class="registerBtn" type="button" id="registerBtn">Зарегистрироваться</button>
        </div>
`;
};

function closeModal() {
    modal.style.display = 'none';
    openModalBtn.focus();  
  }
  
  closeBtn.onclick = function () {
    closeModal();
  };
  
  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
};
