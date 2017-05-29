//
// Name.swift
//
// Generated by swagger-codegen
// https://github.com/swagger-api/swagger-codegen
//

import Foundation


/** Model for testing model name same as property name */
open class Name: JSONEncodable {

    public var name: Int32?
    public var snakeCase: Int32?
    public var property: String?
    public var _123Number: Int32?

    public init() {}

    // MARK: JSONEncodable
    open func encodeToJSON() -> Any {
        var nillableDictionary = [String:Any?]()
        nillableDictionary["name"] = self.name?.encodeToJSON()
        nillableDictionary["snake_case"] = self.snakeCase?.encodeToJSON()
        nillableDictionary["property"] = self.property
        nillableDictionary["123Number"] = self._123Number?.encodeToJSON()

        let dictionary: [String:Any] = APIHelper.rejectNil(nillableDictionary) ?? [:]
        return dictionary
    }
}
