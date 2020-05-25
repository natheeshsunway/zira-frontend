import {Subject} from 'rxjs';
class Singleton {

     searchText$:Subject<string>;
     public getSearchText$():Subject<string>
     {
         if(!this.searchText$)
         {
            this.searchText$=new Subject<string>();
         }
         return this.searchText$;
     }

}
const singletonFactory = new Singleton();
export { singletonFactory };
