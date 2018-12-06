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

12. Update website Name(Title) & Meta at Index.html

    - refer to images '0012' in tutorials folder

13. Create new module "Home" (with routing)

    - Command to create "Home" module
      > ng g module home --routing

14. Add new component "Default"(page) to HomeModule

    - This component will be set as the default page (home page)
    - Command to create "Default"(page) component in HomeModule
      > ng g component home/pages/default

14.1 Add LazyLoading to load HomeModule at routing

    - Reference: https://scotch.io/tutorials/lazy-loading-in-angular-v2
    - Custmize URL route 'http://..../home' to load HomeModule
    - refer to images '0014-1' in tutorials folder

15. Menubar: Add routerLink & routerLinkActive

    - refer to images '0015' in tutorials folder

16. Remove ProductsComponent. Instead, we create new Module (ProductModule) and store components that related to it.

    - Command to create "Product" module
      > ng g module product --routing

17. Create new module "Shops" (with routing)

    - Command to create "Shops" module
      > ng g module shops --routing

18. Add new component "ShopList"(page) to ShopsModule

    - Command:
      > ng g component shops/pages/shop-list

18.1 Customize routing to (ShopsModule) ShopListComponent

    - Customize URL route 'http://..../shop' to load ShopsModule (Lazyloading to ShopsModule at AppRouting)
    - Then, default route in ShopsRouting is calling ShopListComponent
    - refer to images '0018-1' in tutorials folder

===================================================================
GOOGLE MAP
===================================================================

19. Integration with Google Map - Use @agm/core

    - NPM: https://www.npmjs.com/package/@agm/core
    - Documentation:
      - https://angular-maps.com/api-docs/agm-core/index.html
      - https://angular-maps.com/api-docs/agm-core/components/agmmap
    - Installation
      > npm i @agm/core

20. Add new component "ShopDetail"(page) to ShopsModule.

    - Command:
      > ng g component shops/pages/shop-detail

21. Update ShopList layout. Customize routing (URL) to ShopDetailComponent

    - refer to images '0021.1' & '0021.2' in tutorials folder

22. Add Google Map (@agm/core) to ShopDetail

    - Customize environments settings for GoogleMapApiKey
    - Use <agm-map>. Set a latitude & longitude + map zoom
    - Reference (Demo): https://stackblitz.com/edit/angular-google-maps-demo?file=app%2Fapp.module.ts
    - refer to images '0022' in tutorials folder

22.1 Add marker to map

    - refer to images '0022-1' in tutorials folder

23. Add new component "MapSimple" to ShopsModule

    - [Explaination] I wanna try out different types(/features) of Maps. Hence, I decided to create sub-components for those maps. I would advice to create a sub-module to store the google map components so that it functions as a 'shared module' and is usable by other modules. But, as I'm going to use Google map in this ShopsModule only... so you know, save my work :p
    - Command:
      > ng g component shops/maps/map-simple

23.1 Add Window Information to Map Marker (when click on it)

    - refer to images '0023-1' in tutorials folder

23.2 Add custom marker by using iconUrl in agm-map

    - refer to images '0023-2' in tutorials folder

23.3 Customize size of custom marker

    - refer to images '0023-3' in tutorials folder
