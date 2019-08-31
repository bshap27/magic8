let magic8Ball = document.getElementById('magic8-ball')
let message = document.getElementById('message-text')
let currentIndex = 0
let responses = [
	'Happy birthday Kristen!',
	'Surrender to the flow',
	'Phish loves Dicks',
	'Whatever you do take care of your shoes',
	'Can\'t I live while I\'m young?',
	'Taboot',
]
const setBackground = img => magic8Ball.style.backgroundImage = `url("img/${img}.png")`

const shake = (idx) => {
	message.textContent = ''
	setBackground('8ball')
	let rand = Math.floor(Math.random() * responses.length)
	if (rand == currentIndex) {
		return shake()
	}
	currentIndex = rand
	$(magic8Ball).effect("shake")
	setTimeout(function() {
		setBackground('8ballback')
		message.textContent = responses[rand]
	}, 500)
}

magic8Ball.addEventListener('click', shake)
