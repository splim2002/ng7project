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

9. Customize layout & SCSS (CSS styling)

   - Use bootstrap CSS class
   - refer to images '0009' in tutorials folder

10. Add new component "Header" to CoreModule

    - To ensure it can be used by other module (such as AppModule), must declare it at 'export' list in CoreModule
    - Command to create "Header" component in CoreModule
      > ng g component core/components/header
    - refer to images '0010' in tutorials folder

10.1 Update Header Layout (HTML & CSS) - refer to images '0010-1' in tutorials folder

11. Add new component "MenuBar" to CoreModule

    - Command to create "Menubar" component in CoreModule
      > ng g component core/components/menubar

11.1 Update menubar layout - refer to images '0011-1' in tutorials folder
