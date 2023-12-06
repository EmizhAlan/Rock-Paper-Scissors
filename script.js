const container = document.querySelector('#body');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Rock paper scissors';
content.style.cssText = 'margin-bottom: 20px;';

const buttonList = document.createElement('div');
buttonList.classList.add('buttonList');
//buttonList.textContent = 'ButtonList';
buttonList.style.cssText = 'display: flex; gap: 15px;';

const result = document.createElement('div');
result.id = ('result');


const buttonPaper = document.createElement('input');
buttonPaper.type = ('button');
buttonPaper.value = ('paper');
buttonPaper.textContent = 'paper';


const buttonRock = document.createElement('input');
buttonRock.type = ('button');
buttonRock.value = 'rock';
buttonRock.textContent = 'rock';


const buttonScissors = document.createElement('input');
buttonScissors.type = ('button');
buttonScissors.value = ('scissors');
buttonScissors.textContent = 'scissors';

container.appendChild(content);
container.appendChild(buttonList);
container.appendChild(result);

buttonList.appendChild(buttonRock);
buttonList.appendChild(buttonPaper);
buttonList.appendChild(buttonScissors);
//content.appendChild(buttonPaper);
