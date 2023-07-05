       **Installation et configuration de symfony

* Si ce n'est pas déjà fait

1. Cloner, configurer et lancer le projet symfony-rest
	
2. Faire un composer req cors pour rajouter les CORS (ce qui fera que angular pour faire des requêtes vers le symfony)
	
3. Lancer le projet avec symfony server:start et le garder ouvert dans un coin

        ** Nouveau projet Angular
	
1. Créer un projet angular avec le ng new en choisissant de mettre le router (par défaut c'est non, donc faites attention) et d'être en css
	
2. Créer un fichier src/app/entities.ts et dedans faire une interface Movie qui va reprendre la structure de la classe Movie (pour le moment, on ne met pas les genres, on le fera peut être plus tard)
	
3. Dans le AppModule, rajouter le HttpClientModule ainsi que le FormsModule


        **Affichage des films

1. Générer un component MovieItemComponent qui aura un @Input required de type Movie (pas oublier de rajouter le strictPropertyInitialization dans le tsconfig)
	
2. Dans le template faire un affichage des informations du film, juste son title et sa released pour le moment par exemple
	
3. Dans le component assigné à la route '/' (HomeComponent par défaut me semble-t-il), créer une propriété de type Movie[] initialisée en tableau vide et dans le template faire une boucle dessus pour afficher des app-movie-item
	
4. (Si on veut tester tel quel, sans appel serveur, on peut rajouter un ou deux films en dur dans le tableau)

        **Le service

1. Générer un service avec le cli (ng g s à priori) qui s'appelera MovieService
	
2. Dans le constructeur de ce service, rajouter un http:HttpClient en private (comme dans l'exemple fait dans l'autre projet)
	
3. Créer une méthode fetchAll() et dedans faire une requête de type get vers l'url du symfony, sur la route /api/movie, en typant le get en Movie[] (à la place du any que j'avais mis dans l'exemple)
	
4. On fait un return de ce get, sans le subscribe
	
5. Côté HomeComponent, on rajoute un constructeur avec une private MovieService dedans
	
6. On ajoute une méthode getData qui va utiliser la méthode fetchAll du movie service et faire un subscribe dessus et qui va directement assigner la valeur du subscribe à la propriété movies du HomeComponent
	
7. 
On rajoute un bouton qui au click lancera le getData


        **Le formulaire de movie

1. Créer un nouveau component FormMovieComponent et dans son template créer un form avec label et input pour title,released,resume,duration
	
2. Créer une propriété movie:Movie dans ce component et lier ses propriétés aux inputs du form
	
3. Rajouter une méthode handleSubmit() qui va pour le moment faire juste un console log du movie pour voir si tout est bien connecté
	
4. Dans le MovieService rajouter une méthode add(movie:Movie) qui va faire un http.post vers api/movie en lui donnant le movie en deuxième argument du post
	
5. Dans le FormMovieComponent, on récupère le service dans le constructeur et on fait en sorte d'appeler le post dans le handleSubmit



        **Suppression des movie

1. Dans le MovieService, rajouter une méthode delete qui va attendre un id number en argument et qui va s'en servir pour déclencher un http.delete en concaténant l'id à l'url
	
2. Dans le movie-item.component.html, rajouter un bouton de suppression et faire que lorsque l'on click dessus va emit un @Output avec le movie dedans
	
3. Côté HomeComponent on crée une méthode removeMovie(movie:Movie) qui va faire appel au delete du MovieService et dans le subscribe va faire en sorte de retirer le movie en question de la list (voir comment on utilise le filter)
	
4. Dans le template du home, on assigne cette méthode sur le app-movie-item



        **Page pour un seul movie	

1. Générer un component SingleMovieComponent et créer une route paramétrée sur 'movie/:id' qui va pointer sur ce component
	
2. Dans le MovieService, créer une méthode fetchOne qui va attendre un id:any en argument et s'en servir pour faire un get vers http://localhost:8000/movie/id et qui va donc return un Movie
	
3. Dans le SingleMovieComponent, créer une propriété movie:Movie en vous inspirant de l'exemple de routing paramétré, récupérer la valeur du paramètre id et s'en servir pour faire un appel au fetchOne (le constructeur aura donc 2 arguments private), on aura donc un subscribe dans un subscribe...
	
4. Faire le template pour afficher les informations du films
	
5. Dans le template du MovieItem, rajouter un a avec un routerLink à la place du href qui pointera sur la route /movie/id




        **Mise à jour

1. Dans le FormMovieComponent, rajouter un @Input sur le movie:Movie
	
2. Dans le template de SingleMovieComponent, appeler le app-form-movie dans la div if (pas celle qui a le loading) en lui donnant à manger le movie (ça devrait préremplir les champs)
	
3. Toujours dans SingleMovieComponent, créer une méthode updateMovie(movie:Movie) qui va faire un console log de son argument et faire en sorte de l'appeler au (added) du FormMovie
	
4. Dans le service, créer une méthode update(movie:Movie) avec un http.patch dedans qui va à la fois concaténé l'id (comme le fetchOne ou le delete) mais aussi donner son movie en deuxième argument du patch (comme le post)
	
5. Appeler cette méthode dans le updateMovie du SingleMovieComponent et dans son subscribe on remplace this.movie par data


_____________________________
_____________________________
# AngolarMovie

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
