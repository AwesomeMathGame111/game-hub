function askToOpen() {
  const userConfirmed = confirm("Do you want to open this page in about:blank?");
  if (userConfirmed) {
const myPopup = window.open('about:blank', '_blank', 'width=800, height=600');
const iframe = myPopup.document.createElement('iframe');
iframe.style.width ='100%';
iframe.style.height ='100%';
iframe.style.margin ='0';
iframe.style.padding ='0';
iframe.src='https://moggedbyme7-maker.github.io/Test-of-embeds./index.html';
myPopup.document.body.style.margin='0';
myPopup.document.body.appendChild(iframe);
  }
}
