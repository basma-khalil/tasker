interface ITask {
  id: string;
  date: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  state: 'todo' | 'doing' | 'done';
  image: string;
}

type TTasks = ITask[];

interface IList {
  id: ITask['state'];
  title: string;
}

type TLists = IList[];
