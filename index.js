var search_text = document.getElementById('filter-text');
var search_min = document.getElementById('filter-min-price');
var search_max = document.getElementById('filter-max-price');

var textwords = 0;
var minwords = 0;
var maxwords = 0;

if (search_text) {
    search_text.addEventListener('change', function listener(event) {
        textwords = event.currentTarget.value;
        event.stopPropagation();
    });
}
search_min.addEventListener('change', function listener(event) {
    minwords = event.currentTarget.value;
    event.stopPropagation();
});

search_max.addEventListener('change', function listener(event) {
    maxwords = event.currentTarget.value;
    event.stopPropagation();
});
//----------Run the search function
//;
var clickbutton = document.getElementById('filter-update-button');
var items = document.getElementsByClassName('result');
var items_title = document.getElementsByClassName('result-title');

clickbutton.addEventListener('click', function listener(event) {
    //console.log("adsfadsf");
    for (var i = 0; i < items.length; i++) {
        console.log(items[i].dataset.price);
        if (textwords != 0) {
            var title = items_title[i].textContent;
            if (title.indexOf(textwords) == -1) {
                items[i].remove();
                i--;
            }
        }
        if (minwords != 0) {
            if (items[i].dataset.price < minwords) {
                items[i].remove();
                i--;
            }
        }
        if (maxwords != 0) {
            if (items[i].dataset.price > maxwords) {
                items[i].remove();
                i--;
            }
        }
    }
});