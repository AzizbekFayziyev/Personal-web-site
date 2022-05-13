$(document).ready(function () {
    $('#info-btn2').on('click', () => {
        $('#info-btn1').removeClass('btn-1');
        $('#info-btn1').removeClass('main-shadow');
        $('#info-btn1').addClass('btn');
        $('#info-btn2').addClass('btn-1');
        $('#info-btn2').addClass('main-shadow');
        $('#skills').slideUp();
        $('#education').slideDown();
    });

    $('#info-btn1').on('click', () => {
        $('#skills').slideDown();
        $('#education').slideUp();
        $('#info-btn1').addClass('btn-1');
        $('#info-btn1').addClass('main-shadow');
        $('#info-btn1').removeClass('btn');
        $('#info-btn2').removeClass('btn-1');
        $('#info-btn2').removeClass('main-shadow');
    });

    $('#personal').on('click', ()=>{
        $('.personal').show(1000);
        $('.game').hide(500);
        $('.edupro').hide(500);
        $('.other').hide(500);
    });

    $('#game').on('click', ()=>{
        $('.personal').hide(500);
        $('.game').show(1000);
        $('.edupro').hide(500);
        $('.other').hide(500);
    });

    $('#edupro').on('click', ()=>{
        $('.personal').hide(500);
        $('.game').hide(500);
        $('.edupro').show(600);
        $('.other').hide(1000);
    });

    $('#other').on('click', ()=>{
        $('.personal').hide(500);
        $('.game').hide(500);
        $('.edupro').hide(500);
        $('.other').show(1000);
    });

    $('#all').on('click', ()=>{
        $('.personal').show(1000);
        $('.game').show(1000);
        $('.edupro').show(1000);
        $('.other').show(1000);
    });

    $('#dark').on('click', ()=>{
      $('#light').show();
      $('#dark').hide();
      $('h1').css('color','whitesmoke');
      $('h2').css('color','#ddd');
      $('body').css('background','rgb(44, 46, 49)');
      $('.card').addClass('main-shadow-dark');
      $('button').addClass('main-shadow-dark');
      $('input').addClass('main-shadow-dark');
      $('textarea').addClass('main-shadow-dark');
      $('.work-card').addClass('main-shadow-nohover-dark');
      $('.inst').removeClass('main-shadow-inset');
      $('.inst').addClass('main-shadow-inset-dark');
      $('.darkModeOn').addClass('main-shadow-dark');
      $('.mobile').css('background','rgb(44, 46, 49)');
      $('.menu-items').addClass('main-shadow-dark');
      $('.menu-items').css('color','white');
      $('.close-btn').css('color','white');
    });

    $('#light').on('click', ()=>{
        $('#light').hide();
        $('#dark').show();
        $('h1').css('color','rgb(29, 27, 27)');
        $('h2').css('color','rgb(78, 78, 78)');
        $('body').css('background','white');
        $('.card').removeClass('main-shadow-dark');
        $('input').removeClass('main-shadow-dark');
        $('button').removeClass('main-shadow-dark');
        $('textarea').removeClass('main-shadow-dark');
        $('.work-card').removeClass('main-shadow-nohover-dark');
        $('.inst').addClass('main-shadow-inset');
      $('.inst').removeClass('main-shadow-inset-dark');
      $('.darkModeOn').removeClass('main-shadow-dark');
      $('.mobile').css('background','white');
      $('.menu-items').removeClass('main-shadow-dark');
      $('.menu-items').css('color','rgb(29, 27, 27)');
      $('.close-btn').css('color','rgb(29, 27, 27)');
      });

});


window.addEventListener('DOMContentLoaded', function () {

    let mobile = document.querySelector('#mob-menu'),
        menuBtn = document.querySelector('#menu-btn'),
        closeBtn = document.querySelector('#close-menu'),
        home = document.querySelector('#home'),
        header = document.querySelector('header');

    menuBtn.addEventListener('click', () => {
        mobile.style.visibility = 'visible';
        mobile.style.transform = 'translateY(0)';
        home.style.visibility = 'hidden';
        header.style.visibility = 'hidden';
    });

    closeBtn.addEventListener('click', () => {
        mobile.style.visibility = 'hidden';
        mobile.style.transform = 'translateY(-100%)';
        home.style.visibility = 'visible';
        header.style.visibility = 'visible';
    });

});