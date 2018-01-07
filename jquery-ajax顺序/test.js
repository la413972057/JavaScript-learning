var url = 'http://rapapi.org/mockjsdata/25230/rskp/eval/DistrictAjaxAction_reportMessage.action?';
for (var i = 0; i < 10; i++) {
    $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        dataFilter: function (res, a) {
            console.log(res);// String
            console.log(JSON.parse(res), a);
            return res;
        },
        success: function (res) {
            console.log('success');
            console.log(res);
        },
        error: function (err) {
            console.log('error:', err);
        },
        complete: function (xhr, textStatus) {
            console.log('complete');
        }
    });
}

