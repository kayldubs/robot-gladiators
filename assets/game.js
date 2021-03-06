var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'); 
    // if player chooses to skip
if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
    window.alert(playerName + " has chosen to skip the fight. Goodbye!");
    playerMoney = playerMoney - 10;
    console.log("playerMoney", playerMoney);
    break;
}
}

      //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
      enemyHealth = enemyHealth - playerAttack;
  // Log a resulting message to the console so we know that it worked.
  console.log( 
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " Health remaining."
);
 //check enemy's health 
 if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    playerMoney = playerMoney + 20;
    break;
} else { 
    window.alert(enemyName + "still has" + enemyHealth + " health left.");
}
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
console.log( 
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
//check player's health 
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
    break;
} else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
    }
};
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators!" + (i + 1));   
        var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    //if we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length -1) {
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        if (storeConfirm) {
        shop();
    }
    }
}
    else { 
        window.alert("You have lost your robot in battle! Game Over!");
        break;
        }
    }
    endGame();
};
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!" );
        //if player is stil alive, player wins
        if (playerHealth > 0) {
            window.alert("Great job, you've survived the game! You know have a score of " + playerMoney + ".");
        } else {
            window.alert("You've lost your robot in battle!");
    }
//ask player if they want to play again
var playAgainConfirm = window.confirm("Woudl you like to play again?");
    if (playAgainConfirm) {
        // restart game
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};
    var shop = function() {
        // ask player what they would like to do
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL you health, UPGRADE your attack, or leave the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );
        //use switch to carry out action
        switch (shopOptionPrompt) {
            case "REFILL":
            case "refill":
                if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars");
                //increase health and decrease money 
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                } else { 
                    window.alert("You don't have enough money!");
                }
                break;
            case "UPGRADE":
            case "upgrade":
                if (playerMoney >= 7) {
                window.alert("Upgrade player's attack by 6 for 7 dollars.");
                //increase attack decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney -7;
                } else {
                    window.alert("You don't have enough money!")
                }
                break;
            case "leave":
            case "leave":
                window.alert("Leaving the store.");
                break;
            default:
                window.alert("You did not pick a valid option. Try again.");
                shop();
                break;
        }
    };
//start first game when page loads
startGame();