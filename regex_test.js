var url = "http://www.naty.com.br";

function validateUrl(url) {
  var regex = /^(http:\/\/www\.)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
 
  if(regex.test(url)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

validateUrl(url);
