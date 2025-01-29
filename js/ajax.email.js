$('#contact-form').submit(function() {  
 var _nome = $('#message_name')
 var _email = $('#message_email')
 var _assunto = $('#message_subject')
 var _body = $('#message_body') 
var valuesToSubmit = {
    nome: _nome,
    email: _email,
    assunto: _assunto,
    body: _body
}
$.ajax({
      type: "POST",
      url:  "/contacts",
      data: valuesToSubmit,
      success : function(){alert("broga")},
      error : function() {alert(valuesToSubmit)}
    });
return false;
  });