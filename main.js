$( document ).ready(function() {
	var $container = $('#containerDorm');
	var dorms = [
	{	
		"name":"elder",
		"ac": true,
		"dining": true,
		"north": true,
		"south": false,
		"small": false,
		"medium": false,
		"large": true,
		"single": false,
		"double": true,
		"rating": 0
	},
	{
		"name":"bobb",
		"ac": true,
		"dining": false,
		"north": true,
		"south": false,
		"small": false,
		"medium": false,
		"large": true,
		"single": false,
		"double": true,
		"rating": 0
	},
	{
		"name":"allison",
		"ac": true,
		"dining": true,
		"north": false,
		"south": true,
		"small": false,
		"medium": false,
		"large": true,
		"single": false,
		"double": true,
		"rating": 0
	},
	{
		"name":"ayers",
		"ac": true,
		"dining": false,
		"north": true,
		"south": false,
		"small": false,
		"medium": true,
		"large": false,
		"single": false,
		"double": true,
		"rating": 0
	}
	,{
		"name":"hinman",
		"ac": true,
		"dining": true,
		"north": false,
		"south": true,
		"small": false,
		"medium": false,
		"large": true,
		"single": false,
		"double": true,
		"rating": 0
	}
	,{
		"name":"plex",
		"ac": true,
		"dining": true,
		"north": false,
		"south": false,
		"small": false,
		"medium": false,
		"large": true,
		"single": true,
		"double": false,
		"rating": 0
	},
	{
		"name":"sargent",
		"ac": false,
		"dining": true,
		"north": true,
		"south": false,
		"small": false,
		"medium": true,
		"large": false,
		"single": false,
		"double": true,
		"rating": 0
	},
	{
		"name":"shepard",
		"ac": true,
		"dining": false,
		"north": false,
		"south": true,
		"small": false,
		"medium": true,
		"large": false,
		"single": true,
		"double": true,
		"rating": 0
	},
	{
		"name":"slivka",
		"ac": true,
		"dining": false,
		"north": true,
		"south": false,
		"small": false,
		"medium": true,
		"large": false,
		"single": true,
		"double": true,
		"rating": 0
	}
	];

	var filtersSelected = 0;
	var filterArr = [];

	bindSomeCheckboxes();
	// init
	$container.isotope({
	  // options
	  itemSelector: '.item',
	  layoutMode: 'fitRows',
	  getSortData: {
	    name: '.name',
	    rating: '.rating parseFloat'
	  }
	});

	$container.isotope({ sortBy : 'name' });

	// sort items on button click
	/*$('#sorts').on( 'click', 'input', function() {

	  var sortValue = $(this).attr('data-sort-value');
	  //calculateDormRatings(sortValue);
	  $container.isotope({ sortBy: sortValue });
	});*/

	function bindSomeCheckboxes() {
	    var score=0;
	    var checkboxes = {
	        "check2" : "north",
	        "check3" : "south",
	        "check4" : "dining",
	        "check5" : "ac",
	        "check6" : "small",
	        "check7" : "medium",
	        "check8" : "large",
	        "check9" : "single",
	        "check0" : "double"
	    };

	    var arrayOfIds = []; // to store array of ids

	    $.each(checkboxes,function(key, val) {  // populate array with ids
	        arrayOfIds.push( key );
	    });

	       // create a selector of the IDs
	    $( "#" + arrayOfIds.join(',#') ).change(function() {

	    	var selected = false;
	    	if ( this.checked ) {
	    		filterArr.push(this.id);
	            filtersSelected++;
	            selected = true;
	        } else {
	            filtersSelected--;
	            var index = filterArr.indexOf(this.id);
	            if (index > -1) {
				    filterArr.splice(index, 1);
				}
	        }
	        if (filtersSelected == 0){
	        	var arrayLength = dorms.length;
				for (var i = 0; i < arrayLength; i++) {
					dorms[i].rating = 0;
					$('#' + dorms[i].name + 'Rat').text("" + dorms[i].rating);
				}
	        	$container.isotope({ sortBy : 'name', sortAscending:true });
	        }else{
	        	calculateDormRatings(this.id, selected);
	        	$container.isotope('updateSortData').isotope();
	        	$container.isotope({ sortBy : 'rating', sortAscending:false });
	        }
	    });
	}
	function calculateDormRatings(filter, selected){
		var arrayLength = dorms.length;
		for (var i = 0; i < arrayLength; i++) {
			var score = 0;
			for (var k = 0; k < filterArr.length; k++){
				if (filterArr[k] == "check5" && dorms[i].ac){score++};
				if (filterArr[k] == "check4" && dorms[i].dining){score++};
				if (filterArr[k] == "check2" && dorms[i].north){score++};
				if (filterArr[k] == "check3" && dorms[i].south){score++};
				if (filterArr[k] == "check6" && dorms[i].small){score++};
				if (filterArr[k] == "check7" && dorms[i].medium){score++};
				if (filterArr[k] == "check8" && dorms[i].large){score++};
				if (filterArr[k] == "check9" && dorms[i].single){score++};
				if (filterArr[k] == "check0" && dorms[i].double){score++};
			}
		    dorms[i].rating = Math.round((score/filtersSelected)*100);
		  	$('#' + dorms[i].name + 'Rat').text("" + dorms[i].rating);
		}
	} 
});
