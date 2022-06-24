// debugger;
trs = [];
cards = ["clubs", "spades", "diamonds", "hearts"];
cardsFaces = ["jack", "jack", "jack", "jack", "queen", "queen", "queen", "queen", "king", "king", "king", "king"]
cardsNumber = ["2", "2", "2", "2", "3", "3", "3", "3"]
cardsNumber1 = ["4", "4", "4", "4", "5", "5", "5", "5"]
cardsNumber3 = ["6", "6", "6", "6", "7", "7", "7", "7"]
cardsNumber4 = ["8", "8", "8", "8", "9", "9", "9", "9"]
cardsNumber5 = ["10", "10", "10", "10", "J", "J", "J", "J"]
cardsNumber6 = ["Q", "Q", "Q", "Q", "K", "K", "K", "K"]
cardsNumber7 = ["T", "T", "T", "T"]
cards = cards.concat(cards);


for (i = 1; i <= 7; i++) {
    tds = [];
    for (j = 1; j <= 8; j++) {
            if (i <=1) {
                tds.push(`<td class = "cards">
                <div class = "div2"><p>${cardsNumber[j-1]}</p><img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                <div class = "div1"></div>
                <div class = "div3">${cardsNumber[j-1]}<img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                </td>`);
            }else if (i >=1, i<=2) {
                    tds.push(`<td class = "cards">
                    <div class = "div2"><p>${cardsNumber1[j-1]}</p><img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                    <div class = "div1"></div>
                    <div class = "div3">${cardsNumber1[j-1]}<img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                    </td>`);
                }else if (i >=2, i<=3) {
                    tds.push(`<td class = "cards">
                    <div class = "div2"><p>${cardsNumber3[j-1]}</p><img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                    <div class = "div1"></div>
                    <div class = "div3">${cardsNumber3[j-1]}<img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                    </td>`);
                }else if (i >=3, i<=4) {
                    tds.push(`<td class = "cards">
                    <div class = "div2"><p>${cardsNumber4[j-1]}</p><img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                    <div class = "div1"></div>
                    <div class = "div3">${cardsNumber4[j-1]}<img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                    </td>`);
                
                } else if (i < 6) {
                    if (j <= 4) {
                    tds.push(`<td class = "cards">
                    <div class = "div2"><p>${cardsNumber5[j-1]}</p><img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                    <div class = "div1"></div>
                    <div class = "div3">${cardsNumber5[j-1]}<img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                    </td>`);
                } else if (j >= 5) {
                    for (j = 5; j<=8; j++) {
                    tds.push(`<td class = "cards">
                    <div class = "div2"><p>${cardsNumber5[j-1]}</p><img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                    <div class = "div1"><img src="images/${cardsFaces[j-5]}.svg" alt="${cardsFaces[j-5]}")></div>
                    <div class = "div3">${cardsNumber5[j-1]}<img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                    </td>`);
                    }
                }   
            }else if (i>5, i<=6) {
                if (j <= 4) {
                tds.push(`<td class = "cards">
                <div class = "div2"><p>${cardsNumber6[j-1]}</p><img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                <div class = "div1"><img src="images/${cardsFaces[j+3]}.svg" alt="${cardsFaces[j+3]}"></div>
                <div class = "div3">${cardsNumber6[j-1]}<img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                </td>`);
                }
                else if (j >= 5) {
                    for (j = 5; j<=8; j++) {
                    tds.push(`<td class = "cards">
                    <div class = "div2"><p>${cardsNumber6[j-1]}</p><img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                    <div class = "div1"><img src="images/${cardsFaces[j+3]}.svg" alt="${cardsFaces[j+3]}"></div>
                    <div class = "div3">${cardsNumber6[j-1]}<img src="images/${cards[j-1]}.svg" alt="${cards[j-1]}"></div>
                    </td>`);
                    }
                }
            }
            else if (i = 7) {
            if (j <= 2) {
                tds.push(`<td class = "cards"></td>`);
            } else if (j >= 3, j <= 6) {
                tds.push(`<td class = "cards">
                <div class = "div2"><p>${cardsNumber7[j-3]}</p><img src="images/${cards[j-3]}.svg" alt="${cards[j-3]}"></div>
                <div class = "div1"></p><img src="images/${cards[j-3]}.svg" alt="${cards[j-3]}"></div>
                <div class = "div3"><p>${cardsNumber7[j-3]}</p><img src="images/${cards[j-3]}.svg" alt="${cards[j-3]}"></div>
                </td>`);
            } else {
                tds.push(`<td class = "cards"></td>`);
            }
        }
    
    }
        trs.push(`<tr>${tds.join("")}</tr>`);
}

    document.write(`<table class="chess">${trs.join("")}</table>`);
    