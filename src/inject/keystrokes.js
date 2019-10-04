
document.body.addEventListener("keyup", function(e) {

  if (document.activeElement != document.querySelector('body')) return;

  switch(e.key) {
    case "s":
      window.location.href = "https://pulse-staging.kickup.co/switch_district/"
      break;
    case "d":
      window.location.href = "https://pulse-staging.kickup.co/directory/people"
      break;
    case "e":
      window.location.href = "https://pulse-staging.kickup.co/events/browse"
      break;
    case "r":
      window.location.href = "https://pulse-staging.kickup.co/reports/browse/"
      break;
    case "h":
      window.location.href = "https://pulse-staging.kickup.co/"
      break;
    default:
      break;
  }
})
