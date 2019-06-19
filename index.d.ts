declare function api(context: api.Context, options?: api.Options): api.Api
declare namespace api {
  interface commerce {
    cart: z_cart
    order: z_order
    return: z_return
    channel: z_channel
    checkout: z_checkout
    wishlist: z_wishlist
    location: z_location
    orders: z_orders
    customer: z_customer
    targetRule: z_targetRule
    carts: z_carts
    payments: z_payments
    returns: z_returns
    admin: z_admin
    catalog: z_catalog
    channelGroup: z_channelGroup
    checkouts: z_checkouts
    settings: z_settings
    wishlists: z_wishlists
    shipping: z_shipping
    inStockNotificationSubscription: z_inStockNotificationSubscription
  }

  interface getCart_args {
    cartId: string
    responseFields?: string
  }
  interface z_getCart {
    (config: getCart_args, options: api.RequestOptions): Promise
  }

  interface z_cart {
    getCart: z_getCart
    updateCart: z_updateCart
    deleteCart: z_deleteCart
    getUserCart: z_getUserCart
    getCartSummary: z_getCartSummary
    getOrCreateCart: z_getOrCreateCart
    deleteCurrentCart: z_deleteCurrentCart
    getUserCartSummary: z_getUserCartSummary
  }

  interface updateCart_args {
    responseFields?: string
  }
  interface z_updateCart {
    (config: updateCart_args, options: api.RequestOptions): Promise
  }

  interface deleteCart_args {
    cartId: string
  }
  interface z_deleteCart {
    (config: deleteCart_args, options: api.RequestOptions): Promise
  }

  interface getUserCart_args {
    userId: string
    responseFields?: string
  }
  interface z_getUserCart {
    (config: getUserCart_args, options: api.RequestOptions): Promise
  }

  interface getCartSummary_args {
    responseFields?: string
  }
  interface z_getCartSummary {
    (config: getCartSummary_args, options: api.RequestOptions): Promise
  }

  interface getOrCreateCart_args {
    responseFields?: string
  }
  interface z_getOrCreateCart {
    (config: getOrCreateCart_args, options: api.RequestOptions): Promise
  }

  interface deleteCurrentCart_args {}
  interface z_deleteCurrentCart {
    (config: deleteCurrentCart_args, options: api.RequestOptions): Promise
  }

  interface getUserCartSummary_args {
    userId: string
    responseFields?: string
  }
  interface z_getUserCartSummary {
    (config: getUserCartSummary_args, options: api.RequestOptions): Promise
  }

  interface getOrder_args {
    orderId: string
    responseFields?: string
  }
  interface z_getOrder {
    (config: getOrder_args, options: api.RequestOptions): Promise
  }

  interface z_order {
    getOrder: z_getOrder
    getOrders: z_getOrders
    priceOrder: z_priceOrder
    createOrder: z_createOrder
    updateOrder: z_updateOrder
    deleteOrderDraft: z_deleteOrderDraft
    getTaxableOrders: z_getTaxableOrders
    changeOrderUserId: z_changeOrderUserId
    performOrderAction: z_performOrderAction
    updateOrderDiscount: z_updateOrderDiscount
    createOrderFromCart: z_createOrderFromCart
    getAvailableActions: z_getAvailableActions
    processDigitalWallet: z_processDigitalWallet
    changeOrderPriceList: z_changeOrderPriceList
    resendOrderConfirmationEmail: z_resendOrderConfirmationEmail
  }

  interface getOrders_args {
    responseFields?: string
  }
  interface z_getOrders {
    (config: getOrders_args, options: api.RequestOptions): Promise
  }

  interface priceOrder_args {
    responseFields?: string
  }
  interface z_priceOrder {
    (config: priceOrder_args, options: api.RequestOptions): Promise
  }

  interface createOrder_args {
    responseFields?: string
  }
  interface z_createOrder {
    (config: createOrder_args, options: api.RequestOptions): Promise
  }

  interface updateOrder_args {
    orderId: string
    responseFields?: string
  }
  interface z_updateOrder {
    (config: updateOrder_args, options: api.RequestOptions): Promise
  }

  interface deleteOrderDraft_args {
    orderId: string
    version?: string
  }
  interface z_deleteOrderDraft {
    (config: deleteOrderDraft_args, options: api.RequestOptions): Promise
  }

  interface getTaxableOrders_args {
    orderId: string
  }
  interface z_getTaxableOrders {
    (config: getTaxableOrders_args, options: api.RequestOptions): Promise
  }

  interface changeOrderUserId_args {
    orderId: string
    responseFields?: string
  }
  interface z_changeOrderUserId {
    (config: changeOrderUserId_args, options: api.RequestOptions): Promise
  }

  interface performOrderAction_args {
    orderId: string
    responseFields?: string
  }
  interface z_performOrderAction {
    (config: performOrderAction_args, options: api.RequestOptions): Promise
  }

  interface updateOrderDiscount_args {
    discountId: string
    responseFields?: string
  }
  interface z_updateOrderDiscount {
    (config: updateOrderDiscount_args, options: api.RequestOptions): Promise
  }

  interface createOrderFromCart_args {
    responseFields?: string
  }
  interface z_createOrderFromCart {
    (config: createOrderFromCart_args, options: api.RequestOptions): Promise
  }

  interface getAvailableActions_args {
    checkoutId: string
  }
  interface z_getAvailableActions {
    (config: getAvailableActions_args, options: api.RequestOptions): Promise
  }

  interface processDigitalWallet_args {
    digitalWalletType: string
    responseFields?: string
  }
  interface z_processDigitalWallet {
    (config: processDigitalWallet_args, options: api.RequestOptions): Promise
  }

  interface changeOrderPriceList_args {
    orderId: string
    responseFields?: string
  }
  interface z_changeOrderPriceList {
    (config: changeOrderPriceList_args, options: api.RequestOptions): Promise
  }

  interface resendOrderConfirmationEmail_args {
    orderId: string
  }
  interface z_resendOrderConfirmationEmail {
    (
      config: resendOrderConfirmationEmail_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getReturn_args {
    returnId: string
    responseFields?: string
  }
  interface z_getReturn {
    (config: getReturn_args, options: api.RequestOptions): Promise
  }

  interface z_return {
    getReturn: z_getReturn
    getPayment: z_getPayment
    getReasons: z_getReasons
    getReturns: z_getReturns
    getPayments: z_getPayments
    deleteReturn: z_deleteReturn
    createReturn: z_createReturn
    updateReturn: z_updateReturn
    getReturnItem: z_getReturnItem
    getReturnItems: z_getReturnItems
    deleteOrderItem: z_deleteOrderItem
    createReturnItem: z_createReturnItem
    resendReturnEmail: z_resendReturnEmail
    performReturnActions: z_performReturnActions
    createReturnShippingOrder: z_createReturnShippingOrder
    getAvailableReturnActions: z_getAvailableReturnActions
    createPaymentActionForReturn: z_createPaymentActionForReturn
    performPaymentActionForReturn: z_performPaymentActionForReturn
    getAvailablePaymentActionsForReturn: z_getAvailablePaymentActionsForReturn
  }

  interface getPayment_args {
    paymentId: string
    responseFields?: string
  }
  interface z_getPayment {
    (config: getPayment_args, options: api.RequestOptions): Promise
  }

  interface getReasons_args {
    responseFields?: string
  }
  interface z_getReasons {
    (config: getReasons_args, options: api.RequestOptions): Promise
  }

  interface getReturns_args {
    responseFields?: string
  }
  interface z_getReturns {
    (config: getReturns_args, options: api.RequestOptions): Promise
  }

  interface getPayments_args {
    orderId: string
    responseFields?: string
  }
  interface z_getPayments {
    (config: getPayments_args, options: api.RequestOptions): Promise
  }

  interface deleteReturn_args {
    returnId: string
  }
  interface z_deleteReturn {
    (config: deleteReturn_args, options: api.RequestOptions): Promise
  }

  interface createReturn_args {
    responseFields?: string
  }
  interface z_createReturn {
    (config: createReturn_args, options: api.RequestOptions): Promise
  }

  interface updateReturn_args {
    returnId: string
    responseFields?: string
  }
  interface z_updateReturn {
    (config: updateReturn_args, options: api.RequestOptions): Promise
  }

  interface getReturnItem_args {
    returnItemId: string
    responseFields?: string
  }
  interface z_getReturnItem {
    (config: getReturnItem_args, options: api.RequestOptions): Promise
  }

  interface getReturnItems_args {
    returnId: string
    responseFields?: string
  }
  interface z_getReturnItems {
    (config: getReturnItems_args, options: api.RequestOptions): Promise
  }

  interface deleteOrderItem_args {
    orderItemId: string
    version?: string
  }
  interface z_deleteOrderItem {
    (config: deleteOrderItem_args, options: api.RequestOptions): Promise
  }

  interface createReturnItem_args {
    returnId: string
    responseFields?: string
  }
  interface z_createReturnItem {
    (config: createReturnItem_args, options: api.RequestOptions): Promise
  }

  interface resendReturnEmail_args {}
  interface z_resendReturnEmail {
    (config: resendReturnEmail_args, options: api.RequestOptions): Promise
  }

  interface performReturnActions_args {
    responseFields?: string
  }
  interface z_performReturnActions {
    (config: performReturnActions_args, options: api.RequestOptions): Promise
  }

  interface createReturnShippingOrder_args {
    returnId: string
    responseFields?: string
  }
  interface z_createReturnShippingOrder {
    (
      config: createReturnShippingOrder_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getAvailableReturnActions_args {
    returnId: string
  }
  interface z_getAvailableReturnActions {
    (
      config: getAvailableReturnActions_args,
      options: api.RequestOptions
    ): Promise
  }

  interface createPaymentActionForReturn_args {
    returnId: string
    responseFields?: string
  }
  interface z_createPaymentActionForReturn {
    (
      config: createPaymentActionForReturn_args,
      options: api.RequestOptions
    ): Promise
  }

  interface performPaymentActionForReturn_args {
    paymentId: string
    responseFields?: string
  }
  interface z_performPaymentActionForReturn {
    (
      config: performPaymentActionForReturn_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getAvailablePaymentActionsForReturn_args {
    paymentId: string
  }
  interface z_getAvailablePaymentActionsForReturn {
    (
      config: getAvailablePaymentActionsForReturn_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getChannel_args {
    code: string
    responseFields?: string
  }
  interface z_getChannel {
    (config: getChannel_args, options: api.RequestOptions): Promise
  }

  interface z_channel {
    getChannel: z_getChannel
    getChannels: z_getChannels
    deleteChannel: z_deleteChannel
    updateChannel: z_updateChannel
    createChannel: z_createChannel
  }

  interface getChannels_args {
    responseFields?: string
  }
  interface z_getChannels {
    (config: getChannels_args, options: api.RequestOptions): Promise
  }

  interface deleteChannel_args {
    code: string
  }
  interface z_deleteChannel {
    (config: deleteChannel_args, options: api.RequestOptions): Promise
  }

  interface updateChannel_args {
    code: string
    responseFields?: string
  }
  interface z_updateChannel {
    (config: updateChannel_args, options: api.RequestOptions): Promise
  }

  interface createChannel_args {
    responseFields?: string
  }
  interface z_createChannel {
    (config: createChannel_args, options: api.RequestOptions): Promise
  }

  interface getCheckout_args {
    checkoutId: string
    responseFields?: string
  }
  interface z_getCheckout {
    (config: getCheckout_args, options: api.RequestOptions): Promise
  }

  interface z_checkout {
    getCheckout: z_getCheckout
    getCheckouts: z_getCheckouts
    updateCheckout: z_updateCheckout
    setShippingMethods: z_setShippingMethods
    getAvailableActions: z_getAvailableActions
    processDigitalWallet: z_processDigitalWallet
    performCheckoutAction: z_performCheckoutAction
    createCheckoutFromCart: z_createCheckoutFromCart
    changeCheckoutPriceList: z_changeCheckoutPriceList
    getAvailableShippingMethods: z_getAvailableShippingMethods
    resendCheckoutConfirmationEmail: z_resendCheckoutConfirmationEmail
    paymentSettings: z_paymentSettings
    orderProcessingSettings: z_orderProcessingSettings
    customerCheckoutSettings: z_customerCheckoutSettings
  }

  interface getCheckouts_args {
    responseFields?: string
  }
  interface z_getCheckouts {
    (config: getCheckouts_args, options: api.RequestOptions): Promise
  }

  interface updateCheckout_args {
    checkoutId: string
    responseFields?: string
  }
  interface z_updateCheckout {
    (config: updateCheckout_args, options: api.RequestOptions): Promise
  }

  interface setShippingMethods_args {
    checkoutId: string
    responseFields?: string
  }
  interface z_setShippingMethods {
    (config: setShippingMethods_args, options: api.RequestOptions): Promise
  }

  interface performCheckoutAction_args {
    checkoutId: string
    responseFields?: string
  }
  interface z_performCheckoutAction {
    (config: performCheckoutAction_args, options: api.RequestOptions): Promise
  }

  interface createCheckoutFromCart_args {
    responseFields?: string
  }
  interface z_createCheckoutFromCart {
    (config: createCheckoutFromCart_args, options: api.RequestOptions): Promise
  }

  interface changeCheckoutPriceList_args {
    checkoutId: string
    responseFields?: string
  }
  interface z_changeCheckoutPriceList {
    (config: changeCheckoutPriceList_args, options: api.RequestOptions): Promise
  }

  interface getAvailableShippingMethods_args {
    checkoutId: string
  }
  interface z_getAvailableShippingMethods {
    (
      config: getAvailableShippingMethods_args,
      options: api.RequestOptions
    ): Promise
  }

  interface resendCheckoutConfirmationEmail_args {
    checkoutId: string
  }
  interface z_resendCheckoutConfirmationEmail {
    (
      config: resendCheckoutConfirmationEmail_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getWishlist_args {
    wishlistId: string
    responseFields?: string
  }
  interface z_getWishlist {
    (config: getWishlist_args, options: api.RequestOptions): Promise
  }

  interface z_wishlist {
    getWishlist: z_getWishlist
    getWishlists: z_getWishlists
    deleteWishlist: z_deleteWishlist
    updateWishlist: z_updateWishlist
    createWishlist: z_createWishlist
    getWishlistByName: z_getWishlistByName
  }

  interface getWishlists_args {
    responseFields?: string
  }
  interface z_getWishlists {
    (config: getWishlists_args, options: api.RequestOptions): Promise
  }

  interface deleteWishlist_args {
    wishlistId: string
  }
  interface z_deleteWishlist {
    (config: deleteWishlist_args, options: api.RequestOptions): Promise
  }

  interface updateWishlist_args {
    wishlistId: string
    responseFields?: string
  }
  interface z_updateWishlist {
    (config: updateWishlist_args, options: api.RequestOptions): Promise
  }

  interface createWishlist_args {
    responseFields?: string
  }
  interface z_createWishlist {
    (config: createWishlist_args, options: api.RequestOptions): Promise
  }

  interface getWishlistByName_args {
    wishlistName: string
    responseFields?: string
  }
  interface z_getWishlistByName {
    (config: getWishlistByName_args, options: api.RequestOptions): Promise
  }

  interface getLocation_args {
    locationCode: string
    responseFields?: string
  }
  interface z_getLocation {
    (config: getLocation_args, options: api.RequestOptions): Promise
  }

  interface z_location {
    getLocation: z_getLocation
    getDirectShipLocation: z_getDirectShipLocation
    getLocationsInUsageType: z_getLocationsInUsageType
    getInStorePickupLocation: z_getInStorePickupLocation
    getInStorePickupLocations: z_getInStorePickupLocations
    addLocation: z_addLocation
    getLocations: z_getLocations
    deleteLocation: z_deleteLocation
    updateLocation: z_updateLocation
  }

  interface getDirectShipLocation_args {
    responseFields?: string
  }
  interface z_getDirectShipLocation {
    (config: getDirectShipLocation_args, options: api.RequestOptions): Promise
  }

  interface getLocationsInUsageType_args {
    locationUsageType: string
    responseFields?: string
  }
  interface z_getLocationsInUsageType {
    (config: getLocationsInUsageType_args, options: api.RequestOptions): Promise
  }

  interface getInStorePickupLocation_args {
    locationCode: string
    responseFields?: string
  }
  interface z_getInStorePickupLocation {
    (
      config: getInStorePickupLocation_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getInStorePickupLocations_args {
    responseFields?: string
  }
  interface z_getInStorePickupLocations {
    (
      config: getInStorePickupLocations_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_orders {
    pickup: z_pickup
    payment: z_payment
    package: z_package
    refund: z_refund
    shipment: z_shipment
    orderItem: z_orderItem
    orderNote: z_orderNote
    billingInfo: z_billingInfo
    adjustment: z_adjustment
    appliedDiscount: z_appliedDiscount
    digitalPackage: z_digitalPackage
    orderAttribute: z_orderAttribute
    fulfillmentInfo: z_fulfillmentInfo
    extendedProperty: z_extendedProperty
    orderValidationResult: z_orderValidationResult
    fulfillmentAction: z_fulfillmentAction
    attributedefinition: z_attributedefinition
    orderReturnableItem: z_orderReturnableItem
  }

  interface getPickup_args {
    pickupId: string
    responseFields?: string
  }
  interface z_getPickup {
    (config: getPickup_args, options: api.RequestOptions): Promise
  }

  interface z_pickup {
    getPickup: z_getPickup
    deletePickup: z_deletePickup
    updatePickup: z_updatePickup
    createPickup: z_createPickup
    getAvailablePickupFulfillmentActions: z_getAvailablePickupFulfillmentActions
  }

  interface deletePickup_args {
    pickupId: string
  }
  interface z_deletePickup {
    (config: deletePickup_args, options: api.RequestOptions): Promise
  }

  interface updatePickup_args {
    pickupId: string
    responseFields?: string
  }
  interface z_updatePickup {
    (config: updatePickup_args, options: api.RequestOptions): Promise
  }

  interface createPickup_args {
    orderId: string
    responseFields?: string
  }
  interface z_createPickup {
    (config: createPickup_args, options: api.RequestOptions): Promise
  }

  interface getAvailablePickupFulfillmentActions_args {
    pickupId: string
  }
  interface z_getAvailablePickupFulfillmentActions {
    (
      config: getAvailablePickupFulfillmentActions_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_payment {
    getPayment: z_getPayment
    getPayments: z_getPayments
    createPaymentAction: z_createPaymentAction
    performPaymentAction: z_performPaymentAction
    getAvailablePaymentActions: z_getAvailablePaymentActions
  }

  interface createPaymentAction_args {
    checkoutId: string
    responseFields?: string
  }
  interface z_createPaymentAction {
    (config: createPaymentAction_args, options: api.RequestOptions): Promise
  }

  interface performPaymentAction_args {
    paymentId: string
    responseFields?: string
  }
  interface z_performPaymentAction {
    (config: performPaymentAction_args, options: api.RequestOptions): Promise
  }

  interface getAvailablePaymentActions_args {
    paymentId: string
  }
  interface z_getAvailablePaymentActions {
    (
      config: getAvailablePaymentActions_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getPackage_args {
    applicationKey: string
    responseFields?: string
  }
  interface z_getPackage {
    (config: getPackage_args, options: api.RequestOptions): Promise
  }

  interface z_package {
    getPackage: z_getPackage
    createPackage: z_createPackage
    updatePackage: z_updatePackage
    deletePackage: z_deletePackage
    getPackageLabel: z_getPackageLabel
    getAvailablePackageFulfillmentActions: z_getAvailablePackageFulfillmentActions
    getFile: z_getFile
  }

  interface createPackage_args {
    responseFields?: string
  }
  interface z_createPackage {
    (config: createPackage_args, options: api.RequestOptions): Promise
  }

  interface updatePackage_args {
    applicationKey: string
    responseFields?: string
  }
  interface z_updatePackage {
    (config: updatePackage_args, options: api.RequestOptions): Promise
  }

  interface deletePackage_args {
    applicationKey: string
  }
  interface z_deletePackage {
    (config: deletePackage_args, options: api.RequestOptions): Promise
  }

  interface getPackageLabel_args {
    packageId: string
    returnAsBase64Png?: string
  }
  interface z_getPackageLabel {
    (config: getPackageLabel_args, options: api.RequestOptions): Promise
  }

  interface getAvailablePackageFulfillmentActions_args {
    packageId: string
  }
  interface z_getAvailablePackageFulfillmentActions {
    (
      config: getAvailablePackageFulfillmentActions_args,
      options: api.RequestOptions
    ): Promise
  }

  interface createRefund_args {
    orderId: string
    responseFields?: string
  }
  interface z_createRefund {
    (config: createRefund_args, options: api.RequestOptions): Promise
  }

  interface z_refund {
    createRefund: z_createRefund
    resendRefundEmail: z_resendRefundEmail
  }

  interface resendRefundEmail_args {
    refundId: string
  }
  interface z_resendRefundEmail {
    (config: resendRefundEmail_args, options: api.RequestOptions): Promise
  }

  interface getShipment_args {
    shipmentId: string
    responseFields?: string
  }
  interface z_getShipment {
    (config: getShipment_args, options: api.RequestOptions): Promise
  }

  interface z_shipment {
    getShipment: z_getShipment
    deleteShipment: z_deleteShipment
    createPackageShipments: z_createPackageShipments
    getAvailableShipmentMethods: z_getAvailableShipmentMethods
  }

  interface deleteShipment_args {
    shipmentId: string
  }
  interface z_deleteShipment {
    (config: deleteShipment_args, options: api.RequestOptions): Promise
  }

  interface createPackageShipments_args {
    returnId: string
  }
  interface z_createPackageShipments {
    (config: createPackageShipments_args, options: api.RequestOptions): Promise
  }

  interface getAvailableShipmentMethods_args {
    orderId: string
    draft?: string
  }
  interface z_getAvailableShipmentMethods {
    (
      config: getAvailableShipmentMethods_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getOrderItem_args {
    orderItemId: string
    responseFields?: string
  }
  interface z_getOrderItem {
    (config: getOrderItem_args, options: api.RequestOptions): Promise
  }

  interface z_orderItem {
    getOrderItem: z_getOrderItem
    getOrderItems: z_getOrderItems
    updateItemDuty: z_updateItemDuty
    deleteOrderItem: z_deleteOrderItem
    createOrderItem: z_createOrderItem
    updateItemQuantity: z_updateItemQuantity
    getOrderItemViaLineId: z_getOrderItemViaLineId
    updateItemFulfillment: z_updateItemFulfillment
    updateItemProductPrice: z_updateItemProductPrice
    updateOrderItemDiscount: z_updateOrderItemDiscount
    splitItem: z_splitItem
    updateItemDestination: z_updateItemDestination
    bulkUpdateItemDestinations: z_bulkUpdateItemDestinations
  }

  interface getOrderItems_args {
    orderId: string
    responseFields?: string
  }
  interface z_getOrderItems {
    (config: getOrderItems_args, options: api.RequestOptions): Promise
  }

  interface updateItemDuty_args {
    dutyAmount: string
    responseFields?: string
  }
  interface z_updateItemDuty {
    (config: updateItemDuty_args, options: api.RequestOptions): Promise
  }

  interface createOrderItem_args {
    orderId: string
    responseFields?: string
  }
  interface z_createOrderItem {
    (config: createOrderItem_args, options: api.RequestOptions): Promise
  }

  interface updateItemQuantity_args {
    quantity: string
    responseFields?: string
  }
  interface z_updateItemQuantity {
    (config: updateItemQuantity_args, options: api.RequestOptions): Promise
  }

  interface getOrderItemViaLineId_args {
    lineId: string
    responseFields?: string
  }
  interface z_getOrderItemViaLineId {
    (config: getOrderItemViaLineId_args, options: api.RequestOptions): Promise
  }

  interface updateItemFulfillment_args {
    orderItemId: string
    responseFields?: string
  }
  interface z_updateItemFulfillment {
    (config: updateItemFulfillment_args, options: api.RequestOptions): Promise
  }

  interface updateItemProductPrice_args {
    price: string
    responseFields?: string
  }
  interface z_updateItemProductPrice {
    (config: updateItemProductPrice_args, options: api.RequestOptions): Promise
  }

  interface updateOrderItemDiscount_args {
    discountId: string
    responseFields?: string
  }
  interface z_updateOrderItemDiscount {
    (config: updateOrderItemDiscount_args, options: api.RequestOptions): Promise
  }

  interface getOrderNote_args {
    noteId: string
    responseFields?: string
  }
  interface z_getOrderNote {
    (config: getOrderNote_args, options: api.RequestOptions): Promise
  }

  interface z_orderNote {
    getOrderNote: z_getOrderNote
    getOrderNotes: z_getOrderNotes
    deleteOrderNote: z_deleteOrderNote
    updateOrderNote: z_updateOrderNote
    createOrderNote: z_createOrderNote
    getReturnNote: z_getReturnNote
    getReturnNotes: z_getReturnNotes
    deleteReturnNote: z_deleteReturnNote
    updateReturnNote: z_updateReturnNote
    createReturnNote: z_createReturnNote
    getCheckoutNote: z_getCheckoutNote
    getCheckoutNotes: z_getCheckoutNotes
    createCheckoutNote: z_createCheckoutNote
    updateCheckoutNote: z_updateCheckoutNote
    deleteCheckoutNote: z_deleteCheckoutNote
  }

  interface getOrderNotes_args {
    orderId: string
  }
  interface z_getOrderNotes {
    (config: getOrderNotes_args, options: api.RequestOptions): Promise
  }

  interface deleteOrderNote_args {
    noteId: string
  }
  interface z_deleteOrderNote {
    (config: deleteOrderNote_args, options: api.RequestOptions): Promise
  }

  interface updateOrderNote_args {
    noteId: string
    responseFields?: string
  }
  interface z_updateOrderNote {
    (config: updateOrderNote_args, options: api.RequestOptions): Promise
  }

  interface createOrderNote_args {
    orderId: string
    responseFields?: string
  }
  interface z_createOrderNote {
    (config: createOrderNote_args, options: api.RequestOptions): Promise
  }

  interface setBillingInfo_args {
    orderId: string
    responseFields?: string
  }
  interface z_setBillingInfo {
    (config: setBillingInfo_args, options: api.RequestOptions): Promise
  }

  interface z_billingInfo {
    setBillingInfo: z_setBillingInfo
    getBillingInfo: z_getBillingInfo
  }

  interface getBillingInfo_args {
    orderId: string
    responseFields?: string
  }
  interface z_getBillingInfo {
    (config: getBillingInfo_args, options: api.RequestOptions): Promise
  }

  interface applyAdjustment_args {
    orderId: string
    responseFields?: string
  }
  interface z_applyAdjustment {
    (config: applyAdjustment_args, options: api.RequestOptions): Promise
  }

  interface z_adjustment {
    applyAdjustment: z_applyAdjustment
    removeAdjustment: z_removeAdjustment
    applyShippingAdjustment: z_applyShippingAdjustment
    applyHandlingAdjustment: z_applyHandlingAdjustment
    removeShippingAdjustment: z_removeShippingAdjustment
    removeHandlingAdjustment: z_removeHandlingAdjustment
  }

  interface removeAdjustment_args {
    orderId: string
    version?: string
  }
  interface z_removeAdjustment {
    (config: removeAdjustment_args, options: api.RequestOptions): Promise
  }

  interface applyShippingAdjustment_args {
    orderId: string
    responseFields?: string
  }
  interface z_applyShippingAdjustment {
    (config: applyShippingAdjustment_args, options: api.RequestOptions): Promise
  }

  interface applyHandlingAdjustment_args {
    orderId: string
    responseFields?: string
  }
  interface z_applyHandlingAdjustment {
    (config: applyHandlingAdjustment_args, options: api.RequestOptions): Promise
  }

  interface removeShippingAdjustment_args {
    orderId: string
    version?: string
  }
  interface z_removeShippingAdjustment {
    (
      config: removeShippingAdjustment_args,
      options: api.RequestOptions
    ): Promise
  }

  interface removeHandlingAdjustment_args {
    orderId: string
    version?: string
  }
  interface z_removeHandlingAdjustment {
    (
      config: removeHandlingAdjustment_args,
      options: api.RequestOptions
    ): Promise
  }

  interface applyCoupon_args {
    couponCode: string
    responseFields?: string
  }
  interface z_applyCoupon {
    (config: applyCoupon_args, options: api.RequestOptions): Promise
  }

  interface z_appliedDiscount {
    applyCoupon: z_applyCoupon
    removeCoupon: z_removeCoupon
    removeCoupons: z_removeCoupons
  }

  interface removeCoupon_args {
    couponcode: string
  }
  interface z_removeCoupon {
    (config: removeCoupon_args, options: api.RequestOptions): Promise
  }

  interface removeCoupons_args {
    checkoutId: string
  }
  interface z_removeCoupons {
    (config: removeCoupons_args, options: api.RequestOptions): Promise
  }

  interface getDigitalPackage_args {
    digitalPackageId: string
    responseFields?: string
  }
  interface z_getDigitalPackage {
    (config: getDigitalPackage_args, options: api.RequestOptions): Promise
  }

  interface z_digitalPackage {
    getDigitalPackage: z_getDigitalPackage
    deleteDigitalPackage: z_deleteDigitalPackage
    updateDigitalPackage: z_updateDigitalPackage
    createDigitalPackage: z_createDigitalPackage
    getAvailableDigitalPackageFulfillmentActions: z_getAvailableDigitalPackageFulfillmentActions
  }

  interface deleteDigitalPackage_args {
    digitalPackageId: string
  }
  interface z_deleteDigitalPackage {
    (config: deleteDigitalPackage_args, options: api.RequestOptions): Promise
  }

  interface updateDigitalPackage_args {
    digitalPackageId: string
    responseFields?: string
  }
  interface z_updateDigitalPackage {
    (config: updateDigitalPackage_args, options: api.RequestOptions): Promise
  }

  interface createDigitalPackage_args {
    orderId: string
    responseFields?: string
  }
  interface z_createDigitalPackage {
    (config: createDigitalPackage_args, options: api.RequestOptions): Promise
  }

  interface getAvailableDigitalPackageFulfillmentActions_args {
    digitalPackageId: string
  }
  interface z_getAvailableDigitalPackageFulfillmentActions {
    (
      config: getAvailableDigitalPackageFulfillmentActions_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getOrderAttributes_args {
    orderId: string
  }
  interface z_getOrderAttributes {
    (config: getOrderAttributes_args, options: api.RequestOptions): Promise
  }

  interface z_orderAttribute {
    getOrderAttributes: z_getOrderAttributes
    updateOrderAttributes: z_updateOrderAttributes
    createOrderAttributes: z_createOrderAttributes
    getCheckoutAttributes: z_getCheckoutAttributes
    updateCheckoutAttribute: z_updateCheckoutAttribute
    createCheckoutAttributes: z_createCheckoutAttributes
  }

  interface updateOrderAttributes_args {
    orderId: string
    removeMissing?: string
  }
  interface z_updateOrderAttributes {
    (config: updateOrderAttributes_args, options: api.RequestOptions): Promise
  }

  interface createOrderAttributes_args {
    orderId: string
  }
  interface z_createOrderAttributes {
    (config: createOrderAttributes_args, options: api.RequestOptions): Promise
  }

  interface setFulFillmentInfo_args {
    orderId: string
    responseFields?: string
  }
  interface z_setFulFillmentInfo {
    (config: setFulFillmentInfo_args, options: api.RequestOptions): Promise
  }

  interface z_fulfillmentInfo {
    setFulFillmentInfo: z_setFulFillmentInfo
    getFulfillmentInfo: z_getFulfillmentInfo
  }

  interface getFulfillmentInfo_args {
    orderId: string
    responseFields?: string
  }
  interface z_getFulfillmentInfo {
    (config: getFulfillmentInfo_args, options: api.RequestOptions): Promise
  }

  interface getExtendedProperties_args {
    checkoutId: string
  }
  interface z_getExtendedProperties {
    (config: getExtendedProperties_args, options: api.RequestOptions): Promise
  }

  interface z_extendedProperty {
    getExtendedProperties: z_getExtendedProperties
    addExtendedProperties: z_addExtendedProperties
    deleteExtendedProperty: z_deleteExtendedProperty
    updateExtendedProperty: z_updateExtendedProperty
    deleteExtendedProperties: z_deleteExtendedProperties
    updateExtendedProperties: z_updateExtendedProperties
  }

  interface addExtendedProperties_args {
    checkoutId: string
  }
  interface z_addExtendedProperties {
    (config: addExtendedProperties_args, options: api.RequestOptions): Promise
  }

  interface deleteExtendedProperty_args {
    key: string
  }
  interface z_deleteExtendedProperty {
    (config: deleteExtendedProperty_args, options: api.RequestOptions): Promise
  }

  interface updateExtendedProperty_args {
    key: string
    responseFields?: string
  }
  interface z_updateExtendedProperty {
    (config: updateExtendedProperty_args, options: api.RequestOptions): Promise
  }

  interface deleteExtendedProperties_args {
    checkoutId: string
  }
  interface z_deleteExtendedProperties {
    (
      config: deleteExtendedProperties_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateExtendedProperties_args {
    checkoutId: string
    upsert?: string
  }
  interface z_updateExtendedProperties {
    (
      config: updateExtendedProperties_args,
      options: api.RequestOptions
    ): Promise
  }

  interface addValidationResult_args {
    orderId: string
    responseFields?: string
  }
  interface z_addValidationResult {
    (config: addValidationResult_args, options: api.RequestOptions): Promise
  }

  interface z_orderValidationResult {
    addValidationResult: z_addValidationResult
    getValidationResults: z_getValidationResults
  }

  interface getValidationResults_args {
    orderId: string
  }
  interface z_getValidationResults {
    (config: getValidationResults_args, options: api.RequestOptions): Promise
  }

  interface performFulfillmentAction_args {
    orderId: string
    responseFields?: string
  }
  interface z_performFulfillmentAction {
    (
      config: performFulfillmentAction_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_fulfillmentAction {
    performFulfillmentAction: z_performFulfillmentAction
    resendPackageFulfillmentEmail: z_resendPackageFulfillmentEmail
  }

  interface resendPackageFulfillmentEmail_args {
    orderId: string
    responseFields?: string
  }
  interface z_resendPackageFulfillmentEmail {
    (
      config: resendPackageFulfillmentEmail_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_attributedefinition {
    attribute: z_attribute
    productType: z_productType
    producttypes: z_producttypes
    attributes: z_attributes
  }

  interface getAttribute_args {
    attributeFQN: string
    responseFields?: string
  }
  interface z_getAttribute {
    (config: getAttribute_args, options: api.RequestOptions): Promise
  }

  interface z_attribute {
    getAttribute: z_getAttribute
    getAttributes: z_getAttributes
    updateAttribute: z_updateAttribute
    createAttribute: z_createAttribute
    getAttributeVocabularyValues: z_getAttributeVocabularyValues
    addAttribute: z_addAttribute
    deleteAttribute: z_deleteAttribute
  }

  interface getAttributes_args {
    responseFields?: string
  }
  interface z_getAttributes {
    (config: getAttributes_args, options: api.RequestOptions): Promise
  }

  interface updateAttribute_args {
    attributeFQN: string
    responseFields?: string
  }
  interface z_updateAttribute {
    (config: updateAttribute_args, options: api.RequestOptions): Promise
  }

  interface createAttribute_args {
    responseFields?: string
  }
  interface z_createAttribute {
    (config: createAttribute_args, options: api.RequestOptions): Promise
  }

  interface getAttributeVocabularyValues_args {
    attributeFQN: string
  }
  interface z_getAttributeVocabularyValues {
    (
      config: getAttributeVocabularyValues_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getOrderReturnableItems_args {
    orderId: string
    responseFields?: string
  }
  interface z_getOrderReturnableItems {
    (config: getOrderReturnableItems_args, options: api.RequestOptions): Promise
  }

  interface z_orderReturnableItem {
    getOrderReturnableItems: z_getOrderReturnableItems
  }

  interface z_customer {
    visit: z_visit
    credit: z_credit
    customerSegment: z_customerSegment
    customerAccount: z_customerAccount
    customerSet: z_customerSet
    accounts: z_accounts
    customerAuthTicket: z_customerAuthTicket
    credits: z_credits
    addressValidationRequest: z_addressValidationRequest
    attributedefinition: z_attributedefinition
  }

  interface getVisit_args {
    visitId: string
    responseFields?: string
  }
  interface z_getVisit {
    (config: getVisit_args, options: api.RequestOptions): Promise
  }

  interface z_visit {
    getVisit: z_getVisit
    addVisit: z_addVisit
    getVisits: z_getVisits
    updateVisit: z_updateVisit
  }

  interface addVisit_args {
    responseFields?: string
  }
  interface z_addVisit {
    (config: addVisit_args, options: api.RequestOptions): Promise
  }

  interface getVisits_args {
    responseFields?: string
  }
  interface z_getVisits {
    (config: getVisits_args, options: api.RequestOptions): Promise
  }

  interface updateVisit_args {
    visitId: string
    responseFields?: string
  }
  interface z_updateVisit {
    (config: updateVisit_args, options: api.RequestOptions): Promise
  }

  interface addCredit_args {
    responseFields?: string
  }
  interface z_addCredit {
    (config: addCredit_args, options: api.RequestOptions): Promise
  }

  interface z_credit {
    addCredit: z_addCredit
    getCredit: z_getCredit
    getCredits: z_getCredits
    deleteCredit: z_deleteCredit
    updateCredit: z_updateCredit
    associateCreditToShopper: z_associateCreditToShopper
    resendCreditCreatedEmail: z_resendCreditCreatedEmail
  }

  interface getCredit_args {
    code: string
    responseFields?: string
  }
  interface z_getCredit {
    (config: getCredit_args, options: api.RequestOptions): Promise
  }

  interface getCredits_args {
    responseFields?: string
  }
  interface z_getCredits {
    (config: getCredits_args, options: api.RequestOptions): Promise
  }

  interface deleteCredit_args {
    code: string
  }
  interface z_deleteCredit {
    (config: deleteCredit_args, options: api.RequestOptions): Promise
  }

  interface updateCredit_args {
    code: string
    responseFields?: string
  }
  interface z_updateCredit {
    (config: updateCredit_args, options: api.RequestOptions): Promise
  }

  interface associateCreditToShopper_args {
    code: string
    responseFields?: string
  }
  interface z_associateCreditToShopper {
    (
      config: associateCreditToShopper_args,
      options: api.RequestOptions
    ): Promise
  }

  interface resendCreditCreatedEmail_args {
    code: string
  }
  interface z_resendCreditCreatedEmail {
    (
      config: resendCreditCreatedEmail_args,
      options: api.RequestOptions
    ): Promise
  }

  interface addSegment_args {
    responseFields?: string
  }
  interface z_addSegment {
    (config: addSegment_args, options: api.RequestOptions): Promise
  }

  interface z_customerSegment {
    addSegment: z_addSegment
    getSegment: z_getSegment
    getSegments: z_getSegments
    deleteSegment: z_deleteSegment
    updateSegment: z_updateSegment
    addSegmentAccounts: z_addSegmentAccounts
    removeSegmentAccount: z_removeSegmentAccount
    getAccountSegments: z_getAccountSegments
  }

  interface getSegment_args {
    id: string
    responseFields?: string
  }
  interface z_getSegment {
    (config: getSegment_args, options: api.RequestOptions): Promise
  }

  interface getSegments_args {
    responseFields?: string
  }
  interface z_getSegments {
    (config: getSegments_args, options: api.RequestOptions): Promise
  }

  interface deleteSegment_args {
    id: string
  }
  interface z_deleteSegment {
    (config: deleteSegment_args, options: api.RequestOptions): Promise
  }

  interface updateSegment_args {
    id: string
    responseFields?: string
  }
  interface z_updateSegment {
    (config: updateSegment_args, options: api.RequestOptions): Promise
  }

  interface addSegmentAccounts_args {
    id: string
  }
  interface z_addSegmentAccounts {
    (config: addSegmentAccounts_args, options: api.RequestOptions): Promise
  }

  interface removeSegmentAccount_args {
    accountId: string
  }
  interface z_removeSegmentAccount {
    (config: removeSegmentAccount_args, options: api.RequestOptions): Promise
  }

  interface addAccount_args {
    responseFields?: string
  }
  interface z_addAccount {
    (config: addAccount_args, options: api.RequestOptions): Promise
  }

  interface z_customerAccount {
    addAccount: z_addAccount
    getAccount: z_getAccount
    addAccounts: z_addAccounts
    getAccounts: z_getAccounts
    updateAccount: z_updateAccount
    getLoginState: z_getLoginState
    deleteAccount: z_deleteAccount
    resetPassword: z_resetPassword
    changePassword: z_changePassword
    setLoginLocked: z_setLoginLocked
    changePasswords: z_changePasswords
    addAccountAndLogin: z_addAccountAndLogin
    getLoginStateByUserName: z_getLoginStateByUserName
    setPasswordChangeRequired: z_setPasswordChangeRequired
    addLoginToExistingCustomer: z_addLoginToExistingCustomer
    getLoginStateByEmailAddress: z_getLoginStateByEmailAddress
    recomputeCustomerLifetimeValue: z_recomputeCustomerLifetimeValue
    getCustomersPurchaseOrderAccounts: z_getCustomersPurchaseOrderAccounts
  }

  interface getAccount_args {
    accountId: string
    responseFields?: string
  }
  interface z_getAccount {
    (config: getAccount_args, options: api.RequestOptions): Promise
  }

  interface addAccounts_args {
    responseFields?: string
  }
  interface z_addAccounts {
    (config: addAccounts_args, options: api.RequestOptions): Promise
  }

  interface getAccounts_args {
    responseFields?: string
  }
  interface z_getAccounts {
    (config: getAccounts_args, options: api.RequestOptions): Promise
  }

  interface updateAccount_args {
    accountId: string
    responseFields?: string
  }
  interface z_updateAccount {
    (config: updateAccount_args, options: api.RequestOptions): Promise
  }

  interface getLoginState_args {
    accountId: string
    responseFields?: string
  }
  interface z_getLoginState {
    (config: getLoginState_args, options: api.RequestOptions): Promise
  }

  interface deleteAccount_args {
    accountId: string
  }
  interface z_deleteAccount {
    (config: deleteAccount_args, options: api.RequestOptions): Promise
  }

  interface resetPassword_args {}
  interface z_resetPassword {
    (config: resetPassword_args, options: api.RequestOptions): Promise
  }

  interface changePassword_args {
    accountId: string
    unlockAccount?: string
  }
  interface z_changePassword {
    (config: changePassword_args, options: api.RequestOptions): Promise
  }

  interface setLoginLocked_args {
    accountId: string
  }
  interface z_setLoginLocked {
    (config: setLoginLocked_args, options: api.RequestOptions): Promise
  }

  interface changePasswords_args {
    responseFields?: string
  }
  interface z_changePasswords {
    (config: changePasswords_args, options: api.RequestOptions): Promise
  }

  interface addAccountAndLogin_args {
    responseFields?: string
  }
  interface z_addAccountAndLogin {
    (config: addAccountAndLogin_args, options: api.RequestOptions): Promise
  }

  interface getLoginStateByUserName_args {
    responseFields?: string
  }
  interface z_getLoginStateByUserName {
    (config: getLoginStateByUserName_args, options: api.RequestOptions): Promise
  }

  interface setPasswordChangeRequired_args {
    accountId: string
  }
  interface z_setPasswordChangeRequired {
    (
      config: setPasswordChangeRequired_args,
      options: api.RequestOptions
    ): Promise
  }

  interface addLoginToExistingCustomer_args {
    accountId: string
    responseFields?: string
  }
  interface z_addLoginToExistingCustomer {
    (
      config: addLoginToExistingCustomer_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getLoginStateByEmailAddress_args {
    responseFields?: string
  }
  interface z_getLoginStateByEmailAddress {
    (
      config: getLoginStateByEmailAddress_args,
      options: api.RequestOptions
    ): Promise
  }

  interface recomputeCustomerLifetimeValue_args {
    accountId: string
  }
  interface z_recomputeCustomerLifetimeValue {
    (
      config: recomputeCustomerLifetimeValue_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getCustomersPurchaseOrderAccounts_args {
    responseFields?: string
  }
  interface z_getCustomersPurchaseOrderAccounts {
    (
      config: getCustomersPurchaseOrderAccounts_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getCustomerSet_args {
    code: string
    responseFields?: string
  }
  interface z_getCustomerSet {
    (config: getCustomerSet_args, options: api.RequestOptions): Promise
  }

  interface z_customerSet {
    getCustomerSet: z_getCustomerSet
    getCustomerSets: z_getCustomerSets
  }

  interface getCustomerSets_args {
    responseFields?: string
  }
  interface z_getCustomerSets {
    (config: getCustomerSets_args, options: api.RequestOptions): Promise
  }

  interface z_accounts {
    card: z_card
    transaction: z_transaction
    customerNote: z_customerNote
    customerContact: z_customerContact
    customerSegment: z_customerSegment
    customerAuditEntry: z_customerAuditEntry
    customerAttribute: z_customerAttribute
    customerPurchaseOrderAccount: z_customerPurchaseOrderAccount
  }

  interface getAccountCard_args {
    cardId: string
    responseFields?: string
  }
  interface z_getAccountCard {
    (config: getAccountCard_args, options: api.RequestOptions): Promise
  }

  interface z_card {
    getAccountCard: z_getAccountCard
    addAccountCard: z_addAccountCard
    getAccountCards: z_getAccountCards
    deleteAccountCard: z_deleteAccountCard
    updateAccountCard: z_updateAccountCard
  }

  interface addAccountCard_args {
    accountId: string
    responseFields?: string
  }
  interface z_addAccountCard {
    (config: addAccountCard_args, options: api.RequestOptions): Promise
  }

  interface getAccountCards_args {
    accountId: string
    responseFields?: string
  }
  interface z_getAccountCards {
    (config: getAccountCards_args, options: api.RequestOptions): Promise
  }

  interface deleteAccountCard_args {
    cardId: string
  }
  interface z_deleteAccountCard {
    (config: deleteAccountCard_args, options: api.RequestOptions): Promise
  }

  interface updateAccountCard_args {
    cardId: string
    responseFields?: string
  }
  interface z_updateAccountCard {
    (config: updateAccountCard_args, options: api.RequestOptions): Promise
  }

  interface addTransaction_args {
    code: string
    responseFields?: string
  }
  interface z_addTransaction {
    (config: addTransaction_args, options: api.RequestOptions): Promise
  }

  interface z_transaction {
    addTransaction: z_addTransaction
    getTransactions: z_getTransactions
    removeTransaction: z_removeTransaction
  }

  interface getTransactions_args {
    code: string
    responseFields?: string
  }
  interface z_getTransactions {
    (config: getTransactions_args, options: api.RequestOptions): Promise
  }

  interface removeTransaction_args {
    transactionId: string
  }
  interface z_removeTransaction {
    (config: removeTransaction_args, options: api.RequestOptions): Promise
  }

  interface getAccountNote_args {
    noteId: string
    responseFields?: string
  }
  interface z_getAccountNote {
    (config: getAccountNote_args, options: api.RequestOptions): Promise
  }

  interface z_customerNote {
    getAccountNote: z_getAccountNote
    addAccountNote: z_addAccountNote
    getAccountNotes: z_getAccountNotes
    updateAccountNote: z_updateAccountNote
    deleteAccountNote: z_deleteAccountNote
  }

  interface addAccountNote_args {
    accountId: string
    responseFields?: string
  }
  interface z_addAccountNote {
    (config: addAccountNote_args, options: api.RequestOptions): Promise
  }

  interface getAccountNotes_args {
    accountId: string
    responseFields?: string
  }
  interface z_getAccountNotes {
    (config: getAccountNotes_args, options: api.RequestOptions): Promise
  }

  interface updateAccountNote_args {
    noteId: string
    responseFields?: string
  }
  interface z_updateAccountNote {
    (config: updateAccountNote_args, options: api.RequestOptions): Promise
  }

  interface deleteAccountNote_args {
    noteId: string
  }
  interface z_deleteAccountNote {
    (config: deleteAccountNote_args, options: api.RequestOptions): Promise
  }

  interface addAccountContact_args {
    accountId: string
    responseFields?: string
  }
  interface z_addAccountContact {
    (config: addAccountContact_args, options: api.RequestOptions): Promise
  }

  interface z_customerContact {
    addAccountContact: z_addAccountContact
    getAccountContact: z_getAccountContact
    getAccountContacts: z_getAccountContacts
    updateAccountContact: z_updateAccountContact
    deleteAccountContact: z_deleteAccountContact
    addAccountContactList: z_addAccountContactList
  }

  interface getAccountContact_args {
    contactId: string
    responseFields?: string
  }
  interface z_getAccountContact {
    (config: getAccountContact_args, options: api.RequestOptions): Promise
  }

  interface getAccountContacts_args {
    accountId: string
    responseFields?: string
  }
  interface z_getAccountContacts {
    (config: getAccountContacts_args, options: api.RequestOptions): Promise
  }

  interface updateAccountContact_args {
    contactId: string
    responseFields?: string
  }
  interface z_updateAccountContact {
    (config: updateAccountContact_args, options: api.RequestOptions): Promise
  }

  interface deleteAccountContact_args {
    contactId: string
  }
  interface z_deleteAccountContact {
    (config: deleteAccountContact_args, options: api.RequestOptions): Promise
  }

  interface addAccountContactList_args {
    accountId: string
    responseFields?: string
  }
  interface z_addAccountContactList {
    (config: addAccountContactList_args, options: api.RequestOptions): Promise
  }

  interface getAccountSegments_args {
    accountId: string
    responseFields?: string
  }
  interface z_getAccountSegments {
    (config: getAccountSegments_args, options: api.RequestOptions): Promise
  }

  interface getAccountAuditLog_args {
    accountId: string
    responseFields?: string
  }
  interface z_getAccountAuditLog {
    (config: getAccountAuditLog_args, options: api.RequestOptions): Promise
  }

  interface z_customerAuditEntry {
    getAccountAuditLog: z_getAccountAuditLog
  }

  interface addAccountAttribute_args {
    accountId: string
    responseFields?: string
  }
  interface z_addAccountAttribute {
    (config: addAccountAttribute_args, options: api.RequestOptions): Promise
  }

  interface z_customerAttribute {
    addAccountAttribute: z_addAccountAttribute
    getAccountAttribute: z_getAccountAttribute
    getAccountAttributes: z_getAccountAttributes
    deleteAccountAttribute: z_deleteAccountAttribute
    updateAccountAttribute: z_updateAccountAttribute
  }

  interface getAccountAttribute_args {
    attributeFQN: string
    responseFields?: string
  }
  interface z_getAccountAttribute {
    (config: getAccountAttribute_args, options: api.RequestOptions): Promise
  }

  interface getAccountAttributes_args {
    accountId: string
    responseFields?: string
  }
  interface z_getAccountAttributes {
    (config: getAccountAttributes_args, options: api.RequestOptions): Promise
  }

  interface deleteAccountAttribute_args {
    attributeFQN: string
  }
  interface z_deleteAccountAttribute {
    (config: deleteAccountAttribute_args, options: api.RequestOptions): Promise
  }

  interface updateAccountAttribute_args {
    attributeFQN: string
    responseFields?: string
  }
  interface z_updateAccountAttribute {
    (config: updateAccountAttribute_args, options: api.RequestOptions): Promise
  }

  interface createPurchaseOrderTransaction_args {
    accountId: string
    responseFields?: string
  }
  interface z_createPurchaseOrderTransaction {
    (
      config: createPurchaseOrderTransaction_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_customerPurchaseOrderAccount {
    createPurchaseOrderTransaction: z_createPurchaseOrderTransaction
    getCustomerPurchaseOrderAccount: z_getCustomerPurchaseOrderAccount
    createCustomerPurchaseOrderAccount: z_createCustomerPurchaseOrderAccount
    deleteCustomerPurchaseOrderAccount: z_deleteCustomerPurchaseOrderAccount
    updateCustomerPurchaseOrderAccount: z_updateCustomerPurchaseOrderAccount
    getCustomerPurchaseOrderTransactions: z_getCustomerPurchaseOrderTransactions
  }

  interface getCustomerPurchaseOrderAccount_args {
    accountId: string
    responseFields?: string
  }
  interface z_getCustomerPurchaseOrderAccount {
    (
      config: getCustomerPurchaseOrderAccount_args,
      options: api.RequestOptions
    ): Promise
  }

  interface createCustomerPurchaseOrderAccount_args {
    accountId: string
    responseFields?: string
  }
  interface z_createCustomerPurchaseOrderAccount {
    (
      config: createCustomerPurchaseOrderAccount_args,
      options: api.RequestOptions
    ): Promise
  }

  interface deleteCustomerPurchaseOrderAccount_args {
    accountId: string
  }
  interface z_deleteCustomerPurchaseOrderAccount {
    (
      config: deleteCustomerPurchaseOrderAccount_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateCustomerPurchaseOrderAccount_args {
    accountId: string
    responseFields?: string
  }
  interface z_updateCustomerPurchaseOrderAccount {
    (
      config: updateCustomerPurchaseOrderAccount_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getCustomerPurchaseOrderTransactions_args {
    accountId: string
    responseFields?: string
  }
  interface z_getCustomerPurchaseOrderTransactions {
    (
      config: getCustomerPurchaseOrderTransactions_args,
      options: api.RequestOptions
    ): Promise
  }

  interface createUserAuthTicket_args {
    responseFields?: string
  }
  interface z_createUserAuthTicket {
    (config: createUserAuthTicket_args, options: api.RequestOptions): Promise
  }

  interface z_customerAuthTicket {
    createUserAuthTicket: z_createUserAuthTicket
    refreshUserAuthTicket: z_refreshUserAuthTicket
    createAnonymousShopperAuthTicket: z_createAnonymousShopperAuthTicket
  }

  interface refreshUserAuthTicket_args {
    responseFields?: string
  }
  interface z_refreshUserAuthTicket {
    (config: refreshUserAuthTicket_args, options: api.RequestOptions): Promise
  }

  interface createAnonymousShopperAuthTicket_args {
    responseFields?: string
  }
  interface z_createAnonymousShopperAuthTicket {
    (
      config: createAnonymousShopperAuthTicket_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_credits {
    creditAuditEntry: z_creditAuditEntry
    creditTransaction: z_creditTransaction
  }

  interface getAuditEntries_args {
    code: string
    responseFields?: string
  }
  interface z_getAuditEntries {
    (config: getAuditEntries_args, options: api.RequestOptions): Promise
  }

  interface z_creditAuditEntry {
    getAuditEntries: z_getAuditEntries
  }

  interface z_creditTransaction {
    addTransaction: z_addTransaction
    getTransactions: z_getTransactions
  }

  interface validateAddress_args {
    responseFields?: string
  }
  interface z_validateAddress {
    (config: validateAddress_args, options: api.RequestOptions): Promise
  }

  interface z_addressValidationRequest {
    validateAddress: z_validateAddress
  }

  interface getTargetRule_args {
    code: string
    responseFields?: string
  }
  interface z_getTargetRule {
    (config: getTargetRule_args, options: api.RequestOptions): Promise
  }

  interface z_targetRule {
    getTargetRule: z_getTargetRule
    getTargetRules: z_getTargetRules
    deleteTargetRule: z_deleteTargetRule
    updateTargetRule: z_updateTargetRule
    createTargetRule: z_createTargetRule
    validateTargetRule: z_validateTargetRule
  }

  interface getTargetRules_args {
    responseFields?: string
  }
  interface z_getTargetRules {
    (config: getTargetRules_args, options: api.RequestOptions): Promise
  }

  interface deleteTargetRule_args {
    code: string
  }
  interface z_deleteTargetRule {
    (config: deleteTargetRule_args, options: api.RequestOptions): Promise
  }

  interface updateTargetRule_args {
    code: string
    responseFields?: string
  }
  interface z_updateTargetRule {
    (config: updateTargetRule_args, options: api.RequestOptions): Promise
  }

  interface createTargetRule_args {
    responseFields?: string
  }
  interface z_createTargetRule {
    (config: createTargetRule_args, options: api.RequestOptions): Promise
  }

  interface validateTargetRule_args {}
  interface z_validateTargetRule {
    (config: validateTargetRule_args, options: api.RequestOptions): Promise
  }

  interface z_carts {
    cartItem: z_cartItem
    changeMessage: z_changeMessage
    appliedDiscount: z_appliedDiscount
    extendedProperty: z_extendedProperty
  }

  interface getCartItem_args {
    cartItemId: string
    responseFields?: string
  }
  interface z_getCartItem {
    (config: getCartItem_args, options: api.RequestOptions): Promise
  }

  interface z_cartItem {
    getCartItem: z_getCartItem
    getCartItems: z_getCartItems
    addItemToCart: z_addItemToCart
    updateCartItem: z_updateCartItem
    deleteCartItem: z_deleteCartItem
    removeAllCartItems: z_removeAllCartItems
    updateCartItemQuantity: z_updateCartItemQuantity
  }

  interface getCartItems_args {
    responseFields?: string
  }
  interface z_getCartItems {
    (config: getCartItems_args, options: api.RequestOptions): Promise
  }

  interface addItemToCart_args {
    responseFields?: string
  }
  interface z_addItemToCart {
    (config: addItemToCart_args, options: api.RequestOptions): Promise
  }

  interface updateCartItem_args {
    cartItemId: string
    responseFields?: string
  }
  interface z_updateCartItem {
    (config: updateCartItem_args, options: api.RequestOptions): Promise
  }

  interface deleteCartItem_args {
    cartItemId: string
  }
  interface z_deleteCartItem {
    (config: deleteCartItem_args, options: api.RequestOptions): Promise
  }

  interface removeAllCartItems_args {}
  interface z_removeAllCartItems {
    (config: removeAllCartItems_args, options: api.RequestOptions): Promise
  }

  interface updateCartItemQuantity_args {
    quantity: string
    responseFields?: string
  }
  interface z_updateCartItemQuantity {
    (config: updateCartItemQuantity_args, options: api.RequestOptions): Promise
  }

  interface getMessages_args {
    responseFields?: string
  }
  interface z_getMessages {
    (config: getMessages_args, options: api.RequestOptions): Promise
  }

  interface z_changeMessage {
    getMessages: z_getMessages
    removeMessage: z_removeMessage
    removeAllMessages: z_removeAllMessages
  }

  interface removeMessage_args {
    messageId: string
  }
  interface z_removeMessage {
    (config: removeMessage_args, options: api.RequestOptions): Promise
  }

  interface removeAllMessages_args {}
  interface z_removeAllMessages {
    (config: removeAllMessages_args, options: api.RequestOptions): Promise
  }

  interface z_payments {
    publicCard: z_publicCard
    fraudScreen: z_fraudScreen
    publicToken: z_publicToken
    fraudScreenResponse: z_fraudScreenResponse
  }

  interface delete_args {
    cardId: string
  }
  interface z_delete {
    (config: delete_args, options: api.RequestOptions): Promise
  }

  interface z_publicCard {
    delete: z_delete
    update: z_update
    create: z_create
    getGiftCardBalance: z_getGiftCardBalance
    getUnregisteredGiftCardBalance: z_getUnregisteredGiftCardBalance
  }

  interface update_args {
    cardId: string
    responseFields?: string
  }
  interface z_update {
    (config: update_args, options: api.RequestOptions): Promise
  }

  interface create_args {
    responseFields?: string
  }
  interface z_create {
    (config: create_args, options: api.RequestOptions): Promise
  }

  interface getGiftCardBalance_args {
    cardId: string
    responseFields?: string
  }
  interface z_getGiftCardBalance {
    (config: getGiftCardBalance_args, options: api.RequestOptions): Promise
  }

  interface getUnregisteredGiftCardBalance_args {
    responseFields?: string
  }
  interface z_getUnregisteredGiftCardBalance {
    (
      config: getUnregisteredGiftCardBalance_args,
      options: api.RequestOptions
    ): Promise
  }

  interface screen_args {}
  interface z_screen {
    (config: screen_args, options: api.RequestOptions): Promise
  }

  interface z_fraudScreen {
    screen: z_screen
  }

  interface z_publicToken {
    create: z_create
    execute: z_execute
  }

  interface execute_args {
    cardType: string
    responseFields?: string
  }
  interface z_execute {
    (config: execute_args, options: api.RequestOptions): Promise
  }

  interface z_fraudScreenResponse {
    screen: z_screen
  }

  interface z_returns {
    package: z_package
    shipment: z_shipment
    orderNote: z_orderNote
  }

  interface getReturnNote_args {
    noteId: string
    responseFields?: string
  }
  interface z_getReturnNote {
    (config: getReturnNote_args, options: api.RequestOptions): Promise
  }

  interface getReturnNotes_args {
    returnId: string
  }
  interface z_getReturnNotes {
    (config: getReturnNotes_args, options: api.RequestOptions): Promise
  }

  interface deleteReturnNote_args {
    noteId: string
  }
  interface z_deleteReturnNote {
    (config: deleteReturnNote_args, options: api.RequestOptions): Promise
  }

  interface updateReturnNote_args {
    noteId: string
    responseFields?: string
  }
  interface z_updateReturnNote {
    (config: updateReturnNote_args, options: api.RequestOptions): Promise
  }

  interface createReturnNote_args {
    returnId: string
    responseFields?: string
  }
  interface z_createReturnNote {
    (config: createReturnNote_args, options: api.RequestOptions): Promise
  }

  interface z_admin {
    location: z_location
    locationType: z_locationType
    locations: z_locations
    facet: z_facet
    product: z_product
    search: z_search
    category: z_category
    discount: z_discount
    priceList: z_priceList
    couponSet: z_couponSet
    couponsets: z_couponsets
    publishingScope: z_publishingScope
    masterCatalog: z_masterCatalog
    products: z_products
    softAllocation: z_softAllocation
    discountSettings: z_discountSettings
    productReservation: z_productReservation
    locationInventory: z_locationInventory
    attributedefinition: z_attributedefinition
    discounts: z_discounts
    pricelists: z_pricelists
    productSortDefinition: z_productSortDefinition
    shippingProfile: z_shippingProfile
    profiles: z_profiles
    carrierConfiguration: z_carrierConfiguration
  }

  interface addLocation_args {
    responseFields?: string
  }
  interface z_addLocation {
    (config: addLocation_args, options: api.RequestOptions): Promise
  }

  interface getLocations_args {
    responseFields?: string
  }
  interface z_getLocations {
    (config: getLocations_args, options: api.RequestOptions): Promise
  }

  interface deleteLocation_args {
    locationCode: string
  }
  interface z_deleteLocation {
    (config: deleteLocation_args, options: api.RequestOptions): Promise
  }

  interface updateLocation_args {
    locationCode: string
    responseFields?: string
  }
  interface z_updateLocation {
    (config: updateLocation_args, options: api.RequestOptions): Promise
  }

  interface getLocationType_args {
    locationTypeCode: string
    responseFields?: string
  }
  interface z_getLocationType {
    (config: getLocationType_args, options: api.RequestOptions): Promise
  }

  interface z_locationType {
    getLocationType: z_getLocationType
    addLocationType: z_addLocationType
    getLocationTypes: z_getLocationTypes
    deleteLocationType: z_deleteLocationType
    updateLocationType: z_updateLocationType
  }

  interface addLocationType_args {
    responseFields?: string
  }
  interface z_addLocationType {
    (config: addLocationType_args, options: api.RequestOptions): Promise
  }

  interface getLocationTypes_args {}
  interface z_getLocationTypes {
    (config: getLocationTypes_args, options: api.RequestOptions): Promise
  }

  interface deleteLocationType_args {
    locationTypeCode: string
  }
  interface z_deleteLocationType {
    (config: deleteLocationType_args, options: api.RequestOptions): Promise
  }

  interface updateLocationType_args {
    locationTypeCode: string
    responseFields?: string
  }
  interface z_updateLocationType {
    (config: updateLocationType_args, options: api.RequestOptions): Promise
  }

  interface z_locations {
    attributedefinition: z_attributedefinition
  }

  interface z_catalog {
    admin: z_admin
    storefront: z_storefront
  }

  interface getFacet_args {
    facetId: string
    responseFields?: string
  }
  interface z_getFacet {
    (config: getFacet_args, options: api.RequestOptions): Promise
  }

  interface z_facet {
    getFacet: z_getFacet
    addFacet: z_addFacet
    updateFacet: z_updateFacet
    deleteFacetById: z_deleteFacetById
    getFacetCategoryList: z_getFacetCategoryList
    getFacets: z_getFacets
  }

  interface addFacet_args {
    responseFields?: string
  }
  interface z_addFacet {
    (config: addFacet_args, options: api.RequestOptions): Promise
  }

  interface updateFacet_args {
    facetId: string
    responseFields?: string
  }
  interface z_updateFacet {
    (config: updateFacet_args, options: api.RequestOptions): Promise
  }

  interface deleteFacetById_args {
    facetId: string
  }
  interface z_deleteFacetById {
    (config: deleteFacetById_args, options: api.RequestOptions): Promise
  }

  interface getFacetCategoryList_args {
    categoryId: string
    responseFields?: string
  }
  interface z_getFacetCategoryList {
    (config: getFacetCategoryList_args, options: api.RequestOptions): Promise
  }

  interface getProduct_args {
    productCode: string
    responseFields?: string
  }
  interface z_getProduct {
    (config: getProduct_args, options: api.RequestOptions): Promise
  }

  interface z_product {
    getProduct: z_getProduct
    addProduct: z_addProduct
    getProducts: z_getProducts
    deleteProduct: z_deleteProduct
    updateProduct: z_updateProduct
    renameProductCodes: z_renameProductCodes
    addProductInCatalog: z_addProductInCatalog
    getProductInCatalog: z_getProductInCatalog
    getProductInCatalogs: z_getProductInCatalogs
    updateProductInCatalog: z_updateProductInCatalog
    deleteProductInCatalog: z_deleteProductInCatalog
    updateProductInCatalogs: z_updateProductInCatalogs
  }

  interface addProduct_args {
    responseFields?: string
  }
  interface z_addProduct {
    (config: addProduct_args, options: api.RequestOptions): Promise
  }

  interface getProducts_args {
    responseFields?: string
  }
  interface z_getProducts {
    (config: getProducts_args, options: api.RequestOptions): Promise
  }

  interface deleteProduct_args {
    productCode: string
  }
  interface z_deleteProduct {
    (config: deleteProduct_args, options: api.RequestOptions): Promise
  }

  interface updateProduct_args {
    productCode: string
    responseFields?: string
  }
  interface z_updateProduct {
    (config: updateProduct_args, options: api.RequestOptions): Promise
  }

  interface renameProductCodes_args {}
  interface z_renameProductCodes {
    (config: renameProductCodes_args, options: api.RequestOptions): Promise
  }

  interface addProductInCatalog_args {
    productCode: string
    responseFields?: string
  }
  interface z_addProductInCatalog {
    (config: addProductInCatalog_args, options: api.RequestOptions): Promise
  }

  interface getProductInCatalog_args {
    catalogId: string
    responseFields?: string
  }
  interface z_getProductInCatalog {
    (config: getProductInCatalog_args, options: api.RequestOptions): Promise
  }

  interface getProductInCatalogs_args {
    productCode: string
  }
  interface z_getProductInCatalogs {
    (config: getProductInCatalogs_args, options: api.RequestOptions): Promise
  }

  interface updateProductInCatalog_args {
    catalogId: string
    responseFields?: string
  }
  interface z_updateProductInCatalog {
    (config: updateProductInCatalog_args, options: api.RequestOptions): Promise
  }

  interface deleteProductInCatalog_args {
    catalogId: string
  }
  interface z_deleteProductInCatalog {
    (config: deleteProductInCatalog_args, options: api.RequestOptions): Promise
  }

  interface updateProductInCatalogs_args {
    productCode: string
  }
  interface z_updateProductInCatalogs {
    (config: updateProductInCatalogs_args, options: api.RequestOptions): Promise
  }

  interface getSettings_args {
    responseFields?: string
  }
  interface z_getSettings {
    (config: getSettings_args, options: api.RequestOptions): Promise
  }

  interface search_args {
    responseFields?: string
  }
  interface z_search {
    (config: search_args, options: api.RequestOptions): Promise
  }

  interface updateSettings_args {
    responseFields?: string
  }
  interface z_updateSettings {
    (config: updateSettings_args, options: api.RequestOptions): Promise
  }

  interface addSearchTuningRule_args {
    responseFields?: string
  }
  interface z_addSearchTuningRule {
    (config: addSearchTuningRule_args, options: api.RequestOptions): Promise
  }

  interface getSearchTuningRule_args {
    searchTuningRuleCode: string
    responseFields?: string
  }
  interface z_getSearchTuningRule {
    (config: getSearchTuningRule_args, options: api.RequestOptions): Promise
  }

  interface addSynonymDefinition_args {
    responseFields?: string
  }
  interface z_addSynonymDefinition {
    (config: addSynonymDefinition_args, options: api.RequestOptions): Promise
  }

  interface getSynonymDefinition_args {
    synonymId: string
    responseFields?: string
  }
  interface z_getSynonymDefinition {
    (config: getSynonymDefinition_args, options: api.RequestOptions): Promise
  }

  interface getSearchTuningRules_args {
    responseFields?: string
  }
  interface z_getSearchTuningRules {
    (config: getSearchTuningRules_args, options: api.RequestOptions): Promise
  }

  interface getSynonymDefinitions_args {
    responseFields?: string
  }
  interface z_getSynonymDefinitions {
    (config: getSynonymDefinitions_args, options: api.RequestOptions): Promise
  }

  interface updateSearchTuningRule_args {
    searchTuningRuleCode: string
    responseFields?: string
  }
  interface z_updateSearchTuningRule {
    (config: updateSearchTuningRule_args, options: api.RequestOptions): Promise
  }

  interface deleteSearchTuningRule_args {
    searchTuningRuleCode: string
  }
  interface z_deleteSearchTuningRule {
    (config: deleteSearchTuningRule_args, options: api.RequestOptions): Promise
  }

  interface deleteSynonymDefinition_args {
    synonymId: string
  }
  interface z_deleteSynonymDefinition {
    (config: deleteSynonymDefinition_args, options: api.RequestOptions): Promise
  }

  interface updateSynonymDefinition_args {
    synonymId: string
    responseFields?: string
  }
  interface z_updateSynonymDefinition {
    (config: updateSynonymDefinition_args, options: api.RequestOptions): Promise
  }

  interface getSearchTuningRuleSortFields_args {
    responseFields?: string
  }
  interface z_getSearchTuningRuleSortFields {
    (
      config: getSearchTuningRuleSortFields_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getSynonymDefinitionCollection_args {
    localeCode: string
    responseFields?: string
  }
  interface z_getSynonymDefinitionCollection {
    (
      config: getSynonymDefinitionCollection_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateSearchTuningRuleSortFields_args {
    responseFields?: string
  }
  interface z_updateSearchTuningRuleSortFields {
    (
      config: updateSearchTuningRuleSortFields_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateSynonymDefinitionCollection_args {
    localeCode: string
    responseFields?: string
  }
  interface z_updateSynonymDefinitionCollection {
    (
      config: updateSynonymDefinitionCollection_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getCategory_args {
    categoryId: string
    responseFields?: string
  }
  interface z_getCategory {
    (config: getCategory_args, options: api.RequestOptions): Promise
  }

  interface z_category {
    getCategory: z_getCategory
    addCategory: z_addCategory
    getCategories: z_getCategories
    updateCategory: z_updateCategory
    deleteCategoryById: z_deleteCategoryById
    getChildCategories: z_getChildCategories
    addProductsToCategory: z_addProductsToCategory
    validateDynamicExpression: z_validateDynamicExpression
    removeProductsFromCategory: z_removeProductsFromCategory
    validateRealTimeDynamicExpression: z_validateRealTimeDynamicExpression
    getCategoryTree: z_getCategoryTree
  }

  interface addCategory_args {
    responseFields?: string
  }
  interface z_addCategory {
    (config: addCategory_args, options: api.RequestOptions): Promise
  }

  interface getCategories_args {
    responseFields?: string
  }
  interface z_getCategories {
    (config: getCategories_args, options: api.RequestOptions): Promise
  }

  interface updateCategory_args {
    categoryId: string
    responseFields?: string
  }
  interface z_updateCategory {
    (config: updateCategory_args, options: api.RequestOptions): Promise
  }

  interface deleteCategoryById_args {
    categoryId: string
    reassignToParent?: string
  }
  interface z_deleteCategoryById {
    (config: deleteCategoryById_args, options: api.RequestOptions): Promise
  }

  interface getChildCategories_args {
    categoryId: string
    responseFields?: string
  }
  interface z_getChildCategories {
    (config: getChildCategories_args, options: api.RequestOptions): Promise
  }

  interface addProductsToCategory_args {
    categoryId: string
  }
  interface z_addProductsToCategory {
    (config: addProductsToCategory_args, options: api.RequestOptions): Promise
  }

  interface validateDynamicExpression_args {
    responseFields?: string
  }
  interface z_validateDynamicExpression {
    (
      config: validateDynamicExpression_args,
      options: api.RequestOptions
    ): Promise
  }

  interface removeProductsFromCategory_args {
    categoryId: string
  }
  interface z_removeProductsFromCategory {
    (
      config: removeProductsFromCategory_args,
      options: api.RequestOptions
    ): Promise
  }

  interface validateRealTimeDynamicExpression_args {
    responseFields?: string
  }
  interface z_validateRealTimeDynamicExpression {
    (
      config: validateRealTimeDynamicExpression_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getDiscount_args {
    discountId: string
    responseFields?: string
  }
  interface z_getDiscount {
    (config: getDiscount_args, options: api.RequestOptions): Promise
  }

  interface z_discount {
    getDiscount: z_getDiscount
    getDiscounts: z_getDiscounts
    createDiscount: z_createDiscount
    updateDiscount: z_updateDiscount
    deleteDiscount: z_deleteDiscount
    getDiscountContent: z_getDiscountContent
    generateRandomCoupon: z_generateRandomCoupon
    updateDiscountContent: z_updateDiscountContent
  }

  interface getDiscounts_args {
    responseFields?: string
  }
  interface z_getDiscounts {
    (config: getDiscounts_args, options: api.RequestOptions): Promise
  }

  interface createDiscount_args {
    responseFields?: string
  }
  interface z_createDiscount {
    (config: createDiscount_args, options: api.RequestOptions): Promise
  }

  interface updateDiscount_args {
    discountId: string
    responseFields?: string
  }
  interface z_updateDiscount {
    (config: updateDiscount_args, options: api.RequestOptions): Promise
  }

  interface deleteDiscount_args {
    discountId: string
  }
  interface z_deleteDiscount {
    (config: deleteDiscount_args, options: api.RequestOptions): Promise
  }

  interface getDiscountContent_args {
    discountId: string
    responseFields?: string
  }
  interface z_getDiscountContent {
    (config: getDiscountContent_args, options: api.RequestOptions): Promise
  }

  interface generateRandomCoupon_args {
    responseFields?: string
  }
  interface z_generateRandomCoupon {
    (config: generateRandomCoupon_args, options: api.RequestOptions): Promise
  }

  interface updateDiscountContent_args {
    discountId: string
    responseFields?: string
  }
  interface z_updateDiscountContent {
    (config: updateDiscountContent_args, options: api.RequestOptions): Promise
  }

  interface addPriceList_args {
    responseFields?: string
  }
  interface z_addPriceList {
    (config: addPriceList_args, options: api.RequestOptions): Promise
  }

  interface z_priceList {
    addPriceList: z_addPriceList
    getPriceList: z_getPriceList
    getPriceLists: z_getPriceLists
    deletePriceList: z_deletePriceList
    updatePriceList: z_updatePriceList
    bulkAddPriceListEntries: z_bulkAddPriceListEntries
    bulkUpdatePriceListEntries: z_bulkUpdatePriceListEntries
    bulkDeletePriceListEntries: z_bulkDeletePriceListEntries
    getResolvedPriceList: z_getResolvedPriceList
  }

  interface getPriceList_args {
    priceListCode: string
    responseFields?: string
  }
  interface z_getPriceList {
    (config: getPriceList_args, options: api.RequestOptions): Promise
  }

  interface getPriceLists_args {
    responseFields?: string
  }
  interface z_getPriceLists {
    (config: getPriceLists_args, options: api.RequestOptions): Promise
  }

  interface deletePriceList_args {
    priceListCode: string
    cascadeDeleteEntries?: string
  }
  interface z_deletePriceList {
    (config: deletePriceList_args, options: api.RequestOptions): Promise
  }

  interface updatePriceList_args {
    priceListCode: string
    responseFields?: string
  }
  interface z_updatePriceList {
    (config: updatePriceList_args, options: api.RequestOptions): Promise
  }

  interface bulkAddPriceListEntries_args {
    invalidateCache?: string
  }
  interface z_bulkAddPriceListEntries {
    (config: bulkAddPriceListEntries_args, options: api.RequestOptions): Promise
  }

  interface bulkUpdatePriceListEntries_args {
    invalidateCache?: string
  }
  interface z_bulkUpdatePriceListEntries {
    (
      config: bulkUpdatePriceListEntries_args,
      options: api.RequestOptions
    ): Promise
  }

  interface bulkDeletePriceListEntries_args {
    invalidateCache?: string
  }
  interface z_bulkDeletePriceListEntries {
    (
      config: bulkDeletePriceListEntries_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getCouponSet_args {
    couponSetCode: string
    responseFields?: string
  }
  interface z_getCouponSet {
    (config: getCouponSet_args, options: api.RequestOptions): Promise
  }

  interface z_couponSet {
    getCouponSet: z_getCouponSet
    addCouponSet: z_addCouponSet
    getCouponSets: z_getCouponSets
    updateCouponSet: z_updateCouponSet
    deleteCouponSet: z_deleteCouponSet
    getUniqueCouponSetCode: z_getUniqueCouponSetCode
    validateUniqueCouponSetCode: z_validateUniqueCouponSetCode
  }

  interface addCouponSet_args {
    responseFields?: string
  }
  interface z_addCouponSet {
    (config: addCouponSet_args, options: api.RequestOptions): Promise
  }

  interface getCouponSets_args {
    responseFields?: string
  }
  interface z_getCouponSets {
    (config: getCouponSets_args, options: api.RequestOptions): Promise
  }

  interface updateCouponSet_args {
    couponSetCode: string
    responseFields?: string
  }
  interface z_updateCouponSet {
    (config: updateCouponSet_args, options: api.RequestOptions): Promise
  }

  interface deleteCouponSet_args {
    couponSetCode: string
  }
  interface z_deleteCouponSet {
    (config: deleteCouponSet_args, options: api.RequestOptions): Promise
  }

  interface getUniqueCouponSetCode_args {
    responseFields?: string
  }
  interface z_getUniqueCouponSetCode {
    (config: getUniqueCouponSetCode_args, options: api.RequestOptions): Promise
  }

  interface validateUniqueCouponSetCode_args {}
  interface z_validateUniqueCouponSetCode {
    (
      config: validateUniqueCouponSetCode_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_couponsets {
    coupon: z_coupon
    assignedDiscount: z_assignedDiscount
  }

  interface getCoupon_args {
    couponCode: string
    responseFields?: string
  }
  interface z_getCoupon {
    (config: getCoupon_args, options: api.RequestOptions): Promise
  }

  interface z_coupon {
    getCoupon: z_getCoupon
    addCoupons: z_addCoupons
    getCoupons: z_getCoupons
    deleteCoupon: z_deleteCoupon
    deleteCoupons: z_deleteCoupons
  }

  interface addCoupons_args {
    couponSetCode: string
  }
  interface z_addCoupons {
    (config: addCoupons_args, options: api.RequestOptions): Promise
  }

  interface getCoupons_args {
    couponSetCode: string
    responseFields?: string
  }
  interface z_getCoupons {
    (config: getCoupons_args, options: api.RequestOptions): Promise
  }

  interface deleteCoupon_args {
    couponCode: string
  }
  interface z_deleteCoupon {
    (config: deleteCoupon_args, options: api.RequestOptions): Promise
  }

  interface deleteCoupons_args {
    couponSetCode: string
  }
  interface z_deleteCoupons {
    (config: deleteCoupons_args, options: api.RequestOptions): Promise
  }

  interface assignDiscount_args {
    couponSetCode: string
  }
  interface z_assignDiscount {
    (config: assignDiscount_args, options: api.RequestOptions): Promise
  }

  interface z_assignedDiscount {
    assignDiscount: z_assignDiscount
    unAssignDiscount: z_unAssignDiscount
    getAssignedDiscounts: z_getAssignedDiscounts
  }

  interface unAssignDiscount_args {
    discountId: string
  }
  interface z_unAssignDiscount {
    (config: unAssignDiscount_args, options: api.RequestOptions): Promise
  }

  interface getAssignedDiscounts_args {
    couponSetCode: string
  }
  interface z_getAssignedDiscounts {
    (config: getAssignedDiscounts_args, options: api.RequestOptions): Promise
  }

  interface publishDrafts_args {}
  interface z_publishDrafts {
    (config: publishDrafts_args, options: api.RequestOptions): Promise
  }

  interface z_publishingScope {
    publishDrafts: z_publishDrafts
    discardDrafts: z_discardDrafts
    getPublishSet: z_getPublishSet
    getPublishSets: z_getPublishSets
    deletePublishSet: z_deletePublishSet
    assignProductsToPublishSet: z_assignProductsToPublishSet
  }

  interface discardDrafts_args {}
  interface z_discardDrafts {
    (config: discardDrafts_args, options: api.RequestOptions): Promise
  }

  interface getPublishSet_args {
    publishSetCode: string
    responseFields?: string
  }
  interface z_getPublishSet {
    (config: getPublishSet_args, options: api.RequestOptions): Promise
  }

  interface getPublishSets_args {
    responseFields?: string
  }
  interface z_getPublishSets {
    (config: getPublishSets_args, options: api.RequestOptions): Promise
  }

  interface deletePublishSet_args {
    code: string
    responseFields?: string
  }
  interface z_deletePublishSet {
    (config: deletePublishSet_args, options: api.RequestOptions): Promise
  }

  interface assignProductsToPublishSet_args {
    responseFields?: string
  }
  interface z_assignProductsToPublishSet {
    (
      config: assignProductsToPublishSet_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getMasterCatalog_args {
    masterCatalogId: string
    responseFields?: string
  }
  interface z_getMasterCatalog {
    (config: getMasterCatalog_args, options: api.RequestOptions): Promise
  }

  interface z_masterCatalog {
    getMasterCatalog: z_getMasterCatalog
    getMasterCatalogs: z_getMasterCatalogs
    updateMasterCatalog: z_updateMasterCatalog
  }

  interface getMasterCatalogs_args {
    responseFields?: string
  }
  interface z_getMasterCatalogs {
    (config: getMasterCatalogs_args, options: api.RequestOptions): Promise
  }

  interface updateMasterCatalog_args {
    masterCatalogId: string
    responseFields?: string
  }
  interface z_updateMasterCatalog {
    (config: updateMasterCatalog_args, options: api.RequestOptions): Promise
  }

  interface z_products {
    productExtra: z_productExtra
    productOption: z_productOption
    productProperty: z_productProperty
    locationInventory: z_locationInventory
  }

  interface getExtra_args {
    attributeFQN: string
    responseFields?: string
  }
  interface z_getExtra {
    (config: getExtra_args, options: api.RequestOptions): Promise
  }

  interface z_productExtra {
    getExtra: z_getExtra
    addExtra: z_addExtra
    getExtras: z_getExtras
    updateExtra: z_updateExtra
    deleteExtra: z_deleteExtra
    addExtraValueLocalizedDeltaPrice: z_addExtraValueLocalizedDeltaPrice
    getExtraValueLocalizedDeltaPrice: z_getExtraValueLocalizedDeltaPrice
    getExtraValueLocalizedDeltaPrices: z_getExtraValueLocalizedDeltaPrices
    updateExtraValueLocalizedDeltaPrice: z_updateExtraValueLocalizedDeltaPrice
    deleteExtraValueLocalizedDeltaPrice: z_deleteExtraValueLocalizedDeltaPrice
    updateExtraValueLocalizedDeltaPrices: z_updateExtraValueLocalizedDeltaPrices
  }

  interface addExtra_args {
    productTypeId: string
    responseFields?: string
  }
  interface z_addExtra {
    (config: addExtra_args, options: api.RequestOptions): Promise
  }

  interface getExtras_args {
    productTypeId: string
  }
  interface z_getExtras {
    (config: getExtras_args, options: api.RequestOptions): Promise
  }

  interface updateExtra_args {
    attributeFQN: string
    responseFields?: string
  }
  interface z_updateExtra {
    (config: updateExtra_args, options: api.RequestOptions): Promise
  }

  interface deleteExtra_args {
    attributeFQN: string
  }
  interface z_deleteExtra {
    (config: deleteExtra_args, options: api.RequestOptions): Promise
  }

  interface addExtraValueLocalizedDeltaPrice_args {
    value: string
    responseFields?: string
  }
  interface z_addExtraValueLocalizedDeltaPrice {
    (
      config: addExtraValueLocalizedDeltaPrice_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getExtraValueLocalizedDeltaPrice_args {
    currencyCode: string
    responseFields?: string
  }
  interface z_getExtraValueLocalizedDeltaPrice {
    (
      config: getExtraValueLocalizedDeltaPrice_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getExtraValueLocalizedDeltaPrices_args {
    value: string
  }
  interface z_getExtraValueLocalizedDeltaPrices {
    (
      config: getExtraValueLocalizedDeltaPrices_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateExtraValueLocalizedDeltaPrice_args {
    currencyCode: string
    responseFields?: string
  }
  interface z_updateExtraValueLocalizedDeltaPrice {
    (
      config: updateExtraValueLocalizedDeltaPrice_args,
      options: api.RequestOptions
    ): Promise
  }

  interface deleteExtraValueLocalizedDeltaPrice_args {
    currencyCode: string
  }
  interface z_deleteExtraValueLocalizedDeltaPrice {
    (
      config: deleteExtraValueLocalizedDeltaPrice_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateExtraValueLocalizedDeltaPrices_args {
    value: string
  }
  interface z_updateExtraValueLocalizedDeltaPrices {
    (
      config: updateExtraValueLocalizedDeltaPrices_args,
      options: api.RequestOptions
    ): Promise
  }

  interface addOption_args {
    productTypeId: string
    responseFields?: string
  }
  interface z_addOption {
    (config: addOption_args, options: api.RequestOptions): Promise
  }

  interface z_productOption {
    addOption: z_addOption
    getOption: z_getOption
    getOptions: z_getOptions
    updateOption: z_updateOption
    deleteOption: z_deleteOption
  }

  interface getOption_args {
    attributeFQN: string
    responseFields?: string
  }
  interface z_getOption {
    (config: getOption_args, options: api.RequestOptions): Promise
  }

  interface getOptions_args {
    productTypeId: string
  }
  interface z_getOptions {
    (config: getOptions_args, options: api.RequestOptions): Promise
  }

  interface updateOption_args {
    attributeFQN: string
    responseFields?: string
  }
  interface z_updateOption {
    (config: updateOption_args, options: api.RequestOptions): Promise
  }

  interface deleteOption_args {
    attributeFQN: string
  }
  interface z_deleteOption {
    (config: deleteOption_args, options: api.RequestOptions): Promise
  }

  interface getProperty_args {
    attributeFQN: string
    responseFields?: string
  }
  interface z_getProperty {
    (config: getProperty_args, options: api.RequestOptions): Promise
  }

  interface z_productProperty {
    getProperty: z_getProperty
    addProperty: z_addProperty
    getProperties: z_getProperties
    deleteProperty: z_deleteProperty
    updateProperty: z_updateProperty
    getPropertyValueLocalizedContent: z_getPropertyValueLocalizedContent
    addPropertyValueLocalizedContent: z_addPropertyValueLocalizedContent
    getPropertyValueLocalizedContents: z_getPropertyValueLocalizedContents
    updatePropertyValueLocalizedContent: z_updatePropertyValueLocalizedContent
    deletePropertyValueLocalizedContent: z_deletePropertyValueLocalizedContent
    updatePropertyValueLocalizedContents: z_updatePropertyValueLocalizedContents
  }

  interface addProperty_args {
    productTypeId: string
    responseFields?: string
  }
  interface z_addProperty {
    (config: addProperty_args, options: api.RequestOptions): Promise
  }

  interface getProperties_args {
    productTypeId: string
  }
  interface z_getProperties {
    (config: getProperties_args, options: api.RequestOptions): Promise
  }

  interface deleteProperty_args {
    attributeFQN: string
  }
  interface z_deleteProperty {
    (config: deleteProperty_args, options: api.RequestOptions): Promise
  }

  interface updateProperty_args {
    attributeFQN: string
    responseFields?: string
  }
  interface z_updateProperty {
    (config: updateProperty_args, options: api.RequestOptions): Promise
  }

  interface getPropertyValueLocalizedContent_args {
    localeCode: string
    responseFields?: string
  }
  interface z_getPropertyValueLocalizedContent {
    (
      config: getPropertyValueLocalizedContent_args,
      options: api.RequestOptions
    ): Promise
  }

  interface addPropertyValueLocalizedContent_args {
    value: string
    responseFields?: string
  }
  interface z_addPropertyValueLocalizedContent {
    (
      config: addPropertyValueLocalizedContent_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getPropertyValueLocalizedContents_args {
    value: string
  }
  interface z_getPropertyValueLocalizedContents {
    (
      config: getPropertyValueLocalizedContents_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updatePropertyValueLocalizedContent_args {
    localeCode: string
    responseFields?: string
  }
  interface z_updatePropertyValueLocalizedContent {
    (
      config: updatePropertyValueLocalizedContent_args,
      options: api.RequestOptions
    ): Promise
  }

  interface deletePropertyValueLocalizedContent_args {
    localeCode: string
  }
  interface z_deletePropertyValueLocalizedContent {
    (
      config: deletePropertyValueLocalizedContent_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updatePropertyValueLocalizedContents_args {
    value: string
  }
  interface z_updatePropertyValueLocalizedContents {
    (
      config: updatePropertyValueLocalizedContents_args,
      options: api.RequestOptions
    ): Promise
  }

  interface addLocationInventory_args {
    locationCode: string
    performUpserts?: string
  }
  interface z_addLocationInventory {
    (config: addLocationInventory_args, options: api.RequestOptions): Promise
  }

  interface z_locationInventory {
    addLocationInventory: z_addLocationInventory
    getLocationInventory: z_getLocationInventory
    getLocationInventories: z_getLocationInventories
    updateLocationInventory: z_updateLocationInventory
    deleteLocationInventory: z_deleteLocationInventory
  }

  interface getLocationInventory_args {
    productCode: string
    responseFields?: string
  }
  interface z_getLocationInventory {
    (config: getLocationInventory_args, options: api.RequestOptions): Promise
  }

  interface getLocationInventories_args {
    locationCode: string
    responseFields?: string
  }
  interface z_getLocationInventories {
    (config: getLocationInventories_args, options: api.RequestOptions): Promise
  }

  interface updateLocationInventory_args {
    locationCode: string
  }
  interface z_updateLocationInventory {
    (config: updateLocationInventory_args, options: api.RequestOptions): Promise
  }

  interface deleteLocationInventory_args {
    productCode: string
  }
  interface z_deleteLocationInventory {
    (config: deleteLocationInventory_args, options: api.RequestOptions): Promise
  }

  interface getSoftAllocation_args {
    softAllocationId: string
    responseFields?: string
  }
  interface z_getSoftAllocation {
    (config: getSoftAllocation_args, options: api.RequestOptions): Promise
  }

  interface z_softAllocation {
    getSoftAllocation: z_getSoftAllocation
    addSoftAllocations: z_addSoftAllocations
    getSoftAllocations: z_getSoftAllocations
    deleteSoftAllocation: z_deleteSoftAllocation
    renewSoftAllocations: z_renewSoftAllocations
    updateSoftAllocations: z_updateSoftAllocations
    convertToProductReservation: z_convertToProductReservation
  }

  interface addSoftAllocations_args {}
  interface z_addSoftAllocations {
    (config: addSoftAllocations_args, options: api.RequestOptions): Promise
  }

  interface getSoftAllocations_args {
    responseFields?: string
  }
  interface z_getSoftAllocations {
    (config: getSoftAllocations_args, options: api.RequestOptions): Promise
  }

  interface deleteSoftAllocation_args {
    softAllocationId: string
  }
  interface z_deleteSoftAllocation {
    (config: deleteSoftAllocation_args, options: api.RequestOptions): Promise
  }

  interface renewSoftAllocations_args {}
  interface z_renewSoftAllocations {
    (config: renewSoftAllocations_args, options: api.RequestOptions): Promise
  }

  interface updateSoftAllocations_args {}
  interface z_updateSoftAllocations {
    (config: updateSoftAllocations_args, options: api.RequestOptions): Promise
  }

  interface convertToProductReservation_args {}
  interface z_convertToProductReservation {
    (
      config: convertToProductReservation_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getDiscountSettings_args {
    catalogId: string
    responseFields?: string
  }
  interface z_getDiscountSettings {
    (config: getDiscountSettings_args, options: api.RequestOptions): Promise
  }

  interface z_discountSettings {
    getDiscountSettings: z_getDiscountSettings
    updateDiscountSettings: z_updateDiscountSettings
  }

  interface updateDiscountSettings_args {
    catalogId: string
    responseFields?: string
  }
  interface z_updateDiscountSettings {
    (config: updateDiscountSettings_args, options: api.RequestOptions): Promise
  }

  interface commitReservations_args {}
  interface z_commitReservations {
    (config: commitReservations_args, options: api.RequestOptions): Promise
  }

  interface z_productReservation {
    commitReservations: z_commitReservations
    getProductReservation: z_getProductReservation
    getProductReservations: z_getProductReservations
    addProductReservations: z_addProductReservations
    deleteProductReservation: z_deleteProductReservation
    updateProductReservations: z_updateProductReservations
  }

  interface getProductReservation_args {
    productReservationId: string
    responseFields?: string
  }
  interface z_getProductReservation {
    (config: getProductReservation_args, options: api.RequestOptions): Promise
  }

  interface getProductReservations_args {
    responseFields?: string
  }
  interface z_getProductReservations {
    (config: getProductReservations_args, options: api.RequestOptions): Promise
  }

  interface addProductReservations_args {
    skipInventoryCheck?: string
  }
  interface z_addProductReservations {
    (config: addProductReservations_args, options: api.RequestOptions): Promise
  }

  interface deleteProductReservation_args {
    productReservationId: string
  }
  interface z_deleteProductReservation {
    (
      config: deleteProductReservation_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateProductReservations_args {
    skipInventoryCheck?: string
  }
  interface z_updateProductReservations {
    (
      config: updateProductReservations_args,
      options: api.RequestOptions
    ): Promise
  }

  interface addAttribute_args {
    responseFields?: string
  }
  interface z_addAttribute {
    (config: addAttribute_args, options: api.RequestOptions): Promise
  }

  interface deleteAttribute_args {
    attributeFQN: string
  }
  interface z_deleteAttribute {
    (config: deleteAttribute_args, options: api.RequestOptions): Promise
  }

  interface getProductType_args {
    productTypeId: string
    responseFields?: string
  }
  interface z_getProductType {
    (config: getProductType_args, options: api.RequestOptions): Promise
  }

  interface z_productType {
    getProductType: z_getProductType
    addProductType: z_addProductType
    getProductTypes: z_getProductTypes
    updateProductType: z_updateProductType
    deleteProductType: z_deleteProductType
  }

  interface addProductType_args {
    responseFields?: string
  }
  interface z_addProductType {
    (config: addProductType_args, options: api.RequestOptions): Promise
  }

  interface getProductTypes_args {
    responseFields?: string
  }
  interface z_getProductTypes {
    (config: getProductTypes_args, options: api.RequestOptions): Promise
  }

  interface updateProductType_args {
    productTypeId: string
    responseFields?: string
  }
  interface z_updateProductType {
    (config: updateProductType_args, options: api.RequestOptions): Promise
  }

  interface deleteProductType_args {
    productTypeId: string
  }
  interface z_deleteProductType {
    (config: deleteProductType_args, options: api.RequestOptions): Promise
  }

  interface z_producttypes {
    productTypeExtra: z_productTypeExtra
    productTypeOption: z_productTypeOption
    productTypeProperty: z_productTypeProperty
  }

  interface z_productTypeExtra {
    getExtra: z_getExtra
    addExtra: z_addExtra
    getExtras: z_getExtras
    deleteExtra: z_deleteExtra
    updateExtra: z_updateExtra
  }

  interface z_productTypeOption {
    getOption: z_getOption
    addOption: z_addOption
    getOptions: z_getOptions
    updateOption: z_updateOption
    deleteOption: z_deleteOption
  }

  interface z_productTypeProperty {
    addProperty: z_addProperty
    getProperty: z_getProperty
    getProperties: z_getProperties
    deleteProperty: z_deleteProperty
    updateProperty: z_updateProperty
  }

  interface z_attributes {
    attributeTypeRule: z_attributeTypeRule
    attributeLocalizedContent: z_attributeLocalizedContent
    attributeVocabularyValue: z_attributeVocabularyValue
  }

  interface getAttributeTypeRules_args {
    responseFields?: string
  }
  interface z_getAttributeTypeRules {
    (config: getAttributeTypeRules_args, options: api.RequestOptions): Promise
  }

  interface z_attributeTypeRule {
    getAttributeTypeRules: z_getAttributeTypeRules
  }

  interface addLocalizedContent_args {
    attributeFQN: string
    responseFields?: string
  }
  interface z_addLocalizedContent {
    (config: addLocalizedContent_args, options: api.RequestOptions): Promise
  }

  interface z_attributeLocalizedContent {
    addLocalizedContent: z_addLocalizedContent
    deleteLocalizedContent: z_deleteLocalizedContent
    updateLocalizedContent: z_updateLocalizedContent
    updateLocalizedContents: z_updateLocalizedContents
    getAttributeLocalizedContent: z_getAttributeLocalizedContent
    getAttributeLocalizedContents: z_getAttributeLocalizedContents
  }

  interface deleteLocalizedContent_args {
    localeCode: string
  }
  interface z_deleteLocalizedContent {
    (config: deleteLocalizedContent_args, options: api.RequestOptions): Promise
  }

  interface updateLocalizedContent_args {
    localeCode: string
    responseFields?: string
  }
  interface z_updateLocalizedContent {
    (config: updateLocalizedContent_args, options: api.RequestOptions): Promise
  }

  interface updateLocalizedContents_args {
    attributeFQN: string
  }
  interface z_updateLocalizedContents {
    (config: updateLocalizedContents_args, options: api.RequestOptions): Promise
  }

  interface getAttributeLocalizedContent_args {
    localeCode: string
    responseFields?: string
  }
  interface z_getAttributeLocalizedContent {
    (
      config: getAttributeLocalizedContent_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getAttributeLocalizedContents_args {
    attributeFQN: string
  }
  interface z_getAttributeLocalizedContents {
    (
      config: getAttributeLocalizedContents_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getAttributeVocabularyValue_args {
    value: string
    responseFields?: string
  }
  interface z_getAttributeVocabularyValue {
    (
      config: getAttributeVocabularyValue_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_attributeVocabularyValue {
    getAttributeVocabularyValue: z_getAttributeVocabularyValue
    addAttributeVocabularyValue: z_addAttributeVocabularyValue
    getAttributeVocabularyValues: z_getAttributeVocabularyValues
    deleteAttributeVocabularyValue: z_deleteAttributeVocabularyValue
    updateAttributeVocabularyValue: z_updateAttributeVocabularyValue
    updateAttributeVocabularyValues: z_updateAttributeVocabularyValues
    getAttributeVocabularyValueLocalizedContent: z_getAttributeVocabularyValueLocalizedContent
    addAttributeVocabularyValueLocalizedContent: z_addAttributeVocabularyValueLocalizedContent
    getAttributeVocabularyValueLocalizedContents: z_getAttributeVocabularyValueLocalizedContents
    deleteAttributeVocabularyValueLocalizedContent: z_deleteAttributeVocabularyValueLocalizedContent
    updateAttributeVocabularyValueLocalizedContent: z_updateAttributeVocabularyValueLocalizedContent
    updateAttributeVocabularyValueLocalizedContents: z_updateAttributeVocabularyValueLocalizedContents
  }

  interface addAttributeVocabularyValue_args {
    attributeFQN: string
    responseFields?: string
  }
  interface z_addAttributeVocabularyValue {
    (
      config: addAttributeVocabularyValue_args,
      options: api.RequestOptions
    ): Promise
  }

  interface deleteAttributeVocabularyValue_args {
    value: string
  }
  interface z_deleteAttributeVocabularyValue {
    (
      config: deleteAttributeVocabularyValue_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateAttributeVocabularyValue_args {
    value: string
    responseFields?: string
  }
  interface z_updateAttributeVocabularyValue {
    (
      config: updateAttributeVocabularyValue_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateAttributeVocabularyValues_args {
    attributeFQN: string
  }
  interface z_updateAttributeVocabularyValues {
    (
      config: updateAttributeVocabularyValues_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getAttributeVocabularyValueLocalizedContent_args {
    localeCode: string
    responseFields?: string
  }
  interface z_getAttributeVocabularyValueLocalizedContent {
    (
      config: getAttributeVocabularyValueLocalizedContent_args,
      options: api.RequestOptions
    ): Promise
  }

  interface addAttributeVocabularyValueLocalizedContent_args {
    value: string
    responseFields?: string
  }
  interface z_addAttributeVocabularyValueLocalizedContent {
    (
      config: addAttributeVocabularyValueLocalizedContent_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getAttributeVocabularyValueLocalizedContents_args {
    value: string
  }
  interface z_getAttributeVocabularyValueLocalizedContents {
    (
      config: getAttributeVocabularyValueLocalizedContents_args,
      options: api.RequestOptions
    ): Promise
  }

  interface deleteAttributeVocabularyValueLocalizedContent_args {
    localeCode: string
  }
  interface z_deleteAttributeVocabularyValueLocalizedContent {
    (
      config: deleteAttributeVocabularyValueLocalizedContent_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateAttributeVocabularyValueLocalizedContent_args {
    localeCode: string
    responseFields?: string
  }
  interface z_updateAttributeVocabularyValueLocalizedContent {
    (
      config: updateAttributeVocabularyValueLocalizedContent_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateAttributeVocabularyValueLocalizedContents_args {
    value: string
  }
  interface z_updateAttributeVocabularyValueLocalizedContents {
    (
      config: updateAttributeVocabularyValueLocalizedContents_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_discounts {
    discountTarget: z_discountTarget
  }

  interface getDiscountTarget_args {
    discountId: string
    responseFields?: string
  }
  interface z_getDiscountTarget {
    (config: getDiscountTarget_args, options: api.RequestOptions): Promise
  }

  interface z_discountTarget {
    getDiscountTarget: z_getDiscountTarget
    updateDiscountTarget: z_updateDiscountTarget
  }

  interface updateDiscountTarget_args {
    discountId: string
    responseFields?: string
  }
  interface z_updateDiscountTarget {
    (config: updateDiscountTarget_args, options: api.RequestOptions): Promise
  }

  interface z_pricelists {
    priceListEntry: z_priceListEntry
  }

  interface getPriceListEntry_args {
    currencyCode: string
    responseFields?: string
  }
  interface z_getPriceListEntry {
    (config: getPriceListEntry_args, options: api.RequestOptions): Promise
  }

  interface z_priceListEntry {
    getPriceListEntry: z_getPriceListEntry
    addPriceListEntry: z_addPriceListEntry
    getPriceListEntries: z_getPriceListEntries
    updatePriceListEntry: z_updatePriceListEntry
    deletePriceListEntry: z_deletePriceListEntry
  }

  interface addPriceListEntry_args {
    priceListCode: string
    responseFields?: string
  }
  interface z_addPriceListEntry {
    (config: addPriceListEntry_args, options: api.RequestOptions): Promise
  }

  interface getPriceListEntries_args {
    priceListCode: string
    responseFields?: string
  }
  interface z_getPriceListEntries {
    (config: getPriceListEntries_args, options: api.RequestOptions): Promise
  }

  interface updatePriceListEntry_args {
    currencyCode: string
    responseFields?: string
  }
  interface z_updatePriceListEntry {
    (config: updatePriceListEntry_args, options: api.RequestOptions): Promise
  }

  interface deletePriceListEntry_args {
    currencyCode: string
    startDate?: string
  }
  interface z_deletePriceListEntry {
    (config: deletePriceListEntry_args, options: api.RequestOptions): Promise
  }

  interface getProductSortDefinition_args {
    productSortDefinitionId: string
    responseFields?: string
  }
  interface z_getProductSortDefinition {
    (
      config: getProductSortDefinition_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_productSortDefinition {
    getProductSortDefinition: z_getProductSortDefinition
    addProductSortDefinition: z_addProductSortDefinition
    getProductSortDefinitions: z_getProductSortDefinitions
    updateProductSortDefinition: z_updateProductSortDefinition
    deleteProductSortDefinition: z_deleteProductSortDefinition
  }

  interface addProductSortDefinition_args {
    responseFields?: string
  }
  interface z_addProductSortDefinition {
    (
      config: addProductSortDefinition_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getProductSortDefinitions_args {
    responseFields?: string
  }
  interface z_getProductSortDefinitions {
    (
      config: getProductSortDefinitions_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateProductSortDefinition_args {
    productSortDefinitionId: string
    responseFields?: string
  }
  interface z_updateProductSortDefinition {
    (
      config: updateProductSortDefinition_args,
      options: api.RequestOptions
    ): Promise
  }

  interface deleteProductSortDefinition_args {
    productSortDefinitionId: string
  }
  interface z_deleteProductSortDefinition {
    (
      config: deleteProductSortDefinition_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_storefront {
    shipping: z_shipping
    category: z_category
    priceList: z_priceList
    productSearchResult: z_productSearchResult
    orderTaxContext: z_orderTaxContext
  }

  interface getRates_args {
    responseFields?: string
  }
  interface z_getRates {
    (config: getRates_args, options: api.RequestOptions): Promise
  }

  interface z_shipping {
    getRates: z_getRates
    getMultiRates: z_getMultiRates
    siteShippingHandlingFee: z_siteShippingHandlingFee
    admin: z_admin
  }

  interface getMultiRates_args {}
  interface z_getMultiRates {
    (config: getMultiRates_args, options: api.RequestOptions): Promise
  }

  interface getCategoryTree_args {
    responseFields?: string
  }
  interface z_getCategoryTree {
    (config: getCategoryTree_args, options: api.RequestOptions): Promise
  }

  interface getResolvedPriceList_args {
    responseFields?: string
  }
  interface z_getResolvedPriceList {
    (config: getResolvedPriceList_args, options: api.RequestOptions): Promise
  }

  interface z_productSearchResult {
    search: z_search
    suggest: z_suggest
    getRandomAccessCursor: z_getRandomAccessCursor
  }

  interface suggest_args {
    responseFields?: string
  }
  interface z_suggest {
    (config: suggest_args, options: api.RequestOptions): Promise
  }

  interface getRandomAccessCursor_args {
    responseFields?: string
  }
  interface z_getRandomAccessCursor {
    (config: getRandomAccessCursor_args, options: api.RequestOptions): Promise
  }

  interface estimateTaxes_args {
    responseFields?: string
  }
  interface z_estimateTaxes {
    (config: estimateTaxes_args, options: api.RequestOptions): Promise
  }

  interface z_orderTaxContext {
    estimateTaxes: z_estimateTaxes
  }

  interface getChannelGroup_args {
    code: string
    responseFields?: string
  }
  interface z_getChannelGroup {
    (config: getChannelGroup_args, options: api.RequestOptions): Promise
  }

  interface z_channelGroup {
    getChannelGroup: z_getChannelGroup
    getChannelGroups: z_getChannelGroups
    deleteChannelGroup: z_deleteChannelGroup
    updateChannelGroup: z_updateChannelGroup
    createChannelGroup: z_createChannelGroup
  }

  interface getChannelGroups_args {
    responseFields?: string
  }
  interface z_getChannelGroups {
    (config: getChannelGroups_args, options: api.RequestOptions): Promise
  }

  interface deleteChannelGroup_args {
    code: string
  }
  interface z_deleteChannelGroup {
    (config: deleteChannelGroup_args, options: api.RequestOptions): Promise
  }

  interface updateChannelGroup_args {
    code: string
    responseFields?: string
  }
  interface z_updateChannelGroup {
    (config: updateChannelGroup_args, options: api.RequestOptions): Promise
  }

  interface createChannelGroup_args {
    responseFields?: string
  }
  interface z_createChannelGroup {
    (config: createChannelGroup_args, options: api.RequestOptions): Promise
  }

  interface z_checkouts {
    orderItem: z_orderItem
    orderNote: z_orderNote
    destination: z_destination
    payment: z_payment
    appliedDiscount: z_appliedDiscount
    orderAttribute: z_orderAttribute
    extendedProperty: z_extendedProperty
  }

  interface splitItem_args {
    itemId: string
    responseFields?: string
  }
  interface z_splitItem {
    (config: splitItem_args, options: api.RequestOptions): Promise
  }

  interface updateItemDestination_args {
    destinationId: string
    responseFields?: string
  }
  interface z_updateItemDestination {
    (config: updateItemDestination_args, options: api.RequestOptions): Promise
  }

  interface bulkUpdateItemDestinations_args {
    checkoutId: string
    responseFields?: string
  }
  interface z_bulkUpdateItemDestinations {
    (
      config: bulkUpdateItemDestinations_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getCheckoutNote_args {
    noteId: string
    responseFields?: string
  }
  interface z_getCheckoutNote {
    (config: getCheckoutNote_args, options: api.RequestOptions): Promise
  }

  interface getCheckoutNotes_args {
    checkoutId: string
  }
  interface z_getCheckoutNotes {
    (config: getCheckoutNotes_args, options: api.RequestOptions): Promise
  }

  interface createCheckoutNote_args {
    checkoutId: string
    responseFields?: string
  }
  interface z_createCheckoutNote {
    (config: createCheckoutNote_args, options: api.RequestOptions): Promise
  }

  interface updateCheckoutNote_args {
    noteId: string
    responseFields?: string
  }
  interface z_updateCheckoutNote {
    (config: updateCheckoutNote_args, options: api.RequestOptions): Promise
  }

  interface deleteCheckoutNote_args {
    noteId: string
  }
  interface z_deleteCheckoutNote {
    (config: deleteCheckoutNote_args, options: api.RequestOptions): Promise
  }

  interface getDestination_args {
    destinationId: string
    responseFields?: string
  }
  interface z_getDestination {
    (config: getDestination_args, options: api.RequestOptions): Promise
  }

  interface z_destination {
    getDestination: z_getDestination
    addDestination: z_addDestination
    getDestinations: z_getDestinations
    removeDestination: z_removeDestination
    updateDestination: z_updateDestination
  }

  interface addDestination_args {
    checkoutId: string
    responseFields?: string
  }
  interface z_addDestination {
    (config: addDestination_args, options: api.RequestOptions): Promise
  }

  interface getDestinations_args {
    checkoutId: string
  }
  interface z_getDestinations {
    (config: getDestinations_args, options: api.RequestOptions): Promise
  }

  interface removeDestination_args {
    destinationId: string
  }
  interface z_removeDestination {
    (config: removeDestination_args, options: api.RequestOptions): Promise
  }

  interface updateDestination_args {
    destinationId: string
    responseFields?: string
  }
  interface z_updateDestination {
    (config: updateDestination_args, options: api.RequestOptions): Promise
  }

  interface getCheckoutAttributes_args {
    checkoutId: string
  }
  interface z_getCheckoutAttributes {
    (config: getCheckoutAttributes_args, options: api.RequestOptions): Promise
  }

  interface updateCheckoutAttribute_args {
    checkoutId: string
    removeMissing?: string
  }
  interface z_updateCheckoutAttribute {
    (config: updateCheckoutAttribute_args, options: api.RequestOptions): Promise
  }

  interface createCheckoutAttributes_args {
    checkoutId: string
  }
  interface z_createCheckoutAttributes {
    (
      config: createCheckoutAttributes_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_settings {
    cartSettings: z_cartSettings
    locationUsage: z_locationUsage
    generalSettings: z_generalSettings
    checkoutSettings: z_checkoutSettings
    application: z_application
    siteShippingSettings: z_siteShippingSettings
    general: z_general
    shipping: z_shipping
    checkout: z_checkout
  }

  interface getCartSettings_args {
    responseFields?: string
  }
  interface z_getCartSettings {
    (config: getCartSettings_args, options: api.RequestOptions): Promise
  }

  interface z_cartSettings {
    getCartSettings: z_getCartSettings
    createCartSettings: z_createCartSettings
    updateCartSettings: z_updateCartSettings
  }

  interface createCartSettings_args {
    responseFields?: string
  }
  interface z_createCartSettings {
    (config: createCartSettings_args, options: api.RequestOptions): Promise
  }

  interface updateCartSettings_args {
    responseFields?: string
  }
  interface z_updateCartSettings {
    (config: updateCartSettings_args, options: api.RequestOptions): Promise
  }

  interface getLocationUsage_args {
    code: string
    responseFields?: string
  }
  interface z_getLocationUsage {
    (config: getLocationUsage_args, options: api.RequestOptions): Promise
  }

  interface z_locationUsage {
    getLocationUsage: z_getLocationUsage
    getLocationUsages: z_getLocationUsages
    updateLocationUsage: z_updateLocationUsage
  }

  interface getLocationUsages_args {
    responseFields?: string
  }
  interface z_getLocationUsages {
    (config: getLocationUsages_args, options: api.RequestOptions): Promise
  }

  interface updateLocationUsage_args {
    code: string
    responseFields?: string
  }
  interface z_updateLocationUsage {
    (config: updateLocationUsage_args, options: api.RequestOptions): Promise
  }

  interface getGeneralSettings_args {
    responseFields?: string
  }
  interface z_getGeneralSettings {
    (config: getGeneralSettings_args, options: api.RequestOptions): Promise
  }

  interface z_generalSettings {
    getGeneralSettings: z_getGeneralSettings
    updateGeneralSettings: z_updateGeneralSettings
  }

  interface updateGeneralSettings_args {
    responseFields?: string
  }
  interface z_updateGeneralSettings {
    (config: updateGeneralSettings_args, options: api.RequestOptions): Promise
  }

  interface getCheckoutSettings_args {
    responseFields?: string
  }
  interface z_getCheckoutSettings {
    (config: getCheckoutSettings_args, options: api.RequestOptions): Promise
  }

  interface z_checkoutSettings {
    getCheckoutSettings: z_getCheckoutSettings
  }

  interface thirdPartyGetApplication_args {
    responseFields?: string
  }
  interface z_thirdPartyGetApplication {
    (
      config: thirdPartyGetApplication_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_application {
    thirdPartyGetApplication: z_thirdPartyGetApplication
    thirdPartyUpdateApplication: z_thirdPartyUpdateApplication
    getAppVersions: z_getAppVersions
    upsertPackageFile: z_upsertPackageFile
    renamePackageFile: z_renamePackageFile
    deletePackageFile: z_deletePackageFile
    getPackageMetadata: z_getPackageMetadata
    getAppPackageNames: z_getAppPackageNames
    getPackageFileMetadata: z_getPackageFileMetadata
  }

  interface thirdPartyUpdateApplication_args {
    responseFields?: string
  }
  interface z_thirdPartyUpdateApplication {
    (
      config: thirdPartyUpdateApplication_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getSiteShippingSettings_args {
    responseFields?: string
  }
  interface z_getSiteShippingSettings {
    (config: getSiteShippingSettings_args, options: api.RequestOptions): Promise
  }

  interface z_siteShippingSettings {
    getSiteShippingSettings: z_getSiteShippingSettings
  }

  interface z_general {
    taxableTerritory: z_taxableTerritory
    customRouteSettings: z_customRouteSettings
  }

  interface addTaxableTerritory_args {
    responseFields?: string
  }
  interface z_addTaxableTerritory {
    (config: addTaxableTerritory_args, options: api.RequestOptions): Promise
  }

  interface z_taxableTerritory {
    addTaxableTerritory: z_addTaxableTerritory
    getTaxableTerritories: z_getTaxableTerritories
    updateTaxableTerritories: z_updateTaxableTerritories
  }

  interface getTaxableTerritories_args {}
  interface z_getTaxableTerritories {
    (config: getTaxableTerritories_args, options: api.RequestOptions): Promise
  }

  interface updateTaxableTerritories_args {}
  interface z_updateTaxableTerritories {
    (
      config: updateTaxableTerritories_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getCustomRouteSettings_args {
    responseFields?: string
  }
  interface z_getCustomRouteSettings {
    (config: getCustomRouteSettings_args, options: api.RequestOptions): Promise
  }

  interface z_customRouteSettings {
    getCustomRouteSettings: z_getCustomRouteSettings
    updateCustomRouteSettings: z_updateCustomRouteSettings
    createCustomRouteSettings: z_createCustomRouteSettings
    deleteCustomRouteSettings: z_deleteCustomRouteSettings
  }

  interface updateCustomRouteSettings_args {
    responseFields?: string
  }
  interface z_updateCustomRouteSettings {
    (
      config: updateCustomRouteSettings_args,
      options: api.RequestOptions
    ): Promise
  }

  interface createCustomRouteSettings_args {
    responseFields?: string
  }
  interface z_createCustomRouteSettings {
    (
      config: createCustomRouteSettings_args,
      options: api.RequestOptions
    ): Promise
  }

  interface deleteCustomRouteSettings_args {}
  interface z_deleteCustomRouteSettings {
    (
      config: deleteCustomRouteSettings_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getOrderHandlingFee_args {
    responseFields?: string
  }
  interface z_getOrderHandlingFee {
    (config: getOrderHandlingFee_args, options: api.RequestOptions): Promise
  }

  interface z_siteShippingHandlingFee {
    getOrderHandlingFee: z_getOrderHandlingFee
    createOrderHandlingFee: z_createOrderHandlingFee
    updateOrderHandlingFee: z_updateOrderHandlingFee
  }

  interface createOrderHandlingFee_args {
    responseFields?: string
  }
  interface z_createOrderHandlingFee {
    (config: createOrderHandlingFee_args, options: api.RequestOptions): Promise
  }

  interface updateOrderHandlingFee_args {
    responseFields?: string
  }
  interface z_updateOrderHandlingFee {
    (config: updateOrderHandlingFee_args, options: api.RequestOptions): Promise
  }

  interface addThirdPartyPaymentWorkflow_args {}
  interface z_addThirdPartyPaymentWorkflow {
    (
      config: addThirdPartyPaymentWorkflow_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_paymentSettings {
    addThirdPartyPaymentWorkflow: z_addThirdPartyPaymentWorkflow
    getThirdPartyPaymentWorkflows: z_getThirdPartyPaymentWorkflows
    deleteThirdPartyPaymentWorkflow: z_deleteThirdPartyPaymentWorkflow
    getThirdPartyPaymentWorkflowWithValues: z_getThirdPartyPaymentWorkflowWithValues
  }

  interface getThirdPartyPaymentWorkflows_args {}
  interface z_getThirdPartyPaymentWorkflows {
    (
      config: getThirdPartyPaymentWorkflows_args,
      options: api.RequestOptions
    ): Promise
  }

  interface deleteThirdPartyPaymentWorkflow_args {
    fullyQualifiedName: string
  }
  interface z_deleteThirdPartyPaymentWorkflow {
    (
      config: deleteThirdPartyPaymentWorkflow_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getThirdPartyPaymentWorkflowWithValues_args {
    fullyQualifiedName: string
    responseFields?: string
  }
  interface z_getThirdPartyPaymentWorkflowWithValues {
    (
      config: getThirdPartyPaymentWorkflowWithValues_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getOrderProcessingSettings_args {
    responseFields?: string
  }
  interface z_getOrderProcessingSettings {
    (
      config: getOrderProcessingSettings_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_orderProcessingSettings {
    getOrderProcessingSettings: z_getOrderProcessingSettings
  }

  interface getCustomerCheckoutSettings_args {
    responseFields?: string
  }
  interface z_getCustomerCheckoutSettings {
    (
      config: getCustomerCheckoutSettings_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_customerCheckoutSettings {
    getCustomerCheckoutSettings: z_getCustomerCheckoutSettings
    updateCustomerCheckoutSettings: z_updateCustomerCheckoutSettings
  }

  interface updateCustomerCheckoutSettings_args {
    responseFields?: string
  }
  interface z_updateCustomerCheckoutSettings {
    (
      config: updateCustomerCheckoutSettings_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_wishlists {
    wishlistItem: z_wishlistItem
  }

  interface getWishlistItem_args {
    wishlistItemId: string
    responseFields?: string
  }
  interface z_getWishlistItem {
    (config: getWishlistItem_args, options: api.RequestOptions): Promise
  }

  interface z_wishlistItem {
    getWishlistItem: z_getWishlistItem
    getWishlistItems: z_getWishlistItems
    addItemToWishlist: z_addItemToWishlist
    updateWishlistItem: z_updateWishlistItem
    deleteWishlistItem: z_deleteWishlistItem
    removeAllWishlistItems: z_removeAllWishlistItems
    updateWishlistItemQuantity: z_updateWishlistItemQuantity
    getWishlistItemsByWishlistName: z_getWishlistItemsByWishlistName
  }

  interface getWishlistItems_args {
    wishlistId: string
    responseFields?: string
  }
  interface z_getWishlistItems {
    (config: getWishlistItems_args, options: api.RequestOptions): Promise
  }

  interface addItemToWishlist_args {
    wishlistId: string
    responseFields?: string
  }
  interface z_addItemToWishlist {
    (config: addItemToWishlist_args, options: api.RequestOptions): Promise
  }

  interface updateWishlistItem_args {
    wishlistItemId: string
    responseFields?: string
  }
  interface z_updateWishlistItem {
    (config: updateWishlistItem_args, options: api.RequestOptions): Promise
  }

  interface deleteWishlistItem_args {
    wishlistItemId: string
  }
  interface z_deleteWishlistItem {
    (config: deleteWishlistItem_args, options: api.RequestOptions): Promise
  }

  interface removeAllWishlistItems_args {
    wishlistId: string
  }
  interface z_removeAllWishlistItems {
    (config: removeAllWishlistItems_args, options: api.RequestOptions): Promise
  }

  interface updateWishlistItemQuantity_args {
    quantity: string
    responseFields?: string
  }
  interface z_updateWishlistItemQuantity {
    (
      config: updateWishlistItemQuantity_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getWishlistItemsByWishlistName_args {
    wishlistName: string
    responseFields?: string
  }
  interface z_getWishlistItemsByWishlistName {
    (
      config: getWishlistItemsByWishlistName_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getProfiles_args {
    responseFields?: string
  }
  interface z_getProfiles {
    (config: getProfiles_args, options: api.RequestOptions): Promise
  }

  interface z_shippingProfile {
    getProfiles: z_getProfiles
  }

  interface z_profiles {
    shippingStates: z_shippingStates
    handlingFeeRule: z_handlingFeeRule
    orderHandlingFeeRules: z_orderHandlingFeeRules
    shippingInclusionRule: z_shippingInclusionRule
    productHandlingFeeRules: z_productHandlingFeeRules
  }

  interface getStates_args {
    profilecode: string
  }
  interface z_getStates {
    (config: getStates_args, options: api.RequestOptions): Promise
  }

  interface z_shippingStates {
    getStates: z_getStates
    updateStates: z_updateStates
  }

  interface updateStates_args {
    profilecode: string
  }
  interface z_updateStates {
    (config: updateStates_args, options: api.RequestOptions): Promise
  }

  interface getProductHandlingFeeRule_args {
    id: string
    responseFields?: string
  }
  interface z_getProductHandlingFeeRule {
    (
      config: getProductHandlingFeeRule_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_handlingFeeRule {
    getProductHandlingFeeRule: z_getProductHandlingFeeRule
    getProductHandlingFeeRules: z_getProductHandlingFeeRules
    createProductHandlingFeeRule: z_createProductHandlingFeeRule
    updateProductHandlingFeeRule: z_updateProductHandlingFeeRule
    deleteProductHandlingFeeRule: z_deleteProductHandlingFeeRule
  }

  interface getProductHandlingFeeRules_args {
    profilecode: string
    responseFields?: string
  }
  interface z_getProductHandlingFeeRules {
    (
      config: getProductHandlingFeeRules_args,
      options: api.RequestOptions
    ): Promise
  }

  interface createProductHandlingFeeRule_args {
    profilecode: string
    responseFields?: string
  }
  interface z_createProductHandlingFeeRule {
    (
      config: createProductHandlingFeeRule_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateProductHandlingFeeRule_args {
    id: string
    responseFields?: string
  }
  interface z_updateProductHandlingFeeRule {
    (
      config: updateProductHandlingFeeRule_args,
      options: api.RequestOptions
    ): Promise
  }

  interface deleteProductHandlingFeeRule_args {
    id: string
  }
  interface z_deleteProductHandlingFeeRule {
    (
      config: deleteProductHandlingFeeRule_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getOrderHandlingFeeRule_args {
    id: string
    responseFields?: string
  }
  interface z_getOrderHandlingFeeRule {
    (config: getOrderHandlingFeeRule_args, options: api.RequestOptions): Promise
  }

  interface z_orderHandlingFeeRules {
    getOrderHandlingFeeRule: z_getOrderHandlingFeeRule
    getOrderHandlingFeeRules: z_getOrderHandlingFeeRules
    updateOrderHandlingFeeRule: z_updateOrderHandlingFeeRule
    deleteOrderHandlingFeeRule: z_deleteOrderHandlingFeeRule
    createOrderHandlingFeeRule: z_createOrderHandlingFeeRule
  }

  interface getOrderHandlingFeeRules_args {
    profilecode: string
    responseFields?: string
  }
  interface z_getOrderHandlingFeeRules {
    (
      config: getOrderHandlingFeeRules_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateOrderHandlingFeeRule_args {
    id: string
    responseFields?: string
  }
  interface z_updateOrderHandlingFeeRule {
    (
      config: updateOrderHandlingFeeRule_args,
      options: api.RequestOptions
    ): Promise
  }

  interface deleteOrderHandlingFeeRule_args {
    id: string
  }
  interface z_deleteOrderHandlingFeeRule {
    (
      config: deleteOrderHandlingFeeRule_args,
      options: api.RequestOptions
    ): Promise
  }

  interface createOrderHandlingFeeRule_args {
    profilecode: string
    responseFields?: string
  }
  interface z_createOrderHandlingFeeRule {
    (
      config: createOrderHandlingFeeRule_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getShippingInclusionRule_args {
    id: string
    responseFields?: string
  }
  interface z_getShippingInclusionRule {
    (
      config: getShippingInclusionRule_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_shippingInclusionRule {
    getShippingInclusionRule: z_getShippingInclusionRule
    getShippingInclusionRules: z_getShippingInclusionRules
    createShippingInclusionRule: z_createShippingInclusionRule
    deleteShippingInclusionRule: z_deleteShippingInclusionRule
    updateShippingInclusionRule: z_updateShippingInclusionRule
  }

  interface getShippingInclusionRules_args {
    profilecode: string
    responseFields?: string
  }
  interface z_getShippingInclusionRules {
    (
      config: getShippingInclusionRules_args,
      options: api.RequestOptions
    ): Promise
  }

  interface createShippingInclusionRule_args {
    profilecode: string
    responseFields?: string
  }
  interface z_createShippingInclusionRule {
    (
      config: createShippingInclusionRule_args,
      options: api.RequestOptions
    ): Promise
  }

  interface deleteShippingInclusionRule_args {
    id: string
  }
  interface z_deleteShippingInclusionRule {
    (
      config: deleteShippingInclusionRule_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateShippingInclusionRule_args {
    id: string
    responseFields?: string
  }
  interface z_updateShippingInclusionRule {
    (
      config: updateShippingInclusionRule_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_productHandlingFeeRules {
    getProductHandlingFeeRule: z_getProductHandlingFeeRule
    getProductHandlingFeeRules: z_getProductHandlingFeeRules
    deleteProductHandlingFeeRule: z_deleteProductHandlingFeeRule
    createProductHandlingFeeRule: z_createProductHandlingFeeRule
    updateProductHandlingFeeRule: z_updateProductHandlingFeeRule
  }

  interface getConfiguration_args {
    carrierId: string
    responseFields?: string
  }
  interface z_getConfiguration {
    (config: getConfiguration_args, options: api.RequestOptions): Promise
  }

  interface z_carrierConfiguration {
    getConfiguration: z_getConfiguration
    getConfigurations: z_getConfigurations
    createConfiguration: z_createConfiguration
    updateConfiguration: z_updateConfiguration
    deleteConfiguration: z_deleteConfiguration
  }

  interface getConfigurations_args {
    responseFields?: string
  }
  interface z_getConfigurations {
    (config: getConfigurations_args, options: api.RequestOptions): Promise
  }

  interface createConfiguration_args {
    carrierId: string
    responseFields?: string
  }
  interface z_createConfiguration {
    (config: createConfiguration_args, options: api.RequestOptions): Promise
  }

  interface updateConfiguration_args {
    carrierId: string
    responseFields?: string
  }
  interface z_updateConfiguration {
    (config: updateConfiguration_args, options: api.RequestOptions): Promise
  }

  interface deleteConfiguration_args {
    carrierId: string
  }
  interface z_deleteConfiguration {
    (config: deleteConfiguration_args, options: api.RequestOptions): Promise
  }

  interface getInStockNotificationSubscription_args {
    id: string
    responseFields?: string
  }
  interface z_getInStockNotificationSubscription {
    (
      config: getInStockNotificationSubscription_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_inStockNotificationSubscription {
    getInStockNotificationSubscription: z_getInStockNotificationSubscription
    addInStockNotificationSubscription: z_addInStockNotificationSubscription
    getInStockNotificationSubscriptions: z_getInStockNotificationSubscriptions
    deleteInStockNotificationSubscription: z_deleteInStockNotificationSubscription
  }

  interface addInStockNotificationSubscription_args {
    responseFields?: string
  }
  interface z_addInStockNotificationSubscription {
    (
      config: addInStockNotificationSubscription_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getInStockNotificationSubscriptions_args {
    responseFields?: string
  }
  interface z_getInStockNotificationSubscriptions {
    (
      config: getInStockNotificationSubscriptions_args,
      options: api.RequestOptions
    ): Promise
  }

  interface deleteInStockNotificationSubscription_args {
    id: string
  }
  interface z_deleteInStockNotificationSubscription {
    (
      config: deleteInStockNotificationSubscription_args,
      options: api.RequestOptions
    ): Promise
  }

  interface platform {
    tenant: z_tenant
    userData: z_userData
    siteData: z_siteData
    tenantData: z_tenantData
    appdev: z_appdev
    entityList: z_entityList
    secureAppData: z_secureAppData
    referenceData: z_referenceData
    application: z_application
    entitylists: z_entitylists
    tenantExtensions: z_tenantExtensions
    installedApplications: z_installedApplications
    applications: z_applications
    extensions: z_extensions
    adminuser: z_adminuser
    developer: z_developer
  }

  interface getTenant_args {
    tenantId: string
    responseFields?: string
  }
  interface z_getTenant {
    (config: getTenant_args, options: api.RequestOptions): Promise
  }

  interface z_tenant {
    getTenant: z_getTenant
  }

  interface getDBValue_args {
    dbEntryQuery: string
    responseFields?: string
  }
  interface z_getDBValue {
    (config: getDBValue_args, options: api.RequestOptions): Promise
  }

  interface z_userData {
    getDBValue: z_getDBValue
    createDBValue: z_createDBValue
    deleteDBValue: z_deleteDBValue
    updateDBValue: z_updateDBValue
  }

  interface createDBValue_args {
    dbEntryQuery: string
  }
  interface z_createDBValue {
    (config: createDBValue_args, options: api.RequestOptions): Promise
  }

  interface deleteDBValue_args {
    dbEntryQuery: string
  }
  interface z_deleteDBValue {
    (config: deleteDBValue_args, options: api.RequestOptions): Promise
  }

  interface updateDBValue_args {
    dbEntryQuery: string
  }
  interface z_updateDBValue {
    (config: updateDBValue_args, options: api.RequestOptions): Promise
  }

  interface z_siteData {
    getDBValue: z_getDBValue
    deleteDBValue: z_deleteDBValue
    createDBValue: z_createDBValue
    updateDBValue: z_updateDBValue
  }

  interface z_tenantData {
    getDBValue: z_getDBValue
    createDBValue: z_createDBValue
    deleteDBValue: z_deleteDBValue
    updateDBValue: z_updateDBValue
  }

  interface z_appdev {
    package: z_package
    appPackage: z_appPackage
  }

  interface getFile_args {
    applicationKey: string
    fileName?: string
  }
  interface z_getFile {
    (config: getFile_args, options: api.RequestOptions): Promise
  }

  interface z_appPackage {
    getPackage: z_getPackage
    getPackages: z_getPackages
    clonePackage: z_clonePackage
    createPackage: z_createPackage
    updatePackage: z_updatePackage
    deletePackage: z_deletePackage
    getAllPackages: z_getAllPackages
    createNewCorePackage: z_createNewCorePackage
    getApplicationSummaryParents: z_getApplicationSummaryParents
    getApplicationSummaryChildren: z_getApplicationSummaryChildren
  }

  interface getPackages_args {
    applicationKey: string
    responseFields?: string
  }
  interface z_getPackages {
    (config: getPackages_args, options: api.RequestOptions): Promise
  }

  interface clonePackage_args {
    packageName: string
    responseFields?: string
  }
  interface z_clonePackage {
    (config: clonePackage_args, options: api.RequestOptions): Promise
  }

  interface getAllPackages_args {
    responseFields?: string
  }
  interface z_getAllPackages {
    (config: getAllPackages_args, options: api.RequestOptions): Promise
  }

  interface createNewCorePackage_args {
    responseFields?: string
  }
  interface z_createNewCorePackage {
    (config: createNewCorePackage_args, options: api.RequestOptions): Promise
  }

  interface getApplicationSummaryParents_args {
    responseFields?: string
  }
  interface z_getApplicationSummaryParents {
    (
      config: getApplicationSummaryParents_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getApplicationSummaryChildren_args {
    appId: string
  }
  interface z_getApplicationSummaryChildren {
    (
      config: getApplicationSummaryChildren_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getEntityList_args {
    entityListFullName: string
    responseFields?: string
  }
  interface z_getEntityList {
    (config: getEntityList_args, options: api.RequestOptions): Promise
  }

  interface z_entityList {
    getEntityList: z_getEntityList
    getEntityLists: z_getEntityLists
    deleteEntityList: z_deleteEntityList
    updateEntityList: z_updateEntityList
    createEntityList: z_createEntityList
  }

  interface getEntityLists_args {
    responseFields?: string
  }
  interface z_getEntityLists {
    (config: getEntityLists_args, options: api.RequestOptions): Promise
  }

  interface deleteEntityList_args {
    entityListFullName: string
  }
  interface z_deleteEntityList {
    (config: deleteEntityList_args, options: api.RequestOptions): Promise
  }

  interface updateEntityList_args {
    entityListFullName: string
    responseFields?: string
  }
  interface z_updateEntityList {
    (config: updateEntityList_args, options: api.RequestOptions): Promise
  }

  interface createEntityList_args {
    responseFields?: string
  }
  interface z_createEntityList {
    (config: createEntityList_args, options: api.RequestOptions): Promise
  }

  interface z_secureAppData {
    getDBValue: z_getDBValue
    createDBValue: z_createDBValue
    updateDBValue: z_updateDBValue
    deleteDBValue: z_deleteDBValue
  }

  interface getBehavior_args {
    behaviorId: string
    responseFields?: string
  }
  interface z_getBehavior {
    (config: getBehavior_args, options: api.RequestOptions): Promise
  }

  interface z_referenceData {
    getBehavior: z_getBehavior
    getCountries: z_getCountries
    getBehaviors: z_getBehaviors
    getTimeZones: z_getTimeZones
    getCurrencies: z_getCurrencies
    getAddressSchema: z_getAddressSchema
    getUnitsOfMeasure: z_getUnitsOfMeasure
    getContentLocales: z_getContentLocales
    getAddressSchemas: z_getAddressSchemas
    getTopLevelDomains: z_getTopLevelDomains
    getBehaviorCategory: z_getBehaviorCategory
    getBehaviorCategories: z_getBehaviorCategories
    getCountriesWithStates: z_getCountriesWithStates
  }

  interface getCountries_args {
    responseFields?: string
  }
  interface z_getCountries {
    (config: getCountries_args, options: api.RequestOptions): Promise
  }

  interface getBehaviors_args {
    responseFields?: string
  }
  interface z_getBehaviors {
    (config: getBehaviors_args, options: api.RequestOptions): Promise
  }

  interface getTimeZones_args {
    responseFields?: string
  }
  interface z_getTimeZones {
    (config: getTimeZones_args, options: api.RequestOptions): Promise
  }

  interface getCurrencies_args {
    responseFields?: string
  }
  interface z_getCurrencies {
    (config: getCurrencies_args, options: api.RequestOptions): Promise
  }

  interface getAddressSchema_args {
    countryCode: string
    responseFields?: string
  }
  interface z_getAddressSchema {
    (config: getAddressSchema_args, options: api.RequestOptions): Promise
  }

  interface getUnitsOfMeasure_args {
    responseFields?: string
  }
  interface z_getUnitsOfMeasure {
    (config: getUnitsOfMeasure_args, options: api.RequestOptions): Promise
  }

  interface getContentLocales_args {
    responseFields?: string
  }
  interface z_getContentLocales {
    (config: getContentLocales_args, options: api.RequestOptions): Promise
  }

  interface getAddressSchemas_args {
    responseFields?: string
  }
  interface z_getAddressSchemas {
    (config: getAddressSchemas_args, options: api.RequestOptions): Promise
  }

  interface getTopLevelDomains_args {
    responseFields?: string
  }
  interface z_getTopLevelDomains {
    (config: getTopLevelDomains_args, options: api.RequestOptions): Promise
  }

  interface getBehaviorCategory_args {
    categoryId: string
    responseFields?: string
  }
  interface z_getBehaviorCategory {
    (config: getBehaviorCategory_args, options: api.RequestOptions): Promise
  }

  interface getBehaviorCategories_args {
    responseFields?: string
  }
  interface z_getBehaviorCategories {
    (config: getBehaviorCategories_args, options: api.RequestOptions): Promise
  }

  interface getCountriesWithStates_args {
    responseFields?: string
  }
  interface z_getCountriesWithStates {
    (config: getCountriesWithStates_args, options: api.RequestOptions): Promise
  }

  interface getAppVersions_args {
    nsAndAppId: string
    responseFields?: string
  }
  interface z_getAppVersions {
    (config: getAppVersions_args, options: api.RequestOptions): Promise
  }

  interface upsertPackageFile_args {
    filepath: string
    responseFields?: string
  }
  interface z_upsertPackageFile {
    (config: upsertPackageFile_args, options: api.RequestOptions): Promise
  }

  interface renamePackageFile_args {
    applicationKey: string
    responseFields?: string
  }
  interface z_renamePackageFile {
    (config: renamePackageFile_args, options: api.RequestOptions): Promise
  }

  interface deletePackageFile_args {
    filepath: string
  }
  interface z_deletePackageFile {
    (config: deletePackageFile_args, options: api.RequestOptions): Promise
  }

  interface getPackageMetadata_args {
    applicationKey: string
    responseFields?: string
  }
  interface z_getPackageMetadata {
    (config: getPackageMetadata_args, options: api.RequestOptions): Promise
  }

  interface getAppPackageNames_args {
    applicationKey: string
    responseFields?: string
  }
  interface z_getAppPackageNames {
    (config: getAppPackageNames_args, options: api.RequestOptions): Promise
  }

  interface getPackageFileMetadata_args {
    filepath: string
    responseFields?: string
  }
  interface z_getPackageFileMetadata {
    (config: getPackageFileMetadata_args, options: api.RequestOptions): Promise
  }

  interface z_entitylists {
    entity: z_entity
    listView: z_listView
    entityContainer: z_entityContainer
  }

  interface getEntity_args {
    id: string
    responseFields?: string
  }
  interface z_getEntity {
    (config: getEntity_args, options: api.RequestOptions): Promise
  }

  interface z_entity {
    getEntity: z_getEntity
    getEntities: z_getEntities
    insertEntity: z_insertEntity
    updateEntity: z_updateEntity
    deleteEntity: z_deleteEntity
  }

  interface getEntities_args {
    entityListFullName: string
    responseFields?: string
  }
  interface z_getEntities {
    (config: getEntities_args, options: api.RequestOptions): Promise
  }

  interface insertEntity_args {
    entityListFullName: string
    responseFields?: string
  }
  interface z_insertEntity {
    (config: insertEntity_args, options: api.RequestOptions): Promise
  }

  interface updateEntity_args {
    id: string
    responseFields?: string
  }
  interface z_updateEntity {
    (config: updateEntity_args, options: api.RequestOptions): Promise
  }

  interface deleteEntity_args {
    id: string
  }
  interface z_deleteEntity {
    (config: deleteEntity_args, options: api.RequestOptions): Promise
  }

  interface getViewEntity_args {
    entityId: string
    responseFields?: string
  }
  interface z_getViewEntity {
    (config: getViewEntity_args, options: api.RequestOptions): Promise
  }

  interface z_listView {
    getViewEntity: z_getViewEntity
    getViewEntities: z_getViewEntities
    getEntityListView: z_getEntityListView
    getEntityListViews: z_getEntityListViews
    updateEntityListView: z_updateEntityListView
    createEntityListView: z_createEntityListView
    deleteEntityListView: z_deleteEntityListView
    getViewEntityContainer: z_getViewEntityContainer
    getViewEntityContainers: z_getViewEntityContainers
  }

  interface getViewEntities_args {
    viewName: string
    responseFields?: string
  }
  interface z_getViewEntities {
    (config: getViewEntities_args, options: api.RequestOptions): Promise
  }

  interface getEntityListView_args {
    viewName: string
    responseFields?: string
  }
  interface z_getEntityListView {
    (config: getEntityListView_args, options: api.RequestOptions): Promise
  }

  interface getEntityListViews_args {
    entityListFullName: string
    responseFields?: string
  }
  interface z_getEntityListViews {
    (config: getEntityListViews_args, options: api.RequestOptions): Promise
  }

  interface updateEntityListView_args {
    viewName: string
    responseFields?: string
  }
  interface z_updateEntityListView {
    (config: updateEntityListView_args, options: api.RequestOptions): Promise
  }

  interface createEntityListView_args {
    entityListFullName: string
    responseFields?: string
  }
  interface z_createEntityListView {
    (config: createEntityListView_args, options: api.RequestOptions): Promise
  }

  interface deleteEntityListView_args {
    viewName: string
  }
  interface z_deleteEntityListView {
    (config: deleteEntityListView_args, options: api.RequestOptions): Promise
  }

  interface getViewEntityContainer_args {
    entityId: string
    responseFields?: string
  }
  interface z_getViewEntityContainer {
    (config: getViewEntityContainer_args, options: api.RequestOptions): Promise
  }

  interface getViewEntityContainers_args {
    viewName: string
    responseFields?: string
  }
  interface z_getViewEntityContainers {
    (config: getViewEntityContainers_args, options: api.RequestOptions): Promise
  }

  interface getEntityContainer_args {
    id: string
    responseFields?: string
  }
  interface z_getEntityContainer {
    (config: getEntityContainer_args, options: api.RequestOptions): Promise
  }

  interface z_entityContainer {
    getEntityContainer: z_getEntityContainer
    getEntityContainers: z_getEntityContainers
  }

  interface getEntityContainers_args {
    entityListFullName: string
    responseFields?: string
  }
  interface z_getEntityContainers {
    (config: getEntityContainers_args, options: api.RequestOptions): Promise
  }

  interface getExtensions_args {
    responseFields?: string
  }
  interface z_getExtensions {
    (config: getExtensions_args, options: api.RequestOptions): Promise
  }

  interface z_tenantExtensions {
    getExtensions: z_getExtensions
    updateExtensions: z_updateExtensions
  }

  interface updateExtensions_args {
    responseFields?: string
  }
  interface z_updateExtensions {
    (config: updateExtensions_args, options: api.RequestOptions): Promise
  }

  interface getApplication_args {
    appId: string
    responseFields?: string
  }
  interface z_getApplication {
    (config: getApplication_args, options: api.RequestOptions): Promise
  }

  interface z_installedApplications {
    getApplication: z_getApplication
    updateApplication: z_updateApplication
  }

  interface updateApplication_args {
    appId: string
    responseFields?: string
  }
  interface z_updateApplication {
    (config: updateApplication_args, options: api.RequestOptions): Promise
  }

  interface z_applications {
    authTicket: z_authTicket
  }

  interface authenticateApp_args {
    responseFields?: string
  }
  interface z_authenticateApp {
    (config: authenticateApp_args, options: api.RequestOptions): Promise
  }

  interface z_authTicket {
    authenticateApp: z_authenticateApp
    deleteAppAuthTicket: z_deleteAppAuthTicket
    refreshAppAuthTicket: z_refreshAppAuthTicket
  }

  interface deleteAppAuthTicket_args {
    refreshToken: string
  }
  interface z_deleteAppAuthTicket {
    (config: deleteAppAuthTicket_args, options: api.RequestOptions): Promise
  }

  interface refreshAppAuthTicket_args {
    responseFields?: string
  }
  interface z_refreshAppAuthTicket {
    (config: refreshAppAuthTicket_args, options: api.RequestOptions): Promise
  }

  interface z_extensions {
    credentialStoreEntry: z_credentialStoreEntry
  }

  interface storeCredentials_args {}
  interface z_storeCredentials {
    (config: storeCredentials_args, options: api.RequestOptions): Promise
  }

  interface z_credentialStoreEntry {
    storeCredentials: z_storeCredentials
  }

  interface z_adminuser {
    tenantAdminUserAuthTicket: z_tenantAdminUserAuthTicket
  }

  interface refreshAuthTicket_args {
    responseFields?: string
  }
  interface z_refreshAuthTicket {
    (config: refreshAuthTicket_args, options: api.RequestOptions): Promise
  }

  interface z_tenantAdminUserAuthTicket {
    refreshAuthTicket: z_refreshAuthTicket
    deleteUserAuthTicket: z_deleteUserAuthTicket
    createUserAuthTicket: z_createUserAuthTicket
  }

  interface deleteUserAuthTicket_args {
    refreshToken?: string
  }
  interface z_deleteUserAuthTicket {
    (config: deleteUserAuthTicket_args, options: api.RequestOptions): Promise
  }

  interface z_developer {
    developerAdminUserAuthTicket: z_developerAdminUserAuthTicket
  }

  interface z_developerAdminUserAuthTicket {
    deleteUserAuthTicket: z_deleteUserAuthTicket
    refreshDeveloperAuthTicket: z_refreshDeveloperAuthTicket
    createDeveloperUserAuthTicket: z_createDeveloperUserAuthTicket
  }

  interface refreshDeveloperAuthTicket_args {
    responseFields?: string
  }
  interface z_refreshDeveloperAuthTicket {
    (
      config: refreshDeveloperAuthTicket_args,
      options: api.RequestOptions
    ): Promise
  }

  interface createDeveloperUserAuthTicket_args {
    responseFields?: string
  }
  interface z_createDeveloperUserAuthTicket {
    (
      config: createDeveloperUserAuthTicket_args,
      options: api.RequestOptions
    ): Promise
  }

  interface event {
    eventNotification: z_eventNotification
    push: z_push
  }

  interface getEvent_args {
    eventId: string
    responseFields?: string
  }
  interface z_getEvent {
    (config: getEvent_args, options: api.RequestOptions): Promise
  }

  interface z_eventNotification {
    getEvent: z_getEvent
    getEvents: z_getEvents
  }

  interface getEvents_args {
    responseFields?: string
  }
  interface z_getEvents {
    (config: getEvents_args, options: api.RequestOptions): Promise
  }

  interface z_push {
    subscription: z_subscription
    subscriptions: z_subscriptions
  }

  interface getSubscriptions_args {
    responseFields?: string
  }
  interface z_getSubscriptions {
    (config: getSubscriptions_args, options: api.RequestOptions): Promise
  }

  interface z_subscription {
    getSubscriptions: z_getSubscriptions
  }

  interface z_subscriptions {
    eventDeliverySummary: z_eventDeliverySummary
  }

  interface getDeliveryAttemptSummary_args {
    id: string
    responseFields?: string
  }
  interface z_getDeliveryAttemptSummary {
    (
      config: getDeliveryAttemptSummary_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_eventDeliverySummary {
    getDeliveryAttemptSummary: z_getDeliveryAttemptSummary
    getDeliveryAttemptSummaries: z_getDeliveryAttemptSummaries
  }

  interface getDeliveryAttemptSummaries_args {
    subscriptionId: string
    responseFields?: string
  }
  interface z_getDeliveryAttemptSummaries {
    (
      config: getDeliveryAttemptSummaries_args,
      options: api.RequestOptions
    ): Promise
  }

  interface content {
    documentType: z_documentType
    documentList: z_documentList
    propertyType: z_propertyType
    documentlists: z_documentlists
    publishSetSummary: z_publishSetSummary
    documentListType: z_documentListType
    documentDraftSummary: z_documentDraftSummary
  }

  interface getDocumentType_args {
    documentTypeName: string
    responseFields?: string
  }
  interface z_getDocumentType {
    (config: getDocumentType_args, options: api.RequestOptions): Promise
  }

  interface z_documentType {
    getDocumentType: z_getDocumentType
    getDocumentTypes: z_getDocumentTypes
    updateDocumentType: z_updateDocumentType
    createDocumentType: z_createDocumentType
  }

  interface getDocumentTypes_args {
    responseFields?: string
  }
  interface z_getDocumentTypes {
    (config: getDocumentTypes_args, options: api.RequestOptions): Promise
  }

  interface updateDocumentType_args {
    documentTypeName: string
    responseFields?: string
  }
  interface z_updateDocumentType {
    (config: updateDocumentType_args, options: api.RequestOptions): Promise
  }

  interface createDocumentType_args {
    responseFields?: string
  }
  interface z_createDocumentType {
    (config: createDocumentType_args, options: api.RequestOptions): Promise
  }

  interface getDocumentList_args {
    documentListName: string
    responseFields?: string
  }
  interface z_getDocumentList {
    (config: getDocumentList_args, options: api.RequestOptions): Promise
  }

  interface z_documentList {
    getDocumentList: z_getDocumentList
    getDocumentLists: z_getDocumentLists
    deleteDocumentList: z_deleteDocumentList
    updateDocumentList: z_updateDocumentList
    createDocumentList: z_createDocumentList
  }

  interface getDocumentLists_args {
    responseFields?: string
  }
  interface z_getDocumentLists {
    (config: getDocumentLists_args, options: api.RequestOptions): Promise
  }

  interface deleteDocumentList_args {
    documentListName: string
  }
  interface z_deleteDocumentList {
    (config: deleteDocumentList_args, options: api.RequestOptions): Promise
  }

  interface updateDocumentList_args {
    documentListName: string
    responseFields?: string
  }
  interface z_updateDocumentList {
    (config: updateDocumentList_args, options: api.RequestOptions): Promise
  }

  interface createDocumentList_args {
    responseFields?: string
  }
  interface z_createDocumentList {
    (config: createDocumentList_args, options: api.RequestOptions): Promise
  }

  interface getPropertyType_args {
    propertyTypeName: string
    responseFields?: string
  }
  interface z_getPropertyType {
    (config: getPropertyType_args, options: api.RequestOptions): Promise
  }

  interface z_propertyType {
    getPropertyType: z_getPropertyType
    getPropertyTypes: z_getPropertyTypes
    deletePropertyType: z_deletePropertyType
    updatePropertyType: z_updatePropertyType
    createPropertyType: z_createPropertyType
  }

  interface getPropertyTypes_args {
    responseFields?: string
  }
  interface z_getPropertyTypes {
    (config: getPropertyTypes_args, options: api.RequestOptions): Promise
  }

  interface deletePropertyType_args {
    propertyTypeName: string
  }
  interface z_deletePropertyType {
    (config: deletePropertyType_args, options: api.RequestOptions): Promise
  }

  interface updatePropertyType_args {
    propertyTypeName: string
    responseFields?: string
  }
  interface z_updatePropertyType {
    (config: updatePropertyType_args, options: api.RequestOptions): Promise
  }

  interface createPropertyType_args {
    responseFields?: string
  }
  interface z_createPropertyType {
    (config: createPropertyType_args, options: api.RequestOptions): Promise
  }

  interface z_documentlists {
    facet: z_facet
    document: z_document
    view: z_view
    documentTree: z_documentTree
  }

  interface getFacets_args {
    propertyName: string
  }
  interface z_getFacets {
    (config: getFacets_args, options: api.RequestOptions): Promise
  }

  interface getDocument_args {
    documentId: string
    responseFields?: string
  }
  interface z_getDocument {
    (config: getDocument_args, options: api.RequestOptions): Promise
  }

  interface z_document {
    getDocument: z_getDocument
    getDocuments: z_getDocuments
    patchDocument: z_patchDocument
    createDocument: z_createDocument
    updateDocument: z_updateDocument
    deleteDocument: z_deleteDocument
    getDocumentContent: z_getDocumentContent
    deleteDocumentContent: z_deleteDocumentContent
    updateDocumentContent: z_updateDocumentContent
    transformDocumentContent: z_transformDocumentContent
  }

  interface getDocuments_args {
    documentListName: string
    responseFields?: string
  }
  interface z_getDocuments {
    (config: getDocuments_args, options: api.RequestOptions): Promise
  }

  interface patchDocument_args {
    documentId: string
    responseFields?: string
  }
  interface z_patchDocument {
    (config: patchDocument_args, options: api.RequestOptions): Promise
  }

  interface createDocument_args {
    documentListName: string
    responseFields?: string
  }
  interface z_createDocument {
    (config: createDocument_args, options: api.RequestOptions): Promise
  }

  interface updateDocument_args {
    documentId: string
    responseFields?: string
  }
  interface z_updateDocument {
    (config: updateDocument_args, options: api.RequestOptions): Promise
  }

  interface deleteDocument_args {
    documentId: string
  }
  interface z_deleteDocument {
    (config: deleteDocument_args, options: api.RequestOptions): Promise
  }

  interface getDocumentContent_args {
    documentId: string
  }
  interface z_getDocumentContent {
    (config: getDocumentContent_args, options: api.RequestOptions): Promise
  }

  interface deleteDocumentContent_args {
    documentId: string
  }
  interface z_deleteDocumentContent {
    (config: deleteDocumentContent_args, options: api.RequestOptions): Promise
  }

  interface updateDocumentContent_args {
    documentId: string
  }
  interface z_updateDocumentContent {
    (config: updateDocumentContent_args, options: api.RequestOptions): Promise
  }

  interface transformDocumentContent_args {
    documentId: string
    quality?: string
  }
  interface z_transformDocumentContent {
    (
      config: transformDocumentContent_args,
      options: api.RequestOptions
    ): Promise
  }

  interface getViewDocuments_args {
    viewName: string
    responseFields?: string
  }
  interface z_getViewDocuments {
    (config: getViewDocuments_args, options: api.RequestOptions): Promise
  }

  interface z_view {
    getViewDocuments: z_getViewDocuments
  }

  interface getTreeDocument_args {
    documentName: string
    responseFields?: string
  }
  interface z_getTreeDocument {
    (config: getTreeDocument_args, options: api.RequestOptions): Promise
  }

  interface z_documentTree {
    getTreeDocument: z_getTreeDocument
    getTreeDocumentContent: z_getTreeDocumentContent
    deleteTreeDocumentContent: z_deleteTreeDocumentContent
    updateTreeDocumentContent: z_updateTreeDocumentContent
    transformTreeDocumentContent: z_transformTreeDocumentContent
  }

  interface getTreeDocumentContent_args {
    documentName: string
  }
  interface z_getTreeDocumentContent {
    (config: getTreeDocumentContent_args, options: api.RequestOptions): Promise
  }

  interface deleteTreeDocumentContent_args {
    documentName: string
    folderId?: string
  }
  interface z_deleteTreeDocumentContent {
    (
      config: deleteTreeDocumentContent_args,
      options: api.RequestOptions
    ): Promise
  }

  interface updateTreeDocumentContent_args {
    documentName: string
    folderId?: string
  }
  interface z_updateTreeDocumentContent {
    (
      config: updateTreeDocumentContent_args,
      options: api.RequestOptions
    ): Promise
  }

  interface transformTreeDocumentContent_args {
    documentName: string
    quality?: string
  }
  interface z_transformTreeDocumentContent {
    (
      config: transformTreeDocumentContent_args,
      options: api.RequestOptions
    ): Promise
  }

  interface z_publishSetSummary {
    getPublishSets: z_getPublishSets
    deletePublishSet: z_deletePublishSet
    getPublishSetItems: z_getPublishSetItems
    addPublishSetItems: z_addPublishSetItems
  }

  interface getPublishSetItems_args {
    code: string
    responseFields?: string
  }
  interface z_getPublishSetItems {
    (config: getPublishSetItems_args, options: api.RequestOptions): Promise
  }

  interface addPublishSetItems_args {
    code: string
    responseFields?: string
  }
  interface z_addPublishSetItems {
    (config: addPublishSetItems_args, options: api.RequestOptions): Promise
  }

  interface getDocumentListType_args {
    documentListTypeFQN: string
    responseFields?: string
  }
  interface z_getDocumentListType {
    (config: getDocumentListType_args, options: api.RequestOptions): Promise
  }

  interface z_documentListType {
    getDocumentListType: z_getDocumentListType
    getDocumentListTypes: z_getDocumentListTypes
    createDocumentListType: z_createDocumentListType
    updateDocumentListType: z_updateDocumentListType
  }

  interface getDocumentListTypes_args {
    documentListTypeFQN: string
    responseFields?: string
  }
  interface z_getDocumentListTypes {
    (config: getDocumentListTypes_args, options: api.RequestOptions): Promise
  }

  interface createDocumentListType_args {
    responseFields?: string
  }
  interface z_createDocumentListType {
    (config: createDocumentListType_args, options: api.RequestOptions): Promise
  }

  interface updateDocumentListType_args {
    documentListTypeFQN: string
    responseFields?: string
  }
  interface z_updateDocumentListType {
    (config: updateDocumentListType_args, options: api.RequestOptions): Promise
  }

  interface publishDocuments_args {
    documentLists?: string
  }
  interface z_publishDocuments {
    (config: publishDocuments_args, options: api.RequestOptions): Promise
  }

  interface z_documentDraftSummary {
    publishDocuments: z_publishDocuments
    deleteDocumentDrafts: z_deleteDocumentDrafts
    listDocumentDraftSummaries: z_listDocumentDraftSummaries
  }

  interface deleteDocumentDrafts_args {
    documentLists?: string
  }
  interface z_deleteDocumentDrafts {
    (config: deleteDocumentDrafts_args, options: api.RequestOptions): Promise
  }

  interface listDocumentDraftSummaries_args {
    responseFields?: string
  }
  interface z_listDocumentDraftSummaries {
    (
      config: listDocumentDraftSummaries_args,
      options: api.RequestOptions
    ): Promise
  }

  interface Api {
    commerce: commerce
    platform: platform
    event: event
    content: content
  }
  interface Context {
    sharedSecret?: string
    homePod?: string
    pciPod?: string
    tenantPod?: string
    baseUrl?: string
    basePciUrl?: string
    developerAccount?: {
      emailAddress: string
    }
    applicationId: string
    developerAccountId: number
    tenant: number
    site: number
  }
  interface RequestOptions {
    headers?: api.Headers
    context?: api.Context
    config?: AxiosRequestConfig
    internal?: Boolean
    preserveReqeust?: Boolean
  }
  interface Options {
    useFutures?: boolean
    hooks: {
      //accepts as the first parameter the request configuration options and should return a modified version
      beforeRequest?: function
      //accepts as the first parameter and should return the future or promise that will be returned by the request method
      withRequest?: function
      //accepts as the first parameter and should return the response that will occur after the request promise/future settles
      afterRequest?: function
    }
  }
}
export default api
