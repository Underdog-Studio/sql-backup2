import colors from "colors"
import dayjs from "./daytime.js"

type Log = typeof console.log

const makeLog = (color: colors.Color, type: string): Log => console.log.bind(
  console,
  color(`[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] [${type}]`)
)

export const info = makeLog(colors.green, 'info')

export const debug = makeLog(colors.green, 'debug')

export const error = makeLog(colors.green, 'error')

export const warning = makeLog(colors.green, 'warning')

const log = {
  info,
  debug,
  error,
  warning
}

export default log
