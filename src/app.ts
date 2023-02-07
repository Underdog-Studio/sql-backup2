import log from "./libs/log.js";
import cron from "node-cron"
import dayjs from "./libs/daytime.js";
import {} from "child_process"

log.info('Database backup service started successfully')

cron.schedule('15 * * * *', async () => {
  try {
    const taskId = dayjs().format('YYYY-MM-DD HH')
    log.info(`Backup task ${taskId} start execution`)

  } catch (reason) {
    log.error(reason)
  }
}, {
  scheduled: true,
  timezone: 'Asia/Shanghai'
})
