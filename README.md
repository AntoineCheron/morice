# Morice

Morice is a web wizard that helps you in identifying the technologies that will help you build Semantic REST / Hypermedia / HATEOAS APIs. 

### What are Semantic REST APIs?

Semantic REST APIs combine the power of both the REST architecture, including the HATEOAS constraint, the Semantic Web and Linked Data. They picture a world in which Web APIs are easier to browse and more meaningful for humans while also being machine-interpretable, turning them into platforms that developers and companies can build on. Believe me, better platforms than RESTful APIs allow. 

Mature Semantic REST APIs reach level 3 of the [Richardson Maturity Model](https://martinfowler.com/articles/richardsonMaturityModel.html), their functional and non-functional properties must be documented in a machine-interpretable way, which the Semantic Web helps, and they provide links to other resources (Linked Data).

To know more about Semantic REST API maturity, please refer to [the WS3 maturity model](https://www.researchgate.net/publication/281287283_A_Maturity_Model_for_Semantic_RESTful_Web_APIs).

### What is required to build such APIs?

Building such APIs requires a relevant Data Interchange Format (also named Media Type) and Interface Description Language. An implementation framework might also be of good help :). 

Unfortunately, none is considered as a standard today. We therefore have to select one among several candidates. 

To help you in this task, we designed this tool. 

### How does it work?

#### Step 1

Open [Morice](https://antoinecheron.github.io/morice/), you will be presented this page:

![Morice's home page](/img/home.png)

At that step, select the kind of technologies you need. Click on their name to select them, their name will turn blue. When you're done, click Next.

#### Step 2

The following page gives you the ability to do two things:

1. Selecting the criteria that the technologies you are looking for MUST meet. To do this, check the "required" checkbox besides the criteria.
2. Scoring each criteria to denote its importance. We use this score to give a global score to each technology in order to show you the more relevant technologies for your use case first. For example, if you give 2 to criteria C1 and 5 to criteria C2. Given 3 technologies, T1 matching C1, T2 matching C2 and T3 matching C1 & C2, T1 will be scored 2, T2 5 and T3 7. So, T3 will appear first, then T2 and finally T1.

These two possibilities are illustrated in the below snapshot.

![Morice's criteria selection](/img/step-2.png)

When you're done with this step, click next. Surprise...

#### Step 3

You are presented the result!

It looks like this:

![Morice's result](/img/step-3.png)

Now you can click the button to be redirected to the technologies' website.

## Hope you'll like it

We hope this tool will be helpful. We are open to feedbacks and comments. You can send us an email or open an issue.

Cheers!



## Technical details of this repository.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses [Typescript](https://www.typescriptlang.org/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
