/**
 * Created by admin on 20/03/15.
 */
function displayScenarioDetails(buttonId) {
    $("#title").html(scenarios[buttonId-1].scenarioTitle);
    $("#content").html(scenarios[buttonId-1].scenarioContent);
    //document.getElementById("title").innerHTML = scenarios[0].scenarioTitle;
    //document.getElementById("content").innerHTML = scenarios[buttonId].scenarioContent;
}