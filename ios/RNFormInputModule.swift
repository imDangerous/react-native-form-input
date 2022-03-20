//
//  RNFormInputModule.swift
//  RNFormInputModule
//
//  Copyright © 2022 imDangerous. All rights reserved.
//

import Foundation

@objc(RNFormInputModule)
class RNFormInputModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
