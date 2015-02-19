//script for all slimScroll intialisation
$(window).load(function() {
    $('.slim-scroll').each(function() {
        var $this = $(this);
        $this.slimScroll({
            height: $this.data('height') || 100,
            railVisible: true
        });
    });

    //Trial modification of wrapbootstrap colors (orange mod)
    $('.background-blue').css({
        'background-color': '#FCF8E3',
        color: '#fff'
    })
    // $('.background-blue, .skin-2 .navbar, .header-color-orange').css({'background-color': '#F85C00', color: '#fff'}

    $.fn.modal.defaults.spinner = $.fn.modalmanager.defaults.spinner =
        '<div class="loading-spinner" style="width: 250px; margin-left: -125px;">' +
        '<h2 style="text-align: center; color: #999">Just a moment...</h2><br />' +
        '<div class="progress progress-striped active">' +
        '<div class="progress-bar progress-bar-pink" style="width: 100%;"></div>' +
        '</div>' +
        '</div>';

    $('#side11bar ul.submenu').on('click', 'a', function(event) {
        event.preventDefault();
        $('body').modalmanager('loading')
        $('#modal-wizard').modal({
            backdrop: "static",
            keyboard: false
        })
    })

    var initWizard = $('#wizard-box .wizard-header'); //$('#modal-wizard .modal-header');
    initWizard.ace_wizard().on('change', function(e, info) {
        if (info.step == 1) {
            //do something
        }
    }).on('finished', function(e) {
        // callback when user finishes the steps on buying stuff
        // could now send the data to the servers, process then respond to the user
        // bootbox.dialog({
        //     message: "Thank you! Your information was successfully saved!",
        //     buttons: {
        //         "success": {
        //             "label": "OK",
        //             "className": "btn-sm btn-primary"
        //         }
        //     }
        // });
        $('body').modalmanager('loading')
    }).on('stepclick', function(e) {
        return false; //prevent clicking on steps
    });

    //remove disabled attr from button
    // $('#modal-wizard .wizard-actions .btn[data-dismiss=modal]').removeAttr('disabled');


    $('[data-toggle="tooltip"]').each(function() {
        $(this).tooltip();
    })

    $('.easy-pie-chart.percentage').each(function() {
        var $box = $(this);
        var barColor = '#e20000';
        var trackColor = '#E2E2E2';
        var size = parseInt($(this).data('size')) || 50;
        $(this).easyPieChart({
            barColor: barColor,
            trackColor: trackColor,
            scaleColor: false,
            lineCap: 'butt',
            lineWidth: parseInt(size / 10),
            animate: /msie\s*(8|7|6)/.test(navigator.userAgent.toLowerCase()) ? false : 1000,
            size: size
        });
    });

})