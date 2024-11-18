
var myfaker= require('faker');
// // console.log(myfaker.internet.email());
// // console.log(myfaker.date.past());
// // console.log(myfaker.address.city());


// function generate_address(){
// console.log(myfaker.address.streetAddress());
// console.log(myfaker.address.city());
// console.log(myfaker.address.state());
// }
// generate_address();
// main.js
// main.js
// main.js
const connection = require('./connection'); // Adjust the path if necessary

// Run the SHOW TABLES command
// connection.query('SHOW TABLES;', (error, results) => {
//   if (error) {
//     console.error('Error executing query:', error.stack);
//     return;
//   }

//   // Log the results
//   console.log('Tables in the database:', results);
// });
  


//   // Close the connection (optional, if you are done with the connection)
//   // var s={email:'jenny432@gmail.com'};
//   // connection.query('insert into users set?',s,function(error,results){
//   // if(error) throw error;
//   // console.log(results);

//   // }
// )
// var s='insert into users(email) values("bob@hotmail.com")';
// connection.query(s,function(error,results,fields){
// if(error) throw error;
// console.log(results);

// }
// )

// var s= {email: myfaker.internet.email(),
//   created_at: myfaker.date.past()
// };
// connection.query('insert into users set?',s,function(error,results){
// if(error) throw error;
// console.log(results);

// }
// );

for (let i = 0; i < 500; i++) {
  const user = {
      email: myfaker.internet.email(),
      created_at: myfaker.date.past()
  };

  connection.query('INSERT INTO users SET ?', user, function (error, results) {
      if (error) throw error;
      console.log(`User ${i + 1} inserted successfully`);
  });
}

// End the database connection once all queries are executed



var s='select count(*) as total from users';
connection.query(s,function(error,results,fields){
if(error) throw error;
console.log(results[0].total);

}
);
// var q='select * from users';
//   connection.query(q,function(error,results,fields)
//   {
//     if(error) throw error;
//     console.log(results);
//     //console.log('no of users: ', results.length);
//   });
  connection.end();



