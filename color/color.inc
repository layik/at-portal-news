<?php
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
?>

<?php

$info = array(
  'fields' => array(
    'text'             => t('Text'),    
    'title'            => t('Title'),
    'link'             => t('Link'),  
    'linkactive'       => t('Link Active'),   
    'meta'             => t('Meta'), 
    'base'             => t('Background'),
    'foreground'       => t('Foreground'),
    'headerbase'       => t('Header Background'),
    'headerforeground' => t('Header Foreground'),
  ),
  'schemes' => array(
    'default' => array(
      'title' => t('Default'),
      'colors' => array(
        'text'             => '#555555',        
        'title'            => '#333333',
        'link'             => '#f55152',  
        'linkactive'       => '#a00000',
        'meta'             => '#696969',
        'base'             => '#222222',
        'foreground'       => '#ffffff',
        'headerbase'       => '#2d2d2e',
        'headerforeground' => '#202022',
      ),
    ),
  ),

  'css' => array(
    'css/theme/portal-color-dynamic.css',
  ),

  'copy' => array(
    'logo.png',
  ),

  'gradients' => array(
  ),

  'preview_html' => 'color/preview.html',
);
