<?php
/**
 * Plugin Name: Strong Testimonials - Migrate from Easy Testimonials
 * Plugin URI: https://strongtestimonials.com/
 * Description: Submodule that helps migrate testimonials from Easy Testimonials to Strong Testimonials
 * Author: WPChill
 * Author URI: https://www.wpchill.com/
 * Version: 1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

define( 'WPMTST_ET_MIGRATOR_VERSION', '1.0.0' );
define( 'WPMTST_ET_MIGRATOR_PATH', plugin_dir_path( __FILE__ ) );
define( 'WPMTST_ET_MIGRATOR_URL', plugin_dir_url( __FILE__ ) );
define( 'WPMTST_ET_MIGRATOR_FILE', __FILE__ );


add_action( 'plugins_loaded', 'set_locale', 15 );
add_action( 'plugins_loaded', 'run_st_et_migrator', 15 );

/**
 * Set localization for the plugin
 *
 * @return void
 * @since 1.0.0
 */
function set_locale() {

    load_plugin_textdomain( 'modula-st-et-migrator', false, dirname( plugin_basename( WPMTST_ET_MIGRATOR_FILE ) ) . '/languages/' );
}

/**
 * Load the main plugin class.
 *
 * @return void
 * @since 1.0.0
 */
function run_st_et_migrator(){
    require_once WPMTST_ET_MIGRATOR_PATH . 'includes/class-st-et-migrator.php';
    $load = new ST_ET_Migrator();
}
