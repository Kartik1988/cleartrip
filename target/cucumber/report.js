$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("1.feature");
formatter.feature({
  "line": 1,
  "name": "Create Trip in order to test create functionality",
  "description": "",
  "id": "create-trip-in-order-to-test-create-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Create a sample round trip",
  "description": "",
  "id": "create-trip-in-order-to-test-create-functionality;create-a-sample-round-trip",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am on a screen",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I select trip button",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "I select from station \"\u003cFromStation\u003e\" into screen",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I select to station \"\u003cToStation\u003e\" into screen",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select Departure Date \"\u003cDeptDate\u003e\" into screen",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select Passenger \"\u003cAdult\u003e\" into screen",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Search Button",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "postitive scenario",
  "description": "",
  "id": "create-trip-in-order-to-test-create-functionality;create-a-sample-round-trip;postitive-scenario",
  "rows": [
    {
      "cells": [
        "FromStation",
        "ToStation",
        "DeptDate",
        "ReturnDate",
        "Adult"
      ],
      "line": 11,
      "id": "create-trip-in-order-to-test-create-functionality;create-a-sample-round-trip;postitive-scenario;1"
    },
    {
      "cells": [
        "Bangalore, IN - Kempegowda International Airport (BLR)",
        "Dubai, AE - Dubai International Airport (DXB)",
        "Thu, 27 Aug, 2020",
        "Wed, 30 Sep, 2020",
        "2"
      ],
      "line": 12,
      "id": "create-trip-in-order-to-test-create-functionality;create-a-sample-round-trip;postitive-scenario;2"
    },
    {
      "cells": [
        "Dubai, AE - Dubai International Airport (DXB)",
        "Bangalore, IN - Kempegowda International Airport (BLR)",
        "Thu, 27 Aug, 2020",
        "Wed, 22 Sep, 2020",
        "3"
      ],
      "line": 13,
      "id": "create-trip-in-order-to-test-create-functionality;create-a-sample-round-trip;postitive-scenario;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12325911325,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Create a sample round trip",
  "description": "",
  "id": "create-trip-in-order-to-test-create-functionality;create-a-sample-round-trip;postitive-scenario;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am on a screen",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I select trip button",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "I select from station \"Bangalore, IN - Kempegowda International Airport (BLR)\" into screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I select to station \"Dubai, AE - Dubai International Airport (DXB)\" into screen",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select Departure Date \"Thu, 27 Aug, 2020\" into screen",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select Passenger \"2\" into screen",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSD.I_am_on_landing_page()"
});
formatter.result({
  "duration": 249919045,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSD.I_Select_Round_Trip()"
});
formatter.result({
  "duration": 159766481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangalore, IN - Kempegowda International Airport (BLR)",
      "offset": 23
    }
  ],
  "location": "HomepageSD.I_Select_From_Station(String)"
});
formatter.result({
  "duration": 3730015976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dubai, AE - Dubai International Airport (DXB)",
      "offset": 21
    }
  ],
  "location": "HomepageSD.I_Select_to_Station(String)"
});
formatter.result({
  "duration": 3347089400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thu, 27 Aug, 2020",
      "offset": 25
    }
  ],
  "location": "HomepageSD.I_Select_Dept_Date(String)"
});
formatter.result({
  "duration": 10550147566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "HomepageSD.I_Select_Passenger(String)"
});
formatter.result({
  "duration": 3335545840,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSD.I_Select_Search()"
});
formatter.result({
  "duration": 30243004918,
  "status": "passed"
});
formatter.after({
  "duration": 979657902,
  "status": "passed"
});
formatter.before({
  "duration": 11067124974,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create a sample round trip",
  "description": "",
  "id": "create-trip-in-order-to-test-create-functionality;create-a-sample-round-trip;postitive-scenario;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "I am on a screen",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I select trip button",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "I select from station \"Dubai, AE - Dubai International Airport (DXB)\" into screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I select to station \"Bangalore, IN - Kempegowda International Airport (BLR)\" into screen",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select Departure Date \"Thu, 27 Aug, 2020\" into screen",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select Passenger \"3\" into screen",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSD.I_am_on_landing_page()"
});
formatter.result({
  "duration": 67002324,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSD.I_Select_Round_Trip()"
});
formatter.result({
  "duration": 180821906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dubai, AE - Dubai International Airport (DXB)",
      "offset": 23
    }
  ],
  "location": "HomepageSD.I_Select_From_Station(String)"
});
formatter.result({
  "duration": 3409435606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangalore, IN - Kempegowda International Airport (BLR)",
      "offset": 21
    }
  ],
  "location": "HomepageSD.I_Select_to_Station(String)"
});
formatter.result({
  "duration": 3525536290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thu, 27 Aug, 2020",
      "offset": 25
    }
  ],
  "location": "HomepageSD.I_Select_Dept_Date(String)"
});
formatter.result({
  "duration": 10710066462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "HomepageSD.I_Select_Passenger(String)"
});
formatter.result({
  "duration": 3221944875,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSD.I_Select_Search()"
});
formatter.result({
  "duration": 30455092042,
  "status": "passed"
});
formatter.after({
  "duration": 945440848,
  "status": "passed"
});
});