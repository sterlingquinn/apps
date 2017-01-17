// Builds a simple HTML-based 'tag cloud' out of tag-frequency pairs in a JavaScript object
function buildTagCloud(tags){
  var tagCloudHtml = '<span style="font-size:medium;font-weight:bold;color:#92c4f2;">Tags:&nbsp;</span>';
  var tagCount = 0;
  
  // Loop through all tags in the object
  for (var p in tags){
    if (tags.hasOwnProperty(p)){
	  tagCount += 1
	  var tagName = p;
	  var tagFreq = tags[p];
	  var fontSize = 'small';
	  
	  // Make the more frequent tags a larger size
	  if(tagFreq > 1000){
		fontSize = 'x-large';
	  }
	  else if(tagFreq > 100){
	    fontSize = 'large';
	  }
	  else if(tagFreq > 10){
	    fontSize = 'medium';
	  }
	  else{
	    fontSize = 'small';
	  }
	  
	  var tagHtml = '<span class="tagCloudItem" style="font-size:' + fontSize + ';" onclick="filterTags(this)">&nbsp;' + p + '&nbsp;&#8203;</span>';  // Unicode 0-character ensures line can break
	  tagCloudHtml += tagHtml;
	}
  }
  
  // Handle the case where there are no tags
  if (tagCount == 0){
    tagCloudHtml += '<span style="font-size:small;">(No tags applied by this user here)</span>'
  }
  
  // Return the HTML
  return tagCloudHtml; 
}

// Clean up click tagged text and force selection box change
function filterTags(span){
   var currentTag = span.textContent.replace(/\s/g, '');
   currentTag = currentTag.replace(/\u200B/g,'');
   $('#selTag option[value=' + currentTag.replace(':','_colon_') + ']').prop("selected", "selected").change();
  
}