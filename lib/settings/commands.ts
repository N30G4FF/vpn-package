export default new Map([
  ["SE", 240], // end of subnegotiation parameters
  ["NOP", 241], // no operation
  ["DM", 242], // data mark
  ["BRK", 243], // break
  ["IP", 244], // suspend (a.k.a. "interrupt process")
  ["AO", 245], // abort output
  ["AYT", 246], // are you there?
  ["EC", 247], // erase character
  ["EL", 248], // erase line
  ["GA", 249], // go ahead
  ["SB", 250], // subnegotiation
  ["WILL", 251], // will
  ["WONT", 252], // wont
  ["DO", 253], // do
  ["DONT", 254], // dont
  ["IAC", 255], // interpret as command
]);
