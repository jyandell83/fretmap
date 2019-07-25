const $submitRootBtn = $('#submit-root');
let $liObject = $('li');


$submitRootBtn.on('click', ()  =>  {
    $liObject.removeClass('red');
    let currentRoot = $('#root-select').val();
    $('.'+currentRoot).toggleClass('red');
});