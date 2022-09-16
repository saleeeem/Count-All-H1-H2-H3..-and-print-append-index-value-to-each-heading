var headings = jQuery('h2');

for( var i = 1; i < headings.length; i++ ) {
        jQuery( headings[i] ).append([i] );
     //alert(headings['i']);
}