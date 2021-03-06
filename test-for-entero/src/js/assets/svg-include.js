; function svgInclude( window, document, pathFolder )
{
    'use strict';
    var file     = '../svg/svg-'+pathFolder+'.html',
        revision = 1;
    if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
        return true;

    var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
        request,
        data,
        insertIT = function()
        {
            document.body.insertAdjacentHTML( 'afterbegin', data );
            var tegSvg = document.getElementsByTagName('svg')[0],
                simbolsList = tegSvg.getElementsByTagName('symbol'),
                classStringArr = [];
            for(var i=0;i<simbolsList.length;i++){
                classStringArr.push('.'+ simbolsList[i].getAttribute('id')+'\{ fill:inherit; \}');
            }
            var styleString = '<style>'+classStringArr.join('')+'</style>';
            tegSvg.insertAdjacentHTML( 'afterbegin', styleString );
        },
        insert = function()
        {
            if( document.body ) insertIT();
            else document.addEventListener( 'DOMContentLoaded', insertIT );
        };

    if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision)
    {
        data = localStorage.getItem( 'inlineSVGdata' );
        if( data )
        {
            insert();
            return true;
        }
    }
    try
    {
        request = new XMLHttpRequest();
        request.open( 'GET', file, true );
        request.onload = function()
        {
            if( request.status >= 200 && request.status < 400 )
            {
                data = request.responseText;
                insert();
                if( isLocalStorage )
                {
                    localStorage.setItem('inlineSVGdata',data);
                    localStorage.setItem('inlineSVGrev', revision);
                }
            }
        }
        request.send();
    }
    catch( e ){}
}
