function FLICK(LINK) {

  tede = ["Downloading application data", "Checking requirements", "Injecting modified application", "Everything is almost finished"]

    var progress = 0;
    var dialog = app.dialog.progress('Injecting app...', progress);
    dialog.setText("Connecting with your phone");
    var interval = setInterval(function () {
      progress += 1;
      dialog.setProgress(progress);
      if (progress > 10) { dialog.setText(tede[0]); }
      if (progress > 35) { dialog.setText(tede[1]); }
      if (progress > 60) { dialog.setText(tede[2]); }
      if (progress > 80) { dialog.setText(tede[3]); }
      if (progress === 100) {
        clearInterval(interval);
        setTimeout(function() {
          window.location.href = LINK;
        }, 2500)
      }
    }, 150)
}
