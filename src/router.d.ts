export {};

declare global {
  interface Window {
    Iris: Iris;
  }

  class Iris {
    components: any;
  }

  class Component {
    
  }

  interface IIterable<T> {
    [key: string]: T;
  }

  interface IRouter {
    go(url: string): void;
    routes: IRoute[];
  }

  interface IRoute {
    name?: string;
    path: string;
    component: typeof Component;
  }
  
  interface IRouterOptions {
    routes: IRoute[];
    baseUrl?: string;
  }
}
