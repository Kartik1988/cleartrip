Feature:Create Trip in order to test create functionality
  Scenario Outline: Create a sample round trip
    Given I am on a screen
    Then I select trip button
    When I select from station "<FromStation>" into screen
    When I select to station "<ToStation>" into screen
    When I select Departure Date "<DeptDate>" into screen
    When I select Passenger "<Adult>" into screen
    Then I click on Search Button
    Examples: postitive scenario
      |FromStation|ToStation|DeptDate|ReturnDate|Adult|
      |Bangalore, IN - Kempegowda International Airport (BLR)|Dubai, AE - Dubai International Airport (DXB)|Thu, 27 Aug, 2020|Wed, 30 Sep, 2020|2|
      |Dubai, AE - Dubai International Airport (DXB)         |Bangalore, IN - Kempegowda International Airport (BLR)|Thu, 27 Aug, 2020|Wed, 22 Sep, 2020|3|








