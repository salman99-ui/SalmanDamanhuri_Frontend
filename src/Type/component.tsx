export interface AddActivity {
  activity: string;
  description: string;
}

export interface PropsTodoInput {
  handleAdd(val: AddActivity): void;
}

export interface PropsActivity {
  index: number;
  isShow?: boolean;
  item: AddActivity;
  handleDelete(index: number): void;
  handleEdit(index: number, item: AddActivity): void;
}
