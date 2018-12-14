Feature: William Hill test
    As a WH Customer
    I want to be able to search for specific game on Vegas Casino and login to the webpage

Scenario: Search for specific game and validate login window
    Given I open the url "https://vegas.williamhill.com"
    When  I click magnifier button
        And   I search for "Mayfair Roulette"
        And   I open tile details for "Mayfair Roulette"
        And   I click Play Now button
    Then  I can see full login window
