function loadNatureWildlife() {
    reset();

    $.getJSON('./media/data/poi.json', function (data) {

        $.each(data.markers, function (i, marker) {
            if (marker.category.toLowerCase() === "nature & wildlife") {

                var infowindow = new google.maps.InfoWindow({

                    content: marker.title + marker.content,
                    maxWidth: 240
                });

                var myLatlng = new google.maps.LatLng(marker.latitude, marker.longitude);
                // alert(myLatlng);
                //alert(marker.content)
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map
                    //title: "text " + marker.content
                });
            }

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        });
    });

    $('#attrModal').modal('hide');
}

function loadPoW() {
    reset();

    $.getJSON('./media/data/poi.json', function (data) {

        $.each(data.markers, function (i, marker) {
            if (marker.category.toLowerCase() === "places of worship") {

                var infowindow = new google.maps.InfoWindow({
                    content: marker.title + marker.content,
                    maxWidth: 240
                });

                var myLatlng = new google.maps.LatLng(marker.latitude, marker.longitude);
                // alert(myLatlng);
                //alert(marker.content)
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map
                    //title: "text " + marker.content
                });
            }


            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        });
    });

    $('#attrModal').modal('hide');
}

function loadNeighbourhood() {
    reset();

    $.getJSON('./media/data/poi.json', function (data) {

        $.each(data.markers, function (i, marker) {
            if (marker.category.toLowerCase() === "neighbourhoods") {

                var infowindow = new google.maps.InfoWindow({
                    content: marker.title + marker.content,
                    maxWidth: 240
                });

                var myLatlng = new google.maps.LatLng(marker.latitude, marker.longitude);
                // alert(myLatlng);
                //alert(marker.content)
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map
                    //title: "text " + marker.content
                });
            }


            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        });
    });

    $('#attrModal').modal('hide');
}

function loadResLei() {
    reset();

    $.getJSON('./media/data/poi.json', function (data) {

        $.each(data.markers, function (i, marker) {
            if (marker.category.toLowerCase() === "recreation & leisure") {

                var infowindow = new google.maps.InfoWindow({
                    content: marker.title + marker.content,
                    maxWidth: 240
                });

                var myLatlng = new google.maps.LatLng(marker.latitude, marker.longitude);
                // alert(myLatlng);
                //alert(marker.content)
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map
                    //title: "text " + marker.content
                });
            }

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        });
    });

    $('#attrModal').modal('hide');

}

function loadArts() {
    reset();

    $.getJSON('./media/data/poi.json', function (data) {

        $.each(data.markers, function (i, marker) {
            if (marker.category.toLowerCase() === "arts") {

                var infowindow = new google.maps.InfoWindow({
                    content: marker.title + marker.content,
                    maxWidth: 240
                });

                var myLatlng = new google.maps.LatLng(marker.latitude, marker.longitude);
                // alert(myLatlng);
                //alert(marker.content)
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map
                    //title: "text " + marker.content
                });
            }


            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        });
    });

    $('#attrModal').modal('hide');
}

function loadHistory() {
    reset();

    $.getJSON('./media/data/poi.json', function (data) {

        $.each(data.markers, function (i, marker) {
            if (marker.category.toLowerCase() === "history") {

                var infowindow = new google.maps.InfoWindow({
                    content: marker.title + marker.content,
                    maxWidth: 240
                });

                var myLatlng = new google.maps.LatLng(marker.latitude, marker.longitude);
                // alert(myLatlng);
                //alert(marker.content)
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map
                    //title: "text " + marker.content
                });
            }

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        });
    });

    $('#attrModal').modal('hide');
}

function loadArchitecture() {
    reset();

    $.getJSON('./media/data/poi.json', function (data) {

        $.each(data.markers, function (i, marker) {
            if (marker.category.toLowerCase() === "architecture") {

                var infowindow = new google.maps.InfoWindow({
                    content: marker.title + marker.content,
                    maxWidth: 240
                });

                var myLatlng = new google.maps.LatLng(marker.latitude, marker.longitude);
                // alert(myLatlng);
                //alert(marker.content)
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map
                    //title: "text " + marker.content
                });
            }


            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        });
    });

    $('#attrModal').modal('hide');

}

function loadNightlife() {
    reset();

    $.getJSON('./media/data/poi.json', function (data) {

        $.each(data.markers, function (i, marker) {
            if (marker.category.toLowerCase() === "nightlife") {

                var infowindow = new google.maps.InfoWindow({
                    content: marker.title + marker.content,
                    maxWidth: 240
                });

                var myLatlng = new google.maps.LatLng(marker.latitude, marker.longitude);
                // alert(myLatlng);
                //alert(marker.content)
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map
                    //title: "text " + marker.content
                });
            }

            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });
        });
    });

    $('#attrModal').modal('hide')

}

function reset() {
    initialize();
}