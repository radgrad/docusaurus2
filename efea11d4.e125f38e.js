(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{327:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return d})),t.d(a,"metadata",(function(){return i})),t.d(a,"rightToc",(function(){return s})),t.d(a,"default",(function(){return c}));var n=t(2),r=t(6),o=(t(0),t(345)),d={title:"Reset the database"},i={unversionedId:"developers/deployment/howto/reset-db",id:"developers/deployment/howto/reset-db",isDocsHomePage:!1,title:"Reset the database",description:"It is often useful to restart RadGrad with a new database. This involves:",source:"@site/docs/developers/deployment/howto/reset-db.md",slug:"/developers/deployment/howto/reset-db",permalink:"/docs/developers/deployment/howto/reset-db",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1620171066,sidebar:"mainSidebar",previous:{title:"Publish a new release of RadGrad",permalink:"/docs/developers/deployment/howto/publish-a-release-mup"},next:{title:"Update to a new major release of Mongo",permalink:"/docs/developers/deployment/howto/update-mongo-mup"}},s=[{value:"1. Stop RadGrad",id:"1-stop-radgrad",children:[]},{value:"2. Make backup of current database",id:"2-make-backup-of-current-database",children:[]},{value:"3. Drop database",id:"3-drop-database",children:[]},{value:"4. Edit settings",id:"4-edit-settings",children:[]},{value:"5. Deploy with updated settings",id:"5-deploy-with-updated-settings",children:[]},{value:"6. Check status of deployment through logs",id:"6-check-status-of-deployment-through-logs",children:[]},{value:"7. Run mup logs, record new admin password!",id:"7-run-mup-logs-record-new-admin-password",children:[]}],p={rightToc:s};function c(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It is often useful to restart RadGrad with a new database. This involves:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Stopping the current RadGrad service."),Object(o.b)("li",{parentName:"ol"},"Dropping the MongoDB RadGrad database."),Object(o.b)("li",{parentName:"ol"},"Edit the settings.json file to point to the new database to load on startup."),Object(o.b)("li",{parentName:"ol"},"Update the settings in mup and restart the RadGrad service.")),Object(o.b)("h2",{id:"1-stop-radgrad"},"1. Stop RadGrad"),Object(o.b)("p",null,"First, stop the RadGrad service:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"mup stop\n")),Object(o.b)("p",null,"Sample invocation and results:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"app/.deploy $ mup stop\n\nStarted TaskList: Stop Meteor\n[radgrad2.ics.hawaii.edu] - Stop Meteor\n[radgrad2.ics.hawaii.edu] - Stop Meteor: SUCCESS\n")),Object(o.b)("h2",{id:"2-make-backup-of-current-database"},"2. Make backup of current database"),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"The following command, although taken straight from the meteor up documentation (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://meteor-up.com/docs.html#backup-and-restore"}),"http://meteor-up.com/docs.html#backup-and-restore"),"), did not work for me:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'ssh root@host "docker exec mongodb mongodump -d meteor --archive --gzip" > dump.gz\n')),Object(o.b)("p",{parentName:"div"},'Where "root@host" is replaced by the one appropriate for your instance, such as "',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:radgrad@radgrad2.ics.hawaii.edu"}),"radgrad@radgrad2.ics.hawaii.edu"),'" or "',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:root@radgrad-comp-eng.design"}),"root@radgrad-comp-eng.design"),'".'))),Object(o.b)("p",null,'So, to make a backup, you should login as an administration and use the "dump database" option.'),Object(o.b)("h2",{id:"3-drop-database"},"3. Drop database"),Object(o.b)("p",null,"Next, drop the database by invoking this command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"ssh radgrad@radgrad2.ics.hawaii.edu 'docker exec mongodb mongo radgrad --eval \"db.dropDatabase();\"'\n")),Object(o.b)("p",null,"If you are not deploying the ICS instance of RadGrad, then you need to substitute a different user for ",Object(o.b)("inlineCode",{parentName:"p"},"radgrad@radgrad2.ics.hawaii.edu")," in the above command."),Object(o.b)("p",null,"For example, in the case of the Computer Engineering instance, the user is ",Object(o.b)("inlineCode",{parentName:"p"},"root@radgrad-comp-eng.design"),"."),Object(o.b)("p",null,"In either case, you will be prompted for the associated password in order to complete the ssh login process and execute the drop database command."),Object(o.b)("p",null,"Sample invocation and results:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),'app/.deploy $ ssh radgrad@radgrad2.ics.hawaii.edu \'docker exec mongodb mongo radgrad --eval "db.dropDatabase();"\'\nMongoDB shell version v3.4.1\nconnecting to: mongodb://127.0.0.1:27017/radgrad\nMongoDB server version: 3.4.1\n{ "dropped" : "radgrad", "ok" : 1 }\n')),Object(o.b)("h2",{id:"4-edit-settings"},"4. Edit settings"),Object(o.b)("p",null,"Presumably you are dropping the current database in order to load a new snapshot of the database."),Object(o.b)("p",null,"To do this, edit the app/.deploy/settings.json file to specify the new database."),Object(o.b)("p",null,'This usually involves changing the value of the field "databaseRestoreFileName".'),Object(o.b)("h2",{id:"5-deploy-with-updated-settings"},"5. Deploy with updated settings"),Object(o.b)("p",null,"Next, invoke mup deploy to rebuild and redeploy RadGrad."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"mup deploy\n")),Object(o.b)("p",null,"Sample invocation and results:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"app/.deploy $ $ mup deploy\nBuilding App Bundle Locally\n\nStarted TaskList: Pushing Meteor App\n[radgrad2.ics.hawaii.edu] - Pushing Meteor App Bundle to the Server\n[radgrad2.ics.hawaii.edu] - Pushing Meteor App Bundle to the Server: SUCCESS\n[radgrad2.ics.hawaii.edu] - Prepare Bundle\n[radgrad2.ics.hawaii.edu] - Prepare Bundle: SUCCESS\n\nStarted TaskList: Configuring App\n[radgrad2.ics.hawaii.edu] - Pushing the Startup Script\n[radgrad2.ics.hawaii.edu] - Pushing the Startup Script: SUCCESS\n[radgrad2.ics.hawaii.edu] - Sending Environment Variables\n[radgrad2.ics.hawaii.edu] - Sending Environment Variables: SUCCESS\n\nStarted TaskList: Start Meteor\n[radgrad2.ics.hawaii.edu] - Start Meteor\n[radgrad2.ics.hawaii.edu] - Start Meteor: SUCCESS\n[radgrad2.ics.hawaii.edu] - Verifying Deployment\n[radgrad2.ics.hawaii.edu] - Verifying Deployment: SUCCESS\n\napp/.deploy $\n")),Object(o.b)("h2",{id:"6-check-status-of-deployment-through-logs"},"6. Check status of deployment through logs"),Object(o.b)("p",null,"To ensure that what you wanted to have happen actually happened, check the logs with mup logs:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"mup logs\n")),Object(o.b)("p",null,"Sample invocation and results:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"mup logs\n[radgrad2.ics.hawaii.edu]=> Starting meteor app on port:3000\n[radgrad2.ics.hawaii.edu]Monti APM: completed instrumenting the app\n[radgrad2.ics.hawaii.edu]Beginning startup.\n[radgrad2.ics.hawaii.edu]Invoking defineAdminUser\n[radgrad2.ics.hawaii.edu]Defining admin radgrad@hawaii.edu with password JZiOl550tBtMuHz0UzNGZEC\n[radgrad2.ics.hawaii.edu]Invoking loadDatabase\n[radgrad2.ics.hawaii.edu]Monti APM: Successfully connected\n")),Object(o.b)("h2",{id:"7-run-mup-logs-record-new-admin-password"},"7. Run mup logs, record new admin password!"),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Record new admin password!")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note that when you start up the system with a new database, a new admin password will be generated and the log file will be the only place it is made available.  The log is only available until the next deploy of the system, so be sure to invoke ",Object(o.b)("inlineCode",{parentName:"p"},"mup logs"),", find the log message with the new admin password, and record it someplace safe."))))}c.isMDXComponent=!0},345:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),c=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},l=function(e){var a=c(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(t),u=n,m=l["".concat(d,".").concat(u)]||l[u]||b[u]||o;return t?r.a.createElement(m,i(i({ref:a},p),{},{components:t})):r.a.createElement(m,i({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,d=new Array(o);d[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,d[1]=i;for(var p=2;p<o;p++)d[p]=t[p];return r.a.createElement.apply(null,d)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);