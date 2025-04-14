"use strict";(self.webpackChunkelite_quiz_docs=self.webpackChunkelite_quiz_docs||[]).push([[5299],{1117:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/addAndroid3-d394672b111606880cfd1217116f0782.webp"},1327:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/createFirebase2-8eb9df9d3d0a34865db62880f9df8790.webp"},1726:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/createFirebase1-4c8d5b74172627fe404a01b7a512b358.webp"},1940:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/addIos6-66fc2dcc147801923e32538625814279.webp"},2244:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"mobile/firebase","title":"Firebase Integration","description":"Elite Quiz uses Firebase for authentication, real-time database operations, and cloud storage. This guide will walk you through integrating Firebase with your app.","source":"@site/docs/mobile/firebase.md","sourceDirName":"mobile","slug":"/mobile/firebase","permalink":"/elite-quiz-docs/docs/mobile/firebase","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"docs","previous":{"title":"App Configuration","permalink":"/elite-quiz-docs/docs/mobile/configuration"},"next":{"title":"App Customization","permalink":"/elite-quiz-docs/docs/mobile/customization"}}');var s=n(4848),o=n(8453);const a={sidebar_position:4},d="Firebase Integration",r={},l=[{value:"Creating a Firebase Project",id:"creating-a-firebase-project",level:2},{value:"Adding Your App to Firebase",id:"adding-your-app-to-firebase",level:2},{value:"Adding Android App",id:"adding-android-app",level:3},{value:"Adding iOS App",id:"adding-ios-app",level:3},{value:"Enabling Firebase Authentication",id:"enabling-firebase-authentication",level:2},{value:"Configuring Google Sign-In",id:"configuring-google-sign-in",level:3},{value:"Configuring Facebook Sign-In",id:"configuring-facebook-sign-in",level:3},{value:"Configuring Phone Authentication",id:"configuring-phone-authentication",level:3},{value:"Setting Up Firebase for Battles",id:"setting-up-firebase-for-battles",level:2},{value:"Connecting to Admin Panel",id:"connecting-to-admin-panel",level:2},{value:"Testing Firebase Integration",id:"testing-firebase-integration",level:2}];function c(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"firebase-integration",children:"Firebase Integration"})}),"\n",(0,s.jsx)(i.p,{children:"Elite Quiz uses Firebase for authentication, real-time database operations, and cloud storage. This guide will walk you through integrating Firebase with your app."}),"\n",(0,s.jsx)(i.h2,{id:"creating-a-firebase-project",children:"Creating a Firebase Project"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Go to the ",(0,s.jsx)(i.a,{href:"https://console.firebase.google.com/",children:"Firebase Console"})]}),"\n",(0,s.jsx)(i.li,{children:'Click on "Add project" and follow the prompts to create a new project'}),"\n",(0,s.jsx)(i.li,{children:"Enter a project name and accept the Firebase terms"}),"\n",(0,s.jsx)(i.li,{children:"Choose whether to enable Google Analytics (recommended)"}),"\n",(0,s.jsx)(i.li,{children:"Complete the project setup"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Create Firebase 1",src:n(1726).A+"",width:"3058",height:"1452"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Create Firebase 2",src:n(1327).A+"",width:"3058",height:"1584"})}),"\n",(0,s.jsx)(i.p,{children:"After creating the project, you'll be taken to the Firebase project dashboard:"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Create Firebase 3",src:n(3084).A+"",width:"1300",height:"553"})}),"\n",(0,s.jsx)(i.h2,{id:"adding-your-app-to-firebase",children:"Adding Your App to Firebase"}),"\n",(0,s.jsx)(i.h3,{id:"adding-android-app",children:"Adding Android App"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"In the Firebase console, click on the Android icon to add an Android app"}),"\n",(0,s.jsx)(i.li,{children:"Enter your app's package name (the one you configured in the previous section)"}),"\n",(0,s.jsx)(i.li,{children:"Enter an app nickname (optional)"}),"\n",(0,s.jsx)(i.li,{children:"Enter your app's SHA-1 signing certificate (for Google Sign-In to work properly)"}),"\n",(0,s.jsx)(i.li,{children:'Click "Register app"'}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add Android",src:n(6696).A+"",width:"2948",height:"1512"})}),"\n",(0,s.jsxs)(i.ol,{start:"6",children:["\n",(0,s.jsxs)(i.li,{children:["Download the ",(0,s.jsx)(i.code,{children:"google-services.json"})," file"]}),"\n",(0,s.jsx)(i.li,{children:'Click "Next" and follow the remaining setup instructions'}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add Android 2",src:n(5554).A+"",width:"2732",height:"1738"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add Android 3",src:n(1117).A+"",width:"2732",height:"1738"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add Android 4",src:n(8748).A+"",width:"2732",height:"1738"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add Android 5",src:n(6991).A+"",width:"2732",height:"1738"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add Android 6",src:n(7390).A+"",width:"2732",height:"1738"})}),"\n",(0,s.jsxs)(i.ol,{start:"8",children:["\n",(0,s.jsxs)(i.li,{children:["Place the ",(0,s.jsx)(i.code,{children:"google-services.json"})," file in the ",(0,s.jsx)(i.code,{children:"android/app"})," directory of your Flutter project"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"adding-ios-app",children:"Adding iOS App"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"In the Firebase console, click on the iOS icon to add an iOS app"}),"\n",(0,s.jsxs)(i.li,{children:["Enter your app's Bundle ID (found in the ",(0,s.jsx)(i.code,{children:"ios/Runner.xcodeproj/project.pbxproj"})," file)"]}),"\n",(0,s.jsx)(i.li,{children:"Enter an app nickname (optional)"}),"\n",(0,s.jsx)(i.li,{children:"Enter your App Store ID (optional)"}),"\n",(0,s.jsx)(i.li,{children:'Click "Register app"'}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add iOS",src:n(9190).A+"",width:"2948",height:"1512"})}),"\n",(0,s.jsxs)(i.ol,{start:"6",children:["\n",(0,s.jsxs)(i.li,{children:["Download the ",(0,s.jsx)(i.code,{children:"GoogleService-Info.plist"})," file"]}),"\n",(0,s.jsx)(i.li,{children:'Click "Next" and follow the remaining setup instructions'}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add iOS 2",src:n(7512).A+"",width:"2732",height:"1680"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add iOS 3",src:n(4891).A+"",width:"2732",height:"1742"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add iOS 4",src:n(4102).A+"",width:"2732",height:"1738"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add iOS 5",src:n(9425).A+"",width:"2732",height:"1738"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add iOS 6",src:n(1940).A+"",width:"1300",height:"668"})}),"\n",(0,s.jsxs)(i.ol,{start:"8",children:["\n",(0,s.jsxs)(i.li,{children:["Place the ",(0,s.jsx)(i.code,{children:"GoogleService-Info.plist"})," file in the ",(0,s.jsx)(i.code,{children:"ios/Runner"})," directory of your Flutter project"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"enabling-firebase-authentication",children:"Enabling Firebase Authentication"}),"\n",(0,s.jsx)(i.p,{children:"Elite Quiz supports multiple authentication methods. Here's how to enable them:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"In the Firebase console, go to Authentication > Sign-in method"}),"\n",(0,s.jsxs)(i.li,{children:["Enable the authentication methods you want to use:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Email/Password"}),"\n",(0,s.jsx)(i.li,{children:"Google"}),"\n",(0,s.jsx)(i.li,{children:"Facebook"}),"\n",(0,s.jsx)(i.li,{children:"Phone"}),"\n",(0,s.jsx)(i.li,{children:"Apple (for iOS)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Add Firebase Auth",src:n(6762).A+"",width:"2760",height:"1084"})}),"\n",(0,s.jsx)(i.h3,{id:"configuring-google-sign-in",children:"Configuring Google Sign-In"}),"\n",(0,s.jsx)(i.p,{children:"Google Sign-In is enabled by default when you add Firebase Authentication. Make sure you've added your SHA-1 fingerprint to your Firebase project."}),"\n",(0,s.jsx)(i.h3,{id:"configuring-facebook-sign-in",children:"Configuring Facebook Sign-In"}),"\n",(0,s.jsx)(i.p,{children:"To enable Facebook authentication:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Create a Facebook Developer account and app at ",(0,s.jsx)(i.a,{href:"https://developers.facebook.com/",children:"developers.facebook.com"})]}),"\n",(0,s.jsx)(i.li,{children:"Configure your Facebook app for authentication"}),"\n",(0,s.jsx)(i.li,{children:"Add the Facebook App ID and App Secret to Firebase Authentication"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Auth 1",src:n(3798).A+"",width:"2884",height:"1802"})}),"\n",(0,s.jsx)(i.h3,{id:"configuring-phone-authentication",children:"Configuring Phone Authentication"}),"\n",(0,s.jsx)(i.p,{children:"To enable Phone authentication:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"In the Firebase console, go to Authentication > Sign-in method"}),"\n",(0,s.jsx)(i.li,{children:"Enable Phone authentication"}),"\n",(0,s.jsx)(i.li,{children:"Add your test phone numbers if using in development"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"Auth 2",src:n(5623).A+"",width:"1848",height:"949"})}),"\n",(0,s.jsx)(i.h2,{id:"setting-up-firebase-for-battles",children:"Setting Up Firebase for Battles"}),"\n",(0,s.jsx)(i.p,{children:"Elite Quiz uses Firebase Realtime Database for real-time battle functionality. To set this up:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"In the Firebase console, go to Realtime Database"}),"\n",(0,s.jsx)(i.li,{children:'Click "Create Database"'}),"\n",(0,s.jsx)(i.li,{children:"Choose a location (preferably close to your target audience)"}),"\n",(0,s.jsx)(i.li,{children:"Start in test mode, then adjust security rules later"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"connecting-to-admin-panel",children:"Connecting to Admin Panel"}),"\n",(0,s.jsx)(i.p,{children:"The final step is to connect your app to your Admin Panel:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["Open the file ",(0,s.jsx)(i.code,{children:"lib/utils/constant.dart"})," in your project"]}),"\n",(0,s.jsx)(i.li,{children:"Look for the BASE_URL constant and update it with your Admin Panel URL:"}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-dart",children:'const String BASE_URL = "https://your-admin-panel-url.com/api/";\n'})}),"\n",(0,s.jsx)(i.p,{children:"Make sure to include the trailing slash at the end of the URL."}),"\n",(0,s.jsx)(i.h2,{id:"testing-firebase-integration",children:"Testing Firebase Integration"}),"\n",(0,s.jsx)(i.p,{children:"After completing all the steps above, restart your app and test the following:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"User registration and login"}),"\n",(0,s.jsx)(i.li,{children:"Social authentication methods (Google, Facebook, etc.)"}),"\n",(0,s.jsx)(i.li,{children:"Real-time battle functionality"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"If any issues occur, check the Firebase console logs and your app logs for detailed error messages."})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3084:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/createFirebase3-b8674b0efe241faaa6e0a5aea8520ee2.webp"},3798:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/auth-1-44932bfbb2cc99836a466d446b0d21b8.webp"},4102:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/addIos4-67aed430c95c63285ebff949aaef6609.webp"},4891:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/addIos3-bc4df5a791e19b698bf2d39e73f66143.webp"},5554:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/addAndroid2-56455dda9c3f2763de1c6a1891c378fa.webp"},5623:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/auth-2-1bc47b5a25d1fe57b2fe277f65e9dc4e.webp"},6696:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/addAndroid-f82fc90e079e9dbbb63e61bc6e11de4f.webp"},6762:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/addFirebaseAuth-6e998898ae619d9b83476f3aa0c1c9ed.webp"},6991:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/addAndroid5-edfddc0dfed1af191c2559be37d7997c.webp"},7390:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/addAndroid6-0a2d6137ab6f6b19bdd5389573b749bf.webp"},7512:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/addIos2-abe9409efde212edbbc49ec298acaf89.webp"},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>d});var t=n(6540);const s={},o=t.createContext(s);function a(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:i},e.children)}},8748:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/addAndroid4-639f003275ccd142fc351a3a83ad4c94.webp"},9190:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/addIos-7bdf7f01c25def784a56f0617d8eed7e.webp"},9425:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/addIos5-79b6b9175cc351464a6dd7585ac3bf38.webp"}}]);