const form = document.querySelector('#form');
const contactosUl = document.querySelector('#contactos');

function printAllContacts(pList, pDom) {
  pDom.innerHTML = "";
  pList.forEach(contact => printOneContact(contact, pDom));
}

function printOneContact(pContact, pDom) {
  const li = document.createElement('li');
  li.textContent = `${pContact.name} - ${pContact.phone}`;
  const button = document.createElement('button');
  button.textContent = 'Borrar';
  button.dataset.id = pContact.id

  button.style.marginLeft = '5px';
  li.appendChild(button);

  button.addEventListener('click', deleteContact)

  pDom.appendChild(li);

}

printAllContacts(contactos, contactosUl);

form.addEventListener('submit', getDataForm);
function getDataForm(event) {
  event.preventDefault();

  const newContact = {
    id: id,
    name: event.target.name.value,
    phone: parseInt(event.target.phone.value)
  }

  addContact(newContact, contactos);
  event.target.reset();
}


function addContact(pContact, pList) {

  let position = pList.findIndex(contact => contact.phone === pContact.phone);

  if (position === -1) {
    pList.push(pContact);
    printOneContact(pContact, contactosUl);
    id++
  } else {
    alert('Usuario duplicado')
  }
}

function deleteContact(event) {

  let id = parseInt(event.target.dataset.id)
  const liBorrar = event.target.parentNode;
  liBorrar.parentNode.removeChild(liBorrar);

  deleteInArray(id, contactos);

}

function deleteInArray(pId, pList) {

  let position = pList.findIndex(contact => contact.id === pId)
  if (position !== -1) {
    pList.splice(position, 1);
  }

}