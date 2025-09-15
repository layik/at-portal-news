/* COPYRIGHT
------------------------------------------------------------------  
  Portal for Drupal 8.x - Version 1.0                           
  Copyright (C) 2017 esors.com All Rights Reserved.           
  @license - Copyrighted Commercial Software                   
------------------------------------------------------------------  
  Theme Name: Portal News                                          
  Author: ESORS                                           
  Date: 5th January 2017                                        
  Website: http://www.esors.com/                              
------------------------------------------------------------------  
  This file may not be redistributed in whole or   
  significant part.                                            
----------------------------------------------------------------*/

(function(jQuery) {
  
  jQuery().ready(function() {       
    
    jQuery('.showcase-1').slick({ 
      lazyLoad: 'ondemand',
      arrows: false,
      dots: false,
      asNavFor: '.pager-1'
    }); 

    jQuery('.pager-1').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.showcase-1',
      dots: false,
      arrows: true,
      focusOnSelect: true,
      vertical: true
    });

    jQuery('.showcase-feature').slick({ 
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      adaptiveHeight: true
    });

    jQuery('.showcase-category').slick({ 
      variableWidth: true,
      centerMode: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }); 

})(jQuery);