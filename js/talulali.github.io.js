/**
 * Created by admin on 20/03/15.
 */
function displayScenarioDetails(buttonId) {
    $("#scenarioNumber").html("Scenario #"+buttonId);
    $("#title").html(scenarios[buttonId-1].scenarioTitle);
    $("#content").html(scenarios[buttonId-1].scenarioContent);
    //$("#diagram-img").attr("src","images/"+buttonId+".jpg");
    $("#diagram-img").html("<img class='img-responsive' src='images/"+buttonId+".jpg' alt='Entity Diagram'>");
}


