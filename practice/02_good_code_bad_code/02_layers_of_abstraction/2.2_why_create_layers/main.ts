// ==============================================================================
// @file: main.ts
// @path: tracks/02_good_code_bad_code/02_layers_of_abstraction/2.2_why_create_layers/main.ts
// @book: 《굿 코드, 배드 코드》(Tom Long 저, 위키북스)
// ==============================================================================

export class AudioPlayer {
    playWav(stream: string): string { return `Playing audio stream: ${stream}`; }
}
export class GameSoundManager {
    constructor(private player: AudioPlayer) {}
    playExplosion(): string { return this.player.playWav("explosion.wav"); }
}
console.log("[Good Code 2.2]", new GameSoundManager(new AudioPlayer()).playExplosion());
