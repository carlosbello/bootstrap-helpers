/*global window, define*/
(function ($, undefined) {
    'use strict';
    
    var bs3h = window.bs3h || (window.bs3h = {});
    
    bs3h.Feedback = {
        SHORT: 3000,
        LONG: 6000,
        ALERT: 'alert-warning',
        DANGER: 'alert-danger',
        SUCCESS: 'alert-success',
        INFO: 'alert-info',
        feedbackTemplate: '<div class="feedback alert fade in alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><div class="feedbackContent">{message}</div></div>',
        show : function (selector, message, type, autoClose) {
            var fdbk = $(bs3h.Feedback.feedbackTemplate.replace('{message}', message));
            fdbk.addClass(type);
            fdbk.appendTo(selector);
            if (autoClose) {
                window.setTimeout(function () {  fdbk.alert('close'); }, autoClose);
            }
        }
    };
        
    if (typeof define === 'function' && define.amd) {
        define(function () { return bs3h.Feedback; });
    }

})(window.jQuery);
