$.ajax({
    url: 'https://fundraise.causevox.com/api_endpoint/info',
    dataType: "jsonp",
    success: function(data) {
    	console.log('General Info', data);
   	}
});

$.ajax({
    url: 'https://fundraise.causevox.com/api_endpoint/fundraisers',
    dataType: "jsonp",
    success: function(data) {
    	console.log('Fundraisers', data);
   	}
});

$.ajax({
    url: 'https://fundraise.causevox.com/api_endpoint/donations',
    dataType: "jsonp",
    success: function(data) {
    	console.log('Donations', data);
   	}
});