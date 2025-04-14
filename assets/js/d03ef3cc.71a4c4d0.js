"use strict";(self.webpackChunkelite_quiz_docs=self.webpackChunkelite_quiz_docs||[]).push([[8176],{857:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/force-update-25f8ec689313d2f432253fa4a2778a09.webp"},2826:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/force-update-2-aad652f2e99801d55bd1a15137a4b2fc.webp"},3012:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/force-update-4-7912aa8daf253043603a85d3bd5d2c34.webp"},6481:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/keystore_properties-75817de517870161804c34823616a80c.png"},6997:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/force-update-3-c0164357bd024f1cd171d82a569721e3.webp"},7386:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"mobile/deployment","title":"App Deployment","description":"Once you\'ve customized and tested your Elite Quiz app, the final step is to prepare it for deployment to app stores.","source":"@site/docs/mobile/deployment.md","sourceDirName":"mobile","slug":"/mobile/deployment","permalink":"/elite_quiz_doc/docs/mobile/deployment","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"docs","previous":{"title":"App Monetization","permalink":"/elite_quiz_doc/docs/mobile/monetization"},"next":{"title":"Frequently Asked Questions","permalink":"/elite_quiz_doc/docs/mobile/faq"}}');var r=i(4848),l=i(8453);const o={sidebar_position:7},t="App Deployment",d={},a=[{value:"Generating a Release Version",id:"generating-a-release-version",level:2},{value:"Android Release",id:"android-release",level:3},{value:"iOS Release",id:"ios-release",level:3},{value:"Configuring Force Update",id:"configuring-force-update",level:2},{value:"Publishing to App Stores",id:"publishing-to-app-stores",level:2},{value:"Google Play Store",id:"google-play-store",level:3},{value:"Apple App Store",id:"apple-app-store",level:3},{value:"Post-Launch Considerations",id:"post-launch-considerations",level:2},{value:"App Analytics",id:"app-analytics",level:3},{value:"Updating Your App",id:"updating-your-app",level:3},{value:"App Store Optimization",id:"app-store-optimization",level:3},{value:"Troubleshooting Deployment Issues",id:"troubleshooting-deployment-issues",level:2},{value:"Common Issues:",id:"common-issues",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"app-deployment",children:"App Deployment"})}),"\n",(0,r.jsx)(n.p,{children:"Once you've customized and tested your Elite Quiz app, the final step is to prepare it for deployment to app stores."}),"\n",(0,r.jsx)(n.h2,{id:"generating-a-release-version",children:"Generating a Release Version"}),"\n",(0,r.jsx)(n.h3,{id:"android-release",children:"Android Release"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Create a Keystore File"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Create key.properties File"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a file named ",(0,r.jsx)(n.code,{children:"key.properties"})," in the ",(0,r.jsx)(n.code,{children:"android/"})," directory"]}),"\n",(0,r.jsx)(n.li,{children:"Add the following content (replace with your keystore details):"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-properties",children:"storePassword=your_keystore_password\nkeyPassword=your_key_password\nkeyAlias=key\nstoreFile=path_to_your_keystore_file\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Keystore Properties",src:i(6481).A+"",width:"1604",height:"744"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Configure Gradle for Release"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"android/app/build.gradle"})," file is already configured to use the keystore for release builds"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Build Release APK"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"flutter build apk --release\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or to build a bundle for Google Play:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"flutter build appbundle --release\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Android Build Mode",src:i(8843).A+"",width:"2248",height:"1058"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ios-release",children:"iOS Release"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Configure Xcode Project"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Open the ",(0,r.jsx)(n.code,{children:"ios/Runner.xcworkspace"})," file in Xcode"]}),"\n",(0,r.jsx)(n.li,{children:"Configure signing with your Apple Developer account"}),"\n",(0,r.jsx)(n.li,{children:"Set the bundle identifier to match your registered App ID"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Set up Archive Configuration"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Select "Generic iOS Device" as the build target'}),"\n",(0,r.jsx)(n.li,{children:"Go to Product > Archive"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Build IPA File"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"After archiving, the Xcode Organizer will open"}),"\n",(0,r.jsx)(n.li,{children:'Click "Distribute App" and follow the steps for App Store distribution'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-force-update",children:"Configuring Force Update"}),"\n",(0,r.jsx)(n.p,{children:"Elite Quiz includes a force update mechanism to ensure users always have the latest version:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"In your Admin Panel, go to System Settings"}),"\n",(0,r.jsx)(n.li,{children:"Find the Force Update section"}),"\n",(0,r.jsx)(n.li,{children:"Enable Force Update"}),"\n",(0,r.jsx)(n.li,{children:"Set the minimum required versions for Android and iOS"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"When users have an older version than the specified minimum, they'll see a force update dialog prompting them to update the app."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Force Update",src:i(857).A+"",width:"3840",height:"922"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Force Update 2",src:i(2826).A+"",width:"1848",height:"1016"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Force Update 3",src:i(6997).A+"",width:"3840",height:"1682"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Force Update 4",src:i(3012).A+"",width:"3812",height:"1082"})}),"\n",(0,r.jsx)(n.h2,{id:"publishing-to-app-stores",children:"Publishing to App Stores"}),"\n",(0,r.jsx)(n.h3,{id:"google-play-store",children:"Google Play Store"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a developer account at ",(0,r.jsx)(n.a,{href:"https://play.google.com/apps/publish",children:"play.google.com/apps/publish"})]}),"\n",(0,r.jsx)(n.li,{children:"Create a new application"}),"\n",(0,r.jsxs)(n.li,{children:["Fill in all the required information:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"App description"}),"\n",(0,r.jsx)(n.li,{children:"Graphics (icon, feature graphic, screenshots)"}),"\n",(0,r.jsx)(n.li,{children:"Categorization"}),"\n",(0,r.jsx)(n.li,{children:"Content rating"}),"\n",(0,r.jsx)(n.li,{children:"Pricing & distribution"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Upload your APK or App Bundle"}),"\n",(0,r.jsx)(n.li,{children:"Submit for review"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"apple-app-store",children:"Apple App Store"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Create a developer account at ",(0,r.jsx)(n.a,{href:"https://developer.apple.com",children:"developer.apple.com"})]}),"\n",(0,r.jsxs)(n.li,{children:["Go to ",(0,r.jsx)(n.a,{href:"https://appstoreconnect.apple.com",children:"App Store Connect"})]}),"\n",(0,r.jsx)(n.li,{children:"Create a new iOS app"}),"\n",(0,r.jsxs)(n.li,{children:["Fill in all the required information:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"App description"}),"\n",(0,r.jsx)(n.li,{children:"Screenshots"}),"\n",(0,r.jsx)(n.li,{children:"Keywords"}),"\n",(0,r.jsx)(n.li,{children:"Support URL"}),"\n",(0,r.jsx)(n.li,{children:"Marketing URL"}),"\n",(0,r.jsx)(n.li,{children:"Privacy Policy URL"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Upload your build through Xcode or Transporter"}),"\n",(0,r.jsx)(n.li,{children:"Submit for review"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"post-launch-considerations",children:"Post-Launch Considerations"}),"\n",(0,r.jsx)(n.h3,{id:"app-analytics",children:"App Analytics"}),"\n",(0,r.jsx)(n.p,{children:"Elite Quiz includes Firebase Analytics by default. To access analytics:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to the ",(0,r.jsx)(n.a,{href:"https://console.firebase.google.com/",children:"Firebase Console"})]}),"\n",(0,r.jsx)(n.li,{children:"Select your project"}),"\n",(0,r.jsx)(n.li,{children:"Go to Analytics"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"updating-your-app",children:"Updating Your App"}),"\n",(0,r.jsx)(n.p,{children:"When you need to update your app:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Make your code changes"}),"\n",(0,r.jsxs)(n.li,{children:["Increment the version number in ",(0,r.jsx)(n.code,{children:"pubspec.yaml"})]}),"\n",(0,r.jsx)(n.li,{children:"Generate new release builds"}),"\n",(0,r.jsx)(n.li,{children:"Upload to the app stores"}),"\n",(0,r.jsx)(n.li,{children:"Consider using the force update feature for critical updates"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"app-store-optimization",children:"App Store Optimization"}),"\n",(0,r.jsx)(n.p,{children:"To improve your app's visibility:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Use relevant keywords in your app title and description"}),"\n",(0,r.jsx)(n.li,{children:"Create high-quality screenshots and videos"}),"\n",(0,r.jsx)(n.li,{children:"Encourage users to rate and review your app"}),"\n",(0,r.jsx)(n.li,{children:"Respond to user reviews"}),"\n",(0,r.jsx)(n.li,{children:"Update your app regularly"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting-deployment-issues",children:"Troubleshooting Deployment Issues"}),"\n",(0,r.jsx)(n.h3,{id:"common-issues",children:"Common Issues:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Signing Issues"}),": Ensure your keystore is properly configured for Android and your certificates are valid for iOS."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Missing Permissions"}),": Check the ",(0,r.jsx)(n.code,{children:"AndroidManifest.xml"})," and ",(0,r.jsx)(n.code,{children:"Info.plist"})," files for all required permissions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Play Store Rejection"}),": Common reasons include metadata issues, privacy policy concerns, or functionality problems."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"App Store Rejection"}),": Common reasons include UI guideline violations, crash on review, or metadata issues."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"If you encounter any deployment issues, please contact our support team for assistance."})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var s=i(6540);const r={},l=s.createContext(r);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:n},e.children)}},8843:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/android_build_mode-a71558bcaa4a78983f901100b0e5978b.png"}}]);