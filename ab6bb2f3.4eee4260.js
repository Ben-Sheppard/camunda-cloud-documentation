(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{323:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return c}));var r=o(3),n=o(7),a=(o(0),o(450)),i={id:"job-workers",title:"Job workers"},l={unversionedId:"product-manuals/concepts/job-workers",id:"product-manuals/concepts/job-workers",isDocsHomePage:!1,title:"Job workers",description:"A job worker is a service capable of performing a particular task in a workflow.",source:"@site/docs/product-manuals/concepts/job-workers.md",slug:"/product-manuals/concepts/job-workers",permalink:"/docs/product-manuals/concepts/job-workers",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/concepts/job-workers.md",version:"current",sidebar:"Product Manuals",previous:{title:"Workflows",permalink:"/docs/product-manuals/concepts/workflows"},next:{title:"Workflow instance creation",permalink:"/docs/product-manuals/concepts/workflow-instance-creation"}},s=[{value:"Requesting jobs",id:"requesting-jobs",children:[{value:"Long polling",id:"long-polling",children:[]},{value:"Job queueing",id:"job-queueing",children:[]}]},{value:"Completing or failing jobs",id:"completing-or-failing-jobs",children:[]},{value:"Timeouts",id:"timeouts",children:[]}],b={rightToc:s};function c(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A job worker is a service capable of performing a particular task in a workflow."),Object(a.b)("p",null,"Each time such a task needs to be performed, this is represented by a job."),Object(a.b)("p",null,"A job has the following properties:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Type"),": Describes the work item and is defined in each task in the workflow. The type is referenced by workers to request the jobs they are able to perform."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Custom headers"),": Additional static metadata that is defined in the workflow. Custom headers are used to configure reusable job workers (e.g. a ",Object(a.b)("inlineCode",{parentName:"li"},"notify Slack")," worker might read out the Slack channel from its header)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Key"),": Unique key to identify a job. The key is used to hand in the results of a job execution, or to report failures during job execution."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Variables"),": The contextual/business data of the workflow instance that is required by the worker to do its work.")),Object(a.b)("h2",{id:"requesting-jobs"},"Requesting jobs"),Object(a.b)("p",null,"Job workers request jobs of a certain type on a regular interval (i.e. polling). This interval and the number of jobs requested are configurable in the Zeebe client."),Object(a.b)("p",null,"If one or more jobs of the requested type are available, then Zeebe (the workflow engine inside Camunda Cloud) will stream activated jobs to the worker. Upon receiving jobs, a worker performs them and sends back a ",Object(a.b)("em",{parentName:"p"},"complete")," or ",Object(a.b)("em",{parentName:"p"},"fail"),"\ncommand for each job depending on whether the job could be completed successfully or not."),Object(a.b)("p",null,"For example, the following workflow might generate three different types of jobs: ",Object(a.b)("inlineCode",{parentName:"p"},"process-payment"),", ",Object(a.b)("inlineCode",{parentName:"p"},"fetch-items"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"ship-parcel"),":"),Object(a.b)("p",null,Object(a.b)("img",{alt:"order-workflow-model",src:o(473).default})),Object(a.b)("p",null,"Three different job workers, one for each job type, could request jobs from Zeebe:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"zeebe-job-workers-requesting-jobs",src:o(774).default})),Object(a.b)("p",null,"Many workers can request the same job type in order to scale up processing. In this scenario, Zeebe ensures that each job is sent to only one of the workers.\nSuch a job is considered activated until the job is completed, failed or the job activation times out."),Object(a.b)("p",null,"On requesting jobs, the following properties can be set:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Worker"),": The identifier of the worker. Used for auditing purposes."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Timeout"),": The time a job is assigned to the worker. If a job is not completed within this time then it can be reassigned by Zeebe to another worker."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"MaxJobsToActivate"),": The maximum number of jobs which should be activated by this request."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"FetchVariables"),": A list of variables names which are required. If the list is empty, all variables of the workflow instance are requested.")),Object(a.b)("h3",{id:"long-polling"},"Long polling"),Object(a.b)("p",null,"Ordinarily, a request for jobs can be completed immediately when no jobs are available.\nTo find a job to work on, the worker now needs to poll again for available jobs.\nThis leads to workers repeatedly sending requests until a job is available.\nThis is expensive in terms of resource usage, because both the worker and the server are performing a lot of unproductive work. Zeebe supports ",Object(a.b)("em",{parentName:"p"},"long polling")," for available jobs to better utilize resources."),Object(a.b)("p",null,"With ",Object(a.b)("em",{parentName:"p"},"long polling")," a request will be kept open while no jobs are available.\nThe request is completed when at least one job becomes available."),Object(a.b)("h3",{id:"job-queueing"},"Job queueing"),Object(a.b)("p",null,"Zeebe decouples creation of jobs from performing the work on them. It is always possible to create jobs at the highest possible rate, regardless of whether or not there is a job worker available to work on them. This is possible because Zeebe queues jobs until workers request them."),Object(a.b)("p",null,"This increases the resilience of the overall system. Camunda Cloud is highly available so that job workers don't have to be highly available. Zeebe queues all jobs during any job worker outages and progress will resume as soon as workers come back online."),Object(a.b)("p",null,"It also insulates job workers against sudden bursts in traffic. Because workers request jobs, they have full control over the rate at which they take on new jobs."),Object(a.b)("h2",{id:"completing-or-failing-jobs"},"Completing or failing jobs"),Object(a.b)("p",null,"After working on an activated job, a job worker should inform Camunda Cloud that the job has either ",Object(a.b)("em",{parentName:"p"},"completed")," or ",Object(a.b)("em",{parentName:"p"},"failed"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"When the job worker completes work on a job, it should send a ",Object(a.b)("em",{parentName:"li"},"complete job")," command along with any variables, which in turn will be merged into the workflow instance. This is how the job worker exposes the results of its work."),Object(a.b)("li",{parentName:"ul"},"If the job worker could not successfully complete its work, it should send a ",Object(a.b)("em",{parentName:"li"},"fail job")," command. Fail job commands include the number of remaining retries, which is set by the job worker. If ",Object(a.b)("em",{parentName:"li"},"remaining retries")," is greather than zero, then the job will be retried and reassigned. If ",Object(a.b)("em",{parentName:"li"},"remaining retries")," is zero or negative, an incident will be raised and the job will not be retried until the incident is resolved.")),Object(a.b)("h2",{id:"timeouts"},"Timeouts"),Object(a.b)("p",null,"If the job is not completed or failed within the configured job activation timeout, Zeebe will reassign the job to another job worker. This does not affect the number of ",Object(a.b)("em",{parentName:"p"},"remaining retries"),"."),Object(a.b)("p",null,"A timeout may lead to two different workers working on the same job, possibly at the same time. If this happens, only one worker will successfully complete the job. The other ",Object(a.b)("em",{parentName:"p"},"complete job")," command will be rejected with a 'NOT FOUND' error. The fact that jobs may be worked on more than once means that Zeebe is an at-least once system with respect to job delivery and that worker code must be idempotent. In other words, workers ",Object(a.b)("strong",{parentName:"p"},"must")," deal with jobs in a way that allows the code to be executed more than once for the same job while preserving the expected application state."))}c.isMDXComponent=!0},450:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var b=n.a.createContext({}),c=function(e){var t=n.a.useContext(b),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=c(o),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||a;return o?n.a.createElement(m,l(l({ref:t},b),{},{components:o})):n.a.createElement(m,l({ref:t},b))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<a;b++)i[b]=o[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},473:function(e,t,o){"use strict";o.r(t),t.default="data:image/png;base64,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"},774:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/zeebe-job-workers-graphic-92cdc2b91d02566b15f7d4dc75243062.png"}}]);