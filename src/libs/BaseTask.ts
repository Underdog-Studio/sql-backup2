import dayjs, { currentDay } from "./daytime.js"

export interface BaseTaskOptions {
  prefixer: string
}

export default abstract class BaseTask<T extends BaseTaskOptions> {
  constructor(
    private readonly name: string,
    private readonly taskOptions: T
  ) { }
  public getName() {
    return this.name
  }
  public getOption<N extends keyof T>(name: N): T[N] {
    return this.taskOptions?.[name]
  }
  public getAbsolutePath() {
    return `backup/${this.getOption('prefixer')!}/${currentDay()}/${this.getName()}` as const
  }
  public abstract backup(): PromiseLike<void> | void
  public abstract cleanup(): PromiseLike<void> | void
}
