<script src="{{ asset('js/app.js') }}" defer></script>
    <script type="text/javascript">
		$(document).ready(function(){
			if(sessionStorage.getItem("auth_token") == '' || sessionStorage.getItem("auth_token") == null){
				sessionStorage.setItem("auth_token", "<?php echo App\Libraries\Utils::creatAccessToken() ?>");
			}
			var data	=	<?php echo json_encode(array('beneficiary_id' => $id, 'token' => $token, 'timestamp' => $timestamp)) ?>;
			var beneficiary	=	[];
			var countries	=	[];
			callReceivingCountriesList(data).then(function(response){
				if(response.status == 200)
				{
					countries	=	response.data.data;
					var countryHtml	=	'';
					if(countries.length > 0)
					{
						for (let i = 0; i < countries.length; ++i) {
							countryHtml	+=	'<option value="'+countries[i].country_iso_code+'">'+countries[i].country_name+'</option>';
						}
						$("#country_iso_code").append(countryHtml);
					}
				}
			},
			function(error){
			  alert(error);
			});
			callGetBeneficiary(data).then(function(response){
			  	if(response.status == 200)
				{
					beneficiary	=	response.data.data;
					$('#beneficiary_id').val(beneficiary.bene_id);
					$('#beneficiary_name').val(beneficiary.bene_name);
					$('#beneficiary_email').val(beneficiary.email);
					$('#beneficiary_phone').val(beneficiary.bene_phone);
					$('#country_iso_code').val(beneficiary.bene_country_iso_code);
					console.log(beneficiary);
				}
			},
			function(error){
			  alert(error);
			});
			
			$("#updatebeneficiarybtn").click(function(){
				var formData	=	$('#beneficiaryeditform').serializeArray();
				formData.push( {name:'token', value:'<?php echo $token ?>'} );
				formData.push( {name:'timestamp', value:'<?php echo $timestamp ?>'} );
				var data	=	{};
				if(formData.length > 0)
				{
					for (let i = 0; i < formData.length; ++i) {
						data[formData[i].name]	=	formData[i].value;
					}
				}
				callUpdateBeneficiary(data).then(function(response){
					if(response.status == 200)
					{
						beneficiary	=	response.data.data;
						console.log(beneficiary);
					}
				},
				function(error){
				  alert(error);
				});
			});
        });
	</script>