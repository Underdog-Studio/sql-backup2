import dayjs from "dayjs"

dayjs.locale('zh-cn')

export default dayjs

export const currentDay = () => dayjs().format('YYYY-MM-DD')
