/**
 *  Copyright (c) 2015 Scrd (https://github.com/shenchao890216)
 *  Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 *
 *  Version 0.0.1(Beta)
 */

;(function($) {
	// 默认js使用自己的样式
	$.gotop = function(options) {
		// 默认参数.
		var defaults = {
			'containerClass': 'gotop-container',		// gotop包裹元素的class.
			'arrowClass': 'arrowClass',					// 箭头元素的class.
			'containerSize': 40,						// gotop包裹元素的大小.
			'containerRadius': 10,						// gotop包裹元素的边框圆角.
			'containerColor': '#000',					// gotop包裹元素的背景色.
			'arrowColor': '#fff',						// 箭头元素的背景色.
			'location': 'right',
			'locationOffset': 20,
			'bottomOffset': 10
		};
		// 合并参数.
		var options = $.extend(defaults, options);
		// 添加gotop元素.
		$('body').append('<div class="' + options.containerClass + '"></div>');
		var $gotopContainer = $('.' + options.containerClass);
		$gotopContainer.html('<div class="' + options.arrowClass + '"></div>');
		var $gotopArrow = $('.' + options.arrowClass);
		// gotop包裹元素的css样式.
		var containerStyle = {
			'position': 'fixed',
			// options.location: options.locationOffset + 'px',
			'bottom': options.bottomOffset + 'px',
			'width': options.containerSize + 'px',
			'height': options.containerSize + 'px',
			'background-color': options.containerColor,
			'cursor': 'pointer',
			'border-radius': options.containerRadius
		};
		containerStyle[options.location] = options.locationOffset + 'px';
		
		$gotopContainer.css(containerStyle);
		// 箭头的样式.
		var borderSize = 0.25 * options.containerSize,
			arrowStyle = {
				'width': 0,
				'height': 0,
				'padding-top': ((options.containerSize - 3 * borderSize) / 2) + 'px',
				'margin': '0 auto',
				'border-style': 'solid',
				'border-width': borderSize + 'px',
				'border-color': 'transparent transparent ' + options.arrowColor + ' transparent'
			};
		// 设置箭头的css.
		$gotopArrow.css(arrowStyle);
	};

	// 元素实现，用户自己定制样式和结构.
	$.fn.gotop = function(options) {
		// 默认参数.
		var defaults = {};
		// 合并用户参数.
		var options = $.extend(defaults, options);
		// 功能实现.
		this.each(function() {});
	};
})(jQuery);