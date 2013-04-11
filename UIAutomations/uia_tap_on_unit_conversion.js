// List element hierarchy for the Unit Conversion screen
var target = UIATarget.localTarget();
var appWindow = target.frontMostApp().mainWindow();
var element = target;
appWindow.tabBar().buttons()["Unit Conversion"].tap();
UIALogger.logStart("Logging element tree…");
element.logElementTree();
UIALogger.logPass();