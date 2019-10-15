const addToList = function($list, thing) {
  const $thingLi = $('<li>')
    .html(thing)
    .addClass('fav-thing list-group-item');
  addCrossOffLink($thingLi);
  $list.append($thingLi);
};

const addCrossOffLink = function($li) {
  const $crossOffLink = $('<span>')
    .html(' cross off')
    .addClass('cross-off');
  $li.append($crossOffLink);
};

$(function() {
  const $thingList = $('#fav-list');

  $('.fav-thing').toArray().forEach(function(li) {
    addCrossOffLink($(li));
  });

  $('#new-thing-button').on('click', function(event) {
    event.preventDefault();
    const newThing = $('#new-thing').val();
    if (newThing === '') {
      alert('You must type in a value!');
    } else {
      addToList($thingList, newThing);
      $('#new-thing').val('');
    }
  });

  $thingList.on('click', '.fav-thing .cross-off', function() {
    const $thingItem = $(this).parent();
    $thingItem.addClass('crossed-off');
    $(this).html('');
  });

  // Refactor the following two event listeners into a single event listener for multiple events.
  $thingList.on('mouseenter', 'li', function(event) {
    $(this).removeClass('inactive');
    $(this)
      .siblings()
      .addClass('inactive');
  });

  $thingList.on('mouseleave', 'li', function(event) {
    $(this)
      .siblings()
      .removeClass('inactive');
  });
});
