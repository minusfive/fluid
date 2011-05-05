window.fluid.dockBadge = '';
setTimeout(updateDockBadge, 1000);
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 5000);

function updateDockBadge() {
  var filter = '(due:"20 minutes") and (status:incomplete)';
  var newBadge = overviewList.getFilteredList(filter).length;
  
  if (newBadge > 0) window.fluid.dockBadge = newBadge;
}

function showAlert(taskName, dueIn, listId) {
	window.fluid.playSound(Galahad.RTM_ALERT_SOUND); // TODO: Keep this?
	window.fluid.showGrowlNotification({
		title: "Task Due" + (dueIn <= 0 ? "" : " Soon"), 
	    description: "'" + taskName + "' is due" + (dueIn <= 0 ? "" : " in " + dueIn + " minutes"), 
	    priority: 0, 
	    sticky: (dueIn <= 0 ? true : false),
	    identifier: "Tasks Due " + (dueIn <= 0 ? "Now" : " Soon"),
	    onclick: function() {
			// TODO: Refactor
			window.fluid.unhide();
			window.fluid.activate();
			listTabs.selectTabByData(listId);
		}
	    // icon: imgEl // or URL string
	});
}