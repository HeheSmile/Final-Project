//apply
const portfolio = document.getElementById("portfolio-form");
portfolio.addEventListener("submit",function(event){
  event.preventDefault();

  const firstName = portfolio.first.value;
  const lastName = portfolio.last.value;
  const Email = portfolio.email.value;
  const phone = portfolio.phone.value;

  if(!firstName || !lastName || !Email || !phone){
      alert("Fill out the information");
      return;
  }
  alert("Waiting for respond");
});