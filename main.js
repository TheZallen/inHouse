$( document ).ready(function() {
	var $container = $('#containerDorm');
	// init
	$container.isotope({
	  // options
	  itemSelector: '.item',
	  layoutMode: 'fitRows',
	  getSortData: {
	    name: '.name',
	    ac: '.ac',
	    dining: '.dining',
	    north: '.north',
	    south: '.south',
	    small: '.small',
	    medium: '.medium',
	    large: '.large',
	    single: '.single',
	    double: '.double',
	    weight: function( itemElem ) {
	      var weight = $( itemElem ).find('.weight').text();
	      return parseFloat( weight.replace( /[\(\)]/g, '') );
	    }
	  }
	});

	$container.isotope({ sortBy : 'name' });

	// sort items on button click
	$('#sorts').on( 'click', 'button', function() {
	  var sortValue = $(this).attr('data-sort-value');
	  $container.isotope({ sortBy: sortValue });
	});
});
