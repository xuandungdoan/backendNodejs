const { compare, hash } = require('bcrypt');

hash('123', 8)
.then(enc => console.log(enc))
.catch(err => console.log(err.message));

compare('123', '$2a$08$V.KSMSrTIgrD0r0pGyPc6O/srbq9/R99FEOHW8RcDWhJSEaGHS03q')
.then(same => console.log(same))
.catch(err => console.log(err.message));
