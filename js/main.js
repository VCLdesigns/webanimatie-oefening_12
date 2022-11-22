var trekKaart = document.getElementById("dek");
var getrokkenKaart = document.getElementById("kaart_getrokken");
var textbox = document.getElementById("content");
var spelregels = document.getElementById("spelregels");
var startSpel = document.getElementById("start");
var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var audioShuffle = new Audio("audio/shuffling-cards.mp3");
var audioWin = new Audio("audio/win.wav");
var audioLose = new Audio("audio/lose.wav");

function getDeck() {
    var deck = new Array();

    for (let i = 0; i < suits.length; i++) {
        for (let x = 0; x < values.length; x++) {
            let card = { Value: values[x], Suit: suits[i] };
            deck.push(card);
        }
    }
    return deck;
}

function shuffle(deck) {
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < 1000; i++) {
        var location1 = Math.floor((Math.random() * deck.length));
        var location2 = Math.floor((Math.random() * deck.length));
        var tmp = deck[location1];

        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }

}

function dealCard(deck) {
    return deck.shift();
}

startSpel.addEventListener("click", spelStarten);
function spelStarten(evt) {
    getDeck();
    deck = getDeck();
    shuffle(deck);
    var kiesKoning = Math.floor(Math.random() * 3 + 1);
    var moordKoning = kiesKoning;
    var winnaarKoning = [];
    console.log(moordKoning);

    var i = 0;
    var txt = "\nEr word een Moord Koning aangeduid.\nDe kaarten worden geschud.\nKlaar om te spelen!\nTrek een kaart."
    var speed = 10;

    function typeWriter() {
        if (i < txt.length) {
            textbox.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
    audioShuffle.play();

    trekKaart.addEventListener("click", volgendeKaart);

    function volgendeKaart() {
        var card = dealCard(deck);
        console.log(deck);
        getrokkenKaart.style.boxShadow = "4px 8px 8px rgba(48,48,48,0.8)"

        if (card.Value === 'A' && card.Suit === 'hearts') {
            getrokkenKaart.style.backgroundImage = "url('img/ace_of_hearts.png')";
        };
        if (card.Value === '2' && card.Suit === 'hearts') {
            getrokkenKaart.style.backgroundImage = "url('img/2_of_hearts.png')";
        };
        if (card.Value === '3' && card.Suit === 'hearts') {
            getrokkenKaart.style.backgroundImage = "url('img/3_of_hearts.png')";
        };
        if (card.Value === '4' && card.Suit === 'hearts') {
            getrokkenKaart.style.backgroundImage = "url('img/4_of_hearts.png')";
        };
        if (card.Value === '5' && card.Suit === 'hearts') {
            getrokkenKaart.style.backgroundImage = "url('img/5_of_hearts.png')";
        };
        if (card.Value === '6' && card.Suit === 'hearts') {
            getrokkenKaart.style.backgroundImage = "url('img/6_of_hearts.png')";
        };
        if (card.Value === '7' && card.Suit === 'hearts') {
            getrokkenKaart.style.backgroundImage = "url('img/7_of_hearts.png')";
        };
        if (card.Value === '8' && card.Suit === 'hearts') {
            getrokkenKaart.style.backgroundImage = "url('img/8_of_hearts.png')";
        };
        if (card.Value === '9' && card.Suit === 'hearts') {
            getrokkenKaart.style.backgroundImage = "url('img/9_of_hearts.png')";
        };
        if (card.Value === '10' && card.Suit === 'hearts') {
            getrokkenKaart.style.backgroundImage = "url('img/10_of_hearts.png')";
        };
        if (card.Value === 'J' && card.Suit === 'hearts') {
            getrokkenKaart.style.backgroundImage = "url('img/jack_of_hearts2.png')";
        };
        if (card.Value === 'Q' && card.Suit === 'hearts') {
            getrokkenKaart.style.backgroundImage = "url('img/queen_of_hearts2.png')";
        };
        if (card.Value === 'K' && card.Suit === 'hearts') {
            getrokkenKaart.style.backgroundImage = "url('img/king_of_hearts2.png')";
            if (moordKoning === 1) {
                trekKaart.removeEventListener("click", volgendeKaart);
                moordKoningGevonden();
            } else {
                winnaarKoning.push(true);
                if (winnaarKoning[0] === true && winnaarKoning[1] === true && winnaarKoning[2] === true) {
                    trekKaart.removeEventListener("click", volgendeKaart);
                    gewonnen();
                } else {


                    var i = 0;
                    var txt = "\nEen Goede Koning Gevonden!"
                    var speed = 10;

                    function typeWriter() {
                        if (i < txt.length) {
                            textbox.innerHTML += txt.charAt(i);
                            i++;
                            setTimeout(typeWriter, speed);
                        }
                    }
                    typeWriter();
                }
            }
        };
        if (card.Value === 'A' && card.Suit === 'clubs') {
            getrokkenKaart.style.backgroundImage = "url('img/ace_of_clubs.png')";
        };
        if (card.Value === '2' && card.Suit === 'clubs') {
            getrokkenKaart.style.backgroundImage = "url('img/2_of_clubs.png')";
        };
        if (card.Value === '3' && card.Suit === 'clubs') {
            getrokkenKaart.style.backgroundImage = "url('img/3_of_clubs.png')";
        };
        if (card.Value === '4' && card.Suit === 'clubs') {
            getrokkenKaart.style.backgroundImage = "url('img/4_of_clubs.png')";
        };
        if (card.Value === '5' && card.Suit === 'clubs') {
            getrokkenKaart.style.backgroundImage = "url('img/5_of_clubs.png')";
        };
        if (card.Value === '6' && card.Suit === 'clubs') {
            getrokkenKaart.style.backgroundImage = "url('img/6_of_clubs.png')";
        };
        if (card.Value === '7' && card.Suit === 'clubs') {
            getrokkenKaart.style.backgroundImage = "url('img/7_of_clubs.png')";
        };
        if (card.Value === '8' && card.Suit === 'clubs') {
            getrokkenKaart.style.backgroundImage = "url('img/8_of_clubs.png')";
        };
        if (card.Value === '9' && card.Suit === 'clubs') {
            getrokkenKaart.style.backgroundImage = "url('img/9_of_clubs.png')";
        };
        if (card.Value === '10' && card.Suit === 'clubs') {
            getrokkenKaart.style.backgroundImage = "url('img/10_of_clubs.png')";
        };
        if (card.Value === 'J' && card.Suit === 'clubs') {
            getrokkenKaart.style.backgroundImage = "url('img/jack_of_clubs2.png')";
        };
        if (card.Value === 'Q' && card.Suit === 'clubs') {
            getrokkenKaart.style.backgroundImage = "url('img/queen_of_clubs2.png')";
        };
        if (card.Value === 'K' && card.Suit === 'clubs') {
            getrokkenKaart.style.backgroundImage = "url('img/king_of_clubs2.png')";
            if (moordKoning === 2) {
                trekKaart.removeEventListener("click", volgendeKaart);
                moordKoningGevonden();

            } else {
                winnaarKoning.push(true);
                if (winnaarKoning[0] === true && winnaarKoning[1] === true && winnaarKoning[2] === true) {
                    trekKaart.removeEventListener("click", volgendeKaart);
                    gewonnen();
                } else {


                    var i = 0;
                    var txt = "\nEen Goede Koning Gevonden!"
                    var speed = 10;

                    function typeWriter() {
                        if (i < txt.length) {
                            textbox.innerHTML += txt.charAt(i);
                            i++;
                            setTimeout(typeWriter, speed);
                        }
                    }
                    typeWriter();
                }
            }
        };
        if (card.Value === 'A' && card.Suit === 'spades') {
            getrokkenKaart.style.backgroundImage = "url('img/ace_of_spades.png')";
        };
        if (card.Value === '2' && card.Suit === 'spades') {
            getrokkenKaart.style.backgroundImage = "url('img/2_of_spades.png')";
        };
        if (card.Value === '3' && card.Suit === 'spades') {
            getrokkenKaart.style.backgroundImage = "url('img/3_of_spades.png')";
        };
        if (card.Value === '4' && card.Suit === 'spades') {
            getrokkenKaart.style.backgroundImage = "url('img/4_of_spades.png')";
        };
        if (card.Value === '5' && card.Suit === 'spades') {
            getrokkenKaart.style.backgroundImage = "url('img/5_of_spades.png')";
        };
        if (card.Value === '6' && card.Suit === 'spades') {
            getrokkenKaart.style.backgroundImage = "url('img/6_of_spades.png')";
        };
        if (card.Value === '7' && card.Suit === 'spades') {
            getrokkenKaart.style.backgroundImage = "url('img/7_of_spades.png')";
        };
        if (card.Value === '8' && card.Suit === 'spades') {
            getrokkenKaart.style.backgroundImage = "url('img/8_of_spades.png')";
        };
        if (card.Value === '9' && card.Suit === 'spades') {
            getrokkenKaart.style.backgroundImage = "url('img/9_of_spades.png')";
        };
        if (card.Value === '10' && card.Suit === 'spades') {
            getrokkenKaart.style.backgroundImage = "url('img/10_of_spades.png')";
        };
        if (card.Value === 'J' && card.Suit === 'spades') {
            getrokkenKaart.style.backgroundImage = "url('img/jack_of_spades2.png')";
        };
        if (card.Value === 'Q' && card.Suit === 'spades') {
            getrokkenKaart.style.backgroundImage = "url('img/queen_of_spades2.png')";
        };
        if (card.Value === 'K' && card.Suit === 'spades') {
            getrokkenKaart.style.backgroundImage = "url('img/king_of_spades2.png')";
            if (moordKoning === 3) {
                trekKaart.removeEventListener("click", volgendeKaart);
                moordKoningGevonden();

            } else {
                winnaarKoning.push(true);
                if (winnaarKoning[0] === true && winnaarKoning[1] === true && winnaarKoning[2] === true) {
                    trekKaart.removeEventListener("click", volgendeKaart);
                    gewonnen();
                } else {


                    var i = 0;
                    var txt = "\nEen Goede Koning Gevonden!"
                    var speed = 10;

                    function typeWriter() {
                        if (i < txt.length) {
                            textbox.innerHTML += txt.charAt(i);
                            i++;
                            setTimeout(typeWriter, speed);
                        }
                    }
                    typeWriter();
                }
            }
        };
        if (card.Value === 'A' && card.Suit === 'diamonds') {
            getrokkenKaart.style.backgroundImage = "url('img/ace_of_diamonds.png')";
        };
        if (card.Value === '2' && card.Suit === 'diamonds') {
            getrokkenKaart.style.backgroundImage = "url('img/2_of_diamonds.png')";
        };
        if (card.Value === '3' && card.Suit === 'diamonds') {
            getrokkenKaart.style.backgroundImage = "url('img/3_of_diamonds.png')";
        };
        if (card.Value === '4' && card.Suit === 'diamonds') {
            getrokkenKaart.style.backgroundImage = "url('img/4_of_diamonds.png')";
        };
        if (card.Value === '5' && card.Suit === 'diamonds') {
            getrokkenKaart.style.backgroundImage = "url('img/5_of_diamonds.png')";
        };
        if (card.Value === '6' && card.Suit === 'diamonds') {
            getrokkenKaart.style.backgroundImage = "url('img/6_of_diamonds.png')";
        };
        if (card.Value === '7' && card.Suit === 'diamonds') {
            getrokkenKaart.style.backgroundImage = "url('img/7_of_diamonds.png')";
        };
        if (card.Value === '8' && card.Suit === 'diamonds') {
            getrokkenKaart.style.backgroundImage = "url('img/8_of_diamonds.png')";
        };
        if (card.Value === '9' && card.Suit === 'diamonds') {
            getrokkenKaart.style.backgroundImage = "url('img/9_of_diamonds.png')";
        };
        if (card.Value === '10' && card.Suit === 'diamonds') {
            getrokkenKaart.style.backgroundImage = "url('img/10_of_diamonds.png')";
        };
        if (card.Value === 'J' && card.Suit === 'diamonds') {
            getrokkenKaart.style.backgroundImage = "url('img/jack_of_diamonds2.png')";
        };
        if (card.Value === 'Q' && card.Suit === 'diamonds') {
            getrokkenKaart.style.backgroundImage = "url('img/queen_of_diamonds2.png')";
        };
        if (card.Value === 'K' && card.Suit === 'diamonds') {
            getrokkenKaart.style.backgroundImage = "url('img/king_of_diamonds2.png')";
            if (moordKoning === 4) {
                trekKaart.removeEventListener("click", volgendeKaart);
                moordKoningGevonden();
            } else {
                winnaarKoning.push(true);
                if (winnaarKoning[0] === true && winnaarKoning[1] === true && winnaarKoning[2] === true) {
                    trekKaart.removeEventListener("click", volgendeKaart);
                    gewonnen();
                } else {


                    var i = 0;
                    var txt = "\nEen Goede Koning Gevonden!"
                    var speed = 10;

                    function typeWriter() {
                        if (i < txt.length) {
                            textbox.innerHTML += txt.charAt(i);
                            i++;
                            setTimeout(typeWriter, speed);
                        }
                    }
                    typeWriter();
                }

            }
        };


    }
}
function moordKoningGevonden() {

    var i = 0;
    var txt = "\nDe Moordkoning is gevonden!\n\nGAME OVER"
    var speed = 10;

    function typeWriter() {
        if (i < txt.length) {
            textbox.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
    audioLose.play();
}

function gewonnen() {
    var i = 0;
    var txt = "\nAlle goede koningen werden gevonden!\n\nWINNER"
    var speed = 10;

    function typeWriter() {
        if (i < txt.length) {
            textbox.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
    audioWin.play();
}

spelregels.addEventListener("click", spelregelLatenZien);
function spelregelLatenZien(evt) {
    var i = 0;
    var txt = "\nVind alle Goede Koningen om te winnen, maar pas op voor de Moord Koning!\nAls je de Moord Koning vind, dan verlies je.\n\nDe spelregels:\nAls deze kaart trekt: dan gebeurt het volgende.\nKaarten 2 tot 10: de volgende speler trekt 1 kaart.\nBoer: De volgende speler trekt 2 kaarten.\nKoningin: De volgende speler trekt 3 kaarten.\nAas: De volgende speler trekt 4 kaarten.\n\n"
    var speed = 10;

    function typeWriter() {
        if (i < txt.length) {
            textbox.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
}

