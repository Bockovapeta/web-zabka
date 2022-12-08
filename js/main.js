/*var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');


//pozoruje klik na našem tlačítku
button.addEventListener('click', function () {
    modal.classList.add('modal_active');
}
)

close.addEventListener('click', function () {
    modal.classList.remove('modal_active');
}
)

*/


// Scrolling 
$(document).on('click', 'a[href^="#"]', function (e) {
    // target element id
    let id = $(this).attr('href');

    // target element
    let $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    let pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({ scrollTop: pos });
});



$(document).ready(function () {



    //(napojení knihvny wow.js) napojení souboru wow js pro animaci při scrollování na daný element na stránce

    new WOW().init();



    $('.sliders').slick({
        slidesToShow: 3,
        prevArrow: $('.katalogy-arrows__left'),
        nextArrow: $('.katalogy-arrows__right'),

        //odebrání zobrazených obrázků pro užší prostředí např. tablety a pro mobily
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1,

                }
            },


        ]
    });



    // modální okno
    //var button = $('#button');
    //var modal = $('#modal');
    //var close = $('#close');
    // button.on('click', function () {
    //    modal.addClass('modal_active');
    // });

    // close.on('click', function () {
    //     modal.removeClass('modal_active');
    // });


    // validace formulářů

    //
    //   $('#brief-form').validate({
    //       rules: {
    //           name: required,
    //         email: {
    //           required: true,
    //         email: true
    //            },
    //
    //          zprava: "required"
    //     },
    //    messages: {
    //       name: "Uveďte vaše jméno",
    //      email: "Uveďte Váš email",
    //     zprava: "Napište zprávu"
    //        }
    //   });














    //Create an anchor tag



    //přidání rolování na slider - obrázky se nám po kliknutí budou přebíhat z jednoho na druhý
    $('.slider').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),

        //odebrání zobrazených obrázků pro užší prostředí např. tablety a pro mobily
        //  responsive: [
        //       {
        //         breakpoint: 1300,
        //       settings: {
        //         slidesToShow: 2,
        //
        //              }
        //        },
        //      {
        //        breakpoint: 850,
        ///      settings: {
        //       slidesToShow: 1,
        //
        //              }
        //        },


        //  ]
    });

});