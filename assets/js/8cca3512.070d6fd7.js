"use strict";(self.webpackChunkelite_quiz_docs=self.webpackChunkelite_quiz_docs||[]).push([[6857],{6297:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"web/installation","title":"Installation Guide","description":"This guide provides a detailed walkthrough of the installation process for the Elite Quiz web application.","source":"@site/docs/web/installation.md","sourceDirName":"web","slug":"/web/installation","permalink":"/elite_quiz_doc/docs/web/installation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"docs","previous":{"title":"System Languages","permalink":"/elite_quiz_doc/docs/admin/system-language"},"next":{"title":"Setting Up the Web Version","permalink":"/elite_quiz_doc/docs/web/setup"}}');var s=i(4848),l=i(8453);const r={sidebar_position:2},o="Installation Guide",d={},a=[{value:"Installation Video Tutorial",id:"installation-video-tutorial",level:2},{value:"System Requirements",id:"system-requirements",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"1. Extract the Project Files",id:"1-extract-the-project-files",level:3},{value:"2. Open the Project",id:"2-open-the-project",level:3},{value:"3. Install Dependencies",id:"3-install-dependencies",level:3},{value:"4. Configure Environment Variables",id:"4-configure-environment-variables",level:3},{value:"5. Start the Development Server",id:"5-start-the-development-server",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"installation-guide",children:"Installation Guide"})}),"\n",(0,s.jsx)(n.p,{children:"This guide provides a detailed walkthrough of the installation process for the Elite Quiz web application."}),"\n",(0,s.jsx)(n.h2,{id:"installation-video-tutorial",children:"Installation Video Tutorial"}),"\n",(0,s.jsx)(n.p,{children:"To help you get started quickly, we have created a video tutorial that guides you through the installation and setup process:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=adrnST-IrgU",children:"Firebase Configuration Video Tutorial"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,s.jsx)(n.p,{children:"Before proceeding with the installation, make sure your system meets the following requirements:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Node.js"}),": Version 18 or later"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/en/download",children:"Download Node.js"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.wrteam.in/blog/step-by-step-guide-to-install-nodejs-on-windows-mac/",children:"Step-by-step guide to install Node.js"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"npm"}),": Usually comes bundled with Node.js"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Modern web browser"}),": Chrome, Firefox, Safari, or Edge"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Code editor"}),": Visual Studio Code (recommended)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,s.jsx)(n.h3,{id:"1-extract-the-project-files",children:"1. Extract the Project Files"}),"\n",(0,s.jsx)(n.p,{children:'Unzip the downloaded code package. This will create an "Elite Quiz - Web Code" folder.'}),"\n",(0,s.jsx)(n.h3,{id:"2-open-the-project",children:"2. Open the Project"}),"\n",(0,s.jsx)(n.p,{children:"Launch Visual Studio Code (or your preferred code editor) and open the project folder."}),"\n",(0,s.jsx)(n.h3,{id:"3-install-dependencies",children:"3. Install Dependencies"}),"\n",(0,s.jsx)(n.p,{children:"Open the terminal in VS Code by pressing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CTRL+J"})," on Windows/Linux"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CMD+J"})," on MacOS"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Then run the following command to install all required dependencies:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm i\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will take some time to download and install all necessary packages. Please be patient during this process."}),"\n",(0,s.jsx)(n.h3,{id:"4-configure-environment-variables",children:"4. Configure Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["Open the ",(0,s.jsx)(n.code,{children:".env"})," file in the root directory of your project and set the following variables:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Set your admin panel URL"}),"\n",(0,s.jsx)(n.li,{children:"Set your web app URL"}),"\n",(0,s.jsx)(n.li,{children:"Configure SEO meta tags (title, description, keywords)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"NEXT_PUBLIC_ADMIN_URL=https://admin.yourdomain.com\nNEXT_PUBLIC_WEB_APP_URL=https://yourdomain.com\n"})}),"\n",(0,s.jsx)(n.h3,{id:"5-start-the-development-server",children:"5. Start the Development Server"}),"\n",(0,s.jsx)(n.p,{children:"Once all dependencies are installed, you can start the development server by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will launch the development server, and your application should be accessible at ",(0,s.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.p,{children:"If you encounter any issues during the installation:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Make sure you have the correct version of Node.js installed"}),"\n",(0,s.jsxs)(n.li,{children:["Check that all environment variables are correctly set in the ",(0,s.jsx)(n.code,{children:".env"})," file"]}),"\n",(0,s.jsxs)(n.li,{children:["Try deleting the ",(0,s.jsx)(n.code,{children:"node_modules"})," folder and running ",(0,s.jsx)(n.code,{children:"npm i"})," again"]}),"\n",(0,s.jsx)(n.li,{children:"Check your console for specific error messages"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(n.p,{children:"After completing the installation, you'll need to:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/elite_quiz_doc/docs/web/api-url",children:"Configure API URL"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/elite_quiz_doc/docs/web/firebase-integration",children:"Integrate Firebase"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/elite_quiz_doc/docs/web/firebase-auth",children:"Enable Firebase Authentication"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/elite_quiz_doc/docs/web/cloud-firestore",children:"Set up Cloud Firestore"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/elite_quiz_doc/docs/web/app-customization",children:"Customize your application"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(6540);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);