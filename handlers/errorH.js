/**
 * Created by i on 2016/03/06.
 */

// error

function errorBindErrorPage(res,message,optional) {
    res.bind('error', {message: message, optional: optional});
}



exports.errorBindErrorPage = errorBindErrorPage;