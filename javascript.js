const game = 
{
	gameboard: document.querySelector(".gameBoard"),
	chances: document.querySelector(".chances"),
	maxim: document.querySelector(".maxim"),
	letters: document.querySelector(".letters"),
	btnProverbs: document.querySelector(".btnProverbs"),
	btnQuotes: document.querySelector(".btnQuotes"),
	info: document.querySelector(".info"),
	gameOver: document.querySelector(".gameOver"),
	text: document.querySelector(".text"),
	btnOk: document.querySelector(".btnOk"),
	proverbs: ["A picture is worth a thousand words", "There is no time like the present", "Beauty lies in lovers eyes", "A friend in need is a friend indeed", "All is fair in love and war", "Better safe than sorry", "A bad workman blames his tools", "Trouble hates nothing as much as a smile", "A thing begun is half done", "Dont talk the talk if you cant walk the walk", "Coffee and love taste best when hot", "Every cloud has a silver lining", "What goes around comes around", "If you cant live longer live deeper", "The best things in life are free", "All things are difficult before they are easy", "Once bitten twice shy", "An apple a day keeps the doctor away", "All that glitters is not gold", "A stitch in time saves nine", "Laughter is a language everyone understands", "A word is enough to the wise", "When the cat is away the mice will play", "Fix the problem not the blame", "Haste makes waste", "Where there is a will there is a way", "Birds of a feather flock together", "Beware of a silent dog and still water", "The shortest distance between two people is a smile", "Never judge a book by its cover", "Experience is the mother of wisdom", "No bees no honey no work no money", "Fall seven times stand up eight", "A beautiful thing is never perfect", "Time never gets tired of running", "Every little pot has a fitting lid", "People who live in glass houses shouldnt throw stones", "The cheapest is always the most expensive", "Starting is easy persistence is an art", "A tree is known by its fruit", "Drop by drop you break the rock", "If you forgive the fox for stealing your chickens he will take your sheep", "There is nothing so bad that it couldnt be worse", "Sunshine all the time makes a desert"],
	quotes: ["Respect doesnt make history", "No treasure is worth dying for", "Toss a coin to your witcher", "Law of surprise", "Sometimes the best thing a flower can do for us is die", "Pretty ballads hide bastard truths", "So count yourself lucky", "Before we met the days were calm and nights were restless", "Now pour him some ale", "Whatever you lack in talent you make up for in confidence", "Leave the very sexy but insane witch", "We fancy our freedom", "Oh fishmonger come quell your daughters hunger", "Keep your sword close and keep moving", "Take back that bit about my filling less pie", "You smell of death", "The burden of power can be painful", "When you live as long as I do all the names start to sound the same", "Destiny has many faces", "Lest your grandkid be born a hairy young faun", "Nobody smart plays fair", "A true man would state his desires", "Destiny helps people believe there is an order to this horseshit", "You need a nap", "He is a friend of humanity", "You have cheated the game and won without even knowing it", "He thrust every elf far back on the shelf", "All good predictions rhyme", "You cant outrun destiny just because you are terrified of it", "People linked by destiny will always find each other", "A dynasty cant survive on arrogance alone", "I dreamed of becoming important to someone someday", "Stop your boorish grunts of protest", "Magic is organizing chaos", "I will not suffer tonight sober", "He has a face of cad and a coward", "Look mean and pretend you are a mute", "Times are shifting", "I see a lot of myself in you", "The sword of destiny has two edges", "It is like ordering a pie and finding it has no filling", "That scent lilac and gooseberries", "Always ask the right questions", "You talk nonsense while making wise and meaningful faces"],
	numberOFChances: 5,
	currentMaxim: null,
	currentLetters: null,
	createLetters()
	{
		const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		alphabet.forEach(ltr =>
		{
			const btn = document.createElement("button");
			btn.classList.add("letterBox");
			btn.dataset.ltr = ltr;
			btn.innerText = ltr;
			this.letters.appendChild(btn);
		});
	},
	hideLetters()
	{
		const ltrs = this.letters.querySelectorAll(".letterBox");
		ltrs.forEach(ltr => ltr.disabled = true);
	},
	showLetters()
	{
		const ltrs = this.letters.querySelectorAll(".letterBox");
		ltrs.forEach(ltr => ltr.disabled = false);
	},
	hideButtons()
	{
		this.btnProverbs.style.display = "none";
		this.btnQuotes.style.display = "none";
	},
	showButtons()
	{
		this.btnProverbs.style.display = "block";
		this.btnQuotes.style.display = "block";
	},
	hideMaxim()
	{
		this.maxim.style.display = "none";
	},
	showMaxim()
	{
		this.maxim.style.display = "block";
	},
	hideInfo()
	{
		this.info.style.display = "none";
	},
	showInfo()
	{
		this.info.style.display = "block";
	},
	hideChances()
	{
		this.chances.style.display = "none";
	},
	showChances()
	{
		this.chances.innerText = `Chances: ${this.numberOFChances}`;
		this.chances.style.display = "block";
	},
	lettersClick()
	{
		this.letters.addEventListener("click", event => 
		{
			if(event.target.nodeName.toUpperCase() === "BUTTON" && event.target.classList.contains("letterBox")) 
			{
				const ltr = event.target.dataset.ltr;
				this.checkLetters(ltr.toUpperCase());
				event.target.disabled = true;
			}
		});
	},
	randomProverb()
	{
		const maxP = this.proverbs.length - 1;
		const minP = 0;
		const randomP = Math.floor(Math.random() * (maxP - minP + 1) + minP);
		this.currentMaxim = this.proverbs[randomP].toUpperCase();
		this.currentLetters = this.currentMaxim.replace(/ /g, "");
		this.maxim.innerText = "";
		const ltrs = this.currentMaxim.split("");
		ltrs.forEach(ltr => 
		{
			const box = document.createElement("div");
			box.classList.add("maximBox");
			if(ltr === " ") 
			{
				box.classList.add("gap");
			}
			this.maxim.appendChild(box);
		});
	},
	randomQuote()
	{
		const maxQ = this.quotes.length - 1;
		const minQ = 0;
		const randomQ = Math.floor(Math.random() * (maxQ - minQ + 1) + minQ);
		this.currentMaxim = this.quotes[randomQ].toUpperCase();
		this.currentLetters = this.currentMaxim.replace(/ /g, "");
		this.maxim.innerText = "";
		const ltrs = this.currentMaxim.split("");
		ltrs.forEach(ltr => 
		{
			const box = document.createElement("div");
			box.classList.add("maximBox");
			if(ltr === " ") 
			{
				box.classList.add("gap");
			}
			this.maxim.appendChild(box);
		});
	},
	checkLetters(ltr)
	{
		if(this.currentMaxim.includes(ltr))
		{
			const ltrPlace = this.maxim.querySelectorAll(".maximBox");
			for(i = 0; i < this.currentMaxim.length; i++)
			{
				if(this.currentMaxim[i] === ltr)
				{
					ltrPlace[i].innerText = ltr;
				}
			}
			this.currentLetters = this.currentLetters.replace(new RegExp(ltr, "g"), "");
			if(!this.isLtrExists())
			{
				this.win();
			}
		}
		else
			{
				this.numberOFChances--;
				this.showChances();
			}
		if(this.numberOFChances === 0)
		{
			this.lose();
		}
	},
	isLtrExists()
	{
		return this.currentLetters.length;
	},
	win()
	{
		this.hideLetters();
		this.showInfo();
		this.hideChances();
		this.hideButtons();
		this.gameOver.innerText = "You win!";
		this.text.innerText = `„${this.currentMaxim}”`;
	},
	lose()
	{
		this.hideLetters();
		this.showInfo();
		this.hideChances();
		this.hideButtons();
		this.gameOver.innerText = "You lose!";
		this.text.innerText = `„${this.currentMaxim}”`;
	},
	init()
	{
		this.createLetters();
		this.hideLetters();
		this.lettersClick();
		this.hideInfo();
		this.showButtons();
	},
	startProverbs()
	{
		this.showMaxim();
		this.showLetters();
		this.numberOFChances = 5;
		this.showChances();
		this.randomProverb();
	},
	startQuotes()
	{
		this.showMaxim();
		this.showLetters();
		this.numberOFChances = 5;
		this.showChances();
		this.randomQuote();
	},
	ok()
	{
		this.hideInfo();
		this.hideMaxim();
		this.showButtons();
	}
};

game.init();
game.btnProverbs.addEventListener("click", () => game.startProverbs());
game.btnQuotes.addEventListener("click", () => game.startQuotes());
game.btnOk.addEventListener("click", () => game.ok());







