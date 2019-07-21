window.onload = () => {

	let initGame = () => {
    
		let score = 0;
		
    const str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum vitae officia pariatur facere, dolor reiciendis aperiam non ad quis quod sint, nihil, ab ea voluptate itaque, enim eligendi aut porro.';

		let content = document.getElementById('DWetype'),
        typeBox = document.getElementById('typeBox');
    
    const COLOR = {
      'BG_WHITE' : '#ffffff',
      'RED'      : '#e74c3c',
      'GREEN'    : '#27ae60',
      'BG_GREY'  : '#e1e1e1',
    };
    
		let split = str.split(' ');

		let res = '';
    split.forEach((item, i) => {
      res += `<span class='word' id="word_${++i}">${item}</span> `;
    });

		content.innerHTML = res;

		let currIndex = 0;

		let currWord = document.getElementById(`word_${(currIndex+1)}`);
		currWord.style.backgroundColor = COLOR.BG_GREY;

		typeBox.onkeyup = event => {

			if(event.keyCode === 32){
				currWord.style.color = (typeBox.value.trim() == split[currIndex]) ? 
                                COLOR.GREEN : COLOR.RED;

				currWord.style.backgroundColor = COLOR.BG_WHITE;
				currIndex++;
				
				currWord = document.getElementById(`word_${currIndex+1}`);
				currWord.style.backgroundColor = COLOR.BG_GREY;

				typeBox.value = '';
			}
		}
	}

	initGame();
}