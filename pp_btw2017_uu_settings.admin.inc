<?php

/**
 * Admin menu page for the basic settings
 */
function pp_btw2017_uu_admin_settings_form() {
	// form
		$form = array();

		$form['landesliste'] = array(
			'#type' => 'fieldset',
			'#title' => t('Landesliste'),
			'#description' => t("Der UU-Sammelbalken kann am Ende oder am Anfang angezeigt werden."),
		);

		$form['landesliste']['pp_btw2017_landesliste_start'] = array(
			'#type' => 'checkbox',
			'#title' => t('Am Anfang anzeigen'),
			'#default_value' => variable_get('pp_btw2017_landesliste_start', NULL),
		);

		$form['landesliste']['pp_btw2017_landesliste_end'] = array(
			'#type' => 'checkbox',
			'#title' => t('Am Ende anzeigen'),
			'#default_value' => variable_get('pp_btw2017_landesliste_end', NULL),
		);


		$form['kreiswahlvorschlaege'] = array(
			'#type' => 'fieldset',
			'#title' => t('Kreiswahlvorschläge'),
			'#description' => t("Die UU-Sammelbalken können pro Wahlkreis zur Anzeige ausgewählt werden."),
		);

		$wks = array(
				"167	=>	"Waldeck",
				"168"	=>	"Kassel",
				"169"	=>	"Werra-Meißner – Hersfeld-Rotenburg",
				"170"	=>	"Schwalm-Eder",
				"171"	=>	"Marburg",
				"172"	=>	"Lahn-Dill",
				"173"	=>	"Gießen",
				"174"	=>	"Fulda",
				"175"	=>	"Main-Kinzig – Wetterau II – Schotten",
				"176"	=>	"Hochtaunus",
				"177"	=>	"Wetterau I",
				"178"	=>	"Rheingau-Taunus – Limburg",
				"179"	=>	"Wiesbaden",
				"180"	=>	"Hanau",
				"181"	=>	"Main-Taunus",
				"182"	=>	"Frankfurt am Main I",
				"183"	=>	"Frankfurt am Main II",
				"184"	=>	"Groß-Gerau",
				"185"	=>	"Offenbach",
				"186"	=>	"Darmstadt",
				"187"	=>	"Odenwald",
				"188"	=>	"Bergstraße",
		);

		foreach ($wks as $wk => $name) {
			$form['kreiswahlvorschlaege']['pp_btw2017_wk'.$wk] = array(
				'#type' => 'checkbox',
				'#title' => t("WK ".$wk." (".$name.")"),
				'#default_value' => variable_get('pp_btw2017_wk'.$wk, NULL),
			);
		}

	// return
		return system_settings_form($form);
}