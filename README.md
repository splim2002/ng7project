# ng7project

---

1. Installation

   > npm install -g @angular/cli@latest

2. Create new project (with routing)

   > ng new ClientApp --style=scss

3. Customize output folder

4. Install Bootstrap version 4+

   > npm install bootstrap@latest

5. Add new component "Core"

   > ng g component core
   > (or > ng generate component core)

6. Add new component "Products"

   > ng g component products

7. Customize app-routing

   - Default URL shows ProductComponent, else (try to edit the URL in browser) it shows CoreComponent (refer to images in tutorials folder)
   - Command to build & start a web server
     > ng serve

8. Change CoreComponent to CoreModule. Create "Page not found".
   - Update app-routing by replace CoreComponent to PageNotFoundComponent.
   - Command to create "Page not found" component in CoreModule
     > ng g component core/pages/page-not-found
     - refer to images '0008' in tutorials folder
