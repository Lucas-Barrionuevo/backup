//Si bien este codigo hace lo mismo que el de los callbacks, la diferencia es que es mucho mas ordenado y el error solo debe ser llamado una sola vez

function requestHandler(req, res) {
  User.findById(req.userId)
    .then(function (user) {
      return Tasks.findById(user.tasksId)
    })
    .then(function (tasks) {
      tasks.completed = true;
      return tasks.save();
    })
    .then(function () {
      res.send('Tasks Completed!');
    })
    .catch(function (errors) {
      res.send(erros);
    });
}
