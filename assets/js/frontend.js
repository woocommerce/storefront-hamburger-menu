( function( $ ) {
	$( window ).load( function() {
		$( '.main-navigation .handheld-navigation, .main-navigation div.menu' ).prepend( '<span class="shm-close">' + shm_i18n.close + '</span>' );
		$( '.shm-close' ).on( 'click', function() {
			$( '.menu-toggle' ).trigger( 'click' );
		} );
	} );
} )( jQuery );