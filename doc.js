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

        parentElem.innerHTML = '<li>$(obj.name) - $(obj.email) - $(obj.phonenumber) </li>'
    }
}
