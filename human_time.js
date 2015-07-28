function humanReadable(seconds) {
  var h = parseInt(seconds/3600);
  var m = parseInt((seconds%3600)/60);
  var s = parseInt((seconds%3600)%60);

  var h2 = ("0" + h).slice(-2);
  var m2 = ("0" + m).slice(-2);
  var s2 = ("0" + s).slice(-2);

  return h2 +":"+ m2 +":"+ s2;
}