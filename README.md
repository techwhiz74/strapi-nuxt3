# LightBeam

# Get started
- Min node version 18

#### GITHUB:
- Sign into your account 
- Accept invite 
- Open in github desktop or clone to your files 

#### Strapi (cms) local set up 
- Delete lock files
- Cd api 
- Make a .env file keep empty 
- Run these cmds: 
Yarn, 
Yarn build, 
Yarn develop, 
- JWT secret should populate in .env file 
- Now copy over text from example.env (or sent to you in lastpass)
Yarn develop - application should be running locally. 
- Set up your account 
- Go to Settings > USERS & PERMISSIONS PLUGIN > Roles > Public 
- Go through permissions list and turn on find and find one 
- Content types builder leave empty 
- Email tick send on 
- Ez forms tick index on 
- i18n leave empty 
- Navigation tick render and render child on 
- Redirects find
- Upload find, findOne and upload 
- User permissions leave as is 
- Save (top right)

Go to Settings > Navigation plugin 
- Add pages to enabled navigation for 
- Save and restart 

Go to Content Manager > pages 
- Add a new home page (url: home, Title and Description) 
- Head to http://localhost:1337/graphql
- Paste the below query into graphql 
query {
  page(id: 1) {
    data {
      id
      attributes {
        Title
        Description
        url
      }
    }
  }
}
- Click play button and make sure you get a good data response if you have errors it is likely to be permissions, go back through the list and tick everything on stated above. 

Head to Content manager > Global settings and set the main colours and some fake text for the other parts, you may leave the logo empty for now. 

#### Nuxt 3 local 
cd /client 
Yarn 
Yarn dev 
- Should start running
- Copy over .env file from shared on lastpass 

### Branches 
Main
Staging 

Working branches 
branch from staging
cms-nuxt/new-component-name

Upload work to branch and then set a pull request to the staging branch

### Commits 
Should follow the type(scope): subject method

Type: Select from one of the following
Feat - a new feature
Fix - a bug fix 
Docs - a update to read me or other documentation 
Style - style changes, formatting, missing ; or reduce whitespaces 
Refactor - rewritten code for better efficiency 
Perf - changes that will improve performance 
Test - adding tests 
Core - changes to the build process 

Scope 
A scope is provided in () after the type. A scope is a phrase describing the parts of the code affected by the changes. For example (contact-form.vue). 

Subject 
The subject contains the short description of the changes 

### Start building
#### CMS
- Create content types 
- Add to the content.js query 
- Add a new component 
Follow this video: https://www.loom.com/share/8dc7a04b28bc4e0396a6028db03a2e60?sid=7034c152-21ff-4dd2-beb5-da68aeab1e8e 


#### Nuxt 

We use atoms, molecules and organisms folder structure. 

Atoms - are small parts of a larger component like a button 
Molecules - are the main components that are in a page 
Organisms - are larger components that are used often such as nav bar 

Nuxt will dynamically import the components from the Molecules folder into the page, if it doesnt exsit it will throw an error and you will need to add the component. 

