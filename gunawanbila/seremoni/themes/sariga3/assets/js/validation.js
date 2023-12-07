/*!
 * WEDDING
 * Obeth Dewa Wardhana - FrontEndDeveloper
 */

/* document ready */
$(document).ready(function () {

    /* SELECT2 GLOBAL */
    $('.select-wedding').select2({
        minimumResultsForSearch: Infinity,
        // dropdownParent: $('.select-mjk-box'),
        placeholder: function () {
            $(this).data('placeholder');
        }
    });

    $('.select-wedding').on('change', function () {
        var data = $(".select-wedding option:selected").text();
        var account = $(".select-wedding option:selected").data('bank');
        $(this).closest('.form-group-wedding').find('#preview-text').html(account);
        console.log(data);
    })

    /* FORM DATE */
    $('.datepicker').datepicker({
        format: "dd/mm/yyyy",
        // autoclose: true,
        todayHighlight: true
    });
    $('.forbirthday').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        locale: {
            format: 'YYYY-MM-DD'
        },
        maxDate: moment().endOf("day")
    }, function (start, end, label) {
        var years = moment().diff(start, 'years');

        $('#FR21').val(years + ' Tahun');
        $('#FK21').val(years + ' Tahun');
    });

    /* ONLY NUMERIC */
    $(".only-numeric").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode
        if (!(keyCode >= 48 && keyCode <= 57)) {
            $();
            return false;
        } else {
            $();
        }
    });

    function convertDateDBtoIndo(string) {
        bulanIndo = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

        tanggal = string.split("-")[2];
        bulan = string.split("-")[1];
        tahun = string.split("-")[0];

        return tanggal + " " + bulanIndo[Math.abs(bulan)] + " " + tahun;
    }

    /* FORM VALIDATION */

    $("#form-rsvp").validate({
        rules: {
            full_name: {
                required: true
            },
            message: {
                required: true
            },
            presence: {
                required: true
            },
            guest_amount: {
                required: true
            }
        },
        messages: {
            full_name: {
                required: "Masukkan nama lengkap."
            },
            message: {
                required: "Masukkan pesan anda."
            },
            presence: {
                required: "Pilih data"
            },
            guest_amount: {
                required: "Masukkan jumlah tamu."
            }
        },
        submitHandler: function (form) {
            Swal.fire({
                title: 'Data berhasil disimpan!',
                text: '',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500,
                showLoaderOnConfirm: false,
                customClass: {
                    container: 'swal-container-wedding',
                    popup: 'swal-popup-wedding',
                    header: 'swal-header-wedding',
                    title: 'swal-title-wedding',
                    icon: 'swal-icon-success-wedding',
                    image: 'swal-image-wedding',
                    content: 'swal-content-wedding',
                    input: 'swal-input-wedding',
                    actions: 'swal-actions-wedding',
                    confirmButton: 'swal-confirm-button-wedding',
                    denyButton: 'swal-confirm-button-wedding',
                    cancelButton: 'swal-cancel-button-wedding',
                    footer: 'swal-footer-wedding'
                }
            }).then((result) => {
                form.submit();
                window.location.reload();
            });
        },
        errorPlacement: function (label, element) {
            label.addClass('error');
            element.after(label);
            // Swal.fire({
            //     title: 'Data Gagal Disimpan!',
            //     text: '',
            //     icon: 'error',
            //     showConfirmButton: true,
            //     showLoaderOnConfirm: false,
            //     customClass: {
            //         container: 'swal-container-wedding',
            //         popup: 'swal-popup-wedding',
            //         header: 'swal-header-wedding',
            //         title: 'swal-title-wedding',
            //         icon: 'swal-icon-cancel-wedding',
            //         image: 'swal-image-wedding',
            //         content: 'swal-content-wedding',
            //         input: 'swal-input-wedding',
            //         actions: 'swal-actions-wedding',
            //         confirmButton: 'swal-confirm-button-wedding',
            //         denyButton: 'swal-confirm-button-wedding',
            //         cancelButton: 'swal-cancel-button-wedding',
            //         footer: 'swal-footer-wedding'
            //     }
            // });
        }
    });


    $("form select").on("select2:close", function (e) {
        $(this).valid();
    });

    $('.forbirthday').on('apply.daterangepicker', function (ev, picker) {
        $(this).valid();
    });

});