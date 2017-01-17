var yearSliderStartPos0, yearSliderEndPos0, yearSliderStartPos1, yearSliderEndPos1;
var daysSliderStartPos0, daysSliderEndPos0, daysSliderStartPos1, daysSliderEndPos1;
var csHereSliderStartPos0, csHereSliderEndPos0, csHereSliderStartPos1, csHereSliderEndPos1;
var csOsmSliderStartPos0, csOsmSliderEndPos0, csOsmSliderStartPos1, csOsmSliderEndPos1;
var pctCsHereSliderStartPos0, pctCsHereSliderEndPos0, pctCsHereSliderStartPos1, pctCsHereSliderEndPos1;


function createSliders(){

	yearSliderStartPos0 = yearSliderEndPos0 = yearSliderStartPos1 = yearSliderEndPos1 = '';
	daysSliderStartPos0 = daysSliderEndPos0 = daysSliderStartPos1 = daysSliderEndPos1 = '';
	csHereSliderStartPos0 = csHereSliderEndPos0 = csHereSliderStartPos1 = csHereSliderEndPos1 = '';
	csOsmSliderStartPos0 = csOsmSliderEndPos0 = csOsmSliderStartPos1 = csOsmSliderEndPos1 = '';
	pctCsHereSliderStartPos0 = pctCsHereSliderEndPos0 = pctCsHereSliderStartPos1 = pctCsHereSliderEndPos1 = '';
	
	// Days active here slider
	$( "#slider-daysactive" ).slider({
		range: true,
		min: minDaysActive,
		max: maxDaysActive,
		step: 1,
		values: [ minDaysActive, maxDaysActive ],
		slide: function( event, ui ) {
		$( "#daysactive" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		}
	});
	$( "#daysactive" ).val( $( "#slider-daysactive" ).slider( "values", 0 ) +
		" - " + $( "#slider-daysactive" ).slider( "values", 1 ) 
	);
	
	// This code necessary to handle the fact that slider stop/change event fires twice for some reason
	// Code pattern is repeated for all sliders
	daysSliderStartPos0 = $("#slider-daysactive").slider("values", 0);
	daysSliderStartPos1 = $("#slider-daysactive").slider("values", 1);
	
	$("#slider-daysactive").on("slidestop", function(event, ui) {
        daysSliderEndPos0 = ui.values[0];
		daysSliderEndPos1 = ui.values[1];

        if (daysSliderStartPos0 != daysSliderEndPos0 || daysSliderStartPos1 != daysSliderEndPos1) {
           minDaysActive = $( "#slider-daysactive" ).slider( "values", 0 );
	       maxDaysActive = $( "#slider-daysactive" ).slider( "values", 1 );
	       updateSmallMultiples();
        }

        daysSliderStartPos0 = daysSliderEndPos0;
		daysSliderStartPos1 = daysSliderEndPos1;
    });
	
	
	// Changesets here slider
	$( "#slider-changesetshere" ).slider({
		range: true,
		min: minChangesetsHere,
		max: maxChangesetsHere,
		step: 1,
		values: [ minChangesetsHere, maxChangesetsHere ],
		slide: function( event, ui ) {
		$( "#changesetshere" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		}
	});
	$( "#changesetshere" ).val( $( "#slider-changesetshere" ).slider( "values", 0 ) +
		" - " + $( "#slider-changesetshere" ).slider( "values", 1 ) 
	);

	csHereSliderStartPos0 = $("#slider-changesetshere").slider("values", 0);
	csHereSliderStartPos1 = $("#slider-changesetshere").slider("values", 1);
	
	$("#slider-changesetshere").on("slidestop", function(event, ui) {
        csHereSliderEndPos0 = ui.values[0];
		csHereSliderEndPos1 = ui.values[1];

        if (csHereSliderStartPos0 != csHereSliderEndPos0 || csHereSliderStartPos1 != csHereSliderEndPos1) {
           minChangesetsHere = $( "#slider-changesetshere" ).slider( "values", 0 );
	       maxChangesetsHere = $( "#slider-changesetshere" ).slider( "values", 1 );
	       updateSmallMultiples();
        }

        csHereSliderStartPos0 = csHereSliderEndPos0;
		csHereSliderStartPos1 = csHereSliderEndPos1;
    });
	
	
	
	// Changesets in OSM slider
	var changesetsStepValues = [1,2,3,4,5,10,20,30,40,50,100,200,300,400,500,1000,2000,3000,4000,5000,10000,20000,30000,40000,50000,100000,200000,300000,400000,500000,1000000];
	$( "#slider-changesetsosm" ).slider({
		range: true,
		min: 0,
		max: 30,
		step: 1,
		values: [ 0, 30 ],
		slide: function( event, ui ) {
		    $( "#changesetsosm" ).val( changesetsStepValues[ui.values[ 0 ]] + " - " + changesetsStepValues[ui.values[ 1 ]]);
        }
	});
	$( "#changesetsosm" ).val( changesetsStepValues[$( "#slider-changesetsosm" ).slider( "values", 0 )] +
		" - " + changesetsStepValues[$( "#slider-changesetsosm" ).slider( "values", 1 )] 
	);
	
	csOsmSliderStartPos0 = $("#slider-changesetsosm").slider("values", 0);
	csOsmSliderStartPos1 = $("#slider-changesetsosm").slider("values", 1);
	
	$("#slider-changesetsosm").on("slidestop", function(event, ui) {
        csOsmSliderEndPos0 = ui.values[0];
		csOsmSliderEndPos1 = ui.values[1];

        if (csOsmSliderStartPos0 != csOsmSliderEndPos0 || csOsmSliderStartPos1 != csOsmSliderEndPos1) {
           minChangesetsOsm = changesetsStepValues[$( "#slider-changesetsosm" ).slider( "values", 0 )];
	       maxChangesetsOsm = changesetsStepValues[$( "#slider-changesetsosm" ).slider( "values", 1 )];
	       updateSmallMultiples();
        }

        csOsmSliderStartPos0 = csOsmSliderEndPos0;
		csOsmSliderStartPos1 = csOsmSliderEndPos1;
    });
	
	
	
	
	// Pct changesets here slider
	var pctChangesetsStepValues = [0,0.0001,0.001,0.01,0.1,1,10,20,30,40,50,60,70,80,90,100];
	$( "#slider-pctchangesetsosm" ).slider({
		range: true,
		min: 0,
		max: 15,
		step: 1,
		values: [ 0, 15 ],
		slide: function( event, ui ) {
		    $( "#pctchangesetsosm" ).val( pctChangesetsStepValues[ui.values[ 0 ]] + " - " + pctChangesetsStepValues[ui.values[ 1 ]]);
        }
	});
	$( "#pctchangesetsosm" ).val( pctChangesetsStepValues[$( "#slider-pctchangesetsosm" ).slider( "values", 0 )] +
		" - " + pctChangesetsStepValues[$( "#slider-pctchangesetsosm" ).slider( "values", 1 )] 
	);
	
	pctCsHereSliderStartPos0 = $("#slider-pctchangesetsosm").slider("values", 0);
	pctCsHereSliderStartPos1 = $("#slider-pctchangesetsosm").slider("values", 1);
	
	$("#slider-pctchangesetsosm").on("slidestop", function(event, ui) {
        pctCsHereSliderEndPos0 = ui.values[0];
		pctCsHereSliderEndPos1 = ui.values[1];

        if (pctCsHereSliderStartPos0 != pctCsHereSliderEndPos0 || pctCsHereSliderStartPos1 != pctCsHereSliderEndPos1) {
           minPctChangesetsHere = pctChangesetsStepValues[$( "#slider-pctchangesetsosm" ).slider( "values", 0 )];
		   maxPctChangesetsHere = pctChangesetsStepValues[$( "#slider-pctchangesetsosm" ).slider( "values", 1 )];
	       updateSmallMultiples();
        }

        pctCsHereSliderStartPos0 = pctCsHereSliderEndPos0;
		pctCsHereSliderStartPos1 = pctCsHereSliderEndPos1;
    });
	
	
	// Years active slider
	$( "#slider-yearsactive" ).slider({
		range: true,
		min: minDataYear,
		max: maxDataYear,
		step: 1,
		values: [ minDataYear, maxDataYear ],
		slide: function( event, ui ) {
		$( "#yearsactive" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		}
	});
	$( "#yearsactive" ).val( $( "#slider-yearsactive" ).slider( "values", 0 ) +
		" - " + $( "#slider-yearsactive" ).slider( "values", 1 ) 
	);
	
	yearSliderStartPos0 = $("#slider-yearsactive").slider("values", 0);
	yearSliderStartPos1 = $("#slider-yearsactive").slider("values", 1);
	
	$("#slider-yearsactive").on("slidestop", function(event, ui) {
        yearSliderEndPos0 = ui.values[0];
		yearSliderEndPos1 = ui.values[1];

        if (yearSliderStartPos0 != yearSliderEndPos0 || yearSliderStartPos1 != yearSliderEndPos1) {
           minFilterYear = $( "#slider-yearsactive" ).slider( "values", 0 );
	       maxFilterYear = $( "#slider-yearsactive" ).slider( "values", 1 );
	       updateSmallMultiples();
        }

        yearSliderStartPos0 = yearSliderEndPos0;
		yearSliderStartPos1 = yearSliderEndPos1;
    });
	
}
		