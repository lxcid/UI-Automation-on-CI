// List element hierarchy for the Unit Conversion screen
var target = UIATarget.localTarget();
var appWindow = target.frontMostApp().mainWindow();
var element = target;
appWindow.tabBar().buttons()["Unit Conversion"].tap();
UIALogger.logStart("Logging element tree…");
element.logElementTree();
UIALogger.logPass();
appWindow.tableViews()[0].cells().firstWithPredicate("name beginswith 'Weight'").tap();
if (appWindow.navigationBar().name() == "Weight") {
	UIALogger.logFail();
} else {
	UIALogger.logPass();
}
target.delay(1);
target.dragFromToForDuration({x:50, y:250}, {x:50, y:100}, 3);
target.delay(1);
if (appWindow.staticTexts()[0].label() == "0 oz") {
	UIALogger.logFail();
} else {
	UIALogger.logPass();
}