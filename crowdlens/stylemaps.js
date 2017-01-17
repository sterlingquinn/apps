 // Contains the style maps for the selected and unselected nodes and ways
  
  // Set up study area boundary style
  var boundsStyle = new OpenLayers.Style(
       {
	     strokeWidth: 1,
		 strokeDashstyle: "dash",
		 fillOpacity: 0
	   }
  );
  
  var boundsStyleMap = new OpenLayers.StyleMap({'default': boundsStyle});
  
  // Set up node style
  var nodeStyle = new OpenLayers.Style(
   // the first argument is a base symbolizer
   // all other symbolizers in rules will extend this one
   {
	  pointRadius: 2.5, // sized according to type attribute
	  fillColor: "#4E4E4E",
	  strokeColor: "#4E4E4E"
   },
   {
	  rules: [
	    new OpenLayers.Rule({
		     maxScaleDenominator: 50000,
			 symbolizer: {
			   pointRadius: 3
			 }
		}),
		new OpenLayers.Rule({
		     minScaleDenominator: 50000,
			 symbolizer: {
			   pointRadius: 2
			 }
		})
	  ]
   }
  );
  
  // Set up node style
  var selectedNodeStyle = new OpenLayers.Style(
   // the first argument is a base symbolizer
   // all other symbolizers in rules will extend this one
   {
	  pointRadius: 6, // sized according to type attribute
	  fillColor: "#ffff00",
	  strokeColor: "#ffff00"
   },
   {
	  rules: [
	    new OpenLayers.Rule({
		     maxScaleDenominator: 50000,
			 symbolizer: {
			   pointRadius: 6
			 }
		}),
		new OpenLayers.Rule({
		     minScaleDenominator: 50000,
			 symbolizer: {
			   pointRadius: 4
			 }
		})
	  ]
   }
  );

  var nodeStyleMap = new OpenLayers.StyleMap({'default': nodeStyle, 'select': selectedNodeStyle});

  // Set up way style
  var wayStyle = new OpenLayers.Style(
   // the first argument is a base symbolizer
   // all other symbolizers in rules will extend this one
   // Green: "#2D8A00"
   {
	  strokeWidth: 2.5,
	  strokeColor: "#EB5200"
   }
  );

  var selectedWayStyle = new OpenLayers.Style(
   // the first argument is a base symbolizer
   // all other symbolizers in rules will extend this one
   {
	  strokeWidth: 5,
	  strokeColor: "#ffff00"
   }
  );

  var wayStyleMap = new OpenLayers.StyleMap({'default': wayStyle, 'select': selectedWayStyle});
  
  // Set up way style
  var allWayStyle = new OpenLayers.Style(
   // the first argument is a base symbolizer
   // all other symbolizers in rules will extend this one
   // Green: "#2D8A00"
   {
	  strokeWidth: 0,
	  strokeColor: "#EB5200"
   },
	// Impossible filter, ensuring this layer stays blank
   {
   rules: [
	  new OpenLayers.Rule(
		 {
		   filter: new OpenLayers.Filter.Comparison({
			type: OpenLayers.Filter.Comparison.EQUAL_TO,
			property: "UID",
			value: 0 })
		 })
   ]
   }
  );


  var allWayStyleMap = new OpenLayers.StyleMap({'default': allWayStyle});
  
    // Set up way style
  var allNodeStyle = new OpenLayers.Style(
   // the first argument is a base symbolizer
   // all other symbolizers in rules will extend this one
   // Green: "#2D8A00"
   {
	  pointRadius: 0, // sized according to type attribute
	  fillColor: "#4E4E4E",
	  strokeColor: "#4E4E4E"
   },
	// Impossible filter, ensuring this layer stays blank
   {
   rules: [
	  new OpenLayers.Rule(
		 {
		   filter: new OpenLayers.Filter.Comparison({
			type: OpenLayers.Filter.Comparison.EQUAL_TO,
			property: "UID",
			value: 0 })
		 })
   ]
   }
  );

  var allNodeStyleMap = new OpenLayers.StyleMap({'default': allNodeStyle});
