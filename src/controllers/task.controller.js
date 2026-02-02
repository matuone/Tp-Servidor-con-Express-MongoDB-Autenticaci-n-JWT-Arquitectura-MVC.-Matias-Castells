import { Task } from '../models/Task.js';

export async function getTasks(req, res) {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener tareas' });
  }
}

export async function createTask(req, res) {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'El título es obligatorio' });
    }

    const task = await Task.create({
      title: title,
      user: req.user.id
    });

    res.status(201).json(task);

  } catch (error) {
    res.status(500).json({ message: 'Error al crear tarea' });
  }
}

export async function updateTask(req, res) {
  try {
    const { id } = req.params;

    const task = await Task.findOne({ _id: id, user: req.user.id });

    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    if (req.body.title !== undefined) {
      task.title = req.body.title;
    }

    if (req.body.completed !== undefined) {
      task.completed = req.body.completed;
    }

    await task.save();

    res.json(task);

  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar tarea' });
  }
}

export async function deleteTask(req, res) {
  try {
    const { id } = req.params;

    const task = await Task.findOneAndDelete({
      _id: id,
      user: req.user.id
    });

    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    res.json({ message: 'Tarea eliminada' });

  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar tarea' });
  }
}
