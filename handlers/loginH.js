/**
 * Created by i on 2016/03/06.
 */

function Login(username,password,callback) {
    if (username == 'b' && password == 'b') {
        callback(null, true);
    } else {
        callback(null, false);
    }
}

exports.Login = Login;
