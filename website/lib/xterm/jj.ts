import { Terminal, IDisposable } from "@xterm/xterm";
// @ts-ignore
import { LocalEchoAddon } from "@gytx/xterm-local-echo";

export default class JJAddon {
  private terminal: Terminal | undefined;
  private disposables: IDisposable[] = [];
  private localEcho: LocalEchoAddon;

  activate(terminal: Terminal): void {
    this.terminal = terminal;
    this.localEcho = new LocalEchoAddon();
    this.terminal.loadAddon(this.localEcho);
  }

  dispose(): void {}
}
