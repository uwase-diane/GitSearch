export class Repo {
    constructor(public name:string,
        public html_url:string ,
        public description:string, 
        public forks:number,
        public watchers_count:number, 
        public language:string){
      }
}
