/**
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/OuterBoolean', 'model/OuterNumber', 'model/OuterString'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OuterBoolean'), require('./OuterNumber'), require('./OuterString'));
  } else {
    // Browser globals (root is window)
    if (!root.SwaggerPetstore) {
      root.SwaggerPetstore = {};
    }
    root.SwaggerPetstore.OuterComposite = factory(root.SwaggerPetstore.ApiClient, root.SwaggerPetstore.OuterBoolean, root.SwaggerPetstore.OuterNumber, root.SwaggerPetstore.OuterString);
  }
}(this, function(ApiClient, OuterBoolean, OuterNumber, OuterString) {
  'use strict';




  /**
   * The OuterComposite model module.
   * @module model/OuterComposite
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OuterComposite</code>.
   * @alias module:model/OuterComposite
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>OuterComposite</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OuterComposite} obj Optional instance to populate.
   * @return {module:model/OuterComposite} The populated <code>OuterComposite</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('my_number')) {
        obj['my_number'] = OuterNumber.constructFromObject(data['my_number']);
      }
      if (data.hasOwnProperty('my_string')) {
        obj['my_string'] = OuterString.constructFromObject(data['my_string']);
      }
      if (data.hasOwnProperty('my_boolean')) {
        obj['my_boolean'] = OuterBoolean.constructFromObject(data['my_boolean']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OuterNumber} my_number
   */
  exports.prototype['my_number'] = undefined;
  /**
   * @member {module:model/OuterString} my_string
   */
  exports.prototype['my_string'] = undefined;
  /**
   * @member {module:model/OuterBoolean} my_boolean
   */
  exports.prototype['my_boolean'] = undefined;



  return exports;
}));


