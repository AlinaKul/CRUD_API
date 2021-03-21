const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(':memory:')

/*db.run('CREATE TABLE trains( id integer NOT NULL, model text NOT NULL, yearOfManufacturing numeric NOT NULL, lastMaintenanceDate numeric NOT NULL, isActive integer);', function(err){
  if (err){
    return console.log(err.message)
  }
  console.log('Table created')
})

db.close()*/

db.serialize(function() {
  db.run("CREATE TABLE trains2 (id INTEGER PRIMARY KEY, model text NOT NULL, yearOfManufacturing text NOT NULL, lastMaintenanceDate text NOT NULL, isActive integer)");

  var stmt = db.prepare("INSERT INTO trains2 VALUES (id, model, yearOfManufacturing, lastMaintenanceDate, isActive)");
  for (var i = 0; i < 10; i++) {
      stmt.run("trains " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM trains2", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});
db.close();






/*module.exports = sqlite3*/