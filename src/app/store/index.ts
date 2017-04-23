import { ActionReducer, Action } from '@ngrx/store';
import { Task } from '../model/task.model';

// tslint:disable-next-line:callable-types
export interface Reducer<T> {
  (state: T, action: Action): T;
}

export const GET_TASKS = 'ALL';
export const ADD_TASK = 'ADD';
export const UPDATE_TASK = 'UPDATE';
export const DELETE_TASK = 'DELETE';


export const alltasks: Reducer<Task[]> = (state: Task[], action: Action) => {
  switch (action.type) {
    case GET_TASKS:
      return state;
    default:
      return state;
  }
};

export const changetask: Reducer<Task> = (state: Task, action: Action) => {
  switch (action.type) {
    case UPDATE_TASK:
      return state;

    case ADD_TASK:
      return state;

    case DELETE_TASK:
      return state;

    default:
      return state;
  }
};


