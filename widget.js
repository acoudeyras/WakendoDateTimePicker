WAF.define('KendoDateTimePicker', ['waf-core/widget', 'kendoCore', 'kendoHelpers'], function(widget, $, helpers) {
	'use strict';
	
    var KendoDateTimePicker = widget.create('KendoDateTimePicker', {
    	value: widget.property({
    		type: 'string'
    	}),
    	
        init: function() {
        	var self = this;

        	self.valueChangeSubscriber = self.value.onChange(function(newValue) {
        		newValue = helpers.toDate(newValue);
        		self.kendoWidget.value(newValue);
        	});
        	self.render();
        },
        
        render: function() {
        	var self = this;	
        	$(self.node).empty();
			var $el = $('<input />').appendTo(self.node);
			
        	$el.kendoDateTimePicker({
        		change: function(event) {
        			self.valueChangeSubscriber.pause();
        			self.value(self.kendoWidget.value().toString());
        			self.valueChangeSubscriber.resume();
        		}
        	});
        	
        	self.kendoWidget = $el.data("kendoDateTimePicker");			        	
        },

        open: function() {
        	self.kendoWidget.open();
        },

        close: function() {
        	self.kendoWidget.close();
        },

        enable: function() {
        	self.kendoWidget.enable();
        },

        disable: function() {
        	self.kendoWidget.enable(false);
        }
    });


    return KendoDateTimePicker;

});