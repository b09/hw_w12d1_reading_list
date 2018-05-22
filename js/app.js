document.addEventListener('DOMContentLoaded', () =>{
  console.log('workin smirkin');
  const form = document.querySelector('#form');
  form.addEventListener('submit', bookFormSubmit)
});

const bookFormSubmit = function(event){
  event.preventDefault();
  console.log('bookFormSubmit has been reached');
};
