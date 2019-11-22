
document.body.addEventListener("keyup", function(e) {

  if (document.activeElement != document.querySelector('body')) return;

  switch(e.key) {
    case "d":
      window.location.href = "https://pulse-staging.kickup.co/directory/people"
      break;
    case "e":
      window.location.href = "https://pulse-staging.kickup.co/events/browse"
      break;
    case "c":
        window.location.href = "https://pulse-staging.kickup.co/campaigns/"
        break;
    case "h":
        window.location.href = "https://pulse-staging.kickup.co/"
        break;
    case "r":
      window.location.href = "https://pulse-staging.kickup.co/reports/browse/"
      break;
    case "s":
      window.location.href = "https://pulse-staging.kickup.co/switch_district/"
      break;
    default:
      break;
  }
})


// function showMessage() {
//   var div
// }