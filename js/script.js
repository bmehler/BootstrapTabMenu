$( document ).ready(function() {
   $('.nav-tabs > li').hover(function () {    
    var id = $(this).index("li");
    var color = $(this).css('background-color');   
    
    if (!$('.tab-pane').hasClass("active")) {
        $('.tab-pane:eq(' + id + ')').addClass('active');
    } 
    
    $(this).find('a').tab('show');
    
    $('li:eq(' + id + ')').animate({
        height: 110
    }, 1);
    
    $('li').not(':eq(' + id + ')').animate({
        height: 100
    }, 1);
    
    $('.container').css({
        'border-color': color,
            'border-width': '3px',
            'border-top-color': color,
            'border-top-width': '7px'    
    });    
}); 

$('.tab-content').bind('mouseenter', function(e) { 
        $(this).find('a').tab('show');   
    }).bind('mouseleave', function(e) {   
        $('.tab-pane').removeClass('active');    
        $('.nav-tabs > li').animate({
            height: 100
        }, 1);    
    });
});