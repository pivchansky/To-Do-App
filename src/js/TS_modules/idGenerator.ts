export class IdGenerator {
  generate(min: number = 0, max: number = 1679615) {
    let int = Math.floor(Math.random() * (max - min + 1)) + min;

    return int.toString(36);
  }
}
