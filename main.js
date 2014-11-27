//Tien Lien


//Card constructor



//Hand constructor
// init
// face_values
// suits
    //suit values

//Deck Object
//hands that are dealth
//cards to be dealt
//deck holding the entire deck

//card faces

//card suits

//function to generate deck

//shuffle feature

// deal feature


//player object

    //name
    //hand
    //table
    //game

//a card has a suit and a rank
function Card(card,suit){
    var cardRanks = {
        'Three': 3,
        'Four': 4,
        'Five': 5,
        'Six': 6,
        'Seven': 7,
        'Eight': 8,
        'Nine': 9,
        'Ten': 10,
        'Jack': 11,
        'Queen': 12,
        'King': 13,
        'Ace': 14,
        'Two': 15
    };

    var suitRanks = {
        'Hearts': 0.4,
        'Diamonds': 0.3,
        'Clubs': 0.2,
        'Spades': 0.1
    };

    //validate first
    if (!(card in cardRanks) || !(suit in suitRanks) ){
        throw "Invalid Card";
    }

    this.card = card;
    this.suit = suit;

    var self = this;

    this.getCardValue = function(){

        return cardRanks[self.card] + suitRanks[self.suit];
    };

    this.toString = function(){
        return self.card + " of " + self.suit;
    };

}



// a deck consists of 52 cards
function Deck(){

    this.deck = [];
    //initialize:
    initialize = function(){

    };
}

// a hand is group of card
function Hand(arr_of_cards){

    this.hand = arr_of_cards;


}

Hand.prototype.getHandRank = function(){

};

var card = new Card('Ace', 'Spades');
//var card2 = new Card('Ace', 'Spsades');
console.log(card);
//console.log(card.getCardValue());
//console.log(card.toString());
