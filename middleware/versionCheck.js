export default function(context) {
  let currentVersion = context.store.getters["stateStore/getCurrentVersion"];
  let latestVersion = context.store.getters["stateStore/getLatestVersion"];
  if (currentVersion === latestVersion) {
  } else {
    context.redirect("/update");
  }
}
