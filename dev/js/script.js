window.onload = init;

function init() {
	getData();
	// console.log( 'init' );
}

function hovers() {

}

function getData() {
	// console.log( 'getData' );
	var request = new XMLHttpRequest();
	request.open('GET', 'data/feelings.json');

	request.onreadystatechange = function() {
		if(this.readyState == this.DONE && this.status == 200) {
			var type = request.getResponseHeader('Content-Type');
			if(this.responseText != null) {
				// console.log( this.responseText );
				var json = JSON.parse(this.responseText);
				var data = json.feelings;
				displayData(data);
			}
		}
	}
	request.send();
}

function displayData(data) {
	var list = document.getElementById('list');
	for(var i = 0; i < data.length; i++ ) {
		var li = document.createElement('li');
		var resultFrag = document.createDocumentFragment();

		li.setAttribute('id', data[i].id);
		li.setAttribute('class', 'feeling');
		li.classList.add(data[i].name);
		li.setAttribute('data-feeling', data[i].name);
		li.setAttribute('data-date', data[i].date);

		resultFrag.appendChild(li);
		list.appendChild(resultFrag);
	}
}

function saveData() {
	
}