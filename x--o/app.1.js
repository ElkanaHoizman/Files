let playerTuen;
init = () => {
	playerTuen = 1;
	creteBoxes();
};

creteBoxes = function() {
	for (let i = 0; i < 9; i++) {
		new Box(i);
		// let newBox = makeBlock(i);
		// newBox.addToHtml();
	}
};

// creteBoxes = () => {
// 	for (let i = 0; i < 9; i++) {
//         let newBox = makeBlock(i);
// 		newBox.addToHtml();
// 	}
// };

// makeBlock = (id) => {
// 	return {
// 		o_image: 'img/o.png',
//         x_image: 'img/x.png',
//         id:id,
// 		addToHtml: function() {
// 			let all_obj = this;
// 			let active = false;
// 			let boxDiv = document.createElement('div');
//             boxDiv.className = 'box';
//             boxDiv.innerHTML = this.id
// 			id_blocks.appendChild(boxDiv);

// 			let boximg = document.createElement('img');
// 			// boximg.src = '';
// 			boxDiv.appendChild(boximg);
// 			boxDiv.onclick = () => {
// 				if (playerTuen === 1 && !active) {
// 					boximg.src = all_obj.o_image;
// 					playerTuen = 2;
// 					active = true;
//                 } else if (playerTuen === 2 && !active) {
// 					boximg.src = all_obj.x_image;
// 					playerTuen = 1;
//                     active = true;
// 				}
// 			};
// 		}
// 	};
// };

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

	newDiv.onclick = () => {
		if (playerTuen === 1 && !this.active) {
			boximg.src = this.o_image;
			playerTuen = 2;
			this.active = true;
		} else if (playerTuen === 2 && !this.active) {
			boximg.src = this.x_image;
			playerTuen = 1;
			this.active = true;
		}
    };




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
