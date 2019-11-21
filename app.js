var input = document.getElementById('testing');
var form = document.getElementById('form');

testing.addEventListener('submit', function(e) {
    e.preventDefault();
    justDoIt();
});

function justDoIt() {
    console.log('Here is the something thats happening', input.value)
}