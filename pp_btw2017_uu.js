function btw2017_show(arr) {
	//console.log(arr);
	 $.ajax({
			url: '/btw2017_uu_json.php',
			dataType: 'json',
			success: function (data) {
				//console.log(data.data);
				var content = '<ul class="menu">';
				if (jQuery.inArray("ls", arr) != -1) {
					content += '<li><a href="'+data.data.liste.uu+'" style="white-space: nowrap;">'+data.data.liste.title+'</a>'+btw2017_sammelbalken(data.data.liste.info)+'</li>';
				}

				for (var wk=167; wk<=188; wk++) {
					if (jQuery.inArray(wk, arr) != -1) {
						if (data.data[wk]) {
							content += '<li><a href="'+data.data[wk].uu+'" style="white-space: nowrap;">'+data.data[wk].title+'</a>'+btw2017_sammelbalken(data.data[wk].info)+'</li>';
						}
					}
				}
				
				if (jQuery.inArray("le", arr) != -1) {
					content += '<li><a href="'+data.data.liste.uu+'" style="white-space: nowrap;">'+data.data.liste.title+'</a>'+btw2017_sammelbalken(data.data.liste.info)+'</li>';
				}
				content += "</ul>";

				$('#btw2017_uu').html(content);
			}
    });
}

function btw2017_sammelbalken(info) {
	//console.log(info);
	var p_save = Math.round(info.save / info.max * 10000)/100;
	var p_current = Math.round(info.current / info.max * 10000)/100;
	var p_current_show = p_current - p_save;
	var p_remain = 100 - p_current;

	var balken = '<table cellspacing="0" style="width: 100%; border: 1px solid black; background: #fff; padding: 0; margin: 0;">';
	balken += '<tbody style="border: none;"><tr style="height: 10px; line-height: 10px; font-size: 8px; text-align: center;">';
	if (p_save === 0)
		balken += '<td style="display: none; background-color: #fa0; padding: 0;">0&nbsp;%</td>';
	else
		balken += '<td style="width: '+p_save+'%; background-color: #ffaa00; padding: 0;">'+p_save+'&nbsp;%</td>';

	if (p_current === 0) {
		balken += '<td style="width: 100%; background-color: transparent; padding: 0;">0&nbsp;%</td>';
	} else {
		if (p_current_show === 0 || p_current_show === p_remain)
			balken += '<td style="width: '+p_current_show+'%; background-color: #fd3; padding: 0;"></td>';
		else
			balken += '<td style="width: '+p_current_show+'%; background-color: #fd3; padding: 0;">'+p_current+'&nbsp;%</td>';
		balken += '<td style="width: '+p_remain+'%; background-color: transparent; padding: 0;"></td>';
	}
	balken += '</tr></tbody></table>';

	balken += '<table style="width: 100%; padding: 0; margin: 0;">';
	balken += '<tbody style="border: none;"><tr style="line-height: 10px; font-size: 8px;">';
	/*balken += '<td><span style="background-color: #fa0; padding:0px 3px;">0 bestätigt</span></td>';
	balken += '<td style="text-align: center;"><span style="background-color: #fd3; padding:0px 3px;">7 unbestätigt</span></td>';*/
	balken += '<td style="text-align: right;"><b>'+info.current+'</b> von '+info.max+' gesammelt</td>';
	balken += '</tr></tbody></table>';
	
	return balken;
}