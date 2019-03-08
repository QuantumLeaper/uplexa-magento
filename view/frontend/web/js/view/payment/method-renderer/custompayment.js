define(
       [
        'jquery',
        'Magento_Checkout/js/view/payment/default',
        'Magento_Checkout/js/action/place-order',
        'Magento_Checkout/js/action/select-payment-method',
        'Magento_Customer/js/model/customer',
        'Magento_Checkout/js/checkout-data',
        'Magento_Checkout/js/model/payment/additional-validators',
        'Magento_Checkout/js/model/quote',
        'Magento_Checkout/js/model/totals',
        'Magento_Catalog/js/price-utils',
        'Magento_Customer/js/customer-data',
        'mage/url'
        ],
       function (
                 $,
                 Component,
                 quote,
                 totals,
                 priceUtils,
                 placeOrderAction,
                 selectPaymentMethodAction,
                 customer,
                 customerData,
                 checkoutData,
                 additionalValidators,
                 url) {
       'use strict';
       return Component.extend({
                   defaults: {
                       template: 'uPlexa_Custompayment/payment/custompayment'
                             },
                   placeOrder: function () {
                       var redirectUrl = 'uplexapayment/Gateway/uPlexaPayment';
                       console.log(redirectUrl);
                       window.location.replace(url.build(redirectUrl));
                       }
               });
       });
