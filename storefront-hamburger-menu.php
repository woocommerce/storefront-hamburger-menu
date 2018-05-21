<?php
/**
 * Plugin Name:			Storefront Hamburger Menu
 * Plugin URI:			https://wordpress.org/plugins/storefront-hamburger-menu/
 * Description:			Storefront Hamburger Menu turns the default handheld navigation into an off-screen sidebar menu with a "hamburger" toggle.
 * Version:				1.2.2
 * Author:				WooCommerce
 * Author URI:			http://woocommerce.com/
 * Requires at least:	4.0.0
 * Tested up to:		4.9
 *
 * Text Domain: storefront-hamburger-menu
 * Domain Path: /languages/
 *
 * @package Storefront_Hamburger_Menu
 * @category Core
 * @author Tiago Noronha
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

/**
 * Returns the main instance of Storefront_Hamburger_Menu to prevent the need to use globals.
 *
 * @since  1.0.0
 * @return object Storefront_Hamburger_Menu
 */
function Storefront_Hamburger_Menu() {
	return Storefront_Hamburger_Menu::instance();
} // End Storefront_Hamburger_Menu()

Storefront_Hamburger_Menu();

/**
 * Main Storefront_Hamburger_Menu Class
 *
 * @class Storefront_Hamburger_Menu
 * @version	1.0.0
 * @since 1.0.0
 * @package	Storefront_Hamburger_Menu
 */
final class Storefront_Hamburger_Menu {
	/**
	 * Storefront_Hamburger_Menu The single instance of Storefront_Hamburger_Menu.
	 * @var 	object
	 * @access  private
	 * @since 	1.0.0
	 */
	private static $_instance = null;

	/**
	 * The token.
	 * @var     string
	 * @access  public
	 * @since   1.0.0
	 */
	public $token;

	/**
	 * The version number.
	 * @var     string
	 * @access  public
	 * @since   1.0.0
	 */
	public $version;

	/**
	 * Constructor function.
	 * @access  public
	 * @since   1.0.0
	 * @return  void
	 */
	public function __construct() {
		$this->token 			= 'storefront-hamburger-menu';
		$this->plugin_url 		= plugin_dir_url( __FILE__ );
		$this->plugin_path 		= plugin_dir_path( __FILE__ );
		$this->version 			= '1.2.2';

		register_activation_hook( __FILE__, array( $this, 'install' ) );

		add_action( 'init', array( $this, 'shm_load_plugin_textdomain' ) );

		add_action( 'init', array( $this, 'shm_setup' ) );

		add_filter( 'plugin_action_links_' . plugin_basename( __FILE__ ), array( $this, 'shm_plugin_links' ) );
	}

	/**
	 * Main Storefront_Hamburger_Menu Instance
	 *
	 * Ensures only one instance of Storefront_Hamburger_Menu is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @static
	 * @see Storefront_Hamburger_Menu()
	 * @return Main Storefront_Hamburger_Menu instance
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) )
			self::$_instance = new self();
		return self::$_instance;
	} // End instance()

	/**
	 * Load the localisation file.
	 * @access  public
	 * @since   1.0.0
	 * @return  void
	 */
	public function shm_load_plugin_textdomain() {
		load_plugin_textdomain( 'storefront-hamburger-menu', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}

	/**
	 * Cloning is forbidden.
	 *
	 * @since 1.0.0
	 */
	public function __clone() {
		_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?' ), '1.0.0' );
	}

	/**
	 * Unserializing instances of this class is forbidden.
	 *
	 * @since 1.0.0
	 */
	public function __wakeup() {
		_doing_it_wrong( __FUNCTION__, __( 'Cheatin&#8217; huh?' ), '1.0.0' );
	}

	/**
	 * Plugin page links
	 *
	 * @since  1.0.0
	 */
	public function shm_plugin_links( $links ) {
		$plugin_links = array(
			'<a href="http://support.woothemes.com/">' . __( 'Support', 'storefront-hamburger-menu' ) . '</a>',
		);

		return array_merge( $plugin_links, $links );
	}

	/**
	 * Installation.
	 * Runs on activation. Logs the version number and assigns a notice message to a WordPress option.
	 * @access  public
	 * @since   1.0.0
	 * @return  void
	 */
	public function install() {
		$this->_log_version_number();
	}

	/**
	 * Log the plugin version number.
	 * @access  private
	 * @since   1.0.0
	 * @return  void
	 */
	private function _log_version_number() {
		// Log the version number.
		update_option( $this->token . '-version', $this->version );
	}

	/**
	 * Setup all the things.
	 * Only executes if Storefront or a child theme using Storefront as a parent is active and the extension specific filter returns true.
	 * Child themes can disable this extension using the storefront_hamburger_menu_supported filter
	 * @return void
	 */
	public function shm_setup() {
		$theme = wp_get_theme();

		if ( 'Storefront' == $theme->name || 'storefront' == $theme->template && apply_filters( 'storefront_hamburger_menu_supported', true ) ) {
			add_action( 'wp_enqueue_scripts', array( $this, 'shm_styles' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'shm_add_customizer_css' ), 999 );
			add_action( 'customize_preview_init', array( $this, 'shm_customize_preview_js' ) );
			add_filter( 'body_class', array( $this, 'shm_body_class' ) );
		}
		 else {
			add_action( 'admin_notices', array( $this, 'shm_install_storefront_notice' ) );
		}
	}

	/**
	 * Storefront install
	 * If the user activates the plugin while having a different parent theme active, prompt them to install Storefront.
	 * @since   1.0.0
	 * @return  void
	 */
	public function shm_install_storefront_notice() {
		echo '<div class="notice is-dismissible updated">
				<p>' . __( 'Storefront Hamburger Menu requires that you use Storefront as your parent theme.', 'storefront-hamburger-menu' ) . ' <a href="' . esc_url( wp_nonce_url( self_admin_url( 'update.php?action=install-theme&theme=storefront' ), 'install-theme_storefront' ) ) .'">' . __( 'Install Storefront now', 'storefront-hamburger-menu' ) . '</a></p>
			</div>';
	}

	/**
	 * Enqueue CSS and custom styles.
	 * @since   1.0.0
	 * @return  void
	 */
	public function shm_styles() {
		wp_enqueue_style( 'shm-styles', plugins_url( '/assets/css/style.css', __FILE__ ), '', $this->version );
		wp_enqueue_script( 'shm-scripts', plugins_url( '/assets/js/frontend.min.js', __FILE__ ), array( 'jquery' ), $this->version, true );

		$translation_array = array(
			'close' => __( 'Close', 'storefront-hamburger-menu' )
		);

		wp_localize_script( 'shm-scripts', 'shm_i18n', $translation_array );
	}

	/**
	 * Add CSS in <head> for styles handled by the Customizer
	 *
	 * @since 1.0.0
	 */
	public function shm_add_customizer_css() {
		$header_background_color	= sanitize_text_field( get_theme_mod( 'storefront_header_background_color', apply_filters( 'storefront_default_header_background_color', '#2c2d33' ) ) );
		$header_link_color			= sanitize_text_field( get_theme_mod( 'storefront_header_link_color', apply_filters( 'storefront_default_header_link_color', '#cccccc' ) ) );

		$wc_style = '
			@media screen and (max-width: 768px) {
				.menu-toggle {
					color: ' . $header_link_color . ';
				}

				.menu-toggle:hover {
					color: ' . storefront_adjust_color_brightness( $header_link_color, -100 ) . ';
				}

				.main-navigation div.menu,
				.main-navigation .handheld-navigation {
					background-color: ' . $header_background_color . ';
				}

				.main-navigation ul li a,
				ul.menu li a,
				.storefront-hamburger-menu-active .shm-close {
					color: ' . $header_link_color . ';
				}
			}
		';

		wp_add_inline_style( 'storefront-style', $wc_style );
	}

	/**
	 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
	 *
	 * @since  1.0.0
	 */
	public function shm_customize_preview_js() {
		wp_enqueue_script( 'shm-customizer', plugins_url( '/assets/js/customizer.min.js', __FILE__ ), array( 'customize-preview' ), $this->version, true );
	}

	/**
	 * Storefront Extension Boilerplate Body Class
	 * Adds a class based on the extension name and any relevant settings.
	 */
	public function shm_body_class( $classes ) {
		global $storefront_version;

		if ( version_compare( $storefront_version, '2.3.0', '>=' ) ) {
			$classes[] = 'storefront-2-3';
		}

		$classes[] = 'storefront-hamburger-menu-active';

		return $classes;
	}
} // End Class
