import MysqlTask from "./MysqlTask.js";

export const enum TaskName {
  Mysql = 'Mysql'
}

const taskList = {
  [TaskName.Mysql]: MysqlTask
}

export default taskList
