const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //
    if (id && value) {
        localStorage.setItem(id, value);
    }
    else {
        const emptyMsg = document.getElementById('empty');
        emptyMsg.innerText = "Enter both input";
    }
    idInput.value = '';
    valueInput.value = '';
}