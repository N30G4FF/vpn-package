import { Stream } from "stream";
// import COMMANDS from "../settings/commands";
// import OPTIONS from "../settings/options";
// import SUB from "../settings/sub";

export default function Client(options) {
  //   if (!(this instanceof Client)) {
  //     return new Client(arguments[0], arguments[1], arguments[2]);
  //   }

  Stream.call(this);

  if (options.addListener) {
    options = {
      input: arguments[0],
      output: arguments[1],
      server: arguments[2],
    };
  }

  if (options.socket) {
    options.input = options.socket;
    options.output = options.socket;
  }

  if (!options.output) {
    options.output = options.input;
    options.socket = options.input;
  }

  this.input = options.input;
  this.output = options.output;
  this.socket = options.socket;
  this.server = options.server;
  this.env = {};
  this.terminal = "ansi";

  this.options = options;
  this.options.convertLF = options.convertLF !== false;

  if (this.options.tty) {
    this.setRawMode = this._setRawMode;
    this.isTTY = true;
    this.isRaw = false;
    this.columns = 80;
    this.rows = 24;
  }

  this.open();
}
