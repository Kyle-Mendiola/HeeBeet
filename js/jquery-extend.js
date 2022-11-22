// Function that returns the font (will mostly be for development only)
(function($) {
    $.fn.detectFont = function() {
        var fontfamily = $(this).css('font-family');
        var fonts = fontfamily.split(',');
        if ( fonts.length == 1 )
            return fonts[0];

        var element = $(this);
        var detectedFont = null;
        fonts.forEach( function( font ) {
            var clone = $('<span>wwwwwwwwwwwwwwwlllllllliiiiii</span>').css({'font-family': fontfamily, 'font-size':'70px', 'display':'inline', 'visibility':'hidden'}).appendTo('body');
            var dummy = $('<span>wwwwwwwwwwwwwwwlllllllliiiiii</span>').css({'font-family': font, 'font-size':'70px', 'display':'inline', 'visibility':'hidden'}).appendTo('body');
            //console.log(clone, dummy, fonts, font, clone.width(), dummy.width());
            if ( clone.width() == dummy.width() )
                detectedFont = font;
            clone.remove();
            dummy.remove();
        });

       return detectedFont;
    }
})(jQuery);