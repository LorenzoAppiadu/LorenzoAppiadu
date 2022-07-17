var nodemailer =require('nodemailer');

var transporter = new nodemailer.createTransport({
  service:'gmail',
  auth:{
    user:'dlsark13@gmail.com' ,
    pass:'xxxxxxxx'
  }
});

var mailOptions ={
  from:'dlsark13@gmail.com',
  to: 'kampadu47@gmail.com',
  subject: 'Just testing samfin',
  http: '<h1>Lorenzo David</h1>'
//jummai is a goat };

transporter.sendMail(mailOptions, function(err, info){
  if (err){
    console.log(err);
  }else{
  console.log("Email sent: "+ info.response);
}
});
