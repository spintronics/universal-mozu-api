{
  "commerce_admin_location": {
    "getLocations": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/admin/locations/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getLocation": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/admin/locations/{locationCode}?responseFields={responseFields}"
    },
    "addLocation": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/admin/locations/?responseFields={responseFields}"
    },
    "updateLocation": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/admin/locations/{locationCode}?responseFields={responseFields}"
    },
    "deleteLocation": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/admin/locations/{locationCode}"
    }
  },
  "commerce_admin_locationType": {
    "getLocationTypes": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/admin/locationtypes/"
    },
    "getLocationType": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/admin/locationtypes/{locationTypeCode}?responseFields={responseFields}"
    },
    "addLocationType": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/admin/locationtypes/?responseFields={responseFields}"
    },
    "updateLocationType": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/admin/locationtypes/{locationTypeCode}?responseFields={responseFields}"
    },
    "deleteLocationType": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/admin/locationtypes/{locationTypeCode}"
    }
  },
  "commerce_admin_locations_attributedefinition_attribute": {
    "getAttributes": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/admin/locations/attributedefinition/attributes/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getAttributeVocabularyValues": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/admin/locations/attributedefinition/attributes/{attributeFQN}/VocabularyValues"
    },
    "getAttribute": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/admin/locations/attributedefinition/attributes/{attributeFQN}?responseFields={responseFields}"
    },
    "createAttribute": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/admin/locations/attributedefinition/attributes/?responseFields={responseFields}"
    },
    "updateAttribute": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/admin/locations/attributedefinition/attributes/{attributeFQN}?responseFields={responseFields}"
    }
  },
  "commerce_cart": {
    "getCart": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/carts/{cartId}?responseFields={responseFields}"
    },
    "getOrCreateCart": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/carts/current?responseFields={responseFields}"
    },
    "getCartSummary": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/carts/summary?responseFields={responseFields}"
    },
    "getUserCartSummary": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/carts/user/{userId}/summary?responseFields={responseFields}"
    },
    "getUserCart": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/carts/user/{userId}?responseFields={responseFields}"
    },
    "updateCart": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/carts/current?responseFields={responseFields}"
    },
    "deleteCart": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/carts/{cartId}"
    },
    "deleteCurrentCart": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/carts/current"
    }
  },
  "commerce_carts_appliedDiscount": {
    "applyCoupon": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/carts/{cartId}/coupons/{couponCode}?responseFields={responseFields}"
    },
    "removeCoupons": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/carts/{cartId}/coupons"
    },
    "removeCoupon": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/carts/{cartId}/coupons/{couponcode}"
    }
  },
  "commerce_carts_cartItem": {
    "getCartItem": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/carts/current/items/{cartItemId}?responseFields={responseFields}"
    },
    "getCartItems": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/carts/current/items?responseFields={responseFields}"
    },
    "addItemToCart": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/carts/current/items?responseFields={responseFields}"
    },
    "updateCartItemQuantity": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/carts/current/items/{cartItemId}/{quantity}?responseFields={responseFields}"
    },
    "updateCartItem": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/carts/current/items/{cartItemId}?responseFields={responseFields}"
    },
    "removeAllCartItems": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/carts/current/items"
    },
    "deleteCartItem": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/carts/current/items/{cartItemId}"
    }
  },
  "commerce_carts_changeMessage": {
    "getMessages": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/carts/current/messages?responseFields={responseFields}"
    },
    "removeAllMessages": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/carts/current/messages"
    },
    "removeMessage": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/carts/current/messages/{messageId}"
    }
  },
  "commerce_carts_extendedProperty": {
    "getExtendedProperties": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/carts/current/extendedproperties"
    },
    "addExtendedProperties": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/carts/current/extendedproperties"
    },
    "updateExtendedProperty": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/carts/current/extendedproperties/{key}?upsert={upsert}&responseFields={responseFields}"
    },
    "updateExtendedProperties": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/carts/current/extendedproperties?upsert={upsert}"
    },
    "deleteExtendedProperties": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/carts/current/extendedproperties"
    },
    "deleteExtendedProperty": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/carts/current/extendedproperties/{key}"
    }
  },
  "commerce_catalog_admin_attributedefinition_attribute": {
    "getAttributes": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getAttribute": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}?responseFields={responseFields}"
    },
    "addAttribute": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/?responseFields={responseFields}"
    },
    "updateAttribute": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}?responseFields={responseFields}"
    },
    "deleteAttribute": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}"
    }
  },
  "commerce_catalog_admin_attributedefinition_attributes_attributeLocalizedContent": {
    "getAttributeLocalizedContents": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent"
    },
    "getAttributeLocalizedContent": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent/{localeCode}?responseFields={responseFields}"
    },
    "addLocalizedContent": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent?responseFields={responseFields}"
    },
    "updateLocalizedContents": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent"
    },
    "updateLocalizedContent": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent/{localeCode}?responseFields={responseFields}"
    },
    "deleteLocalizedContent": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/LocalizedContent/{localeCode}"
    }
  },
  "commerce_catalog_admin_attributedefinition_attributes_attributeTypeRule": {
    "getAttributeTypeRules": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/typerules/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    }
  },
  "commerce_catalog_admin_attributedefinition_attributes_attributeVocabularyValue": {
    "getAttributeVocabularyValues": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues"
    },
    "getAttributeVocabularyValueLocalizedContents": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent"
    },
    "getAttributeVocabularyValueLocalizedContent": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent/{localeCode}?responseFields={responseFields}"
    },
    "getAttributeVocabularyValue": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}?responseFields={responseFields}"
    },
    "addAttributeVocabularyValueLocalizedContent": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/localizedContent?responseFields={responseFields}"
    },
    "addAttributeVocabularyValue": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues?responseFields={responseFields}"
    },
    "updateAttributeVocabularyValues": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues"
    },
    "updateAttributeVocabularyValueLocalizedContents": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent"
    },
    "updateAttributeVocabularyValueLocalizedContent": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent/{localeCode}?responseFields={responseFields}"
    },
    "updateAttributeVocabularyValue": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}?responseFields={responseFields}"
    },
    "deleteAttributeVocabularyValue": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}"
    },
    "deleteAttributeVocabularyValueLocalizedContent": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/attributes/{attributeFQN}/VocabularyValues/{value}/LocalizedContent/{localeCode}"
    }
  },
  "commerce_catalog_admin_attributedefinition_productType": {
    "getProductTypes": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getProductType": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}?responseFields={responseFields}"
    },
    "addProductType": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/?responseFields={responseFields}"
    },
    "updateProductType": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}?responseFields={responseFields}"
    },
    "deleteProductType": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}"
    }
  },
  "commerce_catalog_admin_attributedefinition_producttypes_productTypeExtra": {
    "getExtras": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Extras"
    },
    "getExtra": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Extras/{attributeFQN}?responseFields={responseFields}"
    },
    "addExtra": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Extras?responseFields={responseFields}"
    },
    "updateExtra": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Extras/{attributeFQN}?responseFields={responseFields}"
    },
    "deleteExtra": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Extras/{attributeFQN}"
    }
  },
  "commerce_catalog_admin_attributedefinition_producttypes_productTypeOption": {
    "getOptions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Options"
    },
    "getOption": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Options/{attributeFQN}?responseFields={responseFields}"
    },
    "addOption": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Options?responseFields={responseFields}"
    },
    "updateOption": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Options/{attributeFQN}?responseFields={responseFields}"
    },
    "deleteOption": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Options/{attributeFQN}"
    }
  },
  "commerce_catalog_admin_attributedefinition_producttypes_productTypeProperty": {
    "getProperties": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Properties"
    },
    "getProperty": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Properties/{attributeFQN}?responseFields={responseFields}"
    },
    "addProperty": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Properties?responseFields={responseFields}"
    },
    "updateProperty": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Properties/{attributeFQN}?responseFields={responseFields}"
    },
    "deleteProperty": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/attributedefinition/producttypes/{productTypeId}/Properties/{attributeFQN}"
    }
  },
  "commerce_catalog_admin_category": {
    "getCategories": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/categories/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getChildCategories": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/categories/{categoryId}/children?responseFields={responseFields}"
    },
    "getCategory": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/categories/{categoryId}?responseFields={responseFields}"
    },
    "addCategory": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/categories/?incrementSequence={incrementSequence}&useProvidedId={useProvidedId}&responseFields={responseFields}"
    },
    "addProductsToCategory": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/categories/{categoryId}/add-products"
    },
    "removeProductsFromCategory": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/categories/{categoryId}/remove-products"
    },
    "validateDynamicExpression": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/categories/ValidateDynamicExpression?responseFields={responseFields}"
    },
    "validateRealTimeDynamicExpression": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/categories/ValidateRealTimeDynamicExpression?responseFields={responseFields}"
    },
    "updateCategory": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/categories/{categoryId}?cascadeVisibility={cascadeVisibility}&responseFields={responseFields}"
    },
    "deleteCategoryById": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/categories/{categoryId}/?cascadeDelete={cascadeDelete}&forceDelete={forceDelete}&reassignToParent={reassignToParent}"
    }
  },
  "commerce_catalog_admin_couponSet": {
    "getCouponSets": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&includeCounts={includeCounts}&responseFields={responseFields}"
    },
    "getCouponSet": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/{couponSetCode}?includeCounts={includeCounts}&responseFields={responseFields}"
    },
    "getUniqueCouponSetCode": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/unique-code?responseFields={responseFields}"
    },
    "addCouponSet": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/?responseFields={responseFields}"
    },
    "validateUniqueCouponSetCode": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/validate-unique-code"
    },
    "updateCouponSet": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/{couponSetCode}?responseFields={responseFields}"
    },
    "deleteCouponSet": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/{couponSetCode}"
    }
  },
  "commerce_catalog_admin_couponsets_assignedDiscount": {
    "getAssignedDiscounts": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/{couponSetCode}/assigneddiscounts"
    },
    "assignDiscount": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/{couponSetCode}/assigneddiscounts"
    },
    "unAssignDiscount": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/{couponSetCode}/assigneddiscounts/{discountId}"
    }
  },
  "commerce_catalog_admin_couponsets_coupon": {
    "getCoupon": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/{couponSetCode}/couponcodes/{couponCode}?includeCounts={includeCounts}&responseFields={responseFields}"
    },
    "getCoupons": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/{couponSetCode}/couponcodes?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&includeCounts={includeCounts}&responseFields={responseFields}"
    },
    "addCoupons": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/{couponSetCode}/couponcodes"
    },
    "deleteCoupons": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/{couponSetCode}/couponcodes/remove"
    },
    "deleteCoupon": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/couponsets/{couponSetCode}/couponcodes/{couponCode}"
    }
  },
  "commerce_catalog_admin_discount": {
    "getDiscounts": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/discounts/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getDiscountContent": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}/content?responseFields={responseFields}"
    },
    "getDiscount": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}?responseFields={responseFields}"
    },
    "generateRandomCoupon": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/discounts/generate-random-coupon?responseFields={responseFields}"
    },
    "createDiscount": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/discounts/?responseFields={responseFields}"
    },
    "updateDiscountContent": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}/content?responseFields={responseFields}"
    },
    "updateDiscount": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}?responseFields={responseFields}"
    },
    "deleteDiscount": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}"
    }
  },
  "commerce_catalog_admin_discountSettings": {
    "getDiscountSettings": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/discountsettings/{catalogId}?responseFields={responseFields}"
    },
    "updateDiscountSettings": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/discountsettings/{catalogId}?responseFields={responseFields}"
    }
  },
  "commerce_catalog_admin_discounts_discountTarget": {
    "getDiscountTarget": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}/target?responseFields={responseFields}"
    },
    "updateDiscountTarget": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}/target?responseFields={responseFields}"
    }
  },
  "commerce_catalog_admin_facet": {
    "getFacet": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/facets/{facetId}?validate={validate}&responseFields={responseFields}"
    },
    "getFacetCategoryList": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/facets/category/{categoryId}?includeAvailable={includeAvailable}&validate={validate}&responseFields={responseFields}"
    },
    "addFacet": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/facets/?responseFields={responseFields}"
    },
    "updateFacet": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/facets/{facetId}?responseFields={responseFields}"
    },
    "deleteFacetById": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/facets/{facetId}"
    }
  },
  "commerce_catalog_admin_locationInventory": {
    "getLocationInventory": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/locationinventory/{locationCode}/{productCode}?responseFields={responseFields}"
    },
    "getLocationInventories": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/locationinventory/{locationCode}?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&filterFunctions={filterFunctions}&responseFields={responseFields}"
    },
    "addLocationInventory": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/locationinventory/{locationCode}?performUpserts={performUpserts}"
    },
    "updateLocationInventory": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/locationinventory/{locationCode}"
    },
    "deleteLocationInventory": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/locationinventory/{locationCode}/{productCode}"
    }
  },
  "commerce_catalog_admin_masterCatalog": {
    "getMasterCatalogs": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/mastercatalogs/?responseFields={responseFields}"
    },
    "getMasterCatalog": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/mastercatalogs/{masterCatalogId}?responseFields={responseFields}"
    },
    "updateMasterCatalog": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/mastercatalogs/{masterCatalogId}?responseFields={responseFields}"
    }
  },
  "commerce_catalog_admin_priceList": {
    "getPriceLists": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/pricelists/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getPriceList": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/pricelists/{priceListCode}?responseFields={responseFields}"
    },
    "addPriceList": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/pricelists/?responseFields={responseFields}"
    },
    "bulkAddPriceListEntries": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/pricelists/bulkaddentries?publishEvents={publishEvents}&invalidateCache={invalidateCache}"
    },
    "bulkDeletePriceListEntries": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/pricelists/bulkdeleteentries?publishEvents={publishEvents}&invalidateCache={invalidateCache}"
    },
    "bulkUpdatePriceListEntries": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/pricelists/bulkupdateentries?publishEvents={publishEvents}&invalidateCache={invalidateCache}"
    },
    "updatePriceList": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/pricelists/{priceListCode}?responseFields={responseFields}"
    },
    "deletePriceList": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/pricelists/{priceListCode}?cascadeDeleteEntries={cascadeDeleteEntries}"
    }
  },
  "commerce_catalog_admin_pricelists_priceListEntry": {
    "getPriceListEntry": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/pricelists/{priceListCode}/entries/{productCode}/{currencyCode}?startDate={startDate}&responseFields={responseFields}"
    },
    "getPriceListEntries": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/pricelists/{priceListCode}/entries?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "addPriceListEntry": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/pricelists/{priceListCode}/entries?responseFields={responseFields}"
    },
    "updatePriceListEntry": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/pricelists/{priceListCode}/entries/{productCode}/{currencyCode}?startDate={startDate}&responseFields={responseFields}"
    },
    "deletePriceListEntry": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/pricelists/{priceListCode}/entries/{productCode}/{currencyCode}?startDate={startDate}"
    }
  },
  "commerce_catalog_admin_product": {
    "getProducts": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&q={q}&qLimit={qLimit}&noCount={noCount}&responseFields={responseFields}"
    },
    "getProductInCatalogs": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/ProductInCatalogs"
    },
    "getProductInCatalog": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/ProductInCatalogs/{catalogId}?responseFields={responseFields}"
    },
    "getProduct": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}?responseFields={responseFields}"
    },
    "addProduct": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/?responseFields={responseFields}"
    },
    "addProductInCatalog": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/ProductInCatalogs?responseFields={responseFields}"
    },
    "renameProductCodes": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/Actions/RenameProductCodes"
    },
    "updateProductInCatalogs": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/ProductInCatalogs"
    },
    "updateProductInCatalog": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/ProductInCatalogs/{catalogId}?responseFields={responseFields}"
    },
    "updateProduct": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}?responseFields={responseFields}"
    },
    "deleteProduct": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}"
    },
    "deleteProductInCatalog": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/ProductInCatalogs/{catalogId}"
    }
  },
  "commerce_catalog_admin_productReservation": {
    "getProductReservations": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/productreservations/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getProductReservation": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/productreservations/{productReservationId}?responseFields={responseFields}"
    },
    "addProductReservations": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/productreservations/?skipInventoryCheck={skipInventoryCheck}"
    },
    "commitReservations": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/productreservations/commit"
    },
    "updateProductReservations": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/productreservations/?skipInventoryCheck={skipInventoryCheck}"
    },
    "deleteProductReservation": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/productreservations/{productReservationId}"
    }
  },
  "commerce_catalog_admin_productSortDefinition": {
    "getProductSortDefinitions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/productsortdefinitions/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getProductSortDefinition": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/productsortdefinitions/{productSortDefinitionId}?responseFields={responseFields}"
    },
    "addProductSortDefinition": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/productsortdefinitions/?useProvidedId={useProvidedId}&responseFields={responseFields}"
    },
    "updateProductSortDefinition": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/productsortdefinitions/{productSortDefinitionId}?responseFields={responseFields}"
    },
    "deleteProductSortDefinition": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/productsortdefinitions/{productSortDefinitionId}"
    }
  },
  "commerce_catalog_admin_products_locationInventory": {
    "getLocationInventories": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{ProductCode}/LocationInventory/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getLocationInventory": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{ProductCode}/LocationInventory/{LocationCode}?responseFields={responseFields}"
    },
    "addLocationInventory": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{ProductCode}/LocationInventory?performUpserts={performUpserts}"
    },
    "updateLocationInventory": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{ProductCode}/LocationInventory"
    },
    "deleteLocationInventory": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{ProductCode}/LocationInventory/{LocationCode}"
    }
  },
  "commerce_catalog_admin_products_productExtra": {
    "getExtras": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras"
    },
    "getExtraValueLocalizedDeltaPrices": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice"
    },
    "getExtraValueLocalizedDeltaPrice": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice/{currencyCode}?responseFields={responseFields}"
    },
    "getExtra": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}?responseFields={responseFields}"
    },
    "addExtraValueLocalizedDeltaPrice": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice?responseFields={responseFields}"
    },
    "addExtra": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras?responseFields={responseFields}"
    },
    "updateExtraValueLocalizedDeltaPrices": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice"
    },
    "updateExtraValueLocalizedDeltaPrice": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice/{currencyCode}?responseFields={responseFields}"
    },
    "updateExtra": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}?responseFields={responseFields}"
    },
    "deleteExtra": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}"
    },
    "deleteExtraValueLocalizedDeltaPrice": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Extras/{attributeFQN}/Values/{value}/localizedDeltaPrice/{currencyCode}"
    }
  },
  "commerce_catalog_admin_products_productOption": {
    "getOptions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Options"
    },
    "getOption": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Options/{attributeFQN}?responseFields={responseFields}"
    },
    "addOption": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Options?responseFields={responseFields}"
    },
    "updateOption": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Options/{attributeFQN}?responseFields={responseFields}"
    },
    "deleteOption": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Options/{attributeFQN}"
    }
  },
  "commerce_catalog_admin_products_productProperty": {
    "getProperties": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Properties"
    },
    "getPropertyValueLocalizedContents": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}/values/{value}/LocalizedContent"
    },
    "getPropertyValueLocalizedContent": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}/values/{value}/LocalizedContent/{localeCode}?responseFields={responseFields}"
    },
    "getProperty": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}?responseFields={responseFields}"
    },
    "addPropertyValueLocalizedContent": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}/values/{value}/LocalizedContent?responseFields={responseFields}"
    },
    "addProperty": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Properties?responseFields={responseFields}"
    },
    "updatePropertyValueLocalizedContents": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}/values/{value}/LocalizedContent"
    },
    "updatePropertyValueLocalizedContent": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}/values/{value}/LocalizedContent/{localeCode}?responseFields={responseFields}"
    },
    "updateProperty": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}?responseFields={responseFields}"
    },
    "deleteProperty": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}"
    },
    "deletePropertyValueLocalizedContent": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/products/{productCode}/Properties/{attributeFQN}/values/{value}/LocalizedContent/{localeCode}"
    }
  },
  "commerce_catalog_admin_publishingScope": {
    "getPublishSet": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/publishing/publishsets/{publishSetCode}?responseFields={responseFields}"
    },
    "getPublishSets": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/publishing/publishsets?responseFields={responseFields}"
    },
    "discardDrafts": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/publishing/discarddrafts"
    },
    "publishDrafts": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/publishing/publishdrafts"
    },
    "assignProductsToPublishSet": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/publishing/publishsets?responseFields={responseFields}"
    },
    "deletePublishSet": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/publishing/publishsets/{publishSetCode}?discardDrafts={discardDrafts}"
    }
  },
  "commerce_catalog_admin_search": {
    "getSearchTuningRule": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/searchtuningrules/{searchTuningRuleCode}?responseFields={responseFields}"
    },
    "getSearchTuningRules": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/searchtuningrules?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getSearchTuningRuleSortFields": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/searchtuningrulesortfields?responseFields={responseFields}"
    },
    "getSettings": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/settings?responseFields={responseFields}"
    },
    "getSynonymDefinitionCollection": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/synonym-definitions/{localeCode}?responseFields={responseFields}"
    },
    "getSynonymDefinitions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/synonyms/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getSynonymDefinition": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/synonyms/{synonymId}?responseFields={responseFields}"
    },
    "addSearchTuningRule": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/searchtuningrules?responseFields={responseFields}"
    },
    "updateSearchTuningRuleSortFields": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/searchtuningrulesortfields?responseFields={responseFields}"
    },
    "updateSynonymDefinitionCollection": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/synonym-definitions/{localeCode}?responseFields={responseFields}"
    },
    "addSynonymDefinition": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/synonyms?responseFields={responseFields}"
    },
    "updateSearchTuningRule": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/searchtuningrules/{searchTuningRuleCode}?responseFields={responseFields}"
    },
    "updateSettings": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/settings?responseFields={responseFields}"
    },
    "updateSynonymDefinition": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/synonyms/{synonymId}?responseFields={responseFields}"
    },
    "deleteSearchTuningRule": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/searchtuningrules/{searchTuningRuleCode}"
    },
    "deleteSynonymDefinition": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/search/synonyms/{synonymId}"
    }
  },
  "commerce_catalog_admin_softAllocation": {
    "getSoftAllocations": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/softallocations/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getSoftAllocation": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/admin/softallocations/{softAllocationId}?responseFields={responseFields}"
    },
    "addSoftAllocations": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/softallocations/"
    },
    "convertToProductReservation": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/softallocations/convert"
    },
    "renewSoftAllocations": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/admin/softallocations/renew"
    },
    "updateSoftAllocations": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/catalog/admin/softallocations/"
    },
    "deleteSoftAllocation": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/catalog/admin/softallocations/{softAllocationId}"
    }
  },
  "commerce_catalog_storefront_category": {
    "getCategories": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/storefront/categories/?filter={filter}&startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&responseFields={responseFields}"
    },
    "getCategory": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/storefront/categories/{categoryId}?allowInactive={allowInactive}&responseFields={responseFields}"
    },
    "getCategoryTree": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/storefront/categories/tree?responseFields={responseFields}"
    }
  },
  "commerce_catalog_storefront_orderTaxContext": {
    "estimateTaxes": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/storefront/tax/estimate-order?responseFields={responseFields}"
    }
  },
  "commerce_catalog_storefront_priceList": {
    "getPriceList": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/storefront/pricelists/{priceListCode}?responseFields={responseFields}"
    },
    "getResolvedPriceList": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/storefront/pricelists/resolved?customerAccountId={customerAccountId}&responseFields={responseFields}"
    }
  },
  "commerce_catalog_storefront_productSearchResult": {
    "getRandomAccessCursor": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/storefront/productsearch/randomAccessCursor/?query={query}&filter={filter}&pageSize={pageSize}&responseFields={responseFields}"
    },
    "search": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/storefront/productsearch/search/?query={query}&filter={filter}&facetTemplate={facetTemplate}&facetTemplateSubset={facetTemplateSubset}&facet={facet}&facetFieldRangeQuery={facetFieldRangeQuery}&facetHierPrefix={facetHierPrefix}&facetHierValue={facetHierValue}&facetHierDepth={facetHierDepth}&facetStartIndex={facetStartIndex}&facetPageSize={facetPageSize}&facetSettings={facetSettings}&facetValueFilter={facetValueFilter}&sortBy={sortBy}&pageSize={pageSize}&startIndex={startIndex}&searchSettings={searchSettings}&enableSearchTuningRules={enableSearchTuningRules}&searchTuningRuleContext={searchTuningRuleContext}&searchTuningRuleCode={searchTuningRuleCode}&facetTemplateExclude={facetTemplateExclude}&facetPrefix={facetPrefix}&responseOptions={responseOptions}&cursorMark={cursorMark}&facetValueSort={facetValueSort}&defaultSort={defaultSort}&sortDefinitionName={sortDefinitionName}&defaultSortDefinitionName={defaultSortDefinitionName}&responseFields={responseFields}"
    },
    "suggest": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/catalog/storefront/productsearch/suggest?query={query}&groups={groups}&pageSize={pageSize}&responseFields={responseFields}"
    }
  },
  "commerce_catalog_storefront_shipping": {
    "getMultiRates": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/storefront/shipping/request-multi-rates"
    },
    "getRates": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/catalog/storefront/shipping/request-rates?responseFields={responseFields}"
    }
  },
  "commerce_channel": {
    "getChannels": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/channels/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getChannel": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/channels/{code}?responseFields={responseFields}"
    },
    "createChannel": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/channels/?responseFields={responseFields}"
    },
    "updateChannel": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/channels/{code}?responseFields={responseFields}"
    },
    "deleteChannel": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/channels/{code}"
    }
  },
  "commerce_channelGroup": {
    "getChannelGroups": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/channelgroups/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getChannelGroup": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/channelgroups/{code}?responseFields={responseFields}"
    },
    "createChannelGroup": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/channelgroups/?responseFields={responseFields}"
    },
    "updateChannelGroup": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/channelgroups/{code}?responseFields={responseFields}"
    },
    "deleteChannelGroup": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/channelgroups/{code}"
    }
  },
  "commerce_checkout": {
    "getCheckouts": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/checkouts/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&q={q}&qLimit={qLimit}&responseFields={responseFields}"
    },
    "getAvailableActions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/actions"
    },
    "getAvailableShippingMethods": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/shippingMethods"
    },
    "getCheckout": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}?responseFields={responseFields}"
    },
    "createCheckoutFromCart": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/checkouts/?cartId={cartId}&responseFields={responseFields}"
    },
    "performCheckoutAction": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/actions?responseFields={responseFields}"
    },
    "resendCheckoutConfirmationEmail": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/email/resend"
    },
    "setShippingMethods": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/shippingMethods?responseFields={responseFields}"
    },
    "updateCheckout": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}?responseFields={responseFields}"
    },
    "processDigitalWallet": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/digitalWallet/{digitalWalletType}?responseFields={responseFields}"
    },
    "changeCheckoutPriceList": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/priceList?responseFields={responseFields}"
    }
  },
  "commerce_checkouts_appliedDiscount": {
    "applyCoupon": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/coupons/{couponCode}?responseFields={responseFields}"
    },
    "removeCoupons": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/coupons"
    },
    "removeCoupon": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/coupons/{couponcode}"
    }
  },
  "commerce_checkouts_destination": {
    "getDestinations": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/destinations"
    },
    "getDestination": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/destinations/{destinationId}?responseFields={responseFields}"
    },
    "addDestination": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/destinations?responseFields={responseFields}"
    },
    "updateDestination": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/destinations/{destinationId}?responseFields={responseFields}"
    },
    "removeDestination": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/destinations/{destinationId}"
    }
  },
  "commerce_checkouts_extendedProperty": {
    "getExtendedProperties": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/extendedproperties"
    },
    "addExtendedProperties": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/extendedproperties"
    },
    "updateExtendedProperty": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/extendedproperties/{key}?upsert={upsert}&responseFields={responseFields}"
    },
    "updateExtendedProperties": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/extendedproperties?upsert={upsert}"
    },
    "deleteExtendedProperties": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/extendedproperties"
    },
    "deleteExtendedProperty": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/extendedproperties/{key}"
    }
  },
  "commerce_checkouts_orderAttribute": {
    "getCheckoutAttributes": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/attributes"
    },
    "createCheckoutAttributes": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/attributes"
    },
    "updateCheckoutAttribute": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/attributes?removeMissing={removeMissing}"
    }
  },
  "commerce_checkouts_orderItem": {
    "splitItem": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/items/{itemId}/split?quantity={quantity}&responseFields={responseFields}"
    },
    "bulkUpdateItemDestinations": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/items/destinations?responseFields={responseFields}"
    },
    "updateItemDestination": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/items/{itemId}/destination/{destinationId}?responseFields={responseFields}"
    }
  },
  "commerce_checkouts_orderNote": {
    "getCheckoutNotes": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/notes"
    },
    "getCheckoutNote": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/notes/{noteId}?responseFields={responseFields}"
    },
    "createCheckoutNote": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/notes?responseFields={responseFields}"
    },
    "updateCheckoutNote": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/notes/{noteId}?responseFields={responseFields}"
    },
    "deleteCheckoutNote": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/notes/{noteId}"
    }
  },
  "commerce_checkouts_payment": {
    "performPaymentAction": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/payments/{paymentId}/actions?responseFields={responseFields}"
    },
    "createPaymentAction": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/checkouts/{checkoutId}/payments/actions?responseFields={responseFields}"
    }
  },
  "commerce_customer_accounts_card": {
    "getAccountCard": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/cards/{cardId}?responseFields={responseFields}"
    },
    "getAccountCards": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/cards?responseFields={responseFields}"
    },
    "addAccountCard": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/cards?responseFields={responseFields}"
    },
    "updateAccountCard": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/cards/{cardId}?responseFields={responseFields}"
    },
    "deleteAccountCard": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/cards/{cardId}"
    }
  },
  "commerce_customer_accounts_customerAttribute": {
    "getAccountAttribute": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/attributes/{attributeFQN}?responseFields={responseFields}"
    },
    "getAccountAttributes": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/attributes?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "addAccountAttribute": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/attributes?responseFields={responseFields}"
    },
    "updateAccountAttribute": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/attributes/{attributeFQN}?responseFields={responseFields}"
    },
    "deleteAccountAttribute": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/attributes/{attributeFQN}"
    }
  },
  "commerce_customer_accounts_customerAuditEntry": {
    "getAccountAuditLog": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/AuditLog/Entries?startIndex={startIndex}&pageSize={pageSize}&responseFields={responseFields}"
    }
  },
  "commerce_customer_accounts_customerContact": {
    "getAccountContact": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/contacts/{contactId}?responseFields={responseFields}"
    },
    "getAccountContacts": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/contacts?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "addAccountContact": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/contacts?responseFields={responseFields}"
    },
    "updateAccountContact": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/contacts/{contactId}?responseFields={responseFields}"
    },
    "addAccountContactList": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/contacts?responseFields={responseFields}"
    },
    "deleteAccountContact": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/contacts/{contactId}"
    }
  },
  "commerce_customer_accounts_customerNote": {
    "getAccountNote": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/notes/{noteId}?responseFields={responseFields}"
    },
    "getAccountNotes": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/notes?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "addAccountNote": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/notes?responseFields={responseFields}"
    },
    "updateAccountNote": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/notes/{noteId}?responseFields={responseFields}"
    },
    "deleteAccountNote": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/notes/{noteId}"
    }
  },
  "commerce_customer_accounts_customerPurchaseOrderAccount": {
    "getCustomerPurchaseOrderAccount": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/purchaseOrderAccount?responseFields={responseFields}"
    },
    "getCustomerPurchaseOrderTransactions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/PurchaseOrderTransaction?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "createCustomerPurchaseOrderAccount": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/purchaseOrderAccount?responseFields={responseFields}"
    },
    "createPurchaseOrderTransaction": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/PurchaseOrderTransaction?responseFields={responseFields}"
    },
    "updateCustomerPurchaseOrderAccount": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/purchaseOrderAccount?responseFields={responseFields}"
    },
    "deleteCustomerPurchaseOrderAccount": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/customer/accounts/internal/{accountId}/purchaseOrderAccount"
    }
  },
  "commerce_customer_accounts_customerSegment": {
    "getAccountSegments": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/segments/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    }
  },
  "commerce_customer_accounts_transaction": {
    "getTransactions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/transactions"
    },
    "addTransaction": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/transactions?responseFields={responseFields}"
    },
    "removeTransaction": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/transactions/{transactionId}"
    }
  },
  "commerce_customer_addressValidationRequest": {
    "validateAddress": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/addressvalidation/?responseFields={responseFields}"
    }
  },
  "commerce_customer_attributedefinition_attribute": {
    "getAttributes": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/attributedefinition/attributes/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getAttributeVocabularyValues": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/attributedefinition/attributes/{attributeFQN}/VocabularyValues"
    },
    "getAttribute": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/attributedefinition/attributes/{attributeFQN}?responseFields={responseFields}"
    },
    "createAttribute": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/attributedefinition/attributes/?responseFields={responseFields}"
    },
    "updateAttribute": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/customer/attributedefinition/attributes/{attributeFQN}?responseFields={responseFields}"
    }
  },
  "commerce_customer_credit": {
    "getCredits": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/credits/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getCredit": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/credits/{code}?responseFields={responseFields}"
    },
    "addCredit": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/credits/?responseFields={responseFields}"
    },
    "associateCreditToShopper": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/customer/credits/{code}/associate-to-shopper?responseFields={responseFields}"
    },
    "resendCreditCreatedEmail": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/customer/credits/{code}/Resend-Email"
    },
    "updateCredit": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/customer/credits/{code}?responseFields={responseFields}"
    },
    "deleteCredit": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/customer/credits/{code}"
    }
  },
  "commerce_customer_credits_creditAuditEntry": {
    "getAuditEntries": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/credits/{code}/auditentries?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    }
  },
  "commerce_customer_credits_creditTransaction": {
    "getTransactions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/credits/{code}/transactions?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "addTransaction": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/credits/{code}/transactions?responseFields={responseFields}"
    }
  },
  "commerce_customer_customerAccount": {
    "getAccounts": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&fields={fields}&q={q}&qLimit={qLimit}&isAnonymous={isAnonymous}&responseFields={responseFields}"
    },
    "getLoginState": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/loginstate?responseFields={responseFields}"
    },
    "getAccount": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}?responseFields={responseFields}"
    },
    "addAccount": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/?responseFields={responseFields}"
    },
    "changePassword": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/Change-Password?unlockAccount={unlockAccount}"
    },
    "addLoginToExistingCustomer": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/Create-Login?responseFields={responseFields}"
    },
    "recomputeCustomerLifetimeValue": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/recomputelifetimevalue"
    },
    "setLoginLocked": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/Set-Login-Locked"
    },
    "setPasswordChangeRequired": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}/Set-Password-Change-Required"
    },
    "addAccountAndLogin": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/Add-Account-And-Login?responseFields={responseFields}"
    },
    "addAccounts": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/Bulk?responseFields={responseFields}"
    },
    "changePasswords": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/Change-Passwords?responseFields={responseFields}"
    },
    "getLoginStateByEmailAddress": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/loginstatebyemailaddress?emailAddress={emailAddress}&responseFields={responseFields}"
    },
    "getLoginStateByUserName": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/loginstatebyusername?userName={userName}&customerSetCode={customerSetCode}&responseFields={responseFields}"
    },
    "getCustomersPurchaseOrderAccounts": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/purchaseOrderAccounts?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&responseFields={responseFields}"
    },
    "resetPassword": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/accounts/Reset-Password"
    },
    "updateAccount": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}?responseFields={responseFields}"
    },
    "deleteAccount": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/customer/accounts/{accountId}"
    }
  },
  "commerce_customer_customerAuthTicket": {
    "createAnonymousShopperAuthTicket": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/authtickets/anonymousshopper?responseFields={responseFields}"
    },
    "createUserAuthTicket": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/authtickets/?responseFields={responseFields}"
    },
    "refreshUserAuthTicket": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/customer/authtickets/refresh?refreshToken={refreshToken}&responseFields={responseFields}"
    }
  },
  "commerce_customer_customerSegment": {
    "getSegments": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/segments/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getSegment": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/segments/{id}?responseFields={responseFields}"
    },
    "addSegment": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/segments/?responseFields={responseFields}"
    },
    "addSegmentAccounts": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/segments/{id}/accounts"
    },
    "updateSegment": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/customer/segments/{id}?responseFields={responseFields}"
    },
    "deleteSegment": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/customer/segments/{id}"
    },
    "removeSegmentAccount": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/customer/segments/{id}/accounts/{accountId}"
    }
  },
  "commerce_customer_customerSet": {
    "getCustomerSets": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/customerSets/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&responseFields={responseFields}"
    },
    "getCustomerSet": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/customerSets/{code}?responseFields={responseFields}"
    }
  },
  "commerce_customer_visit": {
    "getVisits": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/visits/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getVisit": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/customer/visits/{visitId}?responseFields={responseFields}"
    },
    "addVisit": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/customer/visits/?responseFields={responseFields}"
    },
    "updateVisit": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/customer/visits/{visitId}?responseFields={responseFields}"
    }
  },
  "commerce_inStockNotificationSubscription": {
    "getInStockNotificationSubscriptions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/instocknotifications/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getInStockNotificationSubscription": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/instocknotifications/{id}?responseFields={responseFields}"
    },
    "addInStockNotificationSubscription": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/instocknotifications/?responseFields={responseFields}"
    },
    "deleteInStockNotificationSubscription": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/instocknotifications/{id}"
    }
  },
  "commerce_location": {
    "getLocation": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/storefront/locations/{locationCode}?includeAttributeDefinition={includeAttributeDefinition}&responseFields={responseFields}"
    },
    "getLocationsInUsageType": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/storefront/locationUsageTypes/{locationUsageType}/locations?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&includeAttributeDefinition={includeAttributeDefinition}&responseFields={responseFields}"
    },
    "getDirectShipLocation": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/storefront/locationUsageTypes/DS/location?includeAttributeDefinition={includeAttributeDefinition}&responseFields={responseFields}"
    },
    "getInStorePickupLocation": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/storefront/locationUsageTypes/SP/locations/{locationCode}?includeAttributeDefinition={includeAttributeDefinition}&responseFields={responseFields}"
    },
    "getInStorePickupLocations": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/storefront/locationUsageTypes/SP/locations?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&includeAttributeDefinition={includeAttributeDefinition}&responseFields={responseFields}"
    }
  },
  "commerce_order": {
    "getOrders": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&q={q}&qLimit={qLimit}&includeBin={includeBin}&responseFields={responseFields}"
    },
    "getAvailableActions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/actions"
    },
    "getTaxableOrders": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/taxableorders"
    },
    "getOrder": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}?draft={draft}&includeBin={includeBin}&responseFields={responseFields}"
    },
    "createOrderFromCart": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/?cartId={cartId}&responseFields={responseFields}"
    },
    "createOrder": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/?responseFields={responseFields}"
    },
    "performOrderAction": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/actions?responseFields={responseFields}"
    },
    "priceOrder": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/price?refreshShipping={refreshShipping}&responseFields={responseFields}"
    },
    "processDigitalWallet": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/digitalWallet/{digitalWalletType}?responseFields={responseFields}"
    },
    "updateOrderDiscount": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/discounts/{discountId}?updatemode={updateMode}&version={version}&responseFields={responseFields}"
    },
    "deleteOrderDraft": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/draft?version={version}"
    },
    "resendOrderConfirmationEmail": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/email/resend"
    },
    "changeOrderPriceList": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/priceList?updatemode={updateMode}&version={version}&responseFields={responseFields}"
    },
    "changeOrderUserId": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/users?responseFields={responseFields}"
    },
    "updateOrder": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}?updatemode={updateMode}&version={version}&responseFields={responseFields}"
    }
  },
  "commerce_orders_adjustment": {
    "applyHandlingAdjustment": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/adjustment/handling?updatemode={updateMode}&version={version}&responseFields={responseFields}"
    },
    "applyShippingAdjustment": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/adjustment/shipping?updatemode={updateMode}&version={version}&responseFields={responseFields}"
    },
    "applyAdjustment": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/adjustment?updatemode={updateMode}&version={version}&responseFields={responseFields}"
    },
    "removeHandlingAdjustment": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/adjustment/handling?updatemode={updateMode}&version={version}"
    },
    "removeShippingAdjustment": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/adjustment/shipping?updatemode={updateMode}&version={version}"
    },
    "removeAdjustment": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/adjustment?updatemode={updateMode}&version={version}"
    }
  },
  "commerce_orders_appliedDiscount": {
    "applyCoupon": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/coupons/{couponCode}?updatemode={updateMode}&version={version}&responseFields={responseFields}"
    },
    "removeCoupon": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/coupons/{couponcode}?updatemode={updateMode}&version={version}"
    },
    "removeCoupons": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/coupons?updatemode={updateMode}&version={version}"
    }
  },
  "commerce_orders_attributedefinition_attribute": {
    "getAttributes": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/attributedefinition/attributes/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getAttributeVocabularyValues": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/attributedefinition/attributes/{attributeFQN}/VocabularyValues"
    },
    "getAttribute": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/attributedefinition/attributes/{attributeFQN}?responseFields={responseFields}"
    },
    "createAttribute": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/attributedefinition/attributes/?responseFields={responseFields}"
    },
    "updateAttribute": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/attributedefinition/attributes/{attributeFQN}?responseFields={responseFields}"
    }
  },
  "commerce_orders_billingInfo": {
    "getBillingInfo": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/billinginfo?draft={draft}&responseFields={responseFields}"
    },
    "setBillingInfo": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/billinginfo?updatemode={updateMode}&version={version}&responseFields={responseFields}"
    }
  },
  "commerce_orders_digitalPackage": {
    "getAvailableDigitalPackageFulfillmentActions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/digitalpackages/{digitalPackageId}/actions"
    },
    "getDigitalPackage": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/digitalpackages/{digitalPackageId}?responseFields={responseFields}"
    },
    "createDigitalPackage": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/digitalpackages?responseFields={responseFields}"
    },
    "updateDigitalPackage": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/digitalpackages/{digitalPackageId}?responseFields={responseFields}"
    },
    "deleteDigitalPackage": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/digitalpackages/{digitalPackageId}"
    }
  },
  "commerce_orders_extendedProperty": {
    "getExtendedProperties": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/extendedproperties?draft={draft}"
    },
    "addExtendedProperties": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/extendedproperties?updatemode={updateMode}&version={version}"
    },
    "updateExtendedProperty": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/extendedproperties/{key}?updatemode={updateMode}&version={version}&upsert={upsert}&responseFields={responseFields}"
    },
    "updateExtendedProperties": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/extendedproperties?updatemode={updateMode}&version={version}&upsert={upsert}"
    },
    "deleteExtendedProperty": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/extendedproperties/{key}?updatemode={updateMode}&version={version}"
    },
    "deleteExtendedProperties": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/extendedproperties?updatemode={updateMode}&version={version}"
    }
  },
  "commerce_orders_fulfillmentAction": {
    "performFulfillmentAction": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/fulfillment/actions/?responseFields={responseFields}"
    },
    "resendPackageFulfillmentEmail": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/fulfillment/email/resend?responseFields={responseFields}"
    }
  },
  "commerce_orders_fulfillmentInfo": {
    "getFulfillmentInfo": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/fulfillmentinfo?draft={draft}&responseFields={responseFields}"
    },
    "setFulFillmentInfo": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/fulfillmentinfo?updatemode={updateMode}&version={version}&responseFields={responseFields}"
    }
  },
  "commerce_orders_orderAttribute": {
    "getOrderAttributes": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/attributes"
    },
    "createOrderAttributes": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/attributes"
    },
    "updateOrderAttributes": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/attributes?removeMissing={removeMissing}"
    }
  },
  "commerce_orders_orderItem": {
    "getOrderItemViaLineId": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/items/{lineId}?draft={draft}&responseFields={responseFields}"
    },
    "getOrderItem": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/items/{orderItemId}?draft={draft}&responseFields={responseFields}"
    },
    "getOrderItems": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/items?draft={draft}&responseFields={responseFields}"
    },
    "createOrderItem": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/items?updatemode={updateMode}&version={version}&skipInventoryCheck={skipInventoryCheck}&responseFields={responseFields}"
    },
    "updateOrderItemDiscount": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/items/{orderItemId}/discounts/{discountId}?updatemode={updateMode}&version={version}&responseFields={responseFields}"
    },
    "updateItemDuty": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/items/{orderItemId}/dutyAmount/{dutyAmount}?updatemode={updateMode}&version={version}&responseFields={responseFields}"
    },
    "updateItemFulfillment": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/items/{orderItemId}/fulfillment?updatemode={updateMode}&version={version}&responseFields={responseFields}"
    },
    "updateItemProductPrice": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/items/{orderItemId}/price/{price}?updatemode={updateMode}&version={version}&responseFields={responseFields}"
    },
    "updateItemQuantity": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/items/{orderItemId}/quantity/{quantity}?updatemode={updateMode}&version={version}&responseFields={responseFields}"
    },
    "deleteOrderItem": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/items/{orderItemId}?updatemode={updateMode}&version={version}"
    }
  },
  "commerce_orders_orderNote": {
    "getOrderNotes": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/notes"
    },
    "getOrderNote": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/notes/{noteId}?responseFields={responseFields}"
    },
    "createOrderNote": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/notes?responseFields={responseFields}"
    },
    "updateOrderNote": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/notes/{noteId}?responseFields={responseFields}"
    },
    "deleteOrderNote": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/notes/{noteId}"
    }
  },
  "commerce_orders_orderReturnableItem": {
    "getOrderReturnableItems": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/returnableitems?responseFields={responseFields}"
    }
  },
  "commerce_orders_orderValidationResult": {
    "getValidationResults": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/validationresults"
    },
    "addValidationResult": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/validationresults?responseFields={responseFields}"
    }
  },
  "commerce_orders_package": {
    "getAvailablePackageFulfillmentActions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/packages/{packageId}/actions"
    },
    "getPackageLabel": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/packages/{packageId}/label"
    },
    "getPackage": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/packages/{packageId}?responseFields={responseFields}"
    },
    "createPackage": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/packages?responseFields={responseFields}"
    },
    "updatePackage": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/packages/{packageId}?responseFields={responseFields}"
    },
    "deletePackage": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/packages/{packageId}"
    }
  },
  "commerce_orders_payment": {
    "getPayments": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/payments/?responseFields={responseFields}"
    },
    "getAvailablePaymentActions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/payments/{paymentId}/actions"
    },
    "getPayment": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/payments/{paymentId}?responseFields={responseFields}"
    },
    "performPaymentAction": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/payments/{paymentId}/actions?responseFields={responseFields}"
    },
    "createPaymentAction": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/payments/actions?responseFields={responseFields}"
    }
  },
  "commerce_orders_pickup": {
    "getAvailablePickupFulfillmentActions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/pickups/{pickupId}/actions"
    },
    "getPickup": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/pickups/{pickupId}?responseFields={responseFields}"
    },
    "createPickup": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/pickups?responseFields={responseFields}"
    },
    "updatePickup": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/pickups/{pickupId}?responseFields={responseFields}"
    },
    "deletePickup": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/pickups/{pickupId}"
    }
  },
  "commerce_orders_refund": {
    "createRefund": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/refunds?responseFields={responseFields}"
    },
    "resendRefundEmail": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/refunds/{refundId}"
    }
  },
  "commerce_orders_shipment": {
    "getShipment": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/shipments/{shipmentId}?responseFields={responseFields}"
    },
    "getAvailableShipmentMethods": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/shipments/methods?draft={draft}"
    },
    "createPackageShipments": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/shipments"
    },
    "deleteShipment": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/orders/{orderId}/shipments/{shipmentId}"
    }
  },
  "commerce_payments_fraudScreen": {
    "screen": {
      "method": "POST",
      "url": "{+pciPod}payments/commerce/payments/fraudscreen/screen?responseFields={responseFields}"
    }
  },
  "commerce_payments_fraudScreenResponse": {
    "screen": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/payments/fraudscreen/screen"
    }
  },
  "commerce_payments_publicCard": {
    "create": {
      "method": "POST",
      "url": "{+pciPod}payments/commerce/payments/cards/?responseFields={responseFields}"
    },
    "getGiftCardBalance": {
      "method": "POST",
      "url": "{+pciPod}payments/commerce/payments/cards/{cardId}/balance?responseFields={responseFields}"
    },
    "getUnregisteredGiftCardBalance": {
      "method": "POST",
      "url": "{+pciPod}payments/commerce/payments/cards/balance?responseFields={responseFields}"
    },
    "update": {
      "method": "PUT",
      "url": "{+pciPod}payments/commerce/payments/cards/{cardId}?responseFields={responseFields}"
    },
    "delete": {
      "method": "DELETE",
      "url": "{+pciPod}payments/commerce/payments/cards/{cardId}"
    }
  },
  "commerce_payments_publicToken": {
    "create": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/payments/tokens/?responseFields={responseFields}"
    },
    "execute": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/payments/tokens/{cardType}/execute?responseFields={responseFields}"
    }
  },
  "commerce_return": {
    "getReturns": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/returns/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&q={q}&responseFields={responseFields}"
    },
    "getAvailableReturnActions": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/actions"
    },
    "getReturnItem": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/items/{returnItemId}?responseFields={responseFields}"
    },
    "getReturnItems": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/items?responseFields={responseFields}"
    },
    "getAvailablePaymentActionsForReturn": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/payments/{paymentId}/actions"
    },
    "getPayment": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/payments/{paymentId}?responseFields={responseFields}"
    },
    "getPayments": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/payments?responseFields={responseFields}"
    },
    "getReturn": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/returns/{returnId}?responseFields={responseFields}"
    },
    "getReasons": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/returns/reasons?responseFields={responseFields}"
    },
    "createReturn": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/returns/?responseFields={responseFields}"
    },
    "createReturnItem": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/items?responseFields={responseFields}"
    },
    "performPaymentActionForReturn": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/payments/{paymentId}/actions?responseFields={responseFields}"
    },
    "createPaymentActionForReturn": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/payments/actions?responseFields={responseFields}"
    },
    "createReturnShippingOrder": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/ship?responseFields={responseFields}"
    },
    "performReturnActions": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/returns/actions?responseFields={responseFields}"
    },
    "updateReturn": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/returns/{returnId}?responseFields={responseFields}"
    },
    "resendReturnEmail": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/returns/email/resend"
    },
    "deleteOrderItem": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/returns/{orderId}/items/{orderItemId}?updatemode={updateMode}&version={version}"
    },
    "deleteReturn": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/returns/{returnId}"
    }
  },
  "commerce_returns_orderNote": {
    "getReturnNotes": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/notes"
    },
    "getReturnNote": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/notes/{noteId}?responseFields={responseFields}"
    },
    "createReturnNote": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/notes?responseFields={responseFields}"
    },
    "updateReturnNote": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/notes/{noteId}?responseFields={responseFields}"
    },
    "deleteReturnNote": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/notes/{noteId}"
    }
  },
  "commerce_returns_package": {
    "getPackageLabel": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/packages/{packageId}/label?returnAsBase64Png={returnAsBase64Png}"
    },
    "getPackage": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/packages/{packageId}?responseFields={responseFields}"
    },
    "createPackage": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/packages?responseFields={responseFields}"
    },
    "updatePackage": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/packages/{packageId}?responseFields={responseFields}"
    },
    "deletePackage": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/packages/{packageId}"
    }
  },
  "commerce_returns_shipment": {
    "getShipment": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/shipments/{shipmentId}?responseFields={responseFields}"
    },
    "createPackageShipments": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/shipments"
    },
    "deleteShipment": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/returns/{returnId}/shipments/{shipmentId}"
    }
  },
  "commerce_settings_application": {
    "thirdPartyGetApplication": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/settings/applications/?responseFields={responseFields}"
    },
    "thirdPartyUpdateApplication": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/settings/applications/?responseFields={responseFields}"
    }
  },
  "commerce_settings_cartSettings": {
    "getCartSettings": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/settings/cart/cartsettings?responseFields={responseFields}"
    },
    "createCartSettings": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/settings/cart/cartsettings?responseFields={responseFields}"
    },
    "updateCartSettings": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/settings/cart/cartsettings?responseFields={responseFields}"
    }
  },
  "commerce_settings_checkout_customerCheckoutSettings": {
    "getCustomerCheckoutSettings": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/settings/checkout/customercheckoutsettings?responseFields={responseFields}"
    },
    "updateCustomerCheckoutSettings": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/settings/checkout/customercheckoutsettings?responseFields={responseFields}"
    }
  },
  "commerce_settings_checkout_orderProcessingSettings": {
    "getOrderProcessingSettings": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/settings/checkout/orderprocessingsettings?responseFields={responseFields}"
    }
  },
  "commerce_settings_checkout_paymentSettings": {
    "getThirdPartyPaymentWorkflowWithValues": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/settings/checkout/paymentsettings/thirdpartyworkflow/{fullyQualifiedName}?responseFields={responseFields}"
    },
    "getThirdPartyPaymentWorkflows": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/settings/checkout/paymentsettings/thirdpartyworkflows"
    },
    "addThirdPartyPaymentWorkflow": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/settings/checkout/paymentsettings/thirdpartyworkflows"
    },
    "deleteThirdPartyPaymentWorkflow": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/settings/checkout/paymentsettings/thirdpartyworkflows/{fullyQualifiedName}"
    }
  },
  "commerce_settings_checkoutSettings": {
    "getCheckoutSettings": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/settings/checkout/?responseFields={responseFields}"
    }
  },
  "commerce_settings_general_customRouteSettings": {
    "getCustomRouteSettings": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/settings/general/customroutes?responseFields={responseFields}"
    },
    "createCustomRouteSettings": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/settings/general/customroutes?responseFields={responseFields}"
    },
    "updateCustomRouteSettings": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/settings/general/customroutes?responseFields={responseFields}"
    },
    "deleteCustomRouteSettings": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/settings/general/customroutes"
    }
  },
  "commerce_settings_general_taxableTerritory": {
    "getTaxableTerritories": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/settings/general/taxableterritories"
    },
    "addTaxableTerritory": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/settings/general/taxableterritories?responseFields={responseFields}"
    },
    "updateTaxableTerritories": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/settings/general/taxableterritories"
    }
  },
  "commerce_settings_generalSettings": {
    "getGeneralSettings": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/settings/general/?responseFields={responseFields}"
    },
    "updateGeneralSettings": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/settings/general/?responseFields={responseFields}"
    }
  },
  "commerce_settings_locationUsage": {
    "getLocationUsages": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/settings/locationUsages/?responseFields={responseFields}"
    },
    "getLocationUsage": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/settings/locationUsages/{code}?responseFields={responseFields}"
    },
    "updateLocationUsage": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/settings/locationUsages/{code}?responseFields={responseFields}"
    }
  },
  "commerce_settings_shipping_siteShippingHandlingFee": {
    "getOrderHandlingFee": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/settings/shipping/orderhandlingfee?responseFields={responseFields}"
    },
    "createOrderHandlingFee": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/settings/shipping/orderhandlingfee?responseFields={responseFields}"
    },
    "updateOrderHandlingFee": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/settings/shipping/orderhandlingfee?responseFields={responseFields}"
    }
  },
  "commerce_settings_siteShippingSettings": {
    "getSiteShippingSettings": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/settings/shipping/?responseFields={responseFields}"
    }
  },
  "commerce_shipping_admin_carrierConfiguration": {
    "getConfigurations": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/shipping/admin/carriers/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getConfiguration": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/shipping/admin/carriers/{carrierId}?responseFields={responseFields}"
    },
    "createConfiguration": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/shipping/admin/carriers/{carrierId}?responseFields={responseFields}"
    },
    "updateConfiguration": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/shipping/admin/carriers/{carrierId}?responseFields={responseFields}"
    },
    "deleteConfiguration": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/shipping/admin/carriers/{carrierId}"
    }
  },
  "commerce_shipping_admin_profiles_handlingFeeRule": {
    "getProductHandlingFeeRule": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees/{id}?responseFields={responseFields}"
    },
    "getProductHandlingFeeRules": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees?responseFields={responseFields}"
    },
    "createProductHandlingFeeRule": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees?responseFields={responseFields}"
    },
    "updateProductHandlingFeeRule": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees/{id}?responseFields={responseFields}"
    },
    "deleteProductHandlingFeeRule": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees/{id}"
    }
  },
  "commerce_shipping_admin_profiles_orderHandlingFeeRules": {
    "getOrderHandlingFeeRule": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/orderhandlingfees/{id}?responseFields={responseFields}"
    },
    "getOrderHandlingFeeRules": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/orderhandlingfees?responseFields={responseFields}"
    },
    "createOrderHandlingFeeRule": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/orderhandlingfees?responseFields={responseFields}"
    },
    "updateOrderHandlingFeeRule": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/orderhandlingfees/{id}?responseFields={responseFields}"
    },
    "deleteOrderHandlingFeeRule": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/orderhandlingfees/{id}"
    }
  },
  "commerce_shipping_admin_profiles_productHandlingFeeRules": {
    "getProductHandlingFeeRule": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees/{id}?responseFields={responseFields}"
    },
    "getProductHandlingFeeRules": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees?responseFields={responseFields}"
    },
    "createProductHandlingFeeRule": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees?responseFields={responseFields}"
    },
    "updateProductHandlingFeeRule": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees/{id}?responseFields={responseFields}"
    },
    "deleteProductHandlingFeeRule": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/producthandlingfees/{id}"
    }
  },
  "commerce_shipping_admin_profiles_shippingInclusionRule": {
    "getShippingInclusionRule": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/shippinginclusions/{id}?responseFields={responseFields}"
    },
    "getShippingInclusionRules": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/shippinginclusions?responseFields={responseFields}"
    },
    "createShippingInclusionRule": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/shippinginclusions?responseFields={responseFields}"
    },
    "updateShippingInclusionRule": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/shippinginclusions/{id}?responseFields={responseFields}"
    },
    "deleteShippingInclusionRule": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/rules/shippinginclusions/{id}"
    }
  },
  "commerce_shipping_admin_profiles_shippingStates": {
    "getStates": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/shippingstates"
    },
    "updateStates": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/{profilecode}/shippingstates"
    }
  },
  "commerce_shipping_admin_shippingProfile": {
    "getProfiles": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/shipping/admin/profiles/?responseFields={responseFields}"
    }
  },
  "commerce_targetRule": {
    "getTargetRules": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/targetrules/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getTargetRule": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/targetrules/{code}?responseFields={responseFields}"
    },
    "createTargetRule": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/targetrules/?responseFields={responseFields}"
    },
    "validateTargetRule": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/targetrules/validate"
    },
    "updateTargetRule": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/targetrules/{code}?responseFields={responseFields}"
    },
    "deleteTargetRule": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/targetrules/{code}"
    }
  },
  "commerce_wishlist": {
    "getWishlists": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/wishlists/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&q={q}&qLimit={qLimit}&responseFields={responseFields}"
    },
    "getWishlist": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/wishlists/{wishlistId}?responseFields={responseFields}"
    },
    "getWishlistByName": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/wishlists/customers/{customerAccountId}/{wishlistName}?responseFields={responseFields}"
    },
    "createWishlist": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/wishlists/?responseFields={responseFields}"
    },
    "updateWishlist": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/wishlists/{wishlistId}?responseFields={responseFields}"
    },
    "deleteWishlist": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/wishlists/{wishlistId}"
    }
  },
  "commerce_wishlists_wishlistItem": {
    "getWishlistItem": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/wishlists/{wishlistId}/items/{wishlistItemId}?responseFields={responseFields}"
    },
    "getWishlistItems": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/wishlists/{wishlistId}/items?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getWishlistItemsByWishlistName": {
      "method": "GET",
      "url": "{+tenantPod}api/commerce/wishlists/customers/{customerAccountId}/{wishlistName}/items?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "addItemToWishlist": {
      "method": "POST",
      "url": "{+tenantPod}api/commerce/wishlists/{wishlistId}/items?responseFields={responseFields}"
    },
    "updateWishlistItemQuantity": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/wishlists/{wishlistId}/items/{wishlistItemId}/{quantity}?responseFields={responseFields}"
    },
    "updateWishlistItem": {
      "method": "PUT",
      "url": "{+tenantPod}api/commerce/wishlists/{wishlistId}/items/{wishlistItemId}?responseFields={responseFields}"
    },
    "removeAllWishlistItems": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/wishlists/{wishlistId}/items"
    },
    "deleteWishlistItem": {
      "method": "DELETE",
      "url": "{+tenantPod}api/commerce/wishlists/{wishlistId}/items/{wishlistItemId}"
    }
  },
  "content_documentDraftSummary": {
    "listDocumentDraftSummaries": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documentpublishing/draft?pageSize={pageSize}&startIndex={startIndex}&documentLists={documentLists}&responseFields={responseFields}"
    },
    "deleteDocumentDrafts": {
      "method": "POST",
      "url": "{+tenantPod}api/content/documentpublishing/draft?documentLists={documentLists}"
    },
    "publishDocuments": {
      "method": "PUT",
      "url": "{+tenantPod}api/content/documentpublishing/active?documentLists={documentLists}"
    }
  },
  "content_documentList": {
    "getDocumentLists": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documentlists/?pageSize={pageSize}&startIndex={startIndex}&responseFields={responseFields}"
    },
    "getDocumentList": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}?responseFields={responseFields}"
    },
    "createDocumentList": {
      "method": "POST",
      "url": "{+tenantPod}api/content/documentlists/?responseFields={responseFields}"
    },
    "updateDocumentList": {
      "method": "PUT",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}?responseFields={responseFields}"
    },
    "deleteDocumentList": {
      "method": "DELETE",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}"
    }
  },
  "content_documentListType": {
    "getDocumentListTypes": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documentlistTypes/{documentListTypeFQN}?responseFields={responseFields}"
    },
    "getDocumentListType": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documentlistTypes/{documentListTypeFQN}?responseFields={responseFields}"
    },
    "createDocumentListType": {
      "method": "POST",
      "url": "{+tenantPod}api/content/documentlistTypes/?responseFields={responseFields}"
    },
    "updateDocumentListType": {
      "method": "PUT",
      "url": "{+tenantPod}api/content/documentlistTypes/{documentListTypeFQN}?responseFields={responseFields}"
    }
  },
  "content_documentType": {
    "getDocumentTypes": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documenttypes/?pageSize={pageSize}&startIndex={startIndex}&responseFields={responseFields}"
    },
    "getDocumentType": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documenttypes/{documentTypeName}?responseFields={responseFields}"
    },
    "createDocumentType": {
      "method": "POST",
      "url": "{+tenantPod}api/content/documenttypes/?responseFields={responseFields}"
    },
    "updateDocumentType": {
      "method": "PUT",
      "url": "{+tenantPod}api/content/documenttypes/{documentTypeName}?responseFields={responseFields}"
    }
  },
  "content_documentlists_document": {
    "getDocumentContent": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documents/{documentId}/content"
    },
    "transformDocumentContent": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documents/{documentId}/transform?width={width}&height={height}&maxWidth={maxWidth}&maxHeight={maxHeight}&crop={crop}&quality={quality}"
    },
    "getDocument": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documents/{documentId}?includeInactive={includeInactive}&responseFields={responseFields}"
    },
    "getDocuments": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documents?filter={filter}&sortBy={sortBy}&pageSize={pageSize}&startIndex={startIndex}&includeInactive={includeInactive}&responseFields={responseFields}"
    },
    "createDocument": {
      "method": "POST",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documents?responseFields={responseFields}"
    },
    "updateDocumentContent": {
      "method": "PUT",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documents/{documentId}/content"
    },
    "updateDocument": {
      "method": "PUT",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documents/{documentId}?responseFields={responseFields}"
    },
    "patchDocument": {
      "method": "PATCH",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documents/{documentId}?responseFields={responseFields}"
    },
    "deleteDocument": {
      "method": "DELETE",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documents/{documentId}"
    },
    "deleteDocumentContent": {
      "method": "DELETE",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documents/{documentId}/content"
    }
  },
  "content_documentlists_documentTree": {
    "getTreeDocumentContent": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documentTree/{documentName}/content"
    },
    "transformTreeDocumentContent": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documentTree/{documentName}/transform?width={width}&height={height}&maxWidth={maxWidth}&maxHeight={maxHeight}&crop={crop}&quality={quality}"
    },
    "getTreeDocument": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documentTree/{documentName}?includeInactive={includeInactive}&responseFields={responseFields}"
    },
    "updateTreeDocumentContent": {
      "method": "PUT",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documentTree/{documentName}/content?folderPath={folderPath}&folderId={folderId}"
    },
    "deleteTreeDocumentContent": {
      "method": "DELETE",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/documentTree/{documentName}/content?folderPath={folderPath}&folderId={folderId}"
    }
  },
  "content_documentlists_facet": {
    "getFacets": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/facets/{propertyName}"
    }
  },
  "content_documentlists_view": {
    "getViewDocuments": {
      "method": "GET",
      "url": "{+tenantPod}api/content/documentlists/{documentListName}/views/{viewName}/documents?filter={filter}&sortBy={sortBy}&pageSize={pageSize}&startIndex={startIndex}&includeInactive={includeInactive}&responseFields={responseFields}"
    }
  },
  "content_propertyType": {
    "getPropertyTypes": {
      "method": "GET",
      "url": "{+tenantPod}api/content/propertytypes/?pageSize={pageSize}&startIndex={startIndex}&responseFields={responseFields}"
    },
    "getPropertyType": {
      "method": "GET",
      "url": "{+tenantPod}api/content/propertytypes/{propertyTypeName}?responseFields={responseFields}"
    },
    "createPropertyType": {
      "method": "POST",
      "url": "{+tenantPod}api/content/propertytypes/?responseFields={responseFields}"
    },
    "updatePropertyType": {
      "method": "PUT",
      "url": "{+tenantPod}api/content/propertytypes/{propertyTypeName}?responseFields={responseFields}"
    },
    "deletePropertyType": {
      "method": "DELETE",
      "url": "{+tenantPod}api/content/propertytypes/{propertyTypeName}"
    }
  },
  "content_publishSetSummary": {
    "getPublishSets": {
      "method": "GET",
      "url": "{+tenantPod}api/content/publishsets/?pageSize={pageSize}&startIndex={startIndex}&responseFields={responseFields}"
    },
    "getPublishSetItems": {
      "method": "GET",
      "url": "{+tenantPod}api/content/publishsets/{code}/items?pageSize={pageSize}&startIndex={startIndex}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "deletePublishSet": {
      "method": "POST",
      "url": "{+tenantPod}api/content/publishsets/{code}?shouldDiscard={shouldDiscard}&responseFields={responseFields}"
    },
    "addPublishSetItems": {
      "method": "PUT",
      "url": "{+tenantPod}api/content/publishsets/{code}/items?responseFields={responseFields}"
    }
  },
  "event_eventNotification": {
    "getEvents": {
      "method": "GET",
      "url": "{+homePod}api/event/pull/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getEvent": {
      "method": "GET",
      "url": "{+homePod}api/event/pull/{eventId}?responseFields={responseFields}"
    }
  },
  "event_push_subscription": {
    "getSubscriptions": {
      "method": "GET",
      "url": "{+tenantPod}api/event/push/subscriptions/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    }
  },
  "event_push_subscriptions_eventDeliverySummary": {
    "getDeliveryAttemptSummary": {
      "method": "GET",
      "url": "{+tenantPod}api/event/push/subscriptions/{subscriptionId}/deliveryattempts/{id}?responseFields={responseFields}"
    },
    "getDeliveryAttemptSummaries": {
      "method": "GET",
      "url": "{+tenantPod}api/event/push/subscriptions/{subscriptionId}/deliveryattempts?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    }
  },
  "platform_adminuser_tenantAdminUserAuthTicket": {
    "createUserAuthTicket": {
      "method": "POST",
      "url": "{+homePod}api/platform/adminuser/authtickets/tenants?tenantId={tenantId}&responseFields={responseFields}"
    },
    "refreshAuthTicket": {
      "method": "PUT",
      "url": "{+homePod}api/platform/adminuser/authtickets/tenants?tenantId={tenantId}&responseFields={responseFields}"
    },
    "deleteUserAuthTicket": {
      "method": "DELETE",
      "url": "{+homePod}api/platform/adminuser/authtickets/?refreshToken={refreshToken}"
    }
  },
  "platform_appdev_appPackage": {
    "getAllPackages": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/appdev/apppackages/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getPackage": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/appdev/apppackages/{applicationKey}/?includeChildren={includeChildren}&skipDevAccountCheck={skipDevAccountCheck}&responseFields={responseFields}"
    },
    "getPackages": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/appdev/apppackages/applications/{applicationKey}/packages/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "getApplicationSummaryChildren": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/appdev/apppackages/apps/{appId}/"
    },
    "getApplicationSummaryParents": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/appdev/apppackages/collection/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}"
    },
    "clonePackage": {
      "method": "POST",
      "url": "{+tenantPod}api/platform/appdev/apppackages/{applicationKey}/clone/{packageName}?responseFields={responseFields}"
    },
    "createNewCorePackage": {
      "method": "POST",
      "url": "{+tenantPod}api/platform/appdev/apppackages/create?responseFields={responseFields}"
    },
    "createPackage": {
      "method": "POST",
      "url": "{+tenantPod}api/platform/appdev/apppackages/project/?projectId={projectId}&responseFields={responseFields}"
    },
    "updatePackage": {
      "method": "PUT",
      "url": "{+tenantPod}api/platform/appdev/apppackages/{applicationKey}/?responseFields={responseFields}"
    },
    "deletePackage": {
      "method": "DELETE",
      "url": "{+tenantPod}api/platform/appdev/apppackages/{applicationKey}/"
    }
  },
  "platform_appdev_package": {
    "getFile": {
      "method": "GET",
      "url": "{+homePod}api/platform/appdev/filebasedpackage/packages/{applicationKey}?fileName={fileName}"
    }
  },
  "platform_application": {
    "getAppPackageNames": {
      "method": "GET",
      "url": "{+homePod}api/platform/developer/applications/{applicationKey}/packagenames?responseFields={responseFields}"
    },
    "getAppVersions": {
      "method": "GET",
      "url": "{+homePod}api/platform/developer/applications/versions/{nsAndAppId}?responseFields={responseFields}"
    },
    "getPackageFileMetadata": {
      "method": "GET",
      "url": "{+homePod}api/platform/developer/packages/{applicationKey}/filemetadata/{filepath}?responseFields={responseFields}"
    },
    "getPackageMetadata": {
      "method": "GET",
      "url": "{+homePod}api/platform/developer/packages/{applicationKey}/metadata?responseFields={responseFields}"
    },
    "upsertPackageFile": {
      "method": "POST",
      "url": "{+homePod}api/platform/developer/packages/{applicationKey}/files/{filepath}?lastModifiedTime={lastModifiedTime}&responseFields={responseFields}"
    },
    "renamePackageFile": {
      "method": "POST",
      "url": "{+homePod}api/platform/developer/packages/{applicationKey}/files_rename?responseFields={responseFields}"
    },
    "deletePackageFile": {
      "method": "DELETE",
      "url": "{+homePod}api/platform/developer/packages/{applicationKey}/files/{filepath}"
    }
  },
  "platform_applications_authTicket": {
    "authenticateApp": {
      "method": "POST",
      "url": "{+homePod}api/platform/applications/authtickets/?responseFields={responseFields}"
    },
    "refreshAppAuthTicket": {
      "method": "PUT",
      "url": "{+homePod}api/platform/applications/authtickets/refresh-ticket?responseFields={responseFields}"
    },
    "deleteAppAuthTicket": {
      "method": "DELETE",
      "url": "{+homePod}api/platform/applications/authtickets/{refreshToken}"
    }
  },
  "platform_developer_developerAdminUserAuthTicket": {
    "createDeveloperUserAuthTicket": {
      "method": "POST",
      "url": "{+homePod}api/platform/developer/authtickets/?developerAccountId={developerAccountId}&responseFields={responseFields}"
    },
    "refreshDeveloperAuthTicket": {
      "method": "PUT",
      "url": "{+homePod}api/platform/developer/authtickets/?developerAccountId={developerAccountId}&responseFields={responseFields}"
    },
    "deleteUserAuthTicket": {
      "method": "DELETE",
      "url": "{+homePod}api/platform/developer/authtickets/?refreshToken={refreshToken}"
    }
  },
  "platform_entityList": {
    "getEntityLists": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/entitylists/?pageSize={pageSize}&startIndex={startIndex}&filter={filter}&sortBy={sortBy}&responseFields={responseFields}"
    },
    "getEntityList": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}?responseFields={responseFields}"
    },
    "createEntityList": {
      "method": "POST",
      "url": "{+tenantPod}api/platform/entitylists/?responseFields={responseFields}"
    },
    "updateEntityList": {
      "method": "PUT",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}?responseFields={responseFields}"
    },
    "deleteEntityList": {
      "method": "DELETE",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}"
    }
  },
  "platform_entitylists_entity": {
    "getEntity": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/entities/{id}?responseFields={responseFields}"
    },
    "getEntities": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/entities?pageSize={pageSize}&startIndex={startIndex}&filter={filter}&sortBy={sortBy}&responseFields={responseFields}"
    },
    "insertEntity": {
      "method": "POST",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/entities/?responseFields={responseFields}"
    },
    "updateEntity": {
      "method": "PUT",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/entities/{id}?responseFields={responseFields}"
    },
    "deleteEntity": {
      "method": "DELETE",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/entities/{id}"
    }
  },
  "platform_entitylists_entityContainer": {
    "getEntityContainer": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/entityContainers/{id}?responseFields={responseFields}"
    },
    "getEntityContainers": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/entityContainers?pageSize={pageSize}&startIndex={startIndex}&filter={filter}&sortBy={sortBy}&responseFields={responseFields}"
    }
  },
  "platform_entitylists_listView": {
    "getViewEntity": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/views/{viewName}/entities/{entityId}?responseFields={responseFields}"
    },
    "getViewEntities": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/views/{viewName}/entities?pageSize={pageSize}&startIndex={startIndex}&filter={filter}&responseFields={responseFields}"
    },
    "getViewEntityContainer": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/views/{viewName}/entityContainers/{entityId}?responseFields={responseFields}"
    },
    "getViewEntityContainers": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/views/{viewName}/entityContainers?pageSize={pageSize}&startIndex={startIndex}&filter={filter}&responseFields={responseFields}"
    },
    "getEntityListView": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/views/{viewName}?responseFields={responseFields}"
    },
    "getEntityListViews": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/views?responseFields={responseFields}"
    },
    "createEntityListView": {
      "method": "POST",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/views/?responseFields={responseFields}"
    },
    "updateEntityListView": {
      "method": "PUT",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/views/{viewName}?responseFields={responseFields}"
    },
    "deleteEntityListView": {
      "method": "DELETE",
      "url": "{+tenantPod}api/platform/entitylists/{entityListFullName}/views/{viewName}"
    }
  },
  "platform_extensions_credentialStoreEntry": {
    "storeCredentials": {
      "method": "POST",
      "url": "{+tenantPod}api/platform/extensions/credentialStore/"
    }
  },
  "platform_installedApplications": {
    "getApplication": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/applications/{appId}?responseFields={responseFields}"
    },
    "updateApplication": {
      "method": "PUT",
      "url": "{+tenantPod}api/platform/applications/{appId}?responseFields={responseFields}"
    }
  },
  "platform_referenceData": {
    "getAddressSchema": {
      "method": "GET",
      "url": "{+homePod}api/platform/reference/addressschema/{countryCode}?responseFields={responseFields}"
    },
    "getAddressSchemas": {
      "method": "GET",
      "url": "{+homePod}api/platform/reference/addressschemas?responseFields={responseFields}"
    },
    "getBehavior": {
      "method": "GET",
      "url": "{+homePod}api/platform/reference/behaviors/{behaviorId}?responseFields={responseFields}"
    },
    "getBehaviorCategory": {
      "method": "GET",
      "url": "{+homePod}api/platform/reference/behaviors/categories/{categoryId}?responseFields={responseFields}"
    },
    "getBehaviorCategories": {
      "method": "GET",
      "url": "{+homePod}api/platform/reference/behaviors/categories?responseFields={responseFields}"
    },
    "getBehaviors": {
      "method": "GET",
      "url": "{+homePod}api/platform/reference/behaviors?userType={userType}&responseFields={responseFields}"
    },
    "getContentLocales": {
      "method": "GET",
      "url": "{+homePod}api/platform/reference/contentLocales?responseFields={responseFields}"
    },
    "getCountries": {
      "method": "GET",
      "url": "{+homePod}api/platform/reference/countries?responseFields={responseFields}"
    },
    "getCountriesWithStates": {
      "method": "GET",
      "url": "{+homePod}api/platform/reference/countrieswithstates?responseFields={responseFields}"
    },
    "getCurrencies": {
      "method": "GET",
      "url": "{+homePod}api/platform/reference/currencies?responseFields={responseFields}"
    },
    "getTimeZones": {
      "method": "GET",
      "url": "{+homePod}api/platform/reference/timezones?responseFields={responseFields}"
    },
    "getTopLevelDomains": {
      "method": "GET",
      "url": "{+homePod}api/platform/reference/topleveldomains?responseFields={responseFields}"
    },
    "getUnitsOfMeasure": {
      "method": "GET",
      "url": "{+homePod}api/platform/reference/unitsofmeasure?filter={filter}&responseFields={responseFields}"
    }
  },
  "platform_secureAppData": {
    "getDBValue": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/secureappdata/{appKeyId}/{dbEntryQuery}?responseFields={responseFields}"
    },
    "createDBValue": {
      "method": "POST",
      "url": "{+tenantPod}api/platform/secureappdata/{appKeyId}/{dbEntryQuery}"
    },
    "updateDBValue": {
      "method": "PUT",
      "url": "{+tenantPod}api/platform/secureappdata/{appKeyId}/{dbEntryQuery}"
    },
    "deleteDBValue": {
      "method": "DELETE",
      "url": "{+tenantPod}api/platform/secureappdata/{appKeyId}/{dbEntryQuery}"
    }
  },
  "platform_siteData": {
    "getDBValue": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/sitedata/{dbEntryQuery}?responseFields={responseFields}"
    },
    "createDBValue": {
      "method": "POST",
      "url": "{+tenantPod}api/platform/sitedata/{dbEntryQuery}"
    },
    "updateDBValue": {
      "method": "PUT",
      "url": "{+tenantPod}api/platform/sitedata/{dbEntryQuery}"
    },
    "deleteDBValue": {
      "method": "DELETE",
      "url": "{+tenantPod}api/platform/sitedata/{dbEntryQuery}"
    }
  },
  "platform_tenant": {
    "getTenant": {
      "method": "GET",
      "url": "{+homePod}api/platform/tenants/{tenantId}?responseFields={responseFields}"
    }
  },
  "platform_tenantData": {
    "getDBValue": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/tenantdata/{dbEntryQuery}?responseFields={responseFields}"
    },
    "createDBValue": {
      "method": "POST",
      "url": "{+tenantPod}api/platform/tenantdata/{dbEntryQuery}"
    },
    "updateDBValue": {
      "method": "PUT",
      "url": "{+tenantPod}api/platform/tenantdata/{dbEntryQuery}"
    },
    "deleteDBValue": {
      "method": "DELETE",
      "url": "{+tenantPod}api/platform/tenantdata/{dbEntryQuery}"
    }
  },
  "platform_tenantExtensions": {
    "getExtensions": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/extensions/?responseFields={responseFields}"
    },
    "updateExtensions": {
      "method": "PUT",
      "url": "{+tenantPod}api/platform/extensions/?responseFields={responseFields}"
    }
  },
  "platform_userData": {
    "getDBValue": {
      "method": "GET",
      "url": "{+tenantPod}api/platform/userdata/{dbEntryQuery}?responseFields={responseFields}"
    },
    "createDBValue": {
      "method": "POST",
      "url": "{+tenantPod}api/platform/userdata/{dbEntryQuery}"
    },
    "updateDBValue": {
      "method": "PUT",
      "url": "{+tenantPod}api/platform/userdata/{dbEntryQuery}"
    },
    "deleteDBValue": {
      "method": "DELETE",
      "url": "{+tenantPod}api/platform/userdata/{dbEntryQuery}"
    }
  }
}