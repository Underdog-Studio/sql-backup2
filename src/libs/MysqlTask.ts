import BaseTask, { BaseTaskOptions } from "./BaseTask.js";
import { resolve } from "path"
import { mkdir } from "fs/promises"
import { createWriteStream } from "fs"
import { spawn } from "child_process"

type NumberLike = number | `${number}`

export interface MysqlTaskOptions extends BaseTaskOptions {
  host: string | [NumberLike, NumberLike, NumberLike, NumberLike]
  port: string | number
  username: string
  password: string
  dbname: string
}

export default class MysqlTask extends BaseTask<MysqlTaskOptions> {
  constructor(mysqlOptions: MysqlTaskOptions) {
    super('mysql', mysqlOptions)
  }

  get hostString() {
    const host = this.getOption('host')
    if (Array.isArray(host)) {
      return host.join('.')
    }

    return host.toString()
  }

  public async backup() {
    const dbname = this.getOption('dbname')
    if (!dbname) {
      throw 'dbname is not define'
    }
    const absolutePath = this.getAbsolutePath()
    const pathName = resolve(`${__dirname}/../${absolutePath}`)
    const fileName = `${dbname}.sql`
    await mkdir(pathName, { recursive: true })
    const filePath = resolve(pathName, fileName)
    const writeStream = createWriteStream(filePath)
    const dumper = spawn('mysqldump', [
      '-h', this.hostString, '-P', this.getOption('port').toString(),
      '-u', this.getOption('username'), this.getOption('password'),
      '--single-transaction', '--master-data=2', '--skip-add-drop-table',
      dbname
    ])
    const pipe = dumper.stdout.pipe(writeStream)

    pipe.on('finish',()=>{

    })
    pipe.on('')
  }

  public cleanup(): void | PromiseLike<void> {

  }
}
