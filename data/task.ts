export const priorities: ITask['priority'][] = ['low', 'medium', 'high'];

export const states: ITask['state'][] = ['todo', 'doing', 'done'];

export const initTask: ITask = {
  id: '',
  date: '',
  title: '',
  description: '',
  priority: 'medium',
  state: 'todo',
  image: '',
};
