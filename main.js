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

    // this is a closure
    this.getCardRanks = function(){
        return cardRanks;
    };



    var suitRanks = {
        'Hearts': 0.4,
        'Diamonds': 0.3,
        'Clubs': 0.2,
        'Spades': 0.1
    };

    this.getSuitRanks = function(){
        return suitRanks;
    };

    //validate first
    if (!(card in cardRanks) || !(suit in suitRanks) ){
        if (arguments.length !== 0){
            throw "Invalid Card";
        }
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

    var self = this;
    //initialize:
    this.initialize = function(){
        // get the ranks of the cards
        var suits = (new Card()).getSuitRanks(),
            ranks = (new Card()).getCardRanks();
        for (suit in suits){
            for (rank in ranks){
                self.deck.push(new Card(rank, suit));
            }
        }
    };

    this.initialize();
}

// a hand is group of card
function Hand(arr_of_cards){

    this.hand = arr_of_cards;


}

Hand.prototype.getHandRank = function(){

};

var card = new Card('Ace', 'Spades');
var deck = new Deck();
console.log(deck.deck);

//console.log(card.getCardValue());
//console.log(card.toString());
