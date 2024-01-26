//calback help
// Primero busca un usuario en la db, si no le encuentra devuelve un error. Si lo encuentra busca sus tareas en la db, si no lo encuentra devuelve un error, y si las encuentra las guarda en la db, que tambien puede tener un error, en ese caso lo devuelve.

function requestHandler(req, res) {
  User.findById(req.userId, function(err, user) {
    if (err) {
      res.send(err);
    } else {
      Tasks.findById(user.tasksId, function (err, tasks) {
        if (err) {
          return res.send(err);
        } else {
          tasks.completed = true;
          tasks.save(function(err) {
            if (err) {
              return res.send(err);
            } else {
              res.send('Task Completed');
            }
          });
        }
      });
    }
  });
}
