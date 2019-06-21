new Vue({
    el: "#app",
    data: {
        playerHelth: 100,
        monsterHelth: 100,
        playerHelthWarning: 'green',
        monsterHelthWarning: 'green',
        gameIsRunning: false,
        turns: []
    },
    computed: {
    },
    methods: {
        gameStart() {
            this.gameIsRunning = true;
            this.playerHelth = 100;
            this.monsterHelth = 100;
            this.playerHelthWarning = 'green';
            this.monsterHelthWarning = 'green';
            this.turns = [];

        },
        giveUp() {
            this.gameIsRunning = false;
            this.playerHelth = 100;
            this.monsterHelth = 100;
            this.playerHelthWarning = 'green';
            this.monsterHelthWarning = 'green';
            this.turns = [];
        },
        attack() {
            // Plyer Game Logic
            var damage = this.calculateDamage(3, 10);
            this.monsterHelth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hit to Monster ' + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttack();
        },
        specialAttack() {
            var damage = this.calculateDamage(10, 20);
            this.monsterHelth -= damage;
            if (this.checkWin()) {
                return;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player Speical Attact to Monster ' + damage
            });
            this.monsterAttack();
        },
        heal() {
            if (this.playerHelth <= 90) {
                this.playerHelth += 10;
            } else {
                this.playerHelth = 100;
            }
            this.processStyling(); //update process-bar style
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heal point 10'
            });
            this.monsterAttack();
        },
        calculateDamage(min, max) {
            this.processStyling(); //update process-bar style
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        monsterAttack() {
            var damage = this.calculateDamage(3, 10);
            this.playerHelth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hit to Player ' + damage
            });
            this.checkWin();
        },
        checkWin() {
            if (this.monsterHelth <= 0) {
                if (confirm("Congrates... You Win ! Are You Start New Game?")) {
                    this.gameStart();
                } else {
                    this.giveUp();
                }
                return true;
            } else if (this.playerHelth <= 0) {
                if (confirm("Oops... You Lost! Are You Start New Game?")) {
                    this.gameStart();
                } else {
                    this.giveUp();
                }
                return true;
            }
            return false;
        },
        processStyling() {
            // styling process for player.
            if (this.playerHelth <= 50 && this.playerHelth >= 25) {
                this.playerHelthWarning = 'yellow';
            } else if (this.playerHelth <= 25) {
                this.playerHelthWarning = 'red';
            } else {
                this.playerHelthWarning = 'green';
            }

            // styling process for Monster.            
            if (this.monsterHelth <= 50 && this.monsterHelth >= 25) {
                this.monsterHelthWarning = 'yellow';
            } else if (this.monsterHelth <= 25) {
                this.monsterHelthWarning = 'red';
            }
        }
    }
});