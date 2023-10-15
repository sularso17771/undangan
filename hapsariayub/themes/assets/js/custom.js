function get_maps(){
    $('form').on('keyup keypress', function(e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            e.preventDefault();
            return false;
        }
    });
    
    const locationInputs = document.getElementsByClassName("map-input");

    const autocompletes = [];
    const geocoder = new google.maps.Geocoder;
    for (let i = 0; i < locationInputs.length; i++) {

        const input = locationInputs[i];
        const fieldKey = input.id.replace("-input", "");
        const isEdit = document.getElementById(fieldKey + "-latitude").value != '' && document.getElementById(fieldKey + "-longitude").value != '';

        const latitude = parseFloat(document.getElementById(fieldKey + "-latitude").value) || -6.9174639;
        const longitude = parseFloat(document.getElementById(fieldKey + "-longitude").value) || 107.6191228;

        const map = new google.maps.Map(document.getElementById(fieldKey + '-map'), {
            center: {lat: latitude, lng: longitude},
            zoom: 13
        });
        const marker = new google.maps.Marker({
            map: map,
            position: {lat: latitude, lng: longitude},
            clickable: true,
            draggable: true,
        });

        marker.setVisible(isEdit);

        const autocomplete = new google.maps.places.Autocomplete(input);
        autocomplete.key = fieldKey;
        autocompletes.push({input: input, map: map, marker: marker, autocomplete: autocomplete});
    }

    for (let i = 0; i < autocompletes.length; i++) {
        const input = autocompletes[i].input;
        const autocomplete = autocompletes[i].autocomplete;
        const map = autocompletes[i].map;
        const marker = autocompletes[i].marker;

        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            marker.setVisible(false);
            const place = autocomplete.getPlace();

            geocoder.geocode({'placeId': place.place_id}, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    const lat = results[0].geometry.location.lat();
                    const lng = results[0].geometry.location.lng();
                    setLocationCoordinates(autocomplete.key, lat, lng);
                }
            });

            if (!place.geometry) {
                window.alert("No details available for input: '" + place.name + "'");
                input.value = "";
                return;
            }

            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }
            marker.setPosition(place.geometry.location);
            marker.setVisible(true);

        });

        google.maps.event.addListener(marker, 'dragend', function (evt) {
            map.setCenter(marker.getPosition());
            const lat = evt.latLng.lat().toFixed(7);
            const lng = evt.latLng.lng().toFixed(7);
            
            setLocationCoordinates(autocomplete.key, lat, lng);
        });
    }
}

function destroyData(id){
    Swal.fire({
        title: 'Apakah anda yakin ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Hapus !'
        }).then((result) => {
            if (result.isConfirmed) {
                // $( "#deleteData" ).submit();
                document.getElementById('delete-' + id).submit();
            }
        })
}

function formatDate(date) { //21 April 2022
    let formattedDate = new Date(date);
    if (formattedDate.getDate() < 10) {
        var d = '0' + formattedDate.getDate();
    } else {
        var d = formattedDate.getDate();
    }
    let m = getMonthName(formattedDate.getMonth());
    let y = formattedDate.getFullYear();
    return d + " " + m + " " + y
}

function getMonthName($idx) {
    var m_names = ['January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'];

    return m_names[$idx];
}

function formatRupiah(bilangan) {
    if (!!bilangan) {
        var number_string = bilangan.toString().replace(/[^,\d]/g, '').toString(),
            split = number_string.split(','),
            sisa = split[0].length % 3,
            rupiah = split[0].substr(0, sisa),
            ribuan = split[0].substr(sisa).match(/\d{1,3}/gi);

        if (ribuan) {
            var separator = sisa ? ',' : '';
            rupiah += separator + ribuan.join('.');
        }

        rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    } else {
        rupiah = 0;
    }
    return rupiah;
}

function formatRupiah2(angka, prefix){
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
    split   		= number_string.split(','),
    sisa     		= split[0].length % 3,
    rupiah     		= split[0].substr(0, sisa),
    ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if(ribuan){
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}