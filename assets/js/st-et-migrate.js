( function( $ ){
	"use strict";

	$( document ).ready(function(){
		$('#wpmtst_import_testimonials').click(function(evt){
			evt.preventDefault();
			$( this ).addClass( 'updating-message' );
            var delete_imported = 0;
            var skip_imported = 0;
            if( $('#wpmtst-migrator-delete-imported').is(":checked") ){
                delete_imported = 1;
            }
            if( $('#wpmtst-migrator-skip-imported').is(":checked") ){
                skip_imported = 1;
            }
			$.ajax({
			  	method: "POST",
			  	url: wpmtst.ajaxUrl,
			  	data :
                { 
                    action: "wpmtst_import_from_easy_testimonials",
                    nonce: wpmtst.nonce,
                    skip_imported: skip_imported,
                    delete_imported: delete_imported
                },
			}).done(function( response ) {
                if( response['success'] ){
                    $( '#wpmtst-import-response').removeClass('wpmtst-warning');
                    $( '#wpmtst-import-response').addClass('wpmtst-success');
                }else{
                    $( '#wpmtst-import-response').removeClass('wpmtst-success');
                    $( '#wpmtst-import-response').addClass('wpmtst-warning');
                }
                $( '#wpmtst-import-response').html( response['data'] );
                $( '#wpmtst-import-response').show();
		    	$( '#wpmtst_import_testimonials' ).removeClass( 'updating-message' );
		  	});
		});
	});

})( jQuery );