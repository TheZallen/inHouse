$( document ).ready(function() {
	var $container = $('#containerDorm');
	var dorms = [
	{	
		"name":"Elder"
		"ac": true,
		"dining": true,
		"north": true,
		"south": false,
		"small": false,
		"medium": false,
		"large": true,
		"single": false,
		"double": true 
	},
	{

	}
	];
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
	$('#sorts').on( 'click', 'input', function() {

	  var sortValue = $(this).attr('data-sort-value');
	  calculateDormRatings(sortValue);
	  $container.isotope({ sortBy: sortValue });
	});

	function bindSomeCheckboxes() {
	    var score=0;
	    var checkboxes = {
	        "checked1" : 1,
	        "checked2" : 2,
	        "checked3" : 3,
	        "checked4" : 4,
	        "checked5" : 5,
	        "checked6" : 6,
	        "checked7" : 7,
	        "checked8" : 8,
	        "checked9" : 9,
	        "checked0" : 0
	    };

	    var arrayOfIds = []; // to store array of ids

	    $.each(checkboxes,function(key, val) {  // populate array with ids
	        arrayOfIds.push( key );
	    });

	       // create a selector of the IDs
	    $( "#" + arrayOfIds.join(',#') ).change(function() {
	          // alert the score
	        alert( checkboxes[ this.id ] );
	        if ( this.checked ) {
	            //do something when it is checked
	        } else {
	            //do something else
	        }
	    });
	} 
});
