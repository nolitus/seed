import {Component} from 'angular2/core'
import {AuthorService} from './author.service'


@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{title1}}    
        <ul>
           <li *ngFor="#author of authors">
           {{ author }}
           </li>
        </ul>
        
        `,
        providers: [AuthorService]
      

})
export class AuthorsComponent {
    title1 = "The tile of authors page";

    authors;


    constructor(authorService:AuthorService){
      this.authors = authorService.getAuthors();
    

    }
}