$.ajax({
    url: 'https://fundraise.causevox.com/api_endpoint/info',
    dataType: "jsonp",
    success: function(data) {
    	console.log('General Info', data);
        getInfo(data);
   	}
});

$.ajax({
    url: 'https://fundraise.causevox.com/api_endpoint/fundraisers',
    dataType: "jsonp",
    success: function(data) {
    	console.log('Fundraisers', data);
        getFundraisers(data);
   	}
});

$.ajax({
    url: 'https://fundraise.causevox.com/api_endpoint/donations',
    dataType: "jsonp",
    success: function(data) {
    	console.log('Donations', data);
        getDonations(data);
   	}
});

function getInfo(data) {
    $('.fund-title').html(data.title);
    $('.progress-meter').css('width', data.percent_progress+'%');
    $('.funds-needed').html('out of $'+data.funds_needed);
    $('.funds-raised').html('$'+ Math.floor(data.funds_raised));
    $('.num-donations').html(data.num_donations);
    $('.num-fundraisers').html(data.num_projects);
}

function getFundraisers(data) {
    $.each( data, function(i, item) {
        $('.fundraiser-section').append(
            '<div class="fundraiser">' +
            '<img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" alt="avatar" width="50" height="50">' +
            '<h2 class="fund-name">' + item.fundraiser +'</h2>' +
            '<h3 class="fund-amount">$' + Math.floor(item.funds_raised) + '</h3></div>'
        );
        if (i == 2) {
            return false;
        }
    });
}

function getDonations(data) {
    $.each( data, function(i, item){
        $('.donation-section').append(
            '<div class="donor">' +
            '<h2 class="donor-name">' + item.first_name + ' ' + item.last_name + '</h2>' +
            '<h2 class="donor-amount">$' + item.amount + '</h2></div>'
        );
        if (i == 2) {
            return false;
        }
    });   
}

$.fn.digits = function(){ 
    return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
    })
}