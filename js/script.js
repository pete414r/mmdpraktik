var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides ");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none ";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block ";
    setTimeout(carousel, 2000);
}

$(document).ready(function () {
    $.stellar({
        horizontalScrolling: true,
        verticalOffset: 100
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//Lightbox
$('a').nivoLightbox();

/********LOGO*ANIMATION-***/


var insta = (function () {

    var OFFSET_MARGIN = 4;

    var supports3DTransforms = 'WebkitPerspective' in document.body.style ||
        'MozPerspective' in document.body.style ||
        'msPerspective' in document.body.style ||
        'OPerspective' in document.body.style ||
        'perspective' in document.body.style;


    function bind() {
        var elementLeft = 0,
            elementWidth = 0,
            elementChildren = [];

        if (supports3DTransforms) {

			[].slice.call(document.querySelectorAll('.insta')).forEach(function (element, i) {

                //don't bind, same element twice
                if (element.classList.contains('insta-activated') === false) {
                    element.classList.add('insta-activated');

                    function onMouseOver(event) {
                        updateState();
                        addMargin();
                    }

                    function onMouseMove(event) {
                        update(event.clientX);
                    }

                    function onMouseOut(event) {
                        removeMargin();
                    }

                    function onTouchStart(event) {
                        updateState();
                        addMargin();

                        update(event.touches[0].clientX);

                        element.classList.add('touching');

                        document.addEventListener('touchmove', onTouchMove, false);
                        document.addEventListener('touchend', onTouchEnd, false);
                    }

                    function onTouchMove(event) {
                        update(event.touches[0].clientX);

                        event.preventDefault();
                    }

                    function onTouchEnd(event) {
                        removeMargin();

                        element.classList.remove('touching');

                        document.removeEventListener('touchmove', onTouchMove, false);
                        document.removeEventListener('touchend', onTouchEnd, false);
                    }

                    function updateState() {
                        elementLeft = element.offsetLeft;
                        elementWidth = element.offsetWidth;
                        elementChildren = [].slice.call(element.children);
                    }

                    function update(x) {
                        var present = Math.floor((x - elementLeft) / elementWidth * elementChildren.length);
                        present = Math.max(Math.min(present, elementChildren.length - 1), 0);

                        elementChildren.forEach(function (child, i) {

                            if (i === present) {
                                child.classList.add('present');
                            } else {
                                child.classList.remove('present');
                            }

                        });
                    }

                    function addMargin() {
                        elementChildren.forEach(function (child, i) {

                            child.style.marginLeft = (i * OFFSET_MARGIN) + 'px';

                        });
                    }

                    function removeMargin() {
                        elementChildren.forEach(function (child, i) {

                            child.style.marginLeft = 0;

                        });
                    }

                    if ('ontouchstart' in window) {
                        element.addEventListener('touchstart', onTouchStart, false);
                    } else {
                        element.addEventListener('mouseover', onMouseOver, false);
                        element.addEventListener('mouseout', onMouseOut, false);
                        element.addEventListener('mousemove', onMouseMove, false);
                    }

                }

            });

[].slice.call(document.querySelectorAll('.insta_lille')).forEach(function (element, i) {

                //don't bind, same element twice
                if (element.classList.contains('insta-activated') === false) {
                    element.classList.add('insta-activated');

                    function onMouseOver(event) {
                        updateState();
                        addMargin();
                    }

                    function onMouseMove(event) {
                        update(event.clientX);
                    }

                    function onMouseOut(event) {
                        removeMargin();
                    }

                    function onTouchStart(event) {
                        updateState();
                        addMargin();

                        update(event.touches[0].clientX);

                        element.classList.add('touching');

                        document.addEventListener('touchmove', onTouchMove, false);
                        document.addEventListener('touchend', onTouchEnd, false);
                    }

                    function onTouchMove(event) {
                        update(event.touches[0].clientX);

                        event.preventDefault();
                    }

                    function onTouchEnd(event) {
                        removeMargin();

                        element.classList.remove('touching');

                        document.removeEventListener('touchmove', onTouchMove, false);
                        document.removeEventListener('touchend', onTouchEnd, false);
                    }

                    function updateState() {
                        elementLeft = element.offsetLeft;
                        elementWidth = element.offsetWidth;
                        elementChildren = [].slice.call(element.children);
                    }

                    function update(x) {
                        var present = Math.floor((x - elementLeft) / elementWidth * elementChildren.length);
                        present = Math.max(Math.min(present, elementChildren.length - 1), 0);

                        elementChildren.forEach(function (child, i) {

                            if (i === present) {
                                child.classList.add('present');
                            } else {
                                child.classList.remove('present');
                            }

                        });
                    }

                    function addMargin() {
                        elementChildren.forEach(function (child, i) {

                            child.style.marginLeft = (i * OFFSET_MARGIN) + 'px';

                        });
                    }

                    function removeMargin() {
                        elementChildren.forEach(function (child, i) {

                            child.style.marginLeft = 0;

                        });
                    }

                    if ('ontouchstart' in window) {
                        element.addEventListener('touchstart', onTouchStart, false);
                    } else {
                        element.addEventListener('mouseover', onMouseOver, false);
                        element.addEventListener('mouseout', onMouseOut, false);
                        element.addEventListener('mousemove', onMouseMove, false);
                    }

                }

            });

        }

    }
    bind();

    return {
        bind: bind
    };

})();




window.addEventListener("load", start);

function start() {
    console.log("Start programmet");

    $.getJSON("../json/kort.json", vistekstLuften);
}

function vistekstLuften(listen) {
    console.table(listen);
    listen.forEach(vistekstUnion);
}

function vistekstUnion(tekst)  {
    // teksten tekst templ

    var teksten = document.querySelector(".tekstenunion_template").content.cloneNode(true);
    teksten.querySelector(".data_billede_reg").src = "img/" + tekst.billede + "_tegnebræt_1.svg";
    teksten.querySelector(".aclass").href = tekst.beskrivelse;
    teksten.querySelector(".aclass").target = "_blank";
    teksten.querySelector(".aclass").innerHTML = tekst.beskrivelse;
    document.querySelector(".teksten_union").appendChild(teksten);

    var teksten = document.querySelector(".tekstenunion_template_lille").content.cloneNode(true);
    teksten.querySelector(".data_billede_reg_lille").src = "https://scontent.cdninstagram.com/vp/" + tekst.http + "_n.jpg";
    document.querySelector(".teksten_union_lille").appendChild(teksten);
}

/************FB**like*LINK**Facebook****************/

(function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v2.11';
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/************FB**like*LINK**slut****************/

/**************SLOW**SCROLL***https://www.w3schools.com***************/

$(document).ready(function () {
	//Ved klik på a link
	$("a").on('click', function (event) {

		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			// (600) angiver hvor mange milisekunder det tager at scroole
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 600, function () {
				window.location.hash = hash;
			});
		}
	});
});

/**************SLOW**SCROLL*

/***********timeout***preload**page**http://w3school.com**/
var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 800);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

/**************preload**page****/
