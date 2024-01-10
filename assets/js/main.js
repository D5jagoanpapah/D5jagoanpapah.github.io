$(document).ready(function () {

    // animasi nav
    $(".sidebar nav li a").click(function () {
        $(".sidebar nav li a").removeClass('active');
        $(this).addClass('active');
    });


    $('.sidebar-toggle').click(function(){
        $(this).toggleClass('active');
        $('.homepage .sidebar').toggleClass('active')
    })

    // animasi text
    new Typed('#typed', {
        strings: ["Saya adalah", 'siswa dari', 'SMK Bina Mandiri Multimedia'],
        typeSpeed: 50,
    });

    // Init Image Filter

    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            // use $(this) to get item element
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        $(this).addClass('active').siblings().removeClass('active')
        var filterValue = $(this).attr('data-filter');
        // use filter function if value matches
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({ filter: filterValue });
    });

});

$(window).on('load',function(){
    $(".loading").addClass('endLoading').fadeOut(2000)
})