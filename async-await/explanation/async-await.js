//muchos mas sencillo que los callbacks y las promesas, y los errores se manejan con try catch como si fuera codigo sincrono

async function requestHandler(req, res) {
  try {
    const user = await User.findById(req.userId);
    const tasks = await Tasks.findById(user.tasksId);
    tasks.completed = true;
    await tasks.save();
    res.send('Tasks Saved');
  }
  catch (e) {
    res.send(e);
  }
}
