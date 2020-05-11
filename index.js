var search_text = document.getElementById('filter-text');
var search_min = document.getElementById('filter-min-price');
var search_max = document.getElementById('filter-max-price');

var textwords = 0;
var minwords = 0;
var maxwords = 0;


search_text.addEventListener('change', function listener(event) {
    textwords = event.currentTarget.value;
    event.stopPropagation();
});

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
        // console.log(items[i].dataset.price);
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

//-----------------Add new item!
//
//
//Open the page when the user click the plus samble
var sellbutton = document.getElementById('sell-something');
var backdrop = document.getElementById('modal-backdrop');
var sellmodal = document.getElementById('sell-something-modal');

sellbutton.addEventListener('click', function sell(Event) {
    sellmodal.style.display = 'block';
    backdrop.style.display = 'block';
});

//Get the information of user wanna input]
//
var potext = document.getElementById('post-text-input');
var pophoto = document.getElementById('post-photo-input');
var poprice = document.getElementById('post-price-input');
var poid = document.getElementById('post-id-input');
var podes = document.getElementById('post-des-input');

var potextwords = 0;
var pophotowords = 0;
var popricewords = 0;
var poidwords = 0;
var podeswords = 0;

potext.addEventListener('change', function listener(event) {
    potextwords = event.currentTarget.value;
    event.stopPropagation();
});

pophoto.addEventListener('change', function listener(event) {
    pophotowords = event.currentTarget.value;
    event.stopPropagation();
});

poprice.addEventListener('change', function listener(event) {
    popricewords = event.currentTarget.value;
    event.stopPropagation();
});


poid.addEventListener('change', function listener(event) {
    poidwords = event.currentTarget.value;
    event.stopPropagation();
});

podes.addEventListener('change', function listener(event) {
    podeswords = event.currentTarget.value;
    event.stopPropagation();
});


//Create a new item process
var main = document.getElementById('results'); //Section
var accept = document.getElementById('modal-accept');

accept.addEventListener('click', function sell(event) {
    if (potextwords == 0 || pophotowords == 0 || popricewords == 0 || poidwords == 0 || podeswords == 0) {
        alert("Ha? Can you input all of it?");
    } else {
        var newpo = document.createElement('div');
        var postcontent = document.createElement('div');
        var imagcontainer = document.createElement('div');
        var img = document.createElement('div');
        var infocontainer = document.createElement('div');
        var titl = document.createElement('a');
        var span1 = document.createElement('span');
        var span2 = document.createElement('span');
        var dd1 = document.createElement('dd');

        newpo.classList.add('result');
        newpo.dataset.price = popricewords;

        postcontent.classList.add('result-contents');
        imagcontainer.classList.add('result-image-container');
        infocontainer.classList.add('result-info-container');
        titl.classList.add('result-title');
        span2.classList.add('result-price');
        dd1.classList.add('post-city');

        img.src = pophotowords;
        img.alt = potextwords;
        titl.textContent = potextwords;
        span1.textContent = "No.xxx";
        span2.textContent = popricewords;
        dd1.textContent = podeswords;

        imagcontainer.appendChild(img);
        infocontainer.appendChild(titl);
        infocontainer.appendChild(span1);
        infocontainer.appendChild(span2);
        infocontainer.appendChild(dd1);
        postcontent.appendChild(imagcontainer);
        postcontent.appendChild(infocontainer);
        newpo.appendChild(postcontent);
        main.appendChild(newpo);

        clear();
        sellmodal.style.display = 'none';
    }
});

function clear() {
    potextwords = '';
    pophotowords = '';
    popricewords = '';
    poidwords = '';
    podeswords = '';
    sellmodal.style.display = 'none';
    backdrop.style.display = 'none';
}

//For close the second page or cancel items
var modalclose = document.getElementById('modal-close');
var modalcancel = document.getElementById('modal-cancel');

modalclose.addEventListener('click', function sell(Event) {
    clear();
})
modalcancel.addEventListener('click', function sell(Event) {
    clear();
    sellmodal.style.display = 'none';
    backdrop.style.display = 'none';
})

//Remove the items
var deletebutton = document.getElementsByClassName('button');

deletebutton.addEventListener('click', function listener(event) {
    deletebutton.parentNode.remove(div);
});