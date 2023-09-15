function saveToLocalStorage(event){
    event.preventDefault();
    const name =event.target.username.value;
    const email =event.target.emailId.value;
    const phonenumber =event.target.phoneNumber.value;
  const obj = {
        name,
        email,
        phonenumber
    }
    localStorage.setItem('userdetails',JSON.stringify (obj));
    showUserOnScreen(obj)
    function showUserOnScreen(obj){
        const parentElem = document.getElementById('listOfitems')

        const childElem = document.createElement('li')
        childElem.textContent = obj.name + ' - '+ obj.email + ' - '+ obj.phoneNumber + ' - ';

               const deleteButton = document.createElement('input')
               deleteButton.type = 'button'
               deleteButton.value = 'Edit'
               deleteButton.oneclick = () => {
                localStorage.removeItem(obj.email)
                parentElem.removeChild(childElem)
               }
               childElem.appendChild(editButton);
               childElem.appendChild(deleteButton);
               parentElem.appendChild(childElem);
            
    }

}
