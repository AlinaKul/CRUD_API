const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:')

db.run('CREATE TABLE trains( id number, model text NOT NULL, yearOfManufacturing, lastMaintenanceDate, isActive);', function(err){
  if (err){
    return console.log(err.message)
  }
  console.log('Table created')
})

db.close()

/*db.serialize(function() {
  db.run("CREATE TABLE trains (info TEXT)");

  var stmt = db.prepare("INSERT INTO trains VALUES (id, model, yearOfManufacturing, lastMaintenanceDate,isActive )");
  for (var i = 0; i < 10; i++) {
      stmt.run("trains " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM trains", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});*/

db.close();





/*module.exports = fastifyPlugin ()*/