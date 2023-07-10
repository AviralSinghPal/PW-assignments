function openModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}

window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
};
