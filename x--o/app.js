let playerTuen;
var arr;
init = () => {
	creteBoxes();
	reset();
};
reset = () => {
	counter = 0;
	playerTuen = 1;
	for (let i = 0; i < arr.length; i++) {
		arr[i].resetBox();
	}
};
creteBoxes = function() {
	arr = [];
	for (let i = 0; i < 9; i++) {
		arr.push(new Box(i));
	}
};

function Box(_id) {
	this.o_image = 'img/o.png';
	this.x_image = 'img/x.png';
	this.id = _id;
	this.active = false;

	let newDiv = document.createElement('div');
	newDiv.className = 'box';
	newDiv.id = this.id;
	id_blocks.appendChild(newDiv);
	newDiv.innerHTML += this.id;

	let boximg = document.createElement('img');
	newDiv.appendChild(boximg);

	this.resetBox = () => {
		boximg.src = 'img/z.png';
		this.active = false;
	};

	newDiv.onclick = () => {
     
		if (playerTuen === 1 && !this.active && counter !== 9) {
			boximg.src = this.o_image;
			playerTuen = 2;
			this.active = true;
			counter++;
            this.Conductor = 'o';
            Conductor()
		} else if (playerTuen === 2 && !this.active && counter !== 8) {
			boximg.src = this.x_image;
			playerTuen = 1;
			this.active = true;
			counter++;
            this.Conductor = 'x';
            Conductor()
		}
		setTimeout(function() {
			if (counter >= 9) {
            alert();
                
			}
		}, 100);
	};

    Conductor = ()=>{
        if (boximg.src != 'img/z.png')
        if (
            arr[0].Conductor === arr[1].Conductor && arr[0].Conductor === arr[2].Conductor
            // || arr[0].Conductor === arr[3].Conductor && arr[3].Conductor === arr[6].Conductor
            // || arr[0].Conductor === arr[4].Conductor && arr[4].Conductor === arr[8].Conductor
            // || arr[2].Conductor === arr[5].Conductor && arr[5].Conductor === arr[8].Conductor
            // || arr[2].Conductor === arr[4].Conductor && arr[4].Conductor === arr[6].Conductor
            // || arr[1].Conductor === arr[4].Conductor && arr[4].Conductor === arr[7].Conductor
        ) {
            // alert(arr[0].Conductor+'ניצחון');
        }
    }

	// delete

	// newDiv.ondblclick = () =>{
	//     // getElementById(this.id)
	//     alert(this.id)
	//     if (playerTuen === 2) {
	//         playerTuen = 1
	//         boximg.src = "img/z.png";
	//         this.active = false;
	//     }
	//     else if (playerTuen === 1 ) {
	//         playerTuen = 2;
	//         boximg.src = "img/z.png";
	//         this.active = false;
	//     }

	// }
}
// }
