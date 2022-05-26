export default class Utils {
  static sleep(ms: number): Promise<boolean> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
