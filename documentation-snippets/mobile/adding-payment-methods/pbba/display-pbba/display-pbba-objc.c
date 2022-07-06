//In the info.plist of app and LSApplicationQueriesSchemes add the URL scheme of the merchant(CFBundleURLSchemes):
<key>CFBundleURLTypes</key>
    <array>
        <dict>
            <key>CFBundleTypeRole</key>
            <string>Editor</string>
            <key>CFBundleURLSchemes</key>
            <array>
                <string>judo</string>
            </array>
        </dict>
    </array>
    <key>LSApplicationQueriesSchemes</key>
    <array>
        <string>zapp</string>
    </array>
    
  //Add deeplink to the pbbaConfiguration object:
  self.pbbaConfig = [JPPBBAConfiguration new];
  self.pbbaConfig.deeplinkScheme = @"judo://pay";