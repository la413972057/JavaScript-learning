/******************************************************************************
  Our plugin code comes first in this document. Normally, plugins would
  appear in separate files named jquery.plugin-name.js, but for our examples
  it's convenient to place this plugin code in the same JavaScript file as
  the code that calls it.
******************************************************************************/

/******************************************************************************
  $.sum()
  Return the total of the numeric values in an array/object.
******************************************************************************/
(function($) {
  $.sum = function(array) {
    var total = 0;

    $.each(array, function(index, value) {
      value = $.trim(value);
      value = parseFloat(value) || 0;

      total += value;
    });
    return total;
  };
})(jQuery);


/******************************************************************************
  End plugin code; begin custom script code.
******************************************************************************/
$(document).ready(function() {
  var $inventory = $('#inventory tbody');
  var quantities = $inventory.find('td:nth-child(2)')
    .map(function(index, qty) {
        //console.log($(qty).text());
      return $(qty).text();
    }).get();
  //console.log($inventory.find('td:nth-child(2)').map(function(index, qty) {
  //  //console.log($(qty).text());
  //  return $(qty).text();
  //}));

  var sum = $.sum(quantities);
  $('#sum').find('td:nth-child(2)').text(sum);
});
